const {generateFileContent, generateTestFileContent} = require('../../utils/generators/file-content-generator');
const {jsTemplate, tsTemplate, jsTestTemplate, tsTestTemplate} = require('./templates-output');

describe('fileContent generator function', () => {
  it('should return the right template based on arguments', () => {
    expect(generateFileContent(true, 'fileName')).toEqual(tsTemplate);
    expect(generateFileContent(false, 'fileName')).toEqual(jsTemplate);
  });
  it('should throw an error when called with wrong arguments', () => {
    expect(() => generateFileContent('true', '')).toThrow('You must provide a boolean and a string.');
    expect(() => generateFileContent('')).toThrow('You must provide a boolean and a string.');
    expect(() => generateFileContent(true, 0)).toThrow('You must provide a boolean and a string.');
  });
});

describe('testFileContent generator function', () => {
  it('should return the right template based on arguments', () => {
    expect(generateTestFileContent(true, 'fileName')).toEqual(tsTestTemplate);
    expect(generateTestFileContent(false, 'fileName')).toEqual(jsTestTemplate);
  });
  it('should throw an error when called with wrong arguments', () => {
    expect(() => generateTestFileContent('true', '')).toThrow('You must provide a boolean and a string.');
    expect(() => generateTestFileContent('')).toThrow('You must provide a boolean and a string.');
    expect(() => generateTestFileContent(true, 0)).toThrow('You must provide a boolean and a string.');
  });
});

