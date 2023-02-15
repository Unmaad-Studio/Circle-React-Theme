## Theme Switcher

### Description

A widget to switch between different themes. It is displayed in the center right of the screen.

### Props

| Prop Name    | Type       | Default Value | Description                           |
| ------------ | ---------- | ------------- | ------------------------------------- |
| themes       | AppTheme[] | []            | An array of themes to switch between. |
| defaultTheme | AppTheme   | {}            | The default theme to be used.         |

### Example

```tsx
import { ThemeSwitcher } from "@pathTo/widgets/ThemeSwitcher";
```

### Usage

```tsx
<ThemeSwitcher defaultTheme={props.themes[0]} themes={props.themes} />
```

### Preview

[Image: Theme Switcher]

### Changelog

#### 1.0.0

- Initial Release

#### 1.1.2

- [Theme Switcher](./src/widgets/ThemeSwitcher/) `README.md` added.
- Changed [Theme Switcher](./src/widgets/ThemeSwitcher/) from class component to functional component.
- Improved design
- Added dismiss button to the theme switcher

### Path
