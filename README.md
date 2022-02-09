<!-- markdownlint-disable MD013 -->

# **D**o **RE**invent the **W**heel (DREW)

## Why?

Because by analyzing and building your own implementation of the major libraries and frameworks, you gain a lot of knowledge and develop your skills as a developer.

## Purpose

This project is my small sandbox where I squeeze every bit of coding inspiration when I am not developing for a company. It's my way of having code freedom and explore interesting topics, without the need to rush or develop based on deadlines.

By the end of it, it should have concepts, snippets and ideas gathered across 9 years of software engineer development mainly focused at web development. Take this repository as a **constant WIP**.

## Disclaimer

This repository contains small utilities aimed for personal growth, do **NOT** use them in production unless you know what you are doing.

Probably you'll find a lot of room for improvements, PRs are welcome, but I am aiming at having small bitesize tools with simple responsibilities.

## Current features

- [x] [Jasmine](https://jasmine.github.io/) simplified [expect](https://jasmine.github.io/api/edge/global.html#expect) function.

  Check my implementation in [the tests utils file](./utils/test.ts).

- [x] Reduxy/Vuexy like state management store. It supports publish/subscribe pattern in a simple way.

  Check my implementation in [the store file](./store/store.ts) and of course [its tests](./store/store.tests.ts) using the custom `expect`, `describe` and `it` functions. Check [Redux official docs](https://redux.js.org/) and [Vuex official docs](https://vuex.vuejs.org/).

## Yet to be build/ideas

- [ ] Custom promises
- [ ] Functional Programming utils & classes
- [ ] String manipulation
- [ ] Date extensions
- [ ] Objects exploration
- [ ] Data wrangling
- [ ] Node streams
