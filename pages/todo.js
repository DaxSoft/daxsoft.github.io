/*
:--------------------------------------------------------------------------
: /index
:--------------------------------------------------------------------------
*/

import React from 'react'
import Head from 'next/head'
import { useScreenSize, useClient } from '@vorlefan/react-hooks'

/*
:--------------------------------------------------------------------------
: Components
:--------------------------------------------------------------------------
*/

import { MenuMobile, MenuDesktop } from '../client/components/@common/menu'
import { TodoDesktop, TodoMobile } from '../client/components/todo'

/*
:--------------------------------------------------------------------------
: Desktop Orientation
:--------------------------------------------------------------------------
*/

const Desktop = ({}) => (
    <div>
        <MenuDesktop />
        <TodoDesktop />
    </div>
)

/*
:--------------------------------------------------------------------------
: Mobile Orientation
:--------------------------------------------------------------------------
*/

const Mobile = ({}) => (
    <div>
        <MenuMobile />
        <TodoMobile />
    </div>
)

/*
:--------------------------------------------------------------------------
: Page Component
:--------------------------------------------------------------------------
*/

export default function Page({}) {
    const screenSize = useScreenSize({}, [0.95, 1.5])
    const { inClient } = useClient()

    return (
        <div>
            <Head>
                <title>Michael Willian | To-Do</title>
                <meta name="robots" content="index, follow" />
            </Head>
            {inClient &&
                (screenSize.orientation === 'landscape' ? (
                    <Desktop />
                ) : (
                    <Mobile />
                ))}
        </div>
    )
}
