'use strict';

var SVGSpriter = require('svg-sprite'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    fs = require('fs'),
    util = require('util'),
    File = require('vinyl'),
    glob = require('glob'),
    cwd = path.resolve('./'),
    svgSourceDir = './svg-source/',
    svgGeneratedDir = './app/images/',
    svgGeneratedFileName = 'icon-svg-symbol.svg',
    spriter = new SVGSpriter({
      dest: svgGeneratedDir,
      log: 'verbose',
      shape: {
        id: {
          separator: '-',
          whitespace: '-',
          generator: function (fileName) {
            return util.format('%s', 'svg-symbol-' + path.basename(fileName.replace(/\s+/g, this.whitespace), '.svg'));
          }
        }
      },
      mode: {
        symbol: true
      }
    });

// Find SVG files recursively via `glob`
glob.glob( svgSourceDir + '/*.svg', { cwd: cwd }, function (err, files) {
  files.forEach(function (file) {
    // Create and add a vinyl file instance for each SVG
    spriter.add(new File({
      path: path.join(cwd, file),                         // Absolute path to the SVG file
      base: cwd,                                          // Base path (see `name` argument)
      contents: fs.readFileSync(path.join(cwd, file))     // SVG file contents
    }));
  })

  spriter.compile(function (error, result, data) {
    for (var type in result.symbol) {
      var generatedFilePath = path.join(cwd, svgGeneratedDir, svgGeneratedFileName);
      mkdirp.sync(path.dirname(generatedFilePath));
      fs.writeFileSync(generatedFilePath, result.symbol[type].contents);
    }
  });
});
