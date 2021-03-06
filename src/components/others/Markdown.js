import React from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Markdown = ({ children }) => {
  console.log(children);
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>;
};

export default Markdown;
