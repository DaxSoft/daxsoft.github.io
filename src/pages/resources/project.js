/*
:--------------------------------------------------------------------------
: /index
:--------------------------------------------------------------------------
*/

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useScreenSize, useClient } from '@vorlefan/react-hooks'

/*
:--------------------------------------------------------------------------
: Components
:--------------------------------------------------------------------------
*/

import { MenuMobile, MenuDesktop } from '../../client/components/@common/menu'
import {
    ResourceProjectDesktop,
    ResourceProjectMobile,
} from '../../client/components/[project]'

/*
:--------------------------------------------------------------------------
: Desktop Orientation
:--------------------------------------------------------------------------
*/

const Desktop = ({ url, title }) => (
    <div>
        <MenuDesktop />
        <ResourceProjectDesktop url={url} title={title} />
    </div>
)

/*
:--------------------------------------------------------------------------
: Mobile Orientation
:--------------------------------------------------------------------------
*/

const Mobile = ({ url, title }) => (
    <div>
        <MenuMobile />
        <ResourceProjectMobile url={url} title={title} />
    </div>
)

/*
:--------------------------------------------------------------------------
: Page Component
:--------------------------------------------------------------------------
*/

export default function Page({}) {
    const screenSize = useScreenSize({}, [0.95, 1.5])

    const [url, setUrl] = useState(null)
    const [title, setTitle] = useState('Project')

    const { inClient } = useClient((inClient) => {
        if (!!inClient) {
            const project = /(\?id\=(.*)\&?)/gi.exec(document.location.href)[2]
            setUrl(`https://api.github.com/repos/DaxSoft/${project}`)
            setTitle(project)
        }
    })

    return (
        <div>
            <Head>
                <title>Resource | {title}</title>
                <meta name="robots" content="index, follow" />
            </Head>
            {inClient &&
                !!url &&
                (screenSize.orientation === 'landscape' ? (
                    <Desktop url={url} title={title} />
                ) : (
                    <Mobile url={url} title={title} />
                ))}
        </div>
    )
}
