var getKeys, taskManager,
  __hasProp = {}.hasOwnProperty;

module.exports = taskManager = function(grunt) {
  var module, modules, plugin, plugins, _i, _len;
  grunt.initConfig({
    config: {
      "package": grunt.file.readJSON('package.json')
    },
    browserify: {
      all: {
        src: ['src/controller/Controller.js'],
        dest: 'build/<%= config.package.name %>.js',
        options: {
          browserifyOptions: {
            standalone: 'xiNET',
            debug: true
          },
          transform: ['browserify-shim', 'deamdify']
        }
      }
    },
    jshint: {
      all: ['src/**/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= config.package.name %> Built: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      all: {
        src: 'build/<%= config.package.name %>.js',
        dest: 'build/<%= config.package.name %>.min.js'
      }
    },
    watch: {
      files: 'src/**/*.js',
      tasks: ['do']
    },
    notify: {
      watch: {
        options: {
          title: 'Build Complete',
          message: 'Finished building build/<%= config.package.name %>.js'
        }
      }
    }
  });
  modules = getKeys((grunt.config('config.package')).devDependencies);
  plugins = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = modules.length; _i < _len; _i++) {
      module = modules[_i];
      if (!!~module.indexOf('grunt-')) {
        _results.push(module);
      }
    }
    return _results;
  })();
  for (_i = 0, _len = plugins.length; _i < _len; _i++) {
    plugin = plugins[_i];
    grunt.loadNpmTasks(plugin);
  }
  //todo: note that the 'test' task just returns true right now! Real tests need to be added.
  grunt.registerTask('test', function() {return true});
  grunt.registerTask('setup', 'browserify');
  grunt.registerTask('package', ['browserify', 'uglify']);
  grunt.registerTask('build', ['browserify']);
  grunt.registerTask('do', ['build', 'notify']);
  return grunt.registerTask('default', ['do', 'watch']);
};

getKeys = function(obj) {
  var key, value, _results;
  _results = [];
  for (key in obj) {
    if (!__hasProp.call(obj, key)) continue;
    value = obj[key];
    _results.push(key);
  }
  return _results;
};
