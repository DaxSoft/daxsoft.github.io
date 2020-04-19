// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { Typography } from '@material-ui/core'

import { whoaimStyles } from './styles/index'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = whoaimStyles()
    const year = new Date().getFullYear()

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <Typography variant="h3">Who am I?</Typography>
                <Typography variant="h6">
                    Michael Willian, {year - 1998} years old,
                </Typography>
                <Typography variant="body1">
                    An self-taught developer and designer. <br />
                    I will strive to design and create solutions that can
                    improve <br />
                    the quality of your life and time! <br />
                    For me, coding is more than a job, it's a hobby and a
                    mission. <br />
                    My faith stands that with the power of programmation, <br />{' '}
                    I will can create a better perspective of life for someone!
                </Typography>
            </div>
            <img
                src="/myself.png"
                alt="Michael Willian Santos"
                aria-label="My Self Portrait"
                className={classes.img}
            />
        </div>
    )
}
