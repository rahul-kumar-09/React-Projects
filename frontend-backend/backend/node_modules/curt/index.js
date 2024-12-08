// npm install -g lodash

global.stdout = console.log;
global.stderr = console.error;

global._ = require("lodash");
global._m = require("moment");

Array.prototype.each = Array.prototype.forEach;

module.exports.escape = function(arg) {
  if (arg === undefined || arg === null || arg === '') {
    return "''";
  }

  return ('' + arg).replace(/([^0-9a-z-])/gi, '\\$1');
}

module.exports.stdin = function(callback, format) {
  var data = [];

  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      data.push(chunk);
    }
  });

  process.stdin.on('end', () => {
    switch(format) {
    case 'json':
      callback(JSON.parse(data.join("")));
      break;
    default:
      callback(data.join(""));
    }

    delete data;
  });

  return module.exports;
}

global.curt = module.exports;
