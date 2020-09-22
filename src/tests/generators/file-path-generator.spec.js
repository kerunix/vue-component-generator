const {vueComponentFilePath, vueTestFilePath} = require('../../utils/generators/file-path-generator');

describe('vueComponentFilePath generator function', () => {
  it('should return a valid path', () => {
    expect(vueComponentFilePath('my-path', 'MyFilename')).toEqual('./src/components/my-path/MyFilename.vue');
    expect(vueComponentFilePath('my-path/nested', 'MyFilename')).toEqual('./src/components/my-path/nested/MyFilename.vue');
  })
  it('should throw an error when called with wrong arguments', () => {
    expect(() => {vueComponentFilePath()}).toThrow('You must provide a path and a filename');
    expect(() => {vueComponentFilePath('', '')}).toThrow('You must provide a path and a filename');
    expect(() => {vueComponentFilePath('myPath')}).toThrow('You must provide a path and a filename');
    expect(() => {vueComponentFilePath(3, 3)}).toThrow('You must provide path and filename as strings');
  })
})

describe('vueTestFilePath generator function', () => {
  it('should return a valid path with the correct extension format', () => {
    expect(vueTestFilePath('my-path', 'MyFilename', false)).toEqual('./src/components/my-path/__tests__/MyFilename.spec.js');
    expect(vueTestFilePath('my-path/nested', 'MyFilename', false)).toEqual('./src/components/my-path/nested/__tests__/MyFilename.spec.js');
    expect(vueTestFilePath('my-path', 'MyFilename', true)).toEqual('./src/components/my-path/__tests__/MyFilename.spec.ts');
    expect(vueTestFilePath('my-path/nested', 'MyFilename', true)).toEqual('./src/components/my-path/nested/__tests__/MyFilename.spec.ts');
  })
  it('should throw an error when called with wrong arguments', () => {
    expect(() => {vueTestFilePath()}).toThrow('You must provide a path, a filename, and a boolean for file format');
    expect(() => {vueTestFilePath('', '', true)}).toThrow('You must provide a path, a filename, and a boolean for file format');
    expect(() => {vueTestFilePath(true)}).toThrow('You must provide a path, a filename, and a boolean for file format');
    expect(() => {vueTestFilePath('')}).toThrow('You must provide a path, a filename, and a boolean for file format');
    expect(() => {vueTestFilePath('path', 2, true)}).toThrow('You must provide path and filename as strings');
    expect(() => {vueTestFilePath(2, 'path', true)}).toThrow('You must provide path and filename as strings');
  })
})

