/**
 * Clerk appearance configuration that maps shadcn/ui CSS variables to
 * Clerk's theming system, keeping the Clerk UI consistent with the app's design.
 */
export const clerkAppearance = {
  variables: {
    // Primary action color — matches the app's primary button/link color
    colorPrimary: "var(--primary)",
    // Modal/dialog background — uses `--card` (slightly elevated) instead of
    // `--background` so the modal has visual depth against the page backdrop
    colorBackground: "var(--card)",
    // Body text inside Clerk components
    colorText: "var(--foreground)",
    // Hints, labels, and secondary descriptions
    colorTextSecondary: "var(--muted-foreground)",
    // Error states and destructive actions
    colorDanger: "var(--destructive)",
    // Input field fill — uses `--background` (darker) to contrast with the
    // `--card` modal background
    colorInputBackground: "var(--background)",
    colorInputText: "var(--foreground)",
    colorNeutral: "var(--foreground)",
    // Match the app's border-radius token
    borderRadius: "var(--radius)",
    // `--font-geist-sans` is set on <html> and cascades to portals; the
    // system-ui fallback handles any edge cases where the variable isn't
    // available yet during initial paint
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    fontFamilyButtons: "var(--font-geist-sans), system-ui, sans-serif",
  },
  elements: {
    card: "shadow-md border border-border bg-card",
    navbar: "border-b border-border bg-card",
    navbarButton: "text-foreground",
    formButtonPrimary:
      "bg-primary text-primary-foreground hover:bg-primary/90",
    formFieldInput:
      "bg-background border-input text-foreground placeholder:text-muted-foreground focus:ring-ring",
    footerActionLink: "text-primary hover:text-primary/80",
    identityPreviewEditButton: "text-primary hover:text-primary/80",
    formFieldLabel: "text-foreground",
    headerTitle: "text-foreground",
    headerSubtitle: "text-muted-foreground",
    socialButtonsBlockButton:
      "border-border bg-background text-foreground hover:bg-accent",
    dividerLine: "bg-border",
    dividerText: "text-muted-foreground",
  },
} as const;
