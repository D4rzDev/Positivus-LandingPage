import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    // Material 3 responsive breakpoints (compact / medium / expanded)
    screens: {
      sm: "600px",
      md: "840px",
      lg: "1080px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Positivus brand palette expressed as Material 3 color roles
        brand: {
          green: "#B9FF66",       // primary
          "green-strong": "#a6ee4f",
          ink: "#191A23",         // primary container / dark surface
          "ink-soft": "#292A32",  // surface container high (on dark)
          grey: "#F3F3F3",        // surface container (neutral)
          "grey-strong": "#E8E8E8",
        },
        // shadcn / semantic tokens (kept for ui primitives)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Material 3 type scale (mapped to a fluid, readable rhythm)
      fontSize: {
        "display-lg": ["clamp(2.75rem, 6vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        "title-lg": ["1.5rem", { lineHeight: "1.25", fontWeight: "600" }],
        "title": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
        "label": ["0.9375rem", { lineHeight: "1.2", fontWeight: "500" }],
      },
      // Material 3 shape scale
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "shape-sm": "0.5rem",
        "shape-md": "0.875rem",
        "shape-lg": "1.25rem",
        "shape-xl": "1.75rem",
        "shape-2xl": "2.5rem",
      },
      boxShadow: {
        // Positivus signature offset shadow (acts as elevation on light surfaces)
        brand: "0 5px 0 0 #191A23",
        "brand-hover": "0 8px 0 0 #191A23",
        "brand-green": "0 5px 0 0 #B9FF66",
      },
      spacing: {
        section: "clamp(3.5rem, 8vw, 6.5rem)",
      },
      transitionTimingFunction: {
        // Material 3 standard emphasized easing
        emphasized: "cubic-bezier(0.2, 0, 0, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s cubic-bezier(0.2, 0, 0, 1)",
        "accordion-up": "accordion-up 0.25s cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
