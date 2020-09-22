const {generateComponentFile, generateTestFile} = require('../utils/components');
const {jsTemplate, tsTemplate, jsTestTemplate, tsTestTemplate} = require('./generators/templates-output');

describe('generateComponentFile function', () => {
  it('should return an object with the right keys and values', () => {
    expect(generateComponentFile('fileName', 'fileName', false)).toEqual({
      path: './src/components/file-name/FileName.vue',
      content: jsTemplate
    })
    expect(generateComponentFile('directory/fileName', 'fileName', false)).toEqual({
      path: './src/components/directory/file-name/FileName.vue',
      content: jsTemplate
    })
    expect(generateComponentFile('directory/fileName', 'fileName', true)).toEqual({
      path: './src/components/directory/file-name/FileName.vue',
      content: tsTemplate
    })
    expect(generateComponentFile('directory/fileName', 'fileName', true)).toEqual({
      path: './src/components/directory/file-name/FileName.vue',
      content: tsTemplate
    })
  });

  it('should throw an error when called with wrong parameters', () => {
    expect(() => generateComponentFile('path', '', true)).toThrow('Please provide a path and filename as valid and non empty stings.');
    expect(() => generateComponentFile('', true)).toThrow('Please provide a path and filename as valid and non empty stings.');
    expect(() => generateComponentFile(3, '', true)).toThrow('Please provide a path and filename as valid and non empty stings.');
    expect(() => generateComponentFile('path', 'filename')).toThrow('Please provide a boolean to specify the file format.');
    expect(() => generateComponentFile('path', 'filename', 'true')).toThrow('Please provide a boolean to specify the file format.');
  });
});

describe('generateTestFile function', () => {
  it('should return an object with the right keys and values', () => {
    expect(generateTestFile('fileName', 'fileName', false)).toEqual({
      path: './src/components/file-name/__tests__/FileName.spec.js',
      content: jsTestTemplate
    })
    expect(generateTestFile('directory/fileName', 'fileName', false)).toEqual({
      path: './src/components/directory/file-name/__tests__/FileName.spec.js',
      content: jsTestTemplate
    })
    expect(generateTestFile('directory/fileName', 'fileName', true)).toEqual({
      path: './src/components/directory/file-name/__tests__/FileName.spec.ts',
      content: tsTestTemplate
    })
    expect(generateTestFile('directory/fileName', 'fileName', true)).toEqual({
      path: './src/components/directory/file-name/__tests__/FileName.spec.ts',
      content: tsTestTemplate
    })
  });

  it('should throw an error when called with wrong parameters', () => {
    expect(() => generateTestFile('path', '', true)).toThrow('Please provide a path and filename as valid and non empty stings.');
    expect(() => generateTestFile('', true)).toThrow('Please provide a path and filename as valid and non empty stings.');
    expect(() => generateTestFile(3, '', true)).toThrow('Please provide a path and filename as valid and non empty stings.');
    expect(() => generateTestFile('path', 'filename')).toThrow('Please provide a boolean to specify the file format.');
    expect(() => generateTestFile('path', 'filename', 'true')).toThrow('Please provide a boolean to specify the file format.');
  });
});