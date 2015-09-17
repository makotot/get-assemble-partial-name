var path = require('path');

module.exports = function (partialPath, cb) {
  var partialFile = partialPath.split(path.sep).pop();

  var partialName = partialFile.split(path.extname(partialFile))[0];

  if (typeof cb === 'function') {
    cb(null, partialName);
  }

  return partialName;
};
