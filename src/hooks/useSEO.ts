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
  structuredData
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

    // Open Graph tags
    if (ogTitle) updateMetaTag('meta[property="og:title"]', 'property', ogTitle);
    if (ogDescription) updateMetaTag('meta[property="og:description"]', 'property', ogDescription);
    if (ogImage) updateMetaTag('meta[property="og:image"]', 'property', ogImage);
    if (ogUrl) updateMetaTag('meta[property="og:url"]', 'property', ogUrl);

    // Twitter tags
    if (twitterTitle) updateMetaTag('meta[property="twitter:title"]', 'property', twitterTitle);
    if (twitterDescription) updateMetaTag('meta[property="twitter:description"]', 'property', twitterDescription);
    if (twitterImage) updateMetaTag('meta[property="twitter:image"]', 'property', twitterImage);

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
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, canonicalUrl, structuredData]);
};

export default useSEO;