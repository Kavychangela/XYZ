import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pdstech.in';
  
  const routes = [
    '',
    '/about',
    '/products',
    '/careers',
    '/contact',
    '/developers',
    '/services',
    '/solutions',
    '/blog',
    '/success-stories',
    '/staff-augmentation',
    '/insights',
    '/seminars',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
