# UI Standards — shadcn/ui

## Rule: Use shadcn/ui for All UI Elements

All UI elements in this project **must** use [shadcn/ui](https://ui.shadcn.com/) components.

- **DO NOT** create custom components from scratch.
- **ALWAYS** use an existing shadcn/ui component, or add a new one via the CLI.

## Adding Components

Install a new shadcn/ui component with:

```bash
npx shadcn@latest add <component-name>
```

Components are added to `components/ui/`.

## Usage

Import components from `@/components/ui/<component>`:

```tsx
import { Button } from "@/components/ui/button";
```

Use `cn()` from `@/lib/utils` for conditional class merging:

```tsx
import { cn } from "@/lib/utils";
```

## Style

- Style: `radix-nova` (configured in `components.json`)
- CSS framework: Tailwind v4
