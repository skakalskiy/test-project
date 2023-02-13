import gulp from 'gulp';
import paths from '../paths';
import fs from 'fs';

const options = {
  path: paths.baseSrc,
  scripts: paths.src.scripts,
  pages:paths.src.scriptsPages,
}

gulp.task('script-pages', () => {
  fs.readdir(options.pages, (err, files) => {
    const obj = {};
    for (let i = 0; i < files.length; i++) {

      if(files[i].search('.js') == -1){
        continue
      }else{
        const stringReplace = files[i].replace('.js','');
        obj[stringReplace] = `${options.pages}/${files[i]}`;
      }
    }

    const file = fs.createWriteStream(`${options.scripts}/scriptFiles.js`);
    file.write(`export default ${JSON.stringify(obj)}`);
    file.end();
  });
});

