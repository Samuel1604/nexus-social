# Nexus

Nexus is a React + TypeScript social community app built with Vite. It includes a public feed for guests, protected authenticated pages, mock social data, local demo authentication, modals, responsive layout panels, and interaction flows for posts, rooms, groups, channels, profiles, and notifications.

## Features

- Public Feed page with guest sign-in/sign-up prompts.
- Protected routes for Explore, Rooms, Groups, Channels, Profile, and Notifications.
- Local demo authentication with login/register state stored in `localStorage`.
- Social interactions for likes, follows, room joins, group joins, subscriptions, and notification reads.
- Responsive shell with sidebar, sticky topbar, main content, and right panel.
- Reusable UI primitives for cards, modals, empty states, filters, pagination, tags, ratings, and loaders.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS utilities and custom CSS variables
- Heroicons
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## App Structure

```text
src/
  components/
    layouts/      App shell components: sidebar, topbar, right panel, layout
    modals/       Modal manager and auth prompt modal
    social/       Feed and post UI
    ui/           Shared UI components
    user/         User/profile cards
  context/        Auth, social, and UI providers
  data/           Mock posts, rooms, groups, channels, notifications, users
  hooks/          Shared hooks for auth guarding, UI, social, search, pagination
  pages/          Route-level pages
  types/          TypeScript domain types
  utils/          Formatting helpers
```

## Authentication Notes

This is a demo app. Accounts and sessions are stored in the browser using `localStorage`:

- `nexus_account` stores registered demo accounts.
- `nexus_session` stores the active session user without the password field.

Guests can browse the Feed page. Other app routes are protected by `ProtectedRoutes` and redirect guests to `/login`.

## Important Routes

- `/` - public feed
- `/login` - sign in
- `/login?tab=register` - sign up
- `/explore` - protected people discovery
- `/rooms` - protected rooms and live sessions
- `/groups` - protected groups
- `/channels` - protected premium channels
- `/profile` and `/profile/:id` - protected profile pages
- `/notifications` - protected notifications

## Development Notes

- Use `useAuthGuard` around interactive actions that require authentication.
- Use `useSocial` from `src/hooks/useSocial.ts`, not directly from the social context file.
- Use `useUI` from `src/hooks/useUI.ts` for modal and sidebar state.
- Format numbers and dates through `src/utils/formatter.ts`.
- Keep route-level pages focused on page composition; shared UI should live under `src/components`.

## Verification

Before handing off changes, run:

```bash
npm run build
npm run lint
```
