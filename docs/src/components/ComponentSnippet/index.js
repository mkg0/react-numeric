import React from "react";
import styles from "./componentSnippet.css";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import dark from "react-syntax-highlighter/styles/prism/coy.js";
import cx from "classnames";
import PropTypes from "prop-types";

class ComponentSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.initialMode,
    };
  }

  render() {
    const { mode } = this.state;
    const { preview, code } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {mode === "code" ? (
            <SyntaxHighlighter className={styles.code} language="jsx" style={dark}>
              {code}
            </SyntaxHighlighter>
          ) : (
            <div className={styles.preview}>{preview}</div>
          )}
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => this.setState({ mode: "code" })}
            className={cx(styles.button, {
              [styles.passiveButton]: mode !== "code",
            })}>
            CODE
          </button>
          <button
            onClick={() => this.setState({ mode: "preview" })}
            className={cx(styles.button, {
              [styles.passiveButton]: mode !== "preview",
            })}>
            PREVIEW
          </button>
        </div>
      </div>
    );
  }
}

ComponentSnippet.propTypes = {
  initialMode: PropTypes.oneOf(["preview", "code"]),
};

ComponentSnippet.defaultProps = {
  initialMode: "preview",
};

export default ComponentSnippet;
