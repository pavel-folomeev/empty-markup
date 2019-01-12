'use strict';

// full gulpfile.js https://gist.github.com/Insayt/272c9b81936a03884768

let gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    watch       = require('gulp-watch'),
    fileinclude = require('gulp-file-include'),
    prefixer    = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserSync = require("browser-sync"),
    reload      = browserSync.reload;

let path = {
    build: {
        html:   'dist/',
        css:    'dist/css/',
        fonts:  'dist/fonts/',
        js:     'dist/js/',
        images: {
            base:   'dist/images/common',
            icons:  'dist/images/icons/',
        }
    },
    src: {
        html:   'src/*.html',
        css:    'src/css/main.scss',
        fonts:  'src/fonts/**/*.*',
        js:     'src/js/main.js',
        images: {
            base:   'src/images/common/*.*',
            icons:  'src/images/icons/*.*',
        }
    },
    watch: {
        html:   'src/**/*.html',
        css:    'src/css/**/*.scss',
        fonts:  'src/fonts/**/*.*',
        js:     'src/js/**/*.js',
        images: 'src/images/**/*.*'
    },
    clean: './dist'
};

let config = {
    server: {
        baseDir: "./dist",
        directory: true
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "frontend"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('all:clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(fileinclude({
            prefix: '//@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('css:build', function () {
    gulp.src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(fileinclude({
            prefix: '//@',
            basepath: '@file'
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('images:build', function () {
    gulp.src(path.src.images.base)
        .pipe(gulp.dest(path.build.images.base))
        .pipe(reload({stream: true}));
    gulp.src(path.src.images.icons)
        .pipe(gulp.dest(path.build.images.icons))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'css:build',
    'fonts:build',
    'js:build',
    'images:build',
]);

gulp.task('watch', function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.css], function(event, cb) {
        gulp.start('css:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.images], function(event, cb) {
        gulp.start('images:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);