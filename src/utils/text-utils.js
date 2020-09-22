module.exports = {
  toKebabCase: (string) => {
    if (!string || typeof string !== 'string') {
      throw new Error('You must provide a string');
    }
    return string
      .replace(/([a-z])([A-Z])/g, '$1-$2')    // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, '-')                // replace all spaces and low dash
      .toLowerCase()                          // convert to lower case
  },
  toPascalCase: (string) => {
    if (!string || typeof string !== 'string') {
      throw new Error('You must provide a string');
    }
    return string
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '$')
      .replace(/[^A-Za-z0-9]+/g, '$')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}$${b}`)
      .toLowerCase()
      .replace(/(\$)(\w?)/g, (m, a, b) => b.toUpperCase());

  },
  extractFilename: (path) => {
    if (!path || typeof path !== 'string') {
      throw new Error('You must provide a string');
    }
    const splitedPath = path.split('/');
    return splitedPath[splitedPath.length - 1];
  },
}