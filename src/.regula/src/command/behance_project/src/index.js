'use strict'

const clear = require('clear')
const chalk = require('chalk')
const puppeteer = require('puppeteer')
const { ProjectRoute } = require('../../../path')
const { GetIndex } = require('./scrape')

// MY URL
const USER_URL = 'https://www.behance.net/daxsoft'

// execute

void (async function () {
    const response = {}

    clear()
    console.log(chalk.blueBright('Behance Scraper'))
    console.log('\t', 'Get the projects from my user and export as data')
    console.log()

    const browser = await puppeteer.launch({
        timeout: 30000,
    })

    const page = await browser.newPage()

    console.log(chalk.greenBright('Puppeteer:'), USER_URL)

    await page.goto(USER_URL, {
        waitUntil: ['load', 'domcontentloaded'],
    })

    console.log(chalk.greenBright('Puppeteer:'), 'Get Projects Index')

    response.indexor = await GetIndex(page, {})

    console.log(chalk.greenBright('FileSystem:'), 'Saving...')

    await ProjectRoute.getItem('json').store({
        route: 'public',
        filename: 'behance.json',
        data: response.indexor,
        force: true,
    })

    console.log(chalk.greenBright('FileSystem:'), ProjectRoute.io().historic())

    return true
})()
