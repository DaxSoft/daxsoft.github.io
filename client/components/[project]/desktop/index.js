// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React, { useEffect } from 'react'

import ListComponent from './list'
import ContentComponent from './content'

import fetch from 'isomorphic-unfetch'
import { useFetch } from '@vorlefan/react-hooks'
import { stylesRoot } from './styles'
import { useRouter } from 'next/router'

import { CircularProgress } from '@material-ui/core'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({ url }) {
    const classes = stylesRoot()
    const router = useRouter()

    const projectName = router.query.project

    const docsContent = useFetch(
        {
            endpoint: `https://raw.githubusercontent.com/DaxSoft/${projectName}/master/readme.md`,
            onSuccess: (response) => {},
            onData: async (data) => {
                return data.text()
            },
        },
        'GET',
        fetch
    )

    useEffect(() => {
        if (!!projectName && !docsContent.data) {
            docsContent.refresh.on()
        }
    }, [projectName])

    return (
        <div className={classes.root}>
            <ListComponent
                url={url}
                docsContent={docsContent}
                projectName={projectName}
            />
            {docsContent.loading.isOn() ? (
                <CircularProgress color="secondary" />
            ) : (
                <ContentComponent docsContent={docsContent} />
            )}
        </div>
    )
}
