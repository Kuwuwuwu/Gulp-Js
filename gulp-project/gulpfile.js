const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function styles() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError)) // Компиляция SCSS в CSS
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false }))
        .pipe(cleanCSS({ compatibility: 'ie8' })) // Минификация CSS
        .pipe(gulp.dest('dist/css')) // Сохранение CSS
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({ server: "./dist" });
    gulp.watch("src/scss/**/*.scss", styles);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
    return;
}

exports.styles = styles;
exports.serve = gulp.series(styles, serve);