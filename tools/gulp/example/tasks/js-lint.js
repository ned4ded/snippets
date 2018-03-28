const gulp = require('gulp');
const config = require('../gulpfile.config');
const jshint = require('gulp-jshint');

module.exports = gulp.task('lint', function() {
    return gulp.src(config.paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
