// @ts-nocheck
const { src, dest, series, parallel } = require('gulp');

const del = require("del");
const eslint = require("gulp-eslint");
const webpack = require('webpack-stream');
const config = require("./webpack.config");

function clean(cb) {
    (async () => {
        const deletedPaths = await del(['dist']);
        console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
        cb();
    })();
};

function copy() {
    return src("src/app.html").pipe(dest("dist/"));
}

function lint(cb) {
    return src("src/**/*.js").pipe(eslint({rules: {strict: 2}})).pipe(eslint.format()).pipe(eslint.failAfterError());
}

function build() {
    return src("src/main.js").pipe(webpack(config)).pipe(dest("dist/"));
}

exports.clean = clean;
exports.lint = lint;
exports.build = build;
exports.default = series(clean, lint, parallel(copy, build));