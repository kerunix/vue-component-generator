#!/usr/bin/env node

// TODO: View components generation

const program = require('commander');
const handlers = require('./utils/handlers');

program.version('0.0.1');

program
  .name('Vue Component Generator')
  .option('-t, --typescript', 'Generate Typescript based files', false)
  .option('--no-tests', 'Does not generate Unit Tests Files');

program
  .command('component <path>')
  .alias('c')
  .action((path, {parent: options}) => {
    try {
      const {typescript, tests} = options
      handlers.createComponent({
        path,
        typescript,
        tests
      });
    } catch (error) {
      console.log(error);
      process.exit();
    }
  });

program
  .command('view <path>')
  .alias('v')
  .action((path, options) => {
    console.log(path, options)
  });


program
  .parse(process.argv);
