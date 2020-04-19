/*
:--------------------------------------------------------------------------
: _app
:--------------------------------------------------------------------------
:
: The contents in this file is meant to initialize pages. 
*/

import React from 'react'
import App from 'next/app'
import Router from 'next/router'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import getPageContext from '../client/libraries/getPageContext'

import * as gtag from '../client/libraries/gtag'
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

class MyApp extends App {
    constructor(props) {
        super(props)
        this.pageContext = getPageContext()
    }

    /**
     * @param {React.Component} Component
     * @param {Object} ctx
     * @param {Object} ctx.params route paramaters /:id
     * @param {Request} ctx.req
     * @param {ResponseType} ctx.res
     * @param {String} ctx.query
     * @param {Boolean} ctx.preview
     * @param {Object} ctx.previewData
     */

    static async getServerSideProps({ Component, ctx }) {
        const pageProps = !!Component.getInitialProps
            ? await Component.getServerSideProps(ctx)
            : {}

        return { pageProps }
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render() {
        const { Component, pageProps, store } = this.props
        return (
            <React.Fragment>
                <ThemeProvider theme={this.pageContext.theme}>
                    <CssBaseline />
                    <Component pageContext={this.pageContext} {...pageProps} />
                </ThemeProvider>
            </React.Fragment>
        )
    }
}

export default MyApp
