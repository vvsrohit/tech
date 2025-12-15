import fs from "fs";
import path from "path";
import posts from "@/blog/posts.json";
import { renderMarkdown } from "@/components/MarkdownRenderer";
import TableOfContents from "@/components/TableOfContents";

export default async function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return null;

  const filePath = path.join(process.cwd(), "src/blog/posts", `${post.slug}.md`);
  const content = fs.readFileSync(filePath, "utf-8");

  const headings = [...content.matchAll(/^## (.*)$/gm)].map((m) => ({
    text: m[1],
    id: m[1].toLowerCase().replace(/\s+/g, "-"),
  }));

  const html = await renderMarkdown(content);

  return (
    <main className="container blog-layout">
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <TableOfContents headings={headings} />
    </main>
  );
}
