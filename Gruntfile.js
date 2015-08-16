// Generated on 2015-08-09 using generator-angular 0.12.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        cdnify: 'grunt-google-cdn'
    });

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git{,*/}*'
                    ]
                }]
            },
            server: {
                files: [{
                    src: ['.tmp']
                }]
            }
        },

        eslint: {
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/scripts/{,*/}*.js'
                ]
            },
            test: {
                options: {
                    useEslintrc: false,
                    configFile: 'test/.eslintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath: '../'
            },
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: '../',
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            },
            sass: {
                src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: /(\.\.\/){1,2}bower_components\//
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'browserify:server',
                'compass:server'
            ],
            test: [
                'browserify:server',
                'compass:server'
            ],
            dist: [
                'browserify:dist',
                'compass:dist',
                'imagemin',
                'svgmin'
            ]
        },

        browserify: {
            options: {
                transform: [
                    ['babelify']
                ]
            },
            server: {
                options: {
                    debug: true
                },
                files: [{
                    src: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                    dest: '.tmp/scripts/combined.js'
                }]
            },
            dist: {
                files: [{
                    src: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                    dest: '.tmp/scripts/combined.js'
                }]
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: './bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    sourcemap: true
                }
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        // Add vendor prefixed styles
        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')({browsers: ['last 1 version']})
                ]
            },
            server: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect().use(
                                '/app/styles',
                                connect.static('./app/styles')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            browserify: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:eslint:all', 'browserify:server'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            test: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:eslint:test', 'karma']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'postcss:server']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '.tmp/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: {
                src: ['<%= yeoman.app %>/index.html']
            },
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
            options: {
                assetsDirs: [
                    '<%= yeoman.dist %>',
                    '<%= yeoman.dist %>/images',
                    '<%= yeoman.dist %>/styles'
                ],
                patterns: {
                    js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
                }
            }
        },

        ngtemplates: {
            dist: {
                options: {
                    module: 'appDiscoveryWebApp',
                    htmlmin: '<%= htmlmin.dist.options %>',
                    usemin: 'scripts/scripts.js'
                },
                cwd: '<%= yeoman.app %>',
                src: 'views/{,*/}*.html',
                dest: '.tmp/templateCache.js'
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'images/{,*/}*.{webp}',
                        'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: '.',
                    src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
                    dest: '<%= yeoman.dist %>'
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        }
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'eslint:all',
            'wiredep',
            'concurrent:server',
            'postcss:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'eslint:test',
        'wiredep',
        'concurrent:test',
        'postcss:server',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'wiredep',
        'concurrent:dist',
        'useminPrepare',
        'postcss:dist',
        'ngtemplates',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'eslint:all',
        'test',
        'build'
    ]);

};
