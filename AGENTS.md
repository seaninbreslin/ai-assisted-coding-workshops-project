# AGENTS.md

## Project purpose
- This repository is a workshop template for a Chrome Extension task-list app called Kainos Task List.
- The project is intentionally simple and uses plain HTML, CSS, and JavaScript with no bundler, no npm, and no frameworks.
- Persistence is expected to use Chrome extension storage via chrome.storage.local.

## What this codebase is doing
- The app is a popup-based todo list that users can open from the Chrome toolbar.
- The main UI is built in index.html and driven by popup.js.
- A secondary settings page is built in options.html and driven by options.js.
- The repository is structured as a teaching template: many features are stubbed and meant to be implemented incrementally across workshop tasks.

## Important repository context
- This is a training project, not a production application.
- The current checkout is a template/stub state, so some functions are intentionally empty or incomplete.
- The README is the best source for setup instructions and the intended workshop flow.

## Key files and their roles
- index.html: the main popup UI, including the task form, list container, filters, and stats area. The CSS for the UI is inlined in this file.
- options.html: the settings page for storing the API key used by the AI feature.
- popup.js: the main application logic. This file contains the state object, persistence hooks, business logic functions, render functions, event wiring, and AI-related stubs.
- options.js: the settings page logic for loading and saving the API key.
- README.md: setup steps, extension loading instructions, project structure overview, and workshop task summary.
- .github/copilot-instructions.md: the authoritative coding conventions for future agents working in this repo.
- icons/: extension icon assets.
- .backlog/: backlog metadata for the workshop structure.

## Working conventions
- Keep the application state in a single state object in popup.js.
- Separate UI rendering from business logic.
- Make render functions read from state rather than computing derived values elsewhere.
- Let event handlers update state first and then call render().
- Use named constants for storage keys, prefixed with kainos-todo:.
- Follow the existing plain-JS style: clear function names, short functions, and readable code.
- Avoid introducing frameworks, TypeScript, npm dependencies, or localStorage.

## Current implementation status
- popup.js currently contains placeholder implementations for core todo actions such as add, toggle, delete, filtering, and priority assignment.
- options.js currently contains stubbed logic for loading and saving the API key.
- The app is intended to be tested by loading the project as an unpacked Chrome extension.

## How to work on this project safely
- Start by reading README.md and .github/copilot-instructions.md before making changes.
- Make small, focused changes rather than large refactors.
- If you are implementing a feature, update the related UI and state logic together.
- Prefer the existing architecture over introducing new patterns.
- After editing, refresh the extension in Chrome and reopen the popup to verify the behavior.

## Quick start for future agents
1. Read the project overview in README.md.
2. Review popup.js to understand the state/render structure.
3. Keep changes consistent with the workshop task progression.
4. Validate behavior in the browser by reloading the extension.
5. Prefer minimal, readable solutions over over-engineering.
