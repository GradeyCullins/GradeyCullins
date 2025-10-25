# Repository Guidelines

## Project Structure & Module Organization
Rails code lives in `app/` (controllers, models, serializers, mailers). The Inertia + React front end sits in `app/javascript/` with shared UI in `components/`, page entries in `pages/`, and utilities in `lib/`. Tests are split between `test/` (Rails) and `app/javascript/tests/` (Vitest). Static assets stay in `public/`, while project configuration, including Vite and Tailwind, is under `config/` and the root config files.

## Build, Test & Development Commands
- `bin/setup` installs gems, prepares the database, clears logs, and can boot the stack (`--skip-server` keeps it setup-only).
- `bin/dev` orchestrates Rails, Tailwind, Vite, and Mailpit; rely on it for day-to-day development.
- `bin/rails db:migrate` applies schema changes locally and in CI.
- `npm run check` runs TypeScript checks for app and server-side scripts.
- `npm run test` executes the Vitest suite for React/Inertia code.
- `bin/rails test` (add `test:system` for browser flows) covers Rails logic.
- `bin/brakeman` offers a pre-release security scan.

## Coding Style & Naming Conventions
Ruby sticks to two-space indentation, snake_case methods, and class names that mirror file paths; run `bin/rubocop` before you push. JavaScript and TypeScript follow StandardJS conventions; run `npx standard` and `npm run check` to keep code linted and typed. React components in `app/javascript/components` are PascalCase, hooks are camelCase, and colocated tests share the folder. Favor Tailwind utilities over custom CSS and collect shared design tokens in `app/javascript/lib`.

## Testing Guidelines
Place Ruby unit tests in `test/models` or `test/controllers` as appropriate, and browser flows in `test/system`. TypeScript tests live beside the source in `app/javascript/tests` with a `.test.ts[x]` suffix. Run `bin/rails test` and `npm run test` before each PR; cover both the happy path and at least one edge case when adding features.

## Commit & Pull Request Guidelines
Keep commits focused and use short, present-tense subjects (e.g., `make about page more betterer`). In PRs, reference related issues, describe the change, list the commands you ran, and attach screenshots for UI updates. Confirm that linting, Rails tests, and Vitest all pass before you request review, and call out any follow-up work in notes.

## Environment & Tooling Tips
Use Ruby 3.4.5 (per `.ruby-version`) with Bundler, and rely on the system `npm` to honor `package-lock.json`. Mailpit handles local email from `Procfile.dev`; install it or disable the process. If services get out of sync, stop everything and restart with `bin/dev` so Foreman can relaunch the full stack.
