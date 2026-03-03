import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  author?: string;
  robots?: string;
  themeColor?: string;
  locale?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  structuredData,
  author = 'Syntexa',
  robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  themeColor = '#000000',
  locale = 'en_US'
}: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let metaTag = document.querySelector(selector);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        if (attribute === 'property') {
          metaTag.setAttribute('property', selector.replace(/meta\[property="([^"]+)"\]/, '$1'));
        } else {
          metaTag.setAttribute('name', selector.replace(/meta\[name="([^"]+)"\]/, '$1'));
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    // Basic meta tags
    if (description) updateMetaTag('meta[name="description"]', 'name', description);
    if (keywords) updateMetaTag('meta[name="keywords"]', 'name', keywords);
    if (author) updateMetaTag('meta[name="author"]', 'name', author);
    if (robots) updateMetaTag('meta[name="robots"]', 'name', robots);
    if (themeColor) updateMetaTag('meta[name="theme-color"]', 'name', themeColor);
    if (locale) updateMetaTag('meta[property="og:locale"]', 'property', locale);

    // Additional indexing meta tags
    updateMetaTag('meta[name="revisit-after"]', 'name', '7 days');
    updateMetaTag('meta[name="distribution"]', 'name', 'global');
    updateMetaTag('meta[name="rating"]', 'name', 'general');

    // Open Graph tags
    if (ogTitle) updateMetaTag('meta[property="og:title"]', 'property', ogTitle);
    if (ogDescription) updateMetaTag('meta[property="og:description"]', 'property', ogDescription);
    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', 'property', ogImage);
      updateMetaTag('meta[property="og:image:type"]', 'property', 'image/jpeg');
    }
    if (ogUrl) updateMetaTag('meta[property="og:url"]', 'property', ogUrl);
    updateMetaTag('meta[property="og:site_name"]', 'property', '16fps');
    updateMetaTag('meta[property="og:type"]', 'property', 'website');

    // LinkedIn tags
    updateMetaTag('meta[property="linkedin:url"]', 'property', ogUrl || 'https://16fps.com');

    // Twitter tags
    if (twitterTitle) updateMetaTag('meta[property="twitter:title"]', 'property', twitterTitle);
    if (twitterDescription) updateMetaTag('meta[property="twitter:description"]', 'property', twitterDescription);
    if (twitterImage) updateMetaTag('meta[property="twitter:image"]', 'property', twitterImage);
    updateMetaTag('meta[property="twitter:card"]', 'property', 'summary_large_image');
    updateMetaTag('meta[property="twitter:creator"]', 'property', '@syntexa');
    updateMetaTag('meta[property="twitter:site"]', 'property', '@syntexa');
    updateMetaTag('meta[property="twitter:domain"]', 'property', '16fps.com');

    // Canonical URL
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonicalUrl);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonicalLink);
      }
    }

    // Structured Data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');
      if (structuredDataScript) {
        structuredDataScript.textContent = JSON.stringify(structuredData);
      } else {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        structuredDataScript.setAttribute('id', 'dynamic-structured-data');
        structuredDataScript.textContent = JSON.stringify(structuredData);
        document.head.appendChild(structuredDataScript);
      }
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, canonicalUrl, structuredData, author, robots, themeColor, locale]);
};

export default useSEO;