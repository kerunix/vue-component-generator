const fs = require('fs');

module.exports = {
  createDirectory: (path) => {
    fs.mkdirSync(`./src/components/${path}`, {recursive: true});
  },
  createFile: ({path, content}) => {
    fs.writeFileSync(path, content);
  },
  fileExists: (path) => {
    return fs.existsSync(path);
  }
}