require('dotenv').config({
    path: './env/.env'
})

const debug = {
    apikey: process.env.FUNDEBUG_APIKEY
}

const test = (done) => {
    console.log(debug)
    // console.log(process.env)
    done()
}

exports.test = test
