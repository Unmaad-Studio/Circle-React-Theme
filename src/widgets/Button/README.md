## Button

### Description

Button is a component that displays a button.

### Usage

```jsx
import Button from "@pathTo/widgets/Button/Button";
```

### Props

| Name     | Type            | Default | Description                                                                 |
| :------- | :-------------- | :------ | :-------------------------------------------------------------------------- |
| children | React.ReactNode |         | The content of the button.                                                  |
| onClick  | () => void      |         | The function to be called when the button is clicked.                       |
| type     | enum            |         | The type of the button. Possible values are: `Primary`, `Soft`, `Outlined`. |

### Example

```jsx
<Button onClick={() => console.log("Button Clicked")}>Click Me</Button>

<Button onClick={() => console.log("Button Clicked")} type="Soft">
  Click Me
</Button>
```

### Preview

[Image: Button]

### Changelog

#### 1.0.0

- Initial Release

### Path

src/widgets/Button/README.md
