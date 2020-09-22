# Vue Component Generator

> An opinionated CLI tool to generate Vue.js single file components and their respective Unit Tests files.

## Table of content

- [Vue Component Generator](#vue-component-generator)
  - [Table of content](#table-of-content)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
  - [Commands](#commands)
  - [Options](#options)
  - [Informations](#informations)
  - [Roadmap](#roadmap)

## Installation

This tool can be installed locally on your machine to be accessed globally later with the following command:

`npm i -g vue-component-generator`

You can also use it through `npx` to avoid installing it on your machine:

`npx vcg c my-path/my-component`

## Basic Usage

To create a component, just enter the following command in your terminal:

`vcg c my-path/my-component`

This will generate the following folder structure in your `src/` directory:

```bash
└───components
    └───my-path
        └───my-component
            │   MyComponent.vue
            │
            └───__tests__
                    MyComponent.spec.js
```

## Commands

|    Name     | Alias |           Input           |                                                                                   Description                                                                                    |
| :---------: | :---: | :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `component` |  `c`  | `<path>/<component-name>` | Generates a component and its unit test file in the `src/components` folder in your project, nesting it in as much folder as described in the `path` part of the provided input. |

## Options

|      Name      | Alias |                                                            Effect                                                            | Default |
| :------------: | :---: | :--------------------------------------------------------------------------------------------------------------------------: | :-----: |
| `--typescript` | `-t`  | Generates the test files with a Typescript extension, and the `.vue` files with a `lang="ts"` in the opening `<script>` tag. | `false` |
|  `--no-tests`  | none  |       Will only generates the `.vue` file in it's own folder and not the `__tests__` folder nor the `*.spec.*s` file.        | `false` |

## Informations

- **If any or the specified directory already exists, the script will write the files alongside existing ones in the existing directories.**

  This allows you to create components in already existing subfolders within your `src/components/` directory. Common use cases may be something like this directory structure:

  ```bash
  └───components
      └───common
          ├───button
          │   │   Button.vue
          │   │
          │   └───__tests__
          │           Button.spec.js
          │
          └───input
              │   Input.vue
              │
              └───__tests__
                      Input.spec.js
  ```

  This can be useful when you want to add a component to an already existing subfolder.

- **On the other hand, if a file with the same name already exists within the specified directory, the script will throw an error and not write anything.**

  This only means you cannot have two components with the same name living in the same folder. You can have two `Buttons.vue` file in your app but not in the same folder.

- **You can specify only a file name with no directory**
  This means that `vcg c my-component` will result in the following directory structure :

  ```bash
  └───components
          └───my-component
              │   MyComponent.vue
              │
              └───__tests__
                      MyComponent.spec.js
  ```

- **You can specifiy a path as deeply nested as you want, it will only result in more nested directories.**
- **The `<path>` and `<component-name>` input provided to the commands can be passed as pretty much whatever format you want but will result in `kebab-cased` directory names and `PascalCased` file names.**

  This is purely opinionated and is here to fit my most common use cases, personnal preferences, as well as the [official Vue.js Styleguide]('https://vuejs.org/v2/style-guide/') and the directory structure that is bootstraped by the Vue CLI.

- **The test file is always created in a `__tests__` directory living in the same folder as the component file, and always has a `*.spec.*s` format**

  One again this is purely opinionated and is here to fit my most common use cases, personnal preferences, as well as the default configuration of Jest which is the test runner I usually use in my projects. The `__tests__` folders allows you to add something like snapshot testing manually later down the road if you ever need to.

## Roadmap

- Add a `view` or `v` command to generate components in the `src/views/` folder which is bootstraped by the Vue CLI.
- Add commands to generate a Nuxt `Page` or `Layout` in the adequate folder.
- Add a command to generate a Vuex store module with the adequate file structure.
