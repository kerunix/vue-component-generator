const {toPascalCase} = require('../../text-utils');

module.exports = {
  typescriptComponentTemplate: (name) => {
    if (!name || typeof name !== 'string') {
      throw new Error('Please provide a string formated name');
    }
    return `<template>
  <div>${toPascalCase(name)} component is up and running</div>
</template>

<script lang="ts">
export default {
  name: '${toPascalCase(name)}',
};
</script>

<style>

</style>
`},
}