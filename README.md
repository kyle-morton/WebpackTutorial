# Webpack Tutorial 

tutorial course at https://webpack.academy

1) install webpack via NPM 'npm install webpack --save-dev'

2) run 'npm init' to setup node project

3) add 'build': 'webpack" property to scripts obj in the package.json file

4) create webpack.config.js file to configure webpack (webpack looks for this file by default)

NOTE: to run webpack bundling script, run 'npm run-script build'. If configured correctly, webpack will output a file containing any input files as well as the webpack runtime that is runs it on the browser

NOTE 2: after getting your output js file, you can run it in node using 'node OUTPUT_FILE.js'

## Webpack Dependency Graph

Webpack uses Dependency Graph concept to import needed elements into your js files. This is different from Gulp/Grunt because those task-runners force you to explicitely define those relationships.

From the 'entry' file, it goes through the each file and establishes any dependencies created via the ES6 import statement. Webpack then creates a new module for each of these imports and repeats the process for them, on and on, and eventually completes the dependency graph/tree.

Long story short, you can add dependencies in your code as you need them from other files and don't need to worry about updating your build with those new files.

## Watch

Add 'watch': 'webpack --watch' to scripts in package.json to allow it to watch for changes to your files. Any change will trigger a new build.

Run this using 'npm run-script watch'

## Modules

you can use loaders (like babel) to precompile code, optimize images, etc. These can be applied with an object containing the test (expression used to match files) and use (loaders to apply) properties.  You can also create your own custom loaders if needed. 

## Plugins

Plugins can be custom created or you can use many of the built-in webpack or NPM library plugins to lint, minify, etc your code prior to outputting your final js file.
