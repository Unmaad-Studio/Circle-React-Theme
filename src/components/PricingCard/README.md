## Pricing Card

### Description

Pricing Card is a component that displays the pricing information of a product or service. It is a part of the Pro Version of the theme.

### Usage

```jsx
import PricingCard from "@pathTo/components/PricingCard/PricingCard";
```

### Props

| Name     | Type        | Default | Description                           |
| :------- | :---------- | :------ | :------------------------------------ |
| icon     | JSX.Element |         | Icon of the pricing card.             |
| title    | string      |         | Title of the pricing card.            |
| price    | string      |         | Price of the pricing card.            |
| features | string[]    |         | List of features of the pricing card. |
| actions  | JSX.Element |         | Actions of the pricing card.          |

### Example

```jsx
<PricingCard
  icon={<Icon icon={faCode} />}
  title="Basic"
  price="$9.99"
  features={[
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Integer molestie lorem at massa",
  ]}
  actions={<Button>Get Started</Button>}
/>
```

### Preview

![Pricing Card](https://raw.githubusercontent.com/creativetimofficial/ct-material-kit-pro-react-v1.1.0/master/public/assets/img/pricing-card.png)

### Changelog

#### 1.0.0

- Not available in this version

#### 1.1.0

- Initial Release

### Path

src/components/PricingCard/README.md
