import gulp from 'gulp';
import runSequence from 'run-sequence';
import options from '../../options';

gulp.task('build', () => {
  runSequence(
    'clean',
    [
      'svg-sprite',
      'fonts',
      `${options.templateEngine}`,
      'files-menu',
      'script-pages',
      'scss',
      'scripts:compile',
      'images',
      'static',
    ]
  );
});
