// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import fetch from 'isomorphic-unfetch'
import { useFetch, useObject, useLocalStorage } from '@vorlefan/react-hooks'

import { listRoot } from './styles'

import Scrollable from 'react-indiana-drag-scroll'
import {
    Typography,
    CircularProgress,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Button,
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function isUpToCaching(lastTime, refreshTime = 1e6) {
    let a = lastTime
    let b = new Date()
    let time = b.getTime() - a
    return time > refreshTime
}

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const Painel = ({ projectName, data, docsContent }) => {
    const classes = listRoot()

    const CACHE_NAME = `${projectName}_${data.name}`

    const cacheContent = useLocalStorage(CACHE_NAME, {
        lastTime: new Date().getTime(),
        content: [],
    })

    const content = useFetch(
        {
            endpoint: data.url,
            start:
                cacheContent.get().content.length < 1 ||
                isUpToCaching(cacheContent.get().lastTime, 1e3),
            onSuccess: (response) => {
                cacheContent.set({
                    lastTime: new Date().getTime(),
                    content: response,
                })
                contentTree.setState({ content: response })
            },
        },
        'GET',
        fetch
    )

    const contentTree = useObject({}, { content: cacheContent.get().content })

    function handleClick(tree) {
        docsContent.setUri(tree.download_url)
        setTimeout(() => docsContent.refresh.on(), 250)
    }

    return (
        <ExpansionPanel className={classes.painel}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="button">{data.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div className={classes.detail}>
                    {content.loading.isOn() ? (
                        <CircularProgress />
                    ) : (
                        Array.isArray(contentTree.state.content) &&
                        contentTree.state.content.length > 0 &&
                        contentTree.state.content.map((tree, key) => {
                            return (
                                <Button
                                    key={key}
                                    onClick={() => handleClick(tree)}
                                    size="small"
                                    className={classes.subButton}
                                >
                                    {tree.path}
                                </Button>
                            )
                        })
                    )}
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default function Component({ url, docsContent, projectName }) {
    const classes = listRoot()

    const cacheDocs = useLocalStorage(projectName, {
        lastTime: new Date().getTime(),
        content: [],
    })

    const docs = useFetch(
        {
            endpoint: `${url}/contents/docs`,
            onSuccess: (response) => {
                const state = {}
                response.map((git) => {
                    state[git.name] = { ...git }
                })
                docsTree.setState(state)
                cacheDocs.set({
                    lastTime: new Date().getTime(),
                    content: state,
                })
            },
            start:
                cacheDocs.get().content.length < 1 ||
                !!isUpToCaching(cacheDocs.get().lastTime),
        },
        'GET',
        fetch
    )

    const docsTree = useObject({}, cacheDocs.get().content)

    function handleReadme() {
        docsContent.setUri(
            `https://raw.githubusercontent.com/DaxSoft/${projectName}/master/readme.md`
        )
        docsContent.queries.set('isAbout', true)
        docsContent.refresh.on()
    }

    return (
        <Scrollable className={classes.root}>
            {docs.loading.isOn() ? (
                <CircularProgress />
            ) : (
                <>
                    <Button color="secondary" onClick={handleReadme}>
                        About
                    </Button>
                    {docsTree.isValid() &&
                        docsTree.each(({ key, value }) => {
                            return (
                                <Painel
                                    key={key}
                                    data={value}
                                    docsContent={docsContent}
                                    projectName={projectName}
                                ></Painel>
                            )
                        })}
                </>
            )}
        </Scrollable>
    )
}
