import './globals.css';
import { fetchPageEntry } from './lib/api';
import { ReactNode } from 'react';
import NavigationWrapper from '@/components/NavigationWrapper';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const page = await fetchPageEntry('3jjDGTEZJE1t4ufudjIYU9');

  const themeClass =
    page?.theme === 'Core Dark'
      ? 'hds-web-product-dark-theme'
      : 'hds-web-product-light-theme';

  const navigationItems = [
    { label: 'Products', slug: 'products' },
    { label: 'Solutions', slug: 'solutions' },
  ];

  return (
    <html lang="en" data-theme={themeClass} data-styles="hds">
      <head>
        <script
          type="module"
          src="https://design.in.here.com/wc/hds-web-components.esm.js"
        ></script>
      </head>
      <body className={`${themeClass} bg-background text-foreground`}>
        <NavigationWrapper items={navigationItems} />
        {children}
      </body>
    </html>
  );
}