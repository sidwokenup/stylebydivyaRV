import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'StyleByDivya',
    short_name: 'StyleByDivya',
    description: "Elegant & Modern Women's Fashion",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/assets/Logo/faviconlogo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/Logo/faviconlogo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
