const {
  javascriptComponentTemplate,
  typescriptComponentTemplate,
  typescriptTestTemplate,
  javascriptTestTemplate
} = require('./templates/index');

module.exports = {
  generateFileContent: (typescript, name) => {
    if (!name || typeof name !== 'string' || typeof typescript !== 'boolean') {
      throw new Error('You must provide a boolean and a string.');
    }
    return typescript ? typescriptComponentTemplate(name) : javascriptComponentTemplate(name);
  },
  generateTestFileContent: (typescript, name) => {
    if (!name || typeof name !== 'string' || typeof typescript !== 'boolean') {
      throw new Error('You must provide a boolean and a string.');
    }
    return typescript ? typescriptTestTemplate(name) : javascriptTestTemplate(name);
  }
}