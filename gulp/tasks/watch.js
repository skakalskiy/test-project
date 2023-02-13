import gulp from 'gulp';
import watch from 'gulp-watch';
import runSequence from 'run-sequence';
import { reload } from 'browser-sync';
import paths from '../paths';
import options from '../../options';

gulp.task('watch', () => {
  global.watch = true;

  watch(`${paths.src.allScss}/**/*.{scss,css}`, () => {
    runSequence('scss', reload.bind(null, `${paths.dist.styles}/index.css`));
  });

  watch(`${paths.src.svgsprite}/*`, () => {
    runSequence('svg-sprite', reload);
  });

  watch([`${paths.baseSrc}/**/*.${options.templateEngine}`], () => {
    runSequence(`${options.templateEngine}`, reload);
  });

  watch([`${paths.baseSrc}/*.${options.templateEngine}`], { events: ['add', 'unlink'] }, () => {
    runSequence('files-menu', reload);
  });

  watch([`${paths.src.scriptsPages}/*.js`], { events: ['add', 'unlink'] }, () => {
    runSequence('script-pages');
    gulp.src(`${paths.src.scriptsPages}/*.js`).pipe(gulp.dest(paths.dist.scripts));
  });

  watch(`${paths.src.static}/**/*.{png,jpg,gif,svg,mp4,webm}`, () => {
    runSequence('static', reload);
  });


  watch(`${paths.src.fonts}/**/*`, () => {
    runSequence('fonts', reload);
  });

  watch(`${paths.src.images}/**/*.{png,jpg,gif,svg}`, () => {
    runSequence('images', reload);
  });

  watch(`${paths.src.scripts}/**/*.js`, (e) => {
    runSequence('scripts:compile');
  });
});