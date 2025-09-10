// app/lib/api.ts
import { contentfulClient } from './contentful';

export async function fetchPageEntry(entryId: string) {
  try {
    const entry = await contentfulClient.getEntry(entryId, {
      include: 9,
    });

    return entry.fields;
  } catch (error) {
    console.error('Error fetching page entry:', error);
    return null;
  }
}
export async function fetchBlogBySlug(slug: string) {
  const res = await fetch(`https://cdn.contentful.com/spaces/zy322i85f2nt/environments/master/entries?content_type=blogArticle&fields.slug=${slug}`, {
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  });

  const data = await res.json();
  console.log('Fetched blog data:', JSON.stringify(data, null, 2));

  return data.items?.[0]?.fields || null;
}
