export default function TableOfContents({ headings }) {
  return (
    <aside className="toc">
      <strong>On this page</strong>
      <ul>
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
