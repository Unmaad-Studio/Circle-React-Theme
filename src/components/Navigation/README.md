## Navigation

### Description

Navigation is a component that allows you to create a navigation menu.

### Usage

```jsx
import Navigation from "@pathTo/components/Navigation/Navigation";
```

### Props

| Name       | Type          | Default | Description                                |
| :--------- | :------------ | :------ | :----------------------------------------- |
| title      | string        |         | The title of the navigation.               |
| menuItems  | NavMenuItem[] |         | The menu items of the navigation.          |
| actions    | ReactNode     |         | The actions of the navigation.             |
| pageSpacer | boolean       | false   | Whether to add a spacer to the navigation. |

### Example

```jsx
<Navigation
  title="Circle"
  menuItems={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]}
  actions={<Button>Get Started</Button>}
/>
```

### Preview

[Image: Navigation Preview]

### Change Log

#### 1.0.0

- Initial Release

#### 1.2.0

- Added `README.md` file.
- Added `pageSpacer` prop.

### Path

src/components/Navigation/README.md
