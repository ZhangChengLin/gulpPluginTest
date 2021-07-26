require('dotenv').config({
    path:'./env/.env'
})

const json = {
    host: process.env.DB_HOST,
    databaseName: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.port
}

const test = (done) => {
    console.log(json)
    // console.log(process.env)
    done()
}

exports.test = test
