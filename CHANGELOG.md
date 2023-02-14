## Changelog

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