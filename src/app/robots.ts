import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // sitemap: 'https://xn--119-vf8lt75bj4x8xfd0d12m73g.com/sitemap.xml',
  };
}
