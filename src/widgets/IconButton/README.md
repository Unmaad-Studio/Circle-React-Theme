## Icon Button

### Description

IconButton is a component that displays an icon.

### Usage

```jsx
import IconButton from "@pathTo/widgets/IconButton/IconButton";
```

### Props

| Name     | Type            | Default | Description                                                                 |
| :------- | :-------------- | :------ | :-------------------------------------------------------------------------- |
| children | React.ReactNode |         | The content of the button.                                                  |
| onClick  | () => void      |         | The function to be called when the button is clicked.                       |
| type     | enum            |         | The type of the button. Possible values are: `Primary`, `Soft`, `Outlined`. |

### Example

```jsx
<IconButton onClick={() => console.log("Button Clicked")}>
  <HiMessage />
</IconButton>
```

### Preview

[Image: Icon Button]

### Changelog

#### 1.0.0

- Initial Release

### Path

src/widgets/IconButton/README.md
