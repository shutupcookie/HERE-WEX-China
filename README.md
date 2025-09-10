## Using HERE Design System (HDS) in this Project

Iintegrates **HERE Design System (HDS)** manually instead of relying on a pre-published package. Below is an overview of how HDS was used and bundled:

---

### Manual Bundling of HDS

Instead of installing HDS via NPM (e.g. `@here/hds-core`), we opted for **manual bundling** to retain better control over:

* Build size
* Scope of components
* Design token overrides (if any)

**Steps:**

1. **Download HDS Source**
   The full design system (CSS, tokens, icons) was manually copied into the `/styles/hds-tokens.css` directory.

2. **Importing HDS Styles**
   The bundled styles were added to `globals.css`

   ```ts
   import '@/styles/hds/hds-core.min.css'; // example
   ```

3. **Theme Switching**
   HDS themes are applied using utility classes like:

   ```html
   <section className="hds-web-product-dark-theme bg-background text-foreground">
     ...
   </section>
   ```

   The two main themes supported:

   * `hds-web-product-dark-theme`
   * `hds-web-product-light-theme`


---

### Applying HDS to Components

Each reusable component (like `Hero`, `BlogPage`) was built using HDS utility classes for:

* Typography (`text-headline`, `text-body`)
* Buttons (`btn-primary`, `btn-secondary`, `btn-base`)
* Colors (`bg-background`, `text-foreground`)
* Layout (`max-w-4xl`, `mx-auto`, `py-12`)

Example:

```tsx
<section className="hds-web-product-dark-theme bg-background text-foreground px-8 py-12">
  <h1 className="text-headline font-bold">Deploy digital navigation experiences</h1>
  <p className="text-body">Powered by HERE Design System</p>
</section>
```

---

### Compatibility with TailwindCSS

HDS utility classes were designed to **co-exist with Tailwind**. We used Tailwind for layout and spacing, and HDS for design tokens and components.

Example hybrid usage:

```tsx
<div className="hds-web-product-dark-theme max-w-5xl mx-auto py-8 text-body text-foreground">
  <button className="btn-base btn-primary">Get Started</button>
</div>
```

---

### Rendering Images from Contentful

To display images from Contentful:

* We extracted the raw image URL
* Prefixed with `https:` if it began with `//`
* Used a regular `<img>` tag instead of `next/image` to bypass domain restrictions

```tsx
const imageUrl = blog.image?.fields?.file?.url.startsWith('//')
  ? `https:${blog.image.fields.file.url}`
  : blog.image.fields.file.url;
```

---

### Troubleshooting Notes

* Avoid using `next/image` unless you add `images.domains` to `next.config.js` for Contentful domains.
* Check theme-specific styling (like `text-foreground`) if elements appear hidden or invisible.
* Use hardcoded placeholders and red borders for debugging image rendering issues.

---

### Additional Reading

* [HERE Design System](https://design.here.com)
* [TailwindCSS](https://tailwindcss.com/)
* [Next.js Image Config](https://nextjs.org/docs/messages/next-image-unconfigured-host)

### The .env file is confidential and cannot be uploaded to GitLab for security reasons.

