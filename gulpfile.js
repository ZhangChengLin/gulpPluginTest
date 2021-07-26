require('dotenv').config()

const json = {
    host: process.env.DB_HOST,
    databaseName: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.port
}

const test = (done) => {
    console.log(json)
    done()
}

exports.test = test
