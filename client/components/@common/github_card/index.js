// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { Typography, Button, Badge, Avatar, Tooltip } from '@material-ui/core'

import { stylesRoot } from './styles/index'

import GradeIcon from '@material-ui/icons/Grade'
import RepeatIcon from '@material-ui/icons/Repeat'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const Component = ({
    title,
    href,
    stars,
    fork,
    description,
    onClick,
    data,
}) => {
    const classes = stylesRoot()

    const isOnClickValid = typeof onClick === 'function'

    return (
        <Badge
            badgeContent={
                <Avatar src="/github.png" className={classes.badge} />
            }
            overlap="circle"
        >
            <Button
                className={classes.button}
                href={isOnClickValid ? '/todo' : href}
                onClick={() => (isOnClickValid ? onClick(data) : {})}
            >
                <div className={classes.root}>
                    <div className={classes.row}>
                        <Typography variant="button" noWrap={true}>
                            {title}
                        </Typography>
                        <Tooltip arrow={true} title={description}>
                            <Typography
                                className={classes.description}
                                variant="subtitle1"
                                noWrap={true}
                            >
                                {description}
                            </Typography>
                        </Tooltip>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.col}>
                            <GradeIcon className={classes.icon} />
                            <Typography
                                variant="caption"
                                style={{ fontSize: '.8rem' }}
                            >
                                {stars}
                            </Typography>
                        </div>
                        <div className={classes.col}>
                            <RepeatIcon className={classes.icon} />
                            <Typography
                                variant="caption"
                                style={{ fontSize: '.8rem' }}
                            >
                                {fork}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Button>
        </Badge>
    )
}

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default Component
