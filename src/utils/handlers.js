const files = require('./files');
const {extractFilename} = require('./text-utils');
const components = require('./components');

module.exports = {
  createComponent: ({path, typescript, tests}) => {
    const filename = extractFilename(path);
    if (files.fileExists(`./src/components/${path}`)) {
      throw new Error('Files already exists at this location');
    }
    const componentFile = components.generateComponentFile(path, filename, typescript);
    if (tests) {
      const testFile = components.generateTestFile(path, filename, typescript);
      files.createDirectory(`${path}/__tests__`);
      files.createFile(testFile);
    }
    files.createDirectory(path);
    files.createFile(componentFile);
  }
}