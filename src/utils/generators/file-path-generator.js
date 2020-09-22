const {toPascalCase, toKebabCase} = require('../text-utils');

module.exports = {
  vueComponentFilePath: (path, filename) => {
    if (!path || !filename) {
      throw new Error('You must provide a path and a filename');
    }
    if (typeof path !== 'string' || typeof filename !== 'string') {
      throw new Error('You must provide path and filename as strings');
    }
    return `./src/components/${toKebabCase(path)}/${toPascalCase(filename)}.vue`;
  },
  vueTestFilePath: (path, filename, typescript) => {
    if (!path || !filename || typeof typescript !== 'boolean') {
      throw new Error('You must provide a path, a filename, and a boolean for file format');
    }
    if (typeof path !== 'string' || typeof filename !== 'string') {
      throw new Error('You must provide path and filename as strings');
    }
    return `./src/components/${toKebabCase(path)}/__tests__/${toPascalCase(filename)}.spec.${typescript ? 'ts' : 'js'}`
  }
}