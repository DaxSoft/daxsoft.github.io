// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import fetch from 'isomorphic-unfetch'
import { useFetch, useLocalStorage } from '@vorlefan/react-hooks'

import { Typography, CircularProgress, Tooltip } from '@material-ui/core'
import { stylesRoot, todoStyles } from './styles'

import DoneIcon from '@material-ui/icons/Done'
import DoneAllIcon from '@material-ui/icons/DoneAll'
// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const Todo = ({ title, labels, state, body, createdAt, updateAt, href }) => {
    const classes = todoStyles()

    const isOpen = state === 'open'

    return (
        <div className={classes.root}>
            {!isOpen ? (
                <DoneAllIcon className={classes.done} />
            ) : (
                <DoneIcon className={classes.open} />
            )}

            <Tooltip arrow={true} title={title}>
                <Typography variant="button" className={classes.title}>
                    {title}
                </Typography>
            </Tooltip>
        </div>
    )
}

export default function Component({}) {
    const classes = stylesRoot()

    const cacheIssues = useLocalStorage('issues', [])

    const issues = useFetch(
        {
            endpoint: 'https://api.github.com/repos/DaxSoft/react-hooks/issues', // daxsoft.github.io
            onSuccess: (data) => {
                cacheIssues.set(data)
            },
            onError: (err) => {
                issues.data = cacheIssues.get()
            },
            startInit: cacheIssues.get(),
        },
        'GET',
        fetch
    )

    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.title}>
                To-Do
            </Typography>
            <Typography variant="body1" className={classes.description}>
                This is just a experimental page, where it makes a request from
                the Github's API. <br />
                Getting the issues from this portfolio. <br />
                By this, I can create some sort of 'To-Do' for this website
            </Typography>
            <div className={classes.container}>
                {issues.loading.isOn() ? (
                    <CircularProgress
                        color="secondary"
                        style={{ justifySelf: 'center', alignSelf: 'center' }}
                    />
                ) : (
                    Array.isArray(issues.data) &&
                    issues.data.length > 0 &&
                    issues.data.map((value, key) => {
                        if (value.author_association !== 'OWNER') return
                        return (
                            <Todo
                                key={key}
                                title={value.title}
                                labels={value.labels}
                                state={value.state}
                                body={value.body}
                                createdAt={value.created_at}
                                updateAt={value.updated_at}
                                href={value.html_url}
                            />
                        )
                    })
                )}
            </div>
        </div>
    )
}
