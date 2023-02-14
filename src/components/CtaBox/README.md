## CTA Box

### Description

CTA Box is a component that displays a call to action in a box format. It is used in the Home page.

### Usage

```jsx
import CTABox from "@pathTo/components/CtaBox/CtaBox";
```

### Props

| Name    | Type        | Default | Description             |
| ------- | ----------- | ------- | ----------------------- |
| title   | string      |         | The title of the CTA.   |
| excerpt | string      |         | The excerpt of the CTA. |
| image   | string      |         | The image of the CTA.   |
| button  | JSX.Element |         | The action button.      |

### Example

```jsx
<CtaBox
  title="CTA Title"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  image="https://via.placeholder.com/600x400"
  button={<Button>Button</Button>}
/>
```

### Result

[Image: CTA Box]

CTA Box800×600 1.1 MB

### Changelog

#### 1.0.0

- Initial Release

#### 1.0.1

- Breaking Change: Changed 'button' type from custom object to JSX.Element
- Renamed 'description' to 'excerpt' in the props.

### Path

src/components/CtaBox/README.md
