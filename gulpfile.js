const { src, dest, watch, parallel, series } = require("gulp"),
    scss = require("gulp-sass")(require("node-sass")),
    cssmin = require('gulp-cssmin'),
    concat = require("gulp-concat"),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify-es').default,
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    del = require("del");


function browsersync() {
    browserSync.init({
        server: { baseDir: "app/" },
        notify: false,      //отключает всплывающее уведомление в браузере
        online: true    //раздает IP адреса, но не может работать без интернета. Для офлайн режима пишем false
    })
}

function style() {
    return src('app/scss/styleLanding.scss')
        .pipe(scss({ outputStyle: 'expanded' })) //compressed //конвертирует в css и сжимает
        .pipe(concat('style.min.css'))  //может конкатенировать и переименовывать файлы
        .pipe(group_media())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 10 version"], //10
            grid: true
        }))
        .pipe(cssmin())
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}


function stylelib() {
    return src("app/css/*.css")
        .pipe(concat("libs.min.css"))
        .pipe(cssmin())
        .pipe(dest("app/css"))
}


function js() {
    return src([
        'app/js/jsLanding.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}


function jslib() {
    return src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/swiper/swiper-bundle.min.js',
        'node_modules/@popperjs/core/dist/umd/popper.min.js',
    ])
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}


function images() {
    return src('app/images/**/*.webp')
        .pipe(webp({
            quality: 80
        }))
        .pipe(dest('dist/images'))
        .pipe(src('app/images/**/*.png'))
        .pipe(imagemin())
        .pipe(src('app/images/**/*.svg'))
        .pipe(dest('dist/images'))
}


function build() {
    return src([
        'app/css/libs.min.css',
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/lib.min.js',
        'app/js/main.min.js',
        'app/*.html'
    ], { base: 'app' })  //чтобы в дист были такие же папки
        .pipe(dest('dist'))
}

function cleanDist() {
    return del('dist')
}


function watching() {
    watch(['app/scss/**/*.scss'], style) //следит за файлами и запускает style если засекает изменения
    watch(['app/js/**/*.js', '!app/**/*.min.js'], js)
    watch(['app/*.html']).on('change', browserSync.reload)
}


exports.style = style;
exports.stylelib = stylelib;
exports.js = js;
exports.jslib = jslib;
exports.images = images;
exports.watching = watching;
exports.browsersync = browsersync;
exports.cleanDist = cleanDist;


exports.devBuild = parallel(stylelib, style, jslib, js);
exports.default = series(
  exports.devBuild,
  parallel(browsersync, watching)); //задаем дефолтную задачу для gulp
exports.build = series(exports.devBuild, cleanDist, images, build);
