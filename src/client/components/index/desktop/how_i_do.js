// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { Typography } from '@material-ui/core'

import { whatIdoStyles } from './styles/index'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const Search = ({}) => {
    const classes = whatIdoStyles()
    return (
        <div className={classes.card}>
            <Typography variant="h6">Search</Typography>
            <Typography variant="body2" className={classes.cardBody}>
                I will speak a lot with you about your needs. Then, creating a
                guideline for the project. I will start to search what is up on
                the market and how the concurrence works.
            </Typography>
        </div>
    )
}

const Develop = ({}) => {
    const classes = whatIdoStyles()
    return (
        <div className={classes.card}>
            <Typography variant="h6">Design</Typography>
            <Typography variant="body2" className={classes.cardBody}>
                After searching. I will start to develop the project. From the
                code until the UI & UX (if you don't have one to use). Always
                making reports and seeking your feedback!
            </Typography>
        </div>
    )
}

const Test = ({}) => {
    const classes = whatIdoStyles()
    return (
        <div className={classes.card}>
            <Typography variant="h6">Test</Typography>
            <Typography variant="body2" className={classes.cardBody}>
                Before the product goes to the public, it needs to be tested!
                Here I will make every possible test to ensure that the project
                stands quality.
            </Typography>
        </div>
    )
}

export default function Component({}) {
    const classes = whatIdoStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.title}>
                How I work
            </Typography>
            <div className={classes.rootCard}>
                <Search />
                <Develop />
                <Test />
            </div>
        </div>
    )
}
