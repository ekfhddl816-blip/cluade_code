# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vanilla JavaScript TODO app with no build system, no dependencies, and no package manager. The actual source files live one level up at `../` (i.e., `C:\Users\konyang\todo-app\`):

- `../index.html` — UI shell: input field, add button, todo list container
- `../app.js` — all application logic (82 lines)
- `../styles.css` — styling with custom checkbox and hover-reveal delete button

## Running the App

Open `../index.html` directly in a browser — no server required.

## Architecture

Single-page app backed entirely by `localStorage`. All state lives in a `todos` array of objects `{ id, text, completed }`, serialized/deserialized on every mutation.

Key functions in `app.js`:
- `loadTodos()` — reads from localStorage on startup
- `saveTodos()` — writes full array to localStorage after every change
- `addTodo()` / `toggleTodo(id)` / `deleteTodo(id)` — mutate the array then call `saveTodos()` + `render()`
- `render()` — full DOM rebuild from current `todos` array (no virtual DOM, no diffing)

UI language is Korean. Tasks are capped at 100 characters.
