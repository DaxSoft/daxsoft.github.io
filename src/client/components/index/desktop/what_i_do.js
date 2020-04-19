// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { Typography, Avatar, Tooltip } from '@material-ui/core'

import { whatIdoStyles } from './styles/index'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const Frontend = ({}) => {
    const classes = whatIdoStyles()
    return (
        <div className={classes.card}>
            <Typography variant="h6">Frontend</Typography>
            <Typography variant="body2" className={classes.cardBody}>
                The aspect visual is highly important to get more client for
                your business. Today is a requirement that your website stands
                responsive and dynamic to attend the overall public.
            </Typography>
            <div className={classes.cardStack}>
                <Tooltip title="React">
                    <Avatar
                        src="/react.png"
                        alt="react"
                        className={classes.cardIcon}
                    />
                </Tooltip>
                <Tooltip title="Next.Js">
                    <Avatar
                        src="/nextjs.png"
                        alt="nextjs"
                        className={classes.cardIcon}
                    />
                </Tooltip>
                <Tooltip title="Pixi.Js">
                    <Avatar
                        src="/pixijs.png"
                        alt="pixijs"
                        className={classes.cardIcon}
                    />
                </Tooltip>
            </div>
        </div>
    )
}

const Backend = ({}) => {
    const classes = whatIdoStyles()
    return (
        <div className={classes.card}>
            <Typography variant="h6">Backend</Typography>
            <Typography variant="body2" className={classes.cardBody}>
                What people can not see, they feel! It is important to maintain
                the performance in mind while have a look at the security of
                your application.
            </Typography>
            <div className={classes.cardStack}>
                <Tooltip title="Node.JS">
                    <Avatar
                        src="/nodejs.png"
                        alt="nodejs"
                        className={classes.cardIcon}
                    />
                </Tooltip>
                <Tooltip title="Mongo.DB">
                    <Avatar
                        src="/mongodb.png"
                        alt="mongodb"
                        className={classes.cardIcon}
                    />
                </Tooltip>
                <Tooltip title="Git">
                    <Avatar
                        src="/git.png"
                        alt="git"
                        className={classes.cardIcon}
                    />
                </Tooltip>
            </div>
        </div>
    )
}

const List = ({}) => {
    const classes = whatIdoStyles()
    return (
        <div className={classes.card}>
            <Typography variant="h6">I do</Typography>
            <Typography variant="body2" className={classes.cardBody}>
                I am a fullstack developer. For instance, I can help you in
                creating:
                <br />
            </Typography>
            <div style={{ justifySelf: 'flex-start', alignSelf: 'flex-start' }}>
                <Typography variant="caption">
                    <strong>E-commerce</strong> <br />
                    <strong>Business & Corporation Website</strong> <br />
                    <strong>Portfolio & Landscape</strong> <br />
                    <strong>Dashboard Control</strong> <br />
                    <strong>Software with ElectronJS</strong> <br />
                </Typography>
            </div>
        </div>
    )
}

export default function Component({}) {
    const classes = whatIdoStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.title}>
                What can I do for you?
            </Typography>
            <div className={classes.rootCard}>
                <Frontend />
                <Backend />
                <List />
            </div>
        </div>
    )
}
