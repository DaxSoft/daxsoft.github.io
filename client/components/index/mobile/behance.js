// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import BehanceCard from '../../@common/behance_card'
import Scrollable from 'react-indiana-drag-scroll'

import { behanceRoot } from './styles/index'

import BehanceProjects from '../../../../public/behance.json'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = behanceRoot()

    return (
        <Scrollable vertical={false} horizontal={true} className={classes.root}>
            {BehanceProjects.map((project, key) => {
                return (
                    <BehanceCard
                        key={key}
                        href={project.href}
                        likes={project.statics.likes}
                        views={project.statics.views}
                        img={project.cover.src}
                        title={project.cover.alt}
                    />
                )
            })}
        </Scrollable>
    )
}
