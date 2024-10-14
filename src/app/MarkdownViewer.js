import React from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownViewer.css';

function MarkdownViewer({ content }) {
    return (
        <div className="markdown-viewer">
            <ReactMarkdown className="prose">{content}</ReactMarkdown>
        </div>
    );
}

export default MarkdownViewer;