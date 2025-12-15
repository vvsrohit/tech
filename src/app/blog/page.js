import Link from 'next/link';
import { blogPosts } from '../../data/posts';

export default function BlogList() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Latest Articles
      </h1>
      
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div key={post.slug} className="p-6 border rounded-xl hover:shadow-lg transition-all bg-white dark:bg-gray-900 dark:border-gray-800">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{post.title}</h2>
              <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {post.date}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-block text-blue-600 font-semibold hover:underline"
            >
              Read Article →
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/" className="text-gray-500 hover:text-gray-900">← Back to Home</Link>
      </div>
    </div>
  );
}