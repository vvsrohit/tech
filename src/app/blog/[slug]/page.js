import Link from 'next/link';
import { blogPosts } from '../../../data/posts';
import { parseMarkdown } from '../../../utils/markdownParser';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div className="text-center p-20">Post not found</div>;
  }

  const { content, toc } = parseMarkdown(post.content);

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 font-[family-name:var(--font-geist-sans)]">
      <article className="flex-1">
        <header className="mb-10 border-b pb-6 border-gray-200 dark:border-gray-800">
          <Link href="/blog" className="text-sm text-gray-500 hover:text-blue-500 mb-4 inline-block">← Back to Blog</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{post.title}</h1>
          <p className="text-gray-500 dark:text-gray-400">Published on {post.date}</p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          {content}
        </div>
      </article>

      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-10 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Table of Contents</h3>
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id} style={{ marginLeft: (item.level - 1) * 10 }}>
                <a href={`#${item.id}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:underline">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}