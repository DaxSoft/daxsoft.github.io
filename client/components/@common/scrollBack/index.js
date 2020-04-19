// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import { useScroll } from '@vorlefan/react-hooks'

// * Components

import { IconButton } from '@material-ui/core'

// * Static

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

// ------------------------------------------------------------------
// | [Styles]
// ------------------------------------------------------------------
import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../styles'

const rootStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed !important',
        transform: 'translate(-50%, -50%)',
        right: '.5em',
        bottom: '1em',
        transition: 'all .3s ease-in',
        zIndex: 9999,
        '& > *': {
            zIndex: 9999,
        },
    },

    button: {
        width: 'max-content',
        height: 'max-content',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        background: THEME.NEUTRAL_COLOR.neutralPrimary,
        boxShadow: THEME.BOX_SHADOW.el12,
        animation: `$show ${CONSTANTS.ANIMATION_SPEED.FAST} ${CONSTANTS.ANIMATION_TRANSITION.easeInBack}`,
        '&:hover': {
            background: THEME.NEUTRAL_COLOR.neutralPrimary,
        },
        '&:focus': {
            background: THEME.NEUTRAL_COLOR.neutralPrimary,
        },
        '&:active': {
            background: THEME.NEUTRAL_COLOR.neutralPrimary,
        },
    },

    '@keyframes show': {
        '0%': {
            clipPath: 'circle(25%)',
        },
        '95%': {
            clipPath: 'circle(80%)',
        },
        '100%': {
            clipPath: 'unset',
        },
    },

    icon: {
        alignSelf: 'center',
        justifySelf: 'center',
        width: '1.25em',
        height: '1.25em',
    },
}))

// ------------------------------------------------------------------
// | [Handlers]
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const Component = ({}) => {
    const classes = rootStyles()

    const scroll = useScroll()

    return (
        <div>
            {scroll.offsetY >= 600 && (
                <div className={classes.root}>
                    <IconButton
                        className={classes.button}
                        size="medium"
                        color="primary"
                        onClick={scroll.toTop}
                    >
                        <KeyboardArrowUpIcon className={classes.icon} />
                    </IconButton>
                </div>
            )}
        </div>
    )
}

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default Component
