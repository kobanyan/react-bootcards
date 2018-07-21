import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import hljs from 'highlight.js';

class Highlight extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    let domNode = ReactDOM.findDOMNode(this);
    let nodes = domNode.querySelectorAll('pre code');
    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i++) {
        hljs.highlightBlock(nodes[i]);
      }
    }
  }

  render() {
    const { className, highlightClassName, ...props } = this.props;
    return (
      <div {...props} className={classNames(className, 'highlight')}>
        <pre>
          <code className={highlightClassName}>{this.props.children}</code>
        </pre>
      </div>
    );
  }
}

Highlight.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  highlightClassName: PropTypes.string
};

Highlight.defaultProps = {
  highlightClassName: 'xml'
};

export default Highlight;
