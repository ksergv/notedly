import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ markdownContent }) => {
  const renderers = {
    image: ({ src, alt, title }) => (
      <img
        src={src}
        alt={alt}
        title={title}
        style={{ float: 'left', marginRight: '10px', width: '200px', height: '400px' }}
      />
    ),
  };

  return (
    <ReactMarkdown renderers={renderers} source={markdownContent} />
  );
};

export default MarkdownRenderer;

