import React from 'react';

export function parseMarkdown(text) {
  const lines = text.split('\n');
  const elements = [];
  const toc = [];

  lines.forEach((line, index) => {
    if (line.startsWith('# ')) {
      const content = line.replace('# ', '');
      const id = content.toLowerCase().replace(/\s+/g, '-');
      toc.push({ id, text: content, level: 1 });
      elements.push(<h1 key={index} id={id} className="text-3xl font-bold mt-8 mb-4">{content}</h1>);
    } 
    else if (line.startsWith('## ')) {
      const content = line.replace('## ', '');
      const id = content.toLowerCase().replace(/\s+/g, '-');
      toc.push({ id, text: content, level: 2 });
      elements.push(<h2 key={index} id={id} className="text-2xl font-semibold mt-6 mb-3">{content}</h2>);
    }
    else if (line.includes('**')) {
      const parts = line.split('**');
      elements.push(
        <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
          {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
        </p>
      );
    }
    else if (line.trim() !== '') {
      elements.push(<p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{line}</p>);
    }
  });

  return { content: elements, toc };
}