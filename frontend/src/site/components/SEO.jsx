import { useEffect } from 'react';

/**
 * Simple SEO component to manage document title and meta tags.
 */
export const SEO = ({ title, description, ogImage }) => {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Handle OG tags
    const setOgTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setOgTag('og:title', title);
    setOgTag('og:description', description);
    if (ogImage) {
      setOgTag('og:image', ogImage);
    }

    // Cleanup not strictly necessary for SPAs unless we revert to generic on unmount
  }, [title, description, ogImage]);

  return null;
};
