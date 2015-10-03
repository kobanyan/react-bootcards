import React from 'react';
import classNames from 'classnames';
import ReactHighlight from 'react-highlight';

class Highlight extends React.Component {
  render() {
    return (
      <div {...this.props} className={classNames(this.props.className, 'highlight')}>
        <ReactHighlight className={this.props.highlightClassName}>
          {this.props.children}
        </ReactHighlight>
      </div>
    );
  }
}

Highlight.propTypes = {
  highlightClassName: React.PropTypes.string,
};

Highlight.defaultProps = {
  highlightClassName: 'xml',
};

export default Highlight;
