import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mujtabaalidev.vercel.app',
      lastModified: new Date(),
    },
  ]
}
