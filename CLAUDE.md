# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Rails 8 application that uses Inertia.js with React and TypeScript for the frontend. The project combines modern Rails backend with React components served via Inertia.js, eliminating the need for a separate SPA while maintaining a rich interactive frontend.

## Architecture

- **Backend**: Rails 8 with Inertia.js integration
- **Frontend**: React with TypeScript, built via Vite
- **Styling**: TailwindCSS v4
- **Database**: SQLite3 (development)
- **Asset Pipeline**: Vite with vite-plugin-ruby
- **Deployment**: Kamal for Docker-based deployment

## Key Technologies

- **inertia_rails**: Server-side Inertia adapter for Rails
- **@inertiajs/react**: Client-side React adapter for Inertia
- **vite_rails**: Vite integration for Rails asset pipeline
- **tailwindcss**: Utility-first CSS framework

## Development Commands

### Starting the Development Server
```bash
# Start all development processes (web server, CSS watcher, Vite dev server)
bin/dev

# Or start individual processes:
bin/rails server          # Rails server
bin/rails tailwindcss:watch  # TailwindCSS watcher
bin/vite dev              # Vite development server
```

### Testing
```bash
# Run all tests
bin/rails test

# Run system tests
bin/rails test:system

# Run specific test file
bin/rails test test/controllers/some_controller_test.rb
```

### Linting and Code Quality
```bash
# Run RuboCop (Ruby linting)
bin/rubocop

# TypeScript type checking
npm run check

# Security analysis
bin/brakeman
```

### Database
```bash
# Create and setup database
bin/rails db:create db:migrate

# Reset database
bin/rails db:reset

# Run migrations
bin/rails db:migrate
```

### Asset Management
```bash
# Precompile assets for production
bin/rails assets:precompile

# Clean asset builds
bin/rails assets:clobber
```

## Project Structure

### Frontend (React/TypeScript)
- `app/javascript/pages/` - Inertia.js page components (React + TypeScript)
- `app/javascript/entrypoints/` - Vite entry points
- `app/javascript/assets/` - Static assets referenced by JavaScript
- `vite.config.ts` - Vite configuration with React and Ruby plugins

### Backend (Rails)
- `app/controllers/` - Rails controllers that render Inertia responses
- `app/models/` - ActiveRecord models
- `app/views/layouts/application.html.erb` - Main layout with Inertia setup
- `config/initializers/inertia_rails.rb` - Inertia configuration

### Configuration
- `Procfile.dev` - Development process definitions for `bin/dev`
- `tsconfig.json` - TypeScript project references
- `tsconfig.app.json` - TypeScript config for app code
- `.rubocop.yml` - Ruby linting configuration (inherits from rubocop-rails-omakase)

## Inertia.js Integration

Controllers render Inertia responses instead of traditional Rails views:
```ruby
# app/controllers/some_controller.rb
def index
  render inertia: 'PageComponent', props: {
    data: some_data
  }
end
```

React components receive props and use Inertia's Head component for page metadata:
```tsx
// app/javascript/pages/PageComponent.tsx
import { Head } from '@inertiajs/react'

export default function PageComponent({ data }) {
  return (
    <>
      <Head title="Page Title" />
      {/* Component content */}
    </>
  )
}
```

## Code Style

- **Ruby**: Follows rubocop-rails-omakase styling
- **TypeScript**: Strict mode enabled with comprehensive linting rules
- **React**: Uses functional components with hooks
- **CSS**: TailwindCSS utility classes with CSS Modules for component-specific styles

## Branch Information

- Main branch: `master`
- Current working branch: `rails-hotwire-rewrite`
- This appears to be a rewrite from a Next.js/React-only application to Rails + Inertia.js