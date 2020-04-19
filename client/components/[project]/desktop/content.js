import React from 'react'
import Markdown from 'react-markdown-renderer'

import { contentRoot } from './styles'

export default function Component({ docsContent }) {
    const classes = contentRoot()

    const content = docsContent.data || ''

    return (
        <div className={classes.root}>
            <Markdown markdown={content} />
        </div>
    )
}
