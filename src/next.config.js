// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'
const PROJECT_NAME = 'https://daxsoft.github.io/'

module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/resources': { page: '/resources' },
            '/todo': { page: '/todo' },
            '/resources/project': { page: '/resources/project' },
        }
    },

    assetPrefix: !debug ? `${PROJECT_NAME}` : '',
}
