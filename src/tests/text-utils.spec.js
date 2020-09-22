const {toKebabCase, toPascalCase, extractFilename} = require('../utils/text-utils');

describe('toKebabCase function', () => {
  it('should return the string as kebab-case', () => {
    const expectedOutput = 'my-test-text';

    expect(toKebabCase('myTestText')).toEqual(expectedOutput);
    expect(toKebabCase('MyTestText')).toEqual(expectedOutput);
    expect(toKebabCase('My Test Text')).toEqual(expectedOutput);
    expect(toKebabCase('my-test-text')).toEqual(expectedOutput);
    expect(toKebabCase('myDirectory/myNextDirectory')).toEqual('my-directory/my-next-directory');
  })
  it('should throw an Error when called with wrong argument', () => {
    expect(() => toKebabCase('')).toThrow('You must provide a string');
    expect(() => toKebabCase(3)).toThrow('You must provide a string');
    expect(() => toKebabCase()).toThrow('You must provide a string');
    expect(() => toKebabCase(null)).toThrow('You must provide a string');
    expect(() => toKebabCase(undefined)).toThrow('You must provide a string');
  })
})

describe('toPascalCase function', () => {
  it('should return the string as PascalCase', () => {
    const expectedOutput = 'MyTestText';
    expect(toPascalCase('my test text')).toEqual(expectedOutput);
    expect(toPascalCase('myTestText')).toEqual(expectedOutput);
    expect(toPascalCase('my-test-text')).toEqual(expectedOutput);
    expect(toPascalCase('MyTestText')).toEqual(expectedOutput);
    expect(toPascalCase('My Test Text')).toEqual(expectedOutput);
  })
  it('should throw an Error when called with wrong argument', () => {
    expect(() => toPascalCase('')).toThrow('You must provide a string');
    expect(() => toPascalCase(3)).toThrow('You must provide a string');
    expect(() => toPascalCase()).toThrow('You must provide a string');
    expect(() => toPascalCase(null)).toThrow('You must provide a string');
    expect(() => toPascalCase(undefined)).toThrow('You must provide a string');
  })
})

describe('extractFilename function', () => {
  it('should return the filename', () => {
    const expectedOutput = 'filename';

    expect(extractFilename('directory/filename')).toEqual(expectedOutput);
    expect(extractFilename('directory/nestedDirectory/filename')).toEqual(expectedOutput);
    expect(extractFilename('filename')).toEqual(expectedOutput);
  })

  it('should throw an Error when called with wrong argument', () => {
    expect(() => extractFilename('')).toThrow('You must provide a string');
    expect(() => extractFilename(3)).toThrow('You must provide a string');
    expect(() => extractFilename()).toThrow('You must provide a string');
    expect(() => extractFilename(null)).toThrow('You must provide a string');
    expect(() => extractFilename(undefined)).toThrow('You must provide a string');
  })
})
