import gulp from 'gulp'
import browsersync from 'browser-sync'

export default function svgs() {
  return gulp.src('src/images/**/*.svg')
    .pipe(gulp.dest('build/assets/img'))
    .on('end', browsersync.reload)
}
