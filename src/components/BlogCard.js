import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span>{post.date}</span>
    </Link>
  );
}
