// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import fetch from 'isomorphic-unfetch'
import { useFetch, useBoolean } from '@vorlefan/react-hooks'

import { CircularProgress } from '@material-ui/core'

import { stylesRoot } from './styles/index'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    const toggle = null

    return <div className={classes.root}></div>
}
