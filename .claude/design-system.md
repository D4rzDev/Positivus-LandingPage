# Material Design 3 (Material You) – Principles & Foundations

> A comprehensive reference for designing applications using Google's Material Design 3 (M3). This document summarizes the core philosophy, design principles, foundations, and implementation guidelines.

---

# Overview

Material Design 3 (M3), also known as **Material You**, is Google's latest design system focused on:

* Personalization
* Accessibility
* Expressiveness
* Adaptive layouts
* Consistency
* Scalable design systems

Material Design 3 enables interfaces to adapt across phones, tablets, foldables, desktop, TV, and wearables while maintaining usability and brand identity.

---

# Core Principles

## 1. Personal

Interfaces should adapt to users.

Examples

* Dynamic color
* User-selected themes
* Custom typography
* Responsive layouts
* Personalized content

---

## 2. Adaptive

Design should work across all screen sizes.

Support:

* Mobile
* Tablet
* Foldable
* Desktop
* Chromebook
* Wear OS
* Android TV

Use responsive grids and adaptive navigation.

---

## 3. Accessible

Accessibility is a first-class requirement.

Requirements

* WCAG compliant contrast
* Minimum touch target: 48 × 48 dp
* Keyboard navigation
* Screen reader support
* Motion reduction support
* Color-independent interactions

---

## 4. Expressive

Use motion, shape, color, and typography to reinforce hierarchy without overwhelming users.

Good interfaces feel alive but never distracting.

---

## 5. Consistent

Consistency builds familiarity.

Maintain consistency in:

* Colors
* Elevation
* Components
* Spacing
* Motion
* Icons
* Typography

---

# Design Foundations

---

# Color System

Material 3 introduces a semantic color system generated from a single source color.

## Color Roles

Primary

Main brand color.

Used for:

* Buttons
* Active controls
* Highlights
* Important actions

Secondary

Supports primary.

Often used for:

* Chips
* FABs
* Secondary buttons

Tertiary

Adds visual variety.

Useful for:

* Charts
* Illustrations
* Accent sections

Error

Communicates problems.

Examples

* Validation
* Alerts
* Destructive actions

Neutral

Used throughout surfaces.

Neutral Variant

Used for outlines and lower emphasis elements.

---

## Surface Colors

Material 3 defines multiple surface containers.

Examples

* Surface
* Surface Bright
* Surface Dim
* Surface Container Lowest
* Surface Container Low
* Surface Container
* Surface Container High
* Surface Container Highest

These replace heavy use of elevation overlays.

---

## Dynamic Color

Android 12+ can generate the color palette from the user's wallpaper.

Benefits

* Personalized experience
* Automatic accessibility improvements
* Consistent palette generation

---

# Typography

Material 3 uses a flexible type scale.

Styles

| Style           | Usage            |
| --------------- | ---------------- |
| Display Large   | Hero text        |
| Display Medium  | Landing pages    |
| Display Small   | Marketing        |
| Headline Large  | Section headers  |
| Headline Medium | Screens          |
| Headline Small  | Cards            |
| Title Large     | Dialog titles    |
| Title Medium    | Component titles |
| Title Small     | Labels           |
| Body Large      | Primary content  |
| Body Medium     | Default body     |
| Body Small      | Supporting text  |
| Label Large     | Buttons          |
| Label Medium    | Inputs           |
| Label Small     | Captions         |

Recommendations

* Limit font families
* Prefer variable fonts
* Maintain readable line height
* Keep strong visual hierarchy

---

# Shape

Material 3 embraces rounded geometry.

Shape categories

* Extra Small
* Small
* Medium
* Large
* Extra Large

Apply consistently across:

* Cards
* Buttons
* Dialogs
* Navigation drawers
* Images
* Inputs

---

# Elevation

Elevation communicates hierarchy.

Levels

* Level 0
* Level 1
* Level 2
* Level 3
* Level 4
* Level 5

Use elevation sparingly.

Prefer surface containers before adding shadows.

---

# Motion

Motion should communicate intent.

Goals

* Guide attention
* Explain state changes
* Maintain continuity

Avoid

* Excessive animations
* Long delays
* Decorative movement

Use

* Fade
* Scale
* Shared transitions
* Container transform

Animations should feel natural.

---

# Iconography

Use simple, recognizable icons.

Guidelines

* 24dp default
* Consistent stroke
* Match visual weight
* Prefer Material Symbols

Icon categories

* Filled
* Outlined
* Rounded
* Sharp

---

# Layout

---

## Responsive Design

Breakpoints

Compact

Phones

Medium

Tablets

Expanded

Desktop

Large Tablet

---

## Grid

Use

* 4dp spacing system
* Responsive columns
* Consistent gutters

---

## Spacing

Material uses an 8dp spacing system.

Common spacing

4dp

Tiny adjustments

8dp

Default spacing

12dp

Compact layouts

16dp

Standard padding

24dp

Sections

32dp

Large groups

48dp

Major sections

---

# Navigation

Choose navigation based on screen size.

Small

Bottom Navigation

Medium

Navigation Rail

Large

Navigation Drawer

Support

* Top App Bar
* Search Bar
* FAB
* Navigation Suite

---

# Components

Core components include

Buttons

* Filled
* Filled Tonal
* Elevated
* Outlined
* Text

Inputs

* Text Field
* Search
* Dropdown
* Checkbox
* Radio
* Switch

Navigation

* Navigation Bar
* Navigation Rail
* Navigation Drawer
* Tabs

Feedback

* Snackbar
* Dialog
* Progress Indicator
* Tooltip

Display

* Card
* List
* Divider
* Badge
* Chip
* Carousel

Containment

* Bottom Sheet
* Side Sheet
* Modal
* Scaffold

---

# States

Interactive components support

* Enabled
* Hovered
* Focused
* Pressed
* Dragged
* Disabled
* Selected
* Error

Provide visual feedback for every state.

---

# Accessibility

Contrast

Minimum AA contrast.

Touch Targets

48 × 48 dp minimum.

Typography

Readable sizes.

Motion

Respect reduced motion settings.

Keyboard

Fully navigable.

Screen Readers

Semantic labels.

Focus

Visible indicators.

---

# Content Design

Writing guidelines

Be

* Clear
* Concise
* Friendly
* Helpful

Avoid

* Technical jargon
* Ambiguous labels
* Long paragraphs

Buttons should start with verbs.

Examples

Good

Save

Continue

Create Project

Bad

Yes

Okay

Click Here

---

# Visual Hierarchy

Hierarchy should primarily rely on

* Typography
* Color
* Spacing
* Shape
* Elevation

Avoid relying on color alone.

---

# Dark Theme

Dark mode should

* Preserve contrast
* Reduce eye strain
* Avoid pure black backgrounds
* Maintain consistent semantic colors

Use generated dark palettes when possible.

---

# Adaptive Design

Material 3 recommends adapting layouts instead of scaling them.

Examples

Phone

Bottom Navigation

Tablet

Navigation Rail

Desktop

Navigation Drawer

Cards can transition into side-by-side layouts.

---

# Design Tokens

Design tokens are reusable values representing visual decisions.

Common tokens

Color

```
Primary
Surface
Error
Outline
```

Typography

```
Headline Large
Body Medium
Label Large
```

Spacing

```
4
8
16
24
32
48
```

Radius

```
Small
Medium
Large
Extra Large
```

Elevation

```
0–5
```

Motion

```
Duration
Curve
Delay
```

---

# Material Design Best Practices

✔ Use semantic colors

✔ Prefer adaptive layouts

✔ Keep spacing consistent

✔ Use elevation intentionally

✔ Use typography for hierarchy

✔ Prioritize accessibility

✔ Design mobile-first

✔ Minimize visual clutter

✔ Use meaningful animations

✔ Keep interactions predictable

---

# Do

* Maintain consistent spacing
* Use proper typography hierarchy
* Provide clear feedback
* Design responsively
* Test accessibility
* Support dark mode
* Use dynamic color when appropriate
* Keep interactions intuitive

---

# Don't

* Overuse elevation
* Mix inconsistent corner radii
* Use too many colors
* Hide important actions
* Over-animate interfaces
* Ignore accessibility
* Overcrowd layouts
* Depend solely on color to convey meaning

---

# Material Design 3 Checklist

## Foundation

* Responsive layout
* Consistent spacing
* Proper typography
* Semantic colors
* Adaptive navigation
* Accessible contrast
* Dynamic color support
* Dark mode support

## Components

* Correct button variants
* Accessible forms
* Feedback states
* Proper navigation
* Consistent cards
* Responsive dialogs
* Adaptive sheets

## UX

* Clear hierarchy
* Predictable navigation
* Fast interactions
* Helpful feedback
* Smooth transitions
* Accessible controls
* Minimal cognitive load

---

# Philosophy

Material Design 3 aims to create interfaces that are:

* Beautiful
* Personal
* Adaptive
* Accessible
* Expressive
* Consistent
* Scalable
* Human-centered

The goal is not merely visual consistency, but creating products that feel natural, inclusive, and enjoyable across every device and interaction.
