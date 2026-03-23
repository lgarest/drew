<!-- markdownlint-disable MD013 -->
# **D**o **RE**invent the **W**heel (DREW)

## Why?

Because by analyzing and building your own implementation of the major libraries and frameworks, you gain a lot of knowledge and develop your skills as a developer.

## Purpose

This project is my small sandbox where I squeeze every bit of coding inspiration when I am not developing for a company. It's my way of having code freedom and explore interesting topics, without the need to rush or develop based on deadlines.

By the end of it, it should have concepts, snippets and ideas gathered across 12 years of software engineer development mainly focused at web development as full-stack. Take this repository as a **constant WIP**.

## Disclaimer

This repository contains small utilities aimed for personal growth, do **NOT** use them in production unless you know what you are doing.

Probably you'll find a lot of room for improvements, PRs are welcome, but I am aiming at having small bite size tools with simple responsibilities.

## Dependencies

The idea is to build the dependencies in the project itself, so you can use them in your own projects.
Only dependency is Bun, which is a modern JavaScript runtime like Node.js, but with better performance and built-in features. You can install it from <https://bun.sh/>.

## Features / Yet to be build/ideas

- [x] Debounce/Throttle Function ./timing/debounce.ts ./timing/throttle.ts
- [x] Testing Utils ./testing/test.ts
  - [ ] Enhanced testing utils (mocks, spies, etc.)
- [ ] Custom Promises Implementation
  - [ ] timed based promises
  - [ ] retry logic for promises
- [ ] try catch wrapper
  - [ ] try catch wrapper for async functions
- [ ] Functional Programming Utils
  - [ ] either, maybe monads
  - [ ] lenses
  - [ ] transducers
  - [ ] lazy evaluation
  - [ ] immutability helpers
- [ ] String Manipulation
  - [ ] string interpolation
- [ ] Date Manipulation
  - [ ] date formatter
  - [ ] duration calculator
  - [ ] timezone handler
  - [ ] calendar utils
  - [ ] relative time
- [ ] Simple Event Emitter
- [x] Observer Pattern Implementation ./state/store.ts
