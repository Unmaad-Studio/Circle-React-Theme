## Social Media Row

### Description

This widget is a row of social media icons that can be used to link to your social media accounts.

### Usage

```jsx
import SocialMediaRow, {
  SocialMediaItem,
} from "@pathTo/widgets/SocialMeidaRow/SocialMediaRow";
```

### Props

| Name     | Type              | Default | Description                 |
| :------- | :---------------- | :------ | :-------------------------- |
| children | SocialMediaItem\* |         | List of social media items. |

### Example

```jsx
<SocialMediaRow>
  <SocialMediaItem icon={<BsFacebook />} link="https://www.facebook.com" />
  <SocialMediaItem icon={<BsTwitter />} link="https://www.twitter.com" />
  <SocialMediaItem icon={<BsInstagram />} link="https://www.instagram.com" />
  <SocialMediaItem icon={<BsGithub />} link="https://www.github.com" />
</SocialMediaRow>
```

### Preview

[Image - Social Media Row]

### Changelog

#### 1.1.3

- Initial Release

### Path

src/widgets/SocialMeidaRow/README.md
