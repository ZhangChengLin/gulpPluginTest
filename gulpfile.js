const {src, dest, lastRun, watch, series, parallel} = require('gulp')
const fileInclude = require('gulp-file-include')
const rename = require('gulp-rename')

const {fileName} = require('./src/pages/loop/name.json')

const include = newName => {
    return src('./src/pages/**/*.html')
        .pipe(fileInclude({
            indent: true,
            prefix: '@@',
            basepath: './src/partials',
        }))
        .pipe(rename({
            basename: newName
        }))
        .pipe(dest('./dist/'))
}

const loopInclude = done => {
    for (let i = 0, x = fileName.length; i < x; i++) {
        include(fileName[i])
    }
    done()
}

exports.testInclude = loopInclude
