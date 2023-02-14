## Section Header

### Description

Section Header is a component that displays the title and subtitle of a section.

### Usage

```jsx
import SectionHeader from "@pathTo/components/SectionHeader/SectionHeader";
```

### Props

| Name          | Type    | Default | Description                               |
| :------------ | :------ | :------ | :---------------------------------------- |
| heading       | string  |         | Title of the section header.              |
| subHeading    | string  |         | Subtitle of the section header.           |
| actionText    | string  |         | Action text of the section header.        |
| actionUrl     | string  |         | Action link of the section header.        |
| centerContent | boolean |         | Center the content of the section header. |

### Example

```jsx
<SectionHeader
  heading="Section Header"
  subHeading="This is a subtitle for this header."
  actionText="Action"
  actionUrl="#"
/>

<SectionHeader
  heading="Section Header"
  subHeading="This is a subtitle for this header."
  actionText="Action"
  actionUrl="#"
  centerContent
/>
```

### Preview

![Section Header](https://raw.githubusercontent.com/creativetimofficial/ct-material-kit-pro-react-v1.1.0/master/public/assets/img/section-header.png)

### Path

src/components/SectionHeader/README.md
