import React from "react";
import styles from "./snippet.css";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import dark from "react-syntax-highlighter/styles/prism/coy.js";

const ComponentSnippet = props => {
  return (
    <SyntaxHighlighter className={styles.wrapper} language="jsx" style={dark} {...props}>
      {props.children}
    </SyntaxHighlighter>
  );
};

export default ComponentSnippet;
