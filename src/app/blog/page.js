import posts from "@/blog/posts.json";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <main className="container">
      <h1>Blog</h1>
      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
