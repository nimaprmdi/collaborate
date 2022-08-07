"use strict";

const { series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const gulp = require("gulp");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));

const sassSrc = "./assets/src/scss/";
const cssDest = "./assets/css/";
const cssSrc = "./assets/src/css/";

const sassTask = (cb) => {
    return gulp
        .src(["./assets/src/scss/style.scss"])
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(gulp.dest("./assets/src/css"));
    // .pipe(browserSync.stream());
    cb();
};

const cssConcatExternalTask = (cb) => {
    return gulp
        .src([cssSrc + "style.css"])
        .pipe(concat("style.css"))
        .pipe(gulp.dest(cssDest));
    cb();
};

const mainScriptsTask = (cb) => {
    return gulp
        .src("./assets/src/js/main.js")
        .pipe(concat("main.js"))
        .pipe(gulp.dest("./assets/js"));
    cb();
};

const vendorScriptsTask = (cb) => {
    return gulp
        .src([
            "./node_modules/jquery/dist/jquery.min.js",
            "./assets/src/js/vendor/iconify.js",
        ])
        .pipe(concat("vendors.js"))
        .pipe(gulp.dest("./assets/js"));
    cb();
};

const buildHtml = (cb) => {
    return gulp.src(["./index.html", "./routines.html"]).pipe(gulp.dest("./build"));

    cb();
};

const buildAssets = () => {
    return gulp
        .src(["./assets/**", "!./assets/src/**"])
        .pipe(gulp.dest("./build/assets"));

    cb();
};

function liveServerTask(cb) {
    // browserSync.init({
    //     proxy: "127.0.0.1/",
    // });
    gulp.watch([sassSrc + "**/*.scss"]).on(
        "change",
        series(sassTask, cssConcatExternalTask)
    );
    gulp.watch(["./assets/src/js/main.js"]).on(
        "change",
        series(mainScriptsTask, vendorScriptsTask)
    );
    // gulp.watch("./**/*.html").on("change", browserSync.reload);
    cb();
}

exports.default = series(
    sassTask,
    cssConcatExternalTask,
    mainScriptsTask,
    vendorScriptsTask,
    liveServerTask,
    buildHtml,
    buildAssets
);
