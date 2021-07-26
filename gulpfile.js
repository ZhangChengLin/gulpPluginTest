const {src, dest, watch, lastRun, series, parallel} = require('gulp')
const dotenv = require('dotenv')
const gulp_dotenv = require('gulp-dotenv')
const rename = require('gulp-rename')


const test_gulpDotenv = () => {
    return src('.env')
        .pipe(gulp_dotenv())
        .pipe(rename('env.json'))
        .pipe(dest('dist'))
}

exports.test_gulpDotenv = test_gulpDotenv;
