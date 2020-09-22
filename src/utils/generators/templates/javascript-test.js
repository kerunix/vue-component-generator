const {toKebabCase, toPascalCase} = require('../../text-utils');

module.exports = {
  javascriptTestTemplate: (name) => {
    if (!name || typeof name !== 'string') {
      throw new Error('Please provide a string formated name');
    }

    return `import { mount } from '@vue/test-utils';
import ${toPascalCase(name)} from '@/components/${toKebabCase(name)}/${toPascalCase(name)}.vue';

describe('${toPascalCase(name)}', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(${toPascalCase(name)});
    expect(wrapper.vm).toBeTruthy();
  });
});
`},
}