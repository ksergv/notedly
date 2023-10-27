import React from 'react';
import ReactMarkdown from 'react-markdown';


const MarkdownRenderer = ({ markdownContent }) => {


  const renderers = {
    image: ({ src, alt, title, style }) => (
      <img
        src={src}
        alt={alt}
        title={title}
        style={{ float: 'left', marginRight: '10px', width: '200px', height: '350px' }}
      />
    ),
    iframe: ({ src }) => (
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={src}
          allowFullScreen
          title="Embedded YouTube video"
        ></iframe>
      </div>
    ),
  };
  
 
return (
  <ReactMarkdown 
  escapeHtml={false}
  renderers={renderers} source={markdownContent} />
);
};

export default MarkdownRenderer;

