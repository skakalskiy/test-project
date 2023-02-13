import gulp from 'gulp';
import runSequence from 'run-sequence';
import options from '../../options';
 
gulp.task('default', () => {
  runSequence(
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
    ],
    'livereload',
    'watch'
  );
});
