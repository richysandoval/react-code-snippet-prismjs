import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Editor from "react-simple-code-editor";
import Highlight from "prism-react-renderer";
import Prism, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
const editorStyles = {
  root: {
    fontSize: "12px",
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...theme.plain
  }
};

class CodeSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.code,
      language: props.language,
      editable: props.editable
    };
  }

  onValueChange = (code) => {
    this.setState({
      code: code
    });
  };

  nonEditable(code) {
    return (
      <div className="code-snippet-container">
        <Prism
          {...defaultProps}
          theme={theme}
          code={code}
          language={this.state.language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Prism>
      </div>
    );
  }

  editable(code) {
    return (
      <Editor
        value={code}
        onValueChange={this.onValueChange}
        highlight={this.highlight}
        style={editorStyles.root}
      />
    );
  }

  highlight = (code) => (
    <div className="code-snippet-container">
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code}
        language={this.state.language}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <Fragment>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Fragment>
        )}
      </Highlight>
    </div>
  );

  render() {
    const { code, editable } = this.state;
    return editable ? this.editable(code) : this.nonEditable(code);
  }
}

CodeSnippet.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired
};

export default CodeSnippet;
