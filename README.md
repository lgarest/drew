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

- [x] Debounce function for rate limiting function calls.

  Check my implementation in [the debounce file](./fn/debounce.ts) and [its tests](./fn/debounce.tests.ts).

## Yet to be build/ideas

- [ ] Custom Promises Implementation
- [ ] Functional Programming Utils
- [ ] String Manipulation
- [ ] Throttle Function
- [ ] Enhanced Testing Utils
- [ ] Simple Event Emitter
- [ ] Observer Pattern Implementation

## Additional Ideas

### Core Programming Concepts
- [ ] Linked List
- [ ] Stack & Queue
- [ ] Binary Tree
- [ ] Binary Search Tree
- [ ] Hash Table
- [ ] Trie
- [ ] Graph

### Algorithms
- [ ] Sorting Algorithms
- [ ] Search Algorithms
- [ ] Graph Algorithms
- [ ] Dynamic Programming
- [ ] Recursion Utilities

### JavaScript/TypeScript Specific
- [ ] Custom Iterator/Generator
- [ ] Proxy Handler
- [ ] Custom Error Classes
- [ ] Decorator Pattern
- [ ] Reflection Utils

### Async Programming
- [ ] Async Queue
- [ ] Retry Logic
- [ ] Timeout Wrapper
- [ ] Debounced Promise

### Memory Management
- [ ] Weak References
- [ ] Object Pool
- [ ] Lazy Loading
- [ ] Garbage Collection Simulation

## Utility Libraries

### Functional Programming
- [ ] Immutability Helpers
- [ ] Lens Implementation
- [ ] Monads
- [ ] Transducers
- [ ] Lazy Evaluation

### String/Text Processing
- [ ] String Interpolation
- [ ] Markdown Parser
- [ ] CSV Parser
- [ ] URL Parser
- [ ] Regular Expression Builder

### Date/Time
- [ ] Date Formatter
- [ ] Duration Calculator
- [ ] Timezone Handler
- [ ] Calendar Utils
- [ ] Relative Time

### Number/Math
- [ ] Big Integer
- [ ] Decimal Operations
- [ ] Statistics
- [ ] Random Generators
- [ ] Unit Converter

## Web Development

### DOM Manipulation
- [ ] Virtual DOM
- [ ] Custom Elements
- [ ] Event Delegation
- [ ] CSS-in-JS
- [ ] Animation Framework

### HTTP/Networking
- [ ] Fetch Wrapper
- [ ] Request Cache
- [ ] WebSocket Manager
- [ ] Server-Sent Events
- [ ] GraphQL Client

### Storage
- [ ] Local Storage Wrapper
- [ ] IndexedDB Abstraction
- [ ] Cache Manager
- [ ] Session Manager
- [ ] Cookie Parser

## Design Patterns

### Creational Patterns
- [ ] Factory Pattern
- [ ] Builder Pattern
- [ ] Singleton Pattern
- [ ] Prototype Pattern
- [ ] Abstract Factory

### Structural Patterns
- [ ] Adapter Pattern
- [ ] Decorator Pattern
- [ ] Facade Pattern
- [ ] Proxy Pattern
- [ ] Composite Pattern

### Behavioral Patterns
- [ ] Command Pattern
- [ ] Strategy Pattern
- [ ] State Machine
- [ ] Mediator Pattern
- [ ] Chain of Responsibility

## Advanced Concepts

### Reactive Programming
- [ ] Observable
- [ ] Subject
- [ ] Operators
- [ ] Schedulers
- [ ] Backpressure

### Concurrency
- [ ] Worker Pool
- [ ] Mutex/Semaphore
- [ ] Async Scheduler
- [ ] Rate Limiter
- [ ] Batch Processor

### Validation/Parsing
- [ ] Schema Validator
- [ ] Type Guards
- [ ] Sanitizer
- [ ] Parser Combinator
- [ ] Form Validator

## Testing/Development Tools

### Testing Framework Extensions
- [ ] Test Runner
- [ ] Mock Server
- [ ] Spy Functions
- [ ] Snapshot Testing
- [ ] Performance Testing

### Development Utilities
- [ ] Logger
- [ ] Debugger
- [ ] Profiler
- [ ] Configuration Manager
- [ ] CLI Framework

## Game Development

### Game Mechanics
- [ ] Game Loop
- [ ] Collision Detection
- [ ] Pathfinding
- [ ] Finite State Machine
- [ ] Entity Component System
