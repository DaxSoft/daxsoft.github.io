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

const Desktop = ({ url }) => (
    <div>
        <MenuDesktop />
        <ResourceProjectDesktop url={url} />
    </div>
)

/*
:--------------------------------------------------------------------------
: Mobile Orientation
:--------------------------------------------------------------------------
*/

const Mobile = ({ url }) => (
    <div>
        <MenuMobile />
        <ResourceProjectMobile url={url.uri} />
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
            const project = document.location.pathname.split('/').pop()
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
                    <Desktop url={url} />
                ) : (
                    <Mobile url={url} />
                ))}
        </div>
    )
}
