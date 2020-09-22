import { mount } from '@vue/test-utils';
import Input from '@/components/input/Input.vue';

describe('Input', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(Input);
    expect(wrapper.vm).toBeTruthy();
  });
});
