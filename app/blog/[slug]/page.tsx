//app/blog/[slug]/page.tsx

import { fetchBlogBySlug } from '@/lib/api';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogProps {
  params: { slug: string }; 
}

export default async function BlogPage({ params }: BlogProps) {
  const blog = await fetchBlogBySlug(params.slug);

  if (!blog) return notFound();

  const rawImageUrl = blog.image?.fields?.file?.url || '';
  const imageUrl = rawImageUrl.startsWith('//') ? `https:${rawImageUrl}` : rawImageUrl;

  return (
    <article className="max-w-5xl mx-auto py-16 px-4">
      {imageUrl && (
  <div className="mt-8 mb-10">
    <img
      src={imageUrl}
      alt={blog.image?.fields?.title || blog.headline}
      className="rounded-md mb-6 w-full h-auto object-contain shadow-lg"
    />
  </div>
)}

      <h1 className="text-4xl font-bold mb-2">{blog.headline}</h1>
      <h2 className="text-xl text-gray-700 mb-4">{blog.subHeadline}</h2>
      <div className="text-sm text-gray-500 mb-8">
        {blog.publicationDate ?? ''} · {blog.readTime ?? ''}
      </div>

      <div className="prose max-w-none">
      </div>
    </article>
  );
}
