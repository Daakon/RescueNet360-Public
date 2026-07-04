import { Helmet } from 'react-helmet-async';

const DEFAULT_KEYWORDS = "animal shelter software, rescue management software, pet identity infrastructure, microchip registry, pet reunification, foster management, free shelter software, animal welfare operating system, lost pet database";
const BASE_URL = "https://rescuenet360.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * Comprehensive SEO & Open Graph Component using react-helmet-async.
 * Ensures smart data, social sharing previews, and JSON-LD structured data on all pages.
 */
export const SEO = ({
  title,
  description,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  keywords = DEFAULT_KEYWORDS,
  schema
}) => {
  const canonicalUrl = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="RescueNet360" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn / Slack / Discord */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="RescueNet360" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:secure_url" content={fullOgImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Schema.org JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
