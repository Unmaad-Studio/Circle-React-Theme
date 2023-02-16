## Testimonial

### Description

This component is used to display a testimonial.

### Usage

```jsx
import TestimonialContainer from "@pathTo/components/Testimonial/TestimonialContainer";
import Testimonial from "@pathTo/components/Testimonial/Testimonial";
```

### Props - TestimonialContainer

| Name            | Type              | Default     | Description                            |
| :-------------- | :---------------- | :---------- | :------------------------------------- |
| backgroundImage | `string`          | `undefined` | The background image of the component. |
| header          | `React.ReactNode` | `undefined` | The header of the component.           |
| children        | `React.ReactNode` | `undefined` | The content of the component.          |
| showIndicators  | `boolean`         | `undefined` | Show indicators or not.                |

### Props - Testimonial

| Name        | Type     | Default     | Description                                             |
| :---------- | :------- | :---------- | :------------------------------------------------------ |
| name        | `string` | `undefined` | The name of the person who gave the testimonial.        |
| designation | `string` | `undefined` | The designation of the person who gave the testimonial. |
| image       | `string` | `undefined` | The image of the person who gave the testimonial.       |
| content     | `string` | `undefined` | The content of the testimonial.                         |

### Example

```jsx
<TestimonialContainer>
  <Testimonial
    name="John Doe"
    designation="CEO, ABC Company"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel quam et tellus tincidunt fermentum. Nulla facilisi."
    image={ImageOne}
  />
</TestimonialContainer>
```

### Result

[Image - Testimonial]

### Change Log

#### 1.1.4

- Initial Release

### Path

src/components/Testimonial/README.md
