const {vueComponentFilePath, vueTestFilePath} = require('./generators/file-path-generator');
const {generateFileContent, generateTestFileContent} = require('./generators/file-content-generator');

module.exports = {
  generateComponentFile: (path, filename, typescript) => {
    if (!path || !filename || typeof path !== 'string' || typeof filename !== 'string') {
      throw new Error('Please provide a path and filename as valid and non empty stings.');
    }
    if (typeof typescript !== 'boolean') {
      throw new Error('Please provide a boolean to specify the file format.');
    }
    return {
      path: vueComponentFilePath(path, filename),
      content: generateFileContent(typescript, filename),
    };
  },
  generateTestFile: (path, filename, typescript) => {
    if (!path || !filename || typeof path !== 'string' || typeof filename !== 'string') {
      throw new Error('Please provide a path and filename as valid and non empty stings.');
    }
    if (typeof typescript !== 'boolean') {
      throw new Error('Please provide a boolean to specify the file format.');
    }
    return {
      path: vueTestFilePath(path, filename, typescript),
      content: generateTestFileContent(typescript, filename),
    }
  }

}