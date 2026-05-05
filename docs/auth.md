# Auth — Clerk

## Rules

- **Clerk is the only auth method.** Never implement custom auth, NextAuth, or any other auth library.
- `<ClerkProvider>` wraps the app in `app/layout.tsx`.
- Route protection is enforced via `proxy.ts` using `clerkMiddleware` from `@clerk/nextjs/server`.
- **Clerk UI components must use the shadcn theme** to match the application's design system.

## Protected Routes

- `/dashboard` requires the user to be signed in.
- Use Clerk's `auth()` helper (server) or `useAuth()` hook (client) to check auth state — never roll your own session logic.

## Redirects

- Unauthenticated users attempting to access `/dashboard` must be redirected to the sign-in modal (not a separate page).
- Authenticated users visiting `/` (homepage) must be redirected to `/dashboard`.

## Sign In / Sign Up UI

- Sign in and sign up must **always open as a modal** — never navigate to a dedicated `/sign-in` or `/sign-up` page.
- Use Clerk's `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` components.
- Do not create custom auth forms.

## Example: Modal Buttons

```tsx
<SignInButton mode="modal">
  <button>Sign In</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign Up</button>
</SignUpButton>
```

## Example: Protecting `/dashboard` in `proxy.ts`

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtected = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) await auth.protect()
})
```

## Theme Configuration

Clerk UI components use the shadcn theme to match the application's design system:

```tsx
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ baseTheme: shadcn }}>
      {children}
    </ClerkProvider>
  );
}
```

This applies the shadcn theme to all Clerk components including sign-in/sign-up modals, user buttons, and any other Clerk UI elements.
