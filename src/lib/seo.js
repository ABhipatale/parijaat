import { useEffect } from 'react';
import { SITE } from '../data/site';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Per-route title, description, canonical, Open Graph and optional JSON-LD.
export function useSEO({ title, description, path = '/', image = '/images/og-cover.jpg', jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | पारिजात ज्वेल्स बाय मेघना` : document.title;
    document.title = fullTitle;
    const url = `${SITE.url}${path}`;
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
    }
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', `${SITE.url}${image}`);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let script;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.route = 'true';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => script?.remove();
  }, [title, description, path, image, jsonLd]);
}
