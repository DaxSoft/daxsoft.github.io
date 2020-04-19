// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import CallToAction from './call_to_action'
import BehanceComponent from './behance'
import WhoAImComponent from './whoaim'
import WhatIDoComponent from './what_i_do'
import HowIDoComponent from './how_i_do'
import GithubComponent from './github'

import { stylesRoot } from './styles'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <CallToAction />
            <BehanceComponent />
            <WhoAImComponent />
            <WhatIDoComponent />
            <GithubComponent />
            <HowIDoComponent />
        </div>
    )
}
