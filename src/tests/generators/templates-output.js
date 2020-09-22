module.exports = {
  tsTemplate: `<template>
  <div>FileName component is up and running</div>
</template>

<script lang="ts">
export default {
  name: 'FileName',
};
</script>

<style>

</style>
`,
  jsTemplate: `<template>
  <div>FileName component is up and running</div>
</template>

<script>
export default {
  name: 'FileName',
};
</script>

<style>

</style>
`,

  jsTestTemplate: `import { mount } from '@vue/test-utils';
import FileName from '@/components/file-name/FileName.vue';

describe('FileName', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(FileName);
    expect(wrapper.vm).toBeTruthy();
  });
});
`,

  tsTestTemplate: `import { mount } from '@vue/test-utils';
import FileName from '@/components/file-name/FileName.vue';

describe(FileName, (): void => {
  test('Is a Vue instance', (): void => {
    const wrapper = mount(FileName);
    expect(wrapper.vm).toBeTruthy()
  })
})
`,
}