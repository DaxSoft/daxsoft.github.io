// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { Typography, Button, Badge, Avatar } from '@material-ui/core'

import { stylesRoot } from './styles/index'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import VisibilityIcon from '@material-ui/icons/Visibility'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const Component = ({ title, img, likes, views, href }) => {
    const classes = stylesRoot()

    return (
        <Badge
            badgeContent={
                <Avatar src="/behance.png" className={classes.badge} />
            }
            overlap="circle"
        >
            <div className={classes.root}>
                <Button
                    className={classes.button}
                    target="_blank"
                    href={href}
                    onClick={() => null}
                >
                    <img src={img} className={classes.img} alt={title} />
                </Button>
                <div className={classes.description}>
                    <div className={classes.row}>
                        <Typography variant="h6" style={{ fontSize: '1rem' }}>
                            {title}
                        </Typography>
                        <Typography
                            variant="caption"
                            style={{ fontSize: '.8rem' }}
                        >
                            Michael Willian
                        </Typography>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.col}>
                            <ThumbUpAltIcon className={classes.icon} />
                            <Typography
                                variant="caption"
                                style={{ fontSize: '.8rem' }}
                            >
                                {likes}
                            </Typography>
                        </div>
                        <div className={classes.col}>
                            <VisibilityIcon className={classes.icon} />
                            <Typography
                                variant="caption"
                                style={{ fontSize: '.8rem' }}
                            >
                                {views}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </Badge>
    )
}

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default Component
