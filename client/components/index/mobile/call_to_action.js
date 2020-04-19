// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import { useBoolean } from '@vorlefan/react-hooks'

import { Typography, Button, Snackbar } from '@material-ui/core'

import { callStyles } from './styles/index'

function getToday() {
    let today = new Date()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${day}/${month}`
}

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = callStyles()
    const date = getToday()
    const snackbar = useBoolean(true)

    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                <strong>IDEAS</strong> CAN CHANGE PEOPLE <br />
                AND PEOPLE CHANGES THE <strong>WORLD</strong>
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
                And today, <strong>{date}</strong>, <br />I will be the man that
                will help you achieve your <strong>idea!</strong>
            </Typography>
            <div className={classes.container}>
                <Button
                    href="mailto:dax-soft@live.com"
                    variant="contained"
                    className={classes.buttonAction}
                    onClick={() => null}
                >
                    Ask me how!
                </Button>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackbar.isOn()}
                autoHideDuration={3000}
                onClose={snackbar.off}
                message="Provisory Portfolio!"
            />
        </div>
    )
}
