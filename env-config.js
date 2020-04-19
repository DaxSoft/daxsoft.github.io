const prod = process.env.NODE_ENV === 'production'
const PROJECT_NAME = 'daxsoft.github.io'

module.exports = {
    'process.env.BACKEND_URL': prod ? `/${PROJECT_NAME}` : '',
}
