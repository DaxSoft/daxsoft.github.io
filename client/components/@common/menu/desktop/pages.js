import React from 'react'
import { useRouter } from 'next/router'

import { Button } from '@material-ui/core'

import { optionsStyles } from './styles'

export default function Component({}) {
    const classes = optionsStyles()
    const router = useRouter()

    return (
        <div className={classes.root}>
            <Button alt="projects" onClick={() => router.push('/todo')}>
                To-Do
            </Button>
            <Button alt="resources" onClick={() => router.push('/resources')}>
                Resources
            </Button>
            <Button
                alt="github"
                target="_blank"
                href="https://github.com/DaxSoft"
                onClick={() => null}
            >
                Github
            </Button>
            <Button
                alt="behance"
                target="_blank"
                href="https://www.behance.net/daxsoft"
                onClick={() => null}
            >
                Behance
            </Button>
            <Button
                alt="linkedin"
                target="_blank"
                href="https://www.linkedin.com/in/michael-willian-325412114/"
                onClick={() => null}
            >
                Linkedin
            </Button>
        </div>
    )
}
