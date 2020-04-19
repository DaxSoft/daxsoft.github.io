import React from 'react'
import { useRouter } from 'next/router'

import { Button, IconButton } from '@material-ui/core'

import { optionsStyles } from './styles'

import CloseIcon from '@material-ui/icons/Close'

export default function Component({ toggle }) {
    const classes = optionsStyles()
    const router = useRouter()

    return (
        <div className={classes.root}>
            <span className={classes.icon}>
                <IconButton onClick={toggle.off}>
                    <CloseIcon className={classes.svg} />
                </IconButton>
            </span>
            <div className={classes.row}>
                <Button alt="projects" onClick={() => router.push('/todo')}>
                    To-Do
                </Button>
                <Button
                    alt="resources"
                    onClick={() => router.push('/resources')}
                >
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
            <div />
        </div>
    )
}
