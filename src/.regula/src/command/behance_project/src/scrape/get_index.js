'use strict'

module.exports = async function (page, data) {
    return await page.evaluate(async (storage) => {
        function getCover(project) {
            const cover = project.querySelector('img')
            return {
                src: cover.getAttribute('src'),
                alt: cover.getAttribute('alt'),
            }
        }

        function getStatics(project) {
            const [likes, views] = project
                .querySelector('.Stats-stats-1iI')
                .querySelectorAll('span')
            return {
                likes: +likes.innerText.trim(),
                views: +views.innerText.trim(),
            }
        }

        const response = []

        let content = document
            .querySelector('#site-content')
            .querySelector('main')
            .querySelector('.Profile-profileContents-3cP')
            .querySelector('.ContentGrid-grid-21i').children

        const projects = [...content]

        projects.map((project) => {
            const cover = getCover(project)
            const href = project.querySelector('a').getAttribute('href')
            const statics = getStatics(project)

            return response.push({
                cover,
                href,
                statics,
            })
        })

        return response
    }, data)
}
