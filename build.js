({
  baseUrl: 'js/app',
  out: 'js/bundle.js',
  optimize: 'uglify2',
  include: ['../main', '../vendor/require.js'],
  mainConfigFile: 'js/main.js'
})