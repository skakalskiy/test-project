export default {
  baseSrc: './app',
  baseDist: './dist',
  src: {
    allScss: './app/scss',
    styles: './app/scss/pages',
    svgsprite: './app/svg-sprite',
    images: './app/images',
    svg: './app/svg',
    scripts: './app/scripts',
    scriptsPages: './app/scripts/pages',
    static: './app/data',
    includes: './app/_includes',
    fonts: './app/fonts',
  },

  dist: {
    styles: './dist/css',
    images: './dist/images',
    optimizedImg: './dist/images-optimized',
    scripts: './dist/js',
    static: './dist/data',
    optimizedData: './dist/data-optimized',
    fonts: './dist/fonts',
    API: './dist/API'
  },
  inline: {
    styles: '/css',
    images: '/images'
  }
};