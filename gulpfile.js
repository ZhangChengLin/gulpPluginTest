const {src, dest, lastRun, watch, series, parallel} = require('gulp')
const imagemin = require('gulp-imagemin')

const imageminPlugins = {
    all: [
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ],
    gif: [imagemin.gifsicle()],
    png: [imagemin.optipng()],
    svg: [imagemin.svgo()],
    jpeg: [imagemin.mozjpeg({quality: 75, progressive: true})],
}
const imageminOptions = {
    verbose: true,
}

const imgMinJpg = () => {
    return src('./src/images/jpg/**/*')
        // .pipe(imagemin(imageminPlugins.all, imageminOptions))
        // .pipe(imagemin(imageminPlugins.jpeg, imageminOptions))
        .pipe(imagemin([], imageminOptions))
        .pipe(dest('./dist/images/jpg'))
}

exports.minJpg = () => (
    imgMinJpg()
)
