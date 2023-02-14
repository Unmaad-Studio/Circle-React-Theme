## IconCard

### Description

IconCard is a component that displays an icon, a title and a description.

### Usage

```jsx
import IconCard from "@pathTo/components/IconCard/IconCard";
```

### Props

| Name          | Type        | Default | Description                     |
| ------------- | ----------- | ------- | ------------------------------- |
| icon          | JSX.Element |         | The icon of the card.           |
| heading       | string      |         | The title of the card.          |
| content       | string      |         | The description of the card.    |
| onClick       | void        |         | The action button.              |
| centerContent | boolean     |         | The props of the action button. |

### Example

```jsx
<IconCard
  icon={<Icon icon="code" />}
  heading="Web Development"
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  onClick={() => console.log("Clicked")}
/>
```

### Preview

![IconCard](https://user-images.githubusercontent.com/20182642/103143000-1b2b4a00-470f-11eb-9b9a-1b2b2b2e2b1a.png)

### Changelog

#### 1.0.0

- Initial Release

#### 1.1.0

- Improved documentation
