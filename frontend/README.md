# RescueNet360 Frontend

React + Vite marketing site with glassmorphism design and waitlist functionality.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Environment Variables

Create a `.env.local` file:

```
VITE_API_ENDPOINT=https://api.rescuenet360.com
```

## Project Structure

```
src/
├── components/
│   ├── primitives/      # Reusable UI components
│   ├── sections/        # Page sections
│   └── forms/           # Form components
├── hooks/               # Custom React hooks
├── utils/               # Utilities and helpers
├── styles/              # Global styles
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Design System

### Colors
- Primary: `#1fc7b6` (Teal)
- Dark: `#1A1D23` (Chrome)
- Accent: `#8B8F97` (Gray)

### Components

#### Primitives
- **Container**: Max-width wrapper with responsive padding
- **Heading**: Fluid typography with clamp()
- **Text**: Paragraph text with size variants
- **Card**: Glassmorphism card with hover effects
- **Button**: Primary/secondary/outline variants

#### Sections
- **Hero**: Full-screen hero with background overlay
- **Problem**: Stats cards and narrative
- **Founder**: 50/50 image/text layout
- **Solution**: Feature cards grid
- **Technology**: Tech feature cards
- **Market**: Market metrics cards
- **Team**: Recruitment CTA
- **Footer**: Contact and copyright

## Customization

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `App.jsx`
3. Add navigation link to `src/utils/constants.js`

### Updating Content

Replace placeholder content in section components with real copy and assets.

### Adding Images

1. Place images in `public/images/`
2. Reference in components: `/images/hero/your-image.jpg`
3. Optimize for web (<200KB recommended)

## Performance

- Code splitting with Vite
- Image optimization plugin
- Lazy loading for below-fold content
- CSS custom properties for theming

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Glassmorphism requires backdrop-filter support
- Fluid typography uses CSS clamp()
- Mobile breakpoint: 768px
