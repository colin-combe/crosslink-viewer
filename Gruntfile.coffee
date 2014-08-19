# Credit to https://github.com/creatorrr/browserify-boilerplate/blob/master/Gruntfile.coffee

# Gruntfile.coffee
module.exports = taskManager = (grunt) ->
  # Initialize
  grunt.initConfig
    config:
      package: grunt.file.readJSON 'package.json'
      bower:   grunt.file.readJSON 'bower.json'

    # bower-task config
    # (https://github.com/yatskevich/grunt-bower-task/blob/master/README.md)
    bower:
      install:
        options:
          targetDir: 'bower_components'
          layout:    'byType'
          install:   true
          cleanup:   true


    # browserify config
    # (https://github.com/jmreidy/grunt-browserify/blob/master/README.md)
    browserify:
      all:
        # src:  ['js/test.js']
        src:  ['src/controller/Init.js']
        dest: 'build/<%= config.bower.name %>-<%= config.bower.version %>.js'
        options:
            bundleOptions:
              standalone: 'xiNET'
              debug: true
    # contrib-uglify config
    # (https://github.com/gruntjs/grunt-contrib-uglify/blob/master/README.md)
    uglify:
      options:
        banner: '/*! <%= config.bower.name %>-<%= config.bower.version %>
         Built: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      all:
        src:  'build/<%= config.bower.name %>-<%= config.bower.version %>.js'
        dest: 'build/<%= config.bower.name %>-<%= config.bower.version %>.min.js'

    # contrib-copy config
    # (https://github.com/gruntjs/grunt-contrib-copy/blob/master/README.md)
    copy:
      builds:
        files: [
          {
            src:  'build/<%= config.bower.name %>-<%= config.bower.version %>.js'
            dest: '<%= config.bower.name %>.js'
          }, {
            src:  'build/<%= config.bower.name %>-<%= config.bower.version %>.min.js'
            dest: '<%= config.bower.name %>.min.js'
          }
        ]

    # contrib-watch config
    # (https://github.com/gruntjs/grunt-contrib-watch/blob/master/README.md)
    watch:
      files: 'src/**/*.js'
      tasks: ['do']

    notify:
      watch:
        options:
            title: 'Build Complete'
            message: 'Finished building build/<%= config.bower.name %>-<%= config.bower.version %>.js'


  # Load npm tasks.
  modules = getKeys (grunt.config 'config.package').devDependencies
  plugins = ( module for module in modules when !!~module.indexOf 'grunt-' )

  grunt.loadNpmTasks plugin for plugin in plugins

  # Register custom tasks.
  grunt.registerTask 'setup',   ['bower:install', 'browserify', 'copy']

  grunt.registerTask 'package',   ['browserify', 'uglify', 'copy']

  grunt.registerTask 'build',   ['browserify']

  grunt.registerTask 'do', ['build', 'notify']

  grunt.registerTask 'default', ['watch']

# Utils
getKeys = (obj) -> key for own key, value of obj
