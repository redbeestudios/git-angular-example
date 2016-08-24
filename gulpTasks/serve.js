var gulp = require('gulp');
var browserSync = require('browser-sync');
var packageJson = require('../package.json');
var proxy = require('proxy-middleware');
var url = require('url');

/**
 * Compila y levanta browserSync
 */
gulp.task('serve', ['compile'], function (done) {

  var routes = {};
  var proxies = [];

  routes['/styles'] = 'dist/styles';
  routes['/cdn/cdn-'+packageJson.name+'/'] = packageJson.moduleConfig.output + 'cdn-'+packageJson.name;

  var dependencies = packageJson.jspm.dependencies;

  for( var key in dependencies) {

    if (dependencies[key].indexOf('npm-redbee') !== -1) {

      var route = '/cdn/cdn-'+dependencies[key].replace(/.*:(.*)\@.*/, '$1');

      routes[route] = 'jspm_packages/'+dependencies[key].replace('^','').replace(':','/') + route;

    }
  }

  console.log('routes\n', routes);

  return browserSync({
    open: false,
    port: packageJson.moduleConfig.port,

    server: {
      baseDir: ['.'],
      routes: routes
    }
  }, done);
});
