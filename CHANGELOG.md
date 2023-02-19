## Changelog

### 1.1.5

- Fixed image prop in [Testimonial](./src/components/Testimonial/) component.

### 1.1.4

- Added 'lightBackground' prop to [PageSection](./src/layouts/PageSection.tsx) layout.
- Team member card removed, replaced with [Card](./src/components/Card/) component.
- Added [Testimonial](./src/components/Testimonial/) component.

### 1.1.3

- Improved `README.md` design and documentation.
- Added [SocialMediaRow](./src/widgets/SocialMeidaRow/) widget.

### 1.1.2

- [Theme Switcher](./src/widgets/ThemeSwitcher/) `README.md` added.
- Changed [Theme Switcher](./src/widgets/ThemeSwitcher/) from class component to functional component.
- [Theme Switcher](./src/widgets/ThemeSwitcher/) improved design and added dismiss button.
- Added [Seperator](./src/widgets/Seperator/) widget.
- Added 'scroll down' arrow to [IntroSection](./src/sections/IntroSection/) section.
- Added 'pageSpacer' prop to [Navigation](./src/components/Navigation/) component.
- Addedd 'scroll' effect to [Navigation](./src/components/Navigation/) component.

### 1.1.1

- Demo added: [View Demo](https://circle-theme-app-unjsb.ondigitalocean.app/)
- `README.md` added for components [Card, CtaBox, IconCard, Section Header, Logo Carousel]
- `README.md` added for widgets [Spacer, Button, IconButton]

### 1.1.0

- Added: `README.md` files for some component, section, layout, page, widget and dialog.
- Breaking Change: Removed 'BlogCard' and 'WorkCard' components. They are now replaced with [Card](./src/components/Card/) component.
- Breaking Change: [PageContainer](./src/layouts/PageContainer.tsx) now does not wrap content width. It is now the responsibility of the [PageSection](./src/layouts/PageSection.tsx) component to wrap the content width. Wrap the content in [PageSection](./src/layouts/PageSection.tsx) component to get the same result as before.
- Breaking Change: [CtaBox](./src/components/CtaBox/) component now has a new prop 'button' which is a JSX.Element. It is now the responsibility of the parent component to pass the button as a prop.
- Added: [PricingCard](./src/components/PricingCard/) component.

### 1.0.0

- Initial Release
