import { mount } from '@vue/test-utils';
import Button from '@/components/button/Button.vue';

describe('Button', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(Button);
    expect(wrapper.vm).toBeTruthy();
  });
});
