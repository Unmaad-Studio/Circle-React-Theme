## Card

### Description

Card is a component that displays a card image and children. It can be used for showcasing a product or service or Blog post.

### Usage

```jsx
import Card from "@pathTo/components/Card/Card";
```

### Props

| Name      | Type   | Default | Description                                                                                              |
| --------- | ------ | ------- | -------------------------------------------------------------------------------------------------------- |
| cardImage | string |         | The title of the card.                                                                                   |
| children  | string |         | The text of the link.                                                                                    |
| cardStyle | enum   |         | The style of the card. Can be one of the following: `Default`, `ContentOverlay`, `ContentOverlayVisible` |
| onClick   | func   |         | The function to call when the card is clicked.                                                           |

### Example

```jsx
<Card
  cardImage="https://placehold.it/300x200"
  cardStyle={{ CardStyle.ContentOverlay }}
  onClick={() => alert("Card clicked")}
>
    <h3>Card Title</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nisl eget ultricies tincidunt, mauris urna aliquet ligula, eget aliquam odio nisl sit amet nunc. Nulla facilisi.
    </p>
</Card>
```

### Result

[Image: Card]

Card800×600 1.1 MB

### Changelog

#### 1.0.0

- Did not exist in this version.

#### 1.1.0

- Initial Release of Card component.

### Path

src/components/Card/README.md
