const {
  javascriptComponentTemplate,
  typescriptComponentTemplate,
  javascriptTestTemplate,
  typescriptTestTemplate,
} = require('../../utils/generators/templates/index');
const {jsTemplate, tsTemplate, jsTestTemplate, tsTestTemplate} = require('./templates-output');

describe('javascriptComponentTemplate', () => {
  it('should return a valid template with the right name', () => {
    expect(javascriptComponentTemplate('fileName')).toEqual(jsTemplate);
  });
  it('should throw an error when called with wrong parameters', () => {
    expect(() => javascriptComponentTemplate('')).toThrow('Please provide a string formated name');
    expect(() => javascriptComponentTemplate()).toThrow('Please provide a string formated name');
    expect(() => javascriptComponentTemplate(3)).toThrow('Please provide a string formated name');
  });
});
describe('typescriptComponentTemplate', () => {
  it('should return a valid template with the right name', () => {
    expect(typescriptComponentTemplate('fileName')).toEqual(tsTemplate);
  });
  it('should throw an error when called with wrong parameters', () => {
    expect(() => typescriptComponentTemplate('')).toThrow('Please provide a string formated name');
    expect(() => typescriptComponentTemplate()).toThrow('Please provide a string formated name');
    expect(() => typescriptComponentTemplate(3)).toThrow('Please provide a string formated name');
  });
});
describe('javascriptTestTemplate', () => {
  it('should return a valid template with the right name', () => {
    expect(javascriptTestTemplate('fileName')).toEqual(jsTestTemplate);
  });
  it('should throw an error when called with wrong parameters', () => {
    expect(() => javascriptTestTemplate('')).toThrow('Please provide a string formated name');
    expect(() => javascriptTestTemplate()).toThrow('Please provide a string formated name');
    expect(() => javascriptTestTemplate(3)).toThrow('Please provide a string formated name');
  });
});
describe('typescriptTestTemplate', () => {
  it('should return a valid template with the right name', () => {
    expect(typescriptTestTemplate('fileName')).toEqual(tsTestTemplate);
  });
  it('should throw an error when called with wrong parameters', () => {
    expect(() => typescriptTestTemplate('')).toThrow('Please provide a string formated name');
    expect(() => typescriptTestTemplate()).toThrow('Please provide a string formated name');
    expect(() => typescriptTestTemplate(3)).toThrow('Please provide a string formated name');
  });
});