const path = require('path');
const gulp = require('gulp');
const config = require('../gulpfile.config');

// Some plugins
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Lint Task
const lintJS = require('./tasks/js-lint');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(config.paths.stylesBase)
        .pipe(sass())
        .pipe(gulp.dest(path.join(config.server.serveFolder, 'css')));
});
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(config.paths.scripts)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(config.server.serveFolder))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(config.server.serveFolder, 'js')));
});
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(config.paths.scripts, ['lint', 'scripts']);
    gulp.watch(config.paths.stylesAll, ['sass']);
});
// Default Task our default task which is used as a grouped reference to our other tasks. This will be the task that is ran upon entering gulp into
// the command line without any additional parameters.
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);

gulp.task('default', ['styles']);
