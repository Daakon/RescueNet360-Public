# RescueNet360 Frontend

React + Vite marketing site using a hybrid structure:

- Structured homepage
- Dedicated audience pages for shelters, sponsors, and investors
- About page
- Segmented contact funnel with dynamic fields

## Development

```bash
# install dependencies
npm install

# start dev server
npm run dev

# production build
npm run build

# preview build
npm run preview

# lint
npm run lint
```

## Environment Variables

Create `.env.local`:

```bash
VITE_API_ENDPOINT=https://api.rescuenet360.com
```

## Route Structure

- `/` Home
- `/for-pet-families`
- `/for-shelters-rescues`
- `/for-sponsors-partners`
- `/for-investors`
- `/about`
- `/contact`

## Key Source Layout

```text
src/
  site/
    components/      # header/footer/hero/forms/layout
    config/          # navigation and site constants
    pages/           # route pages
  hooks/             # data submission hooks
  utils/             # API helpers
  App.jsx            # router + route map
```

## Contact Funnel

The contact form segments inquiries by visitor type:

- Shelter or Rescue
- Sponsor or Strategic Partner
- Investor
- Grant Funder
- Volunteer or Individual Supporter

Each type reveals additional context fields and submits through the same waitlist API endpoint with audience-specific metadata.

## Build Note

`vite-plugin-image-optimizer` is enabled only when `sharp` is available in the environment.
