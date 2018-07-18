import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class Example extends React.Component {
  render() {
    const classes = {
      'bs-example': true,
      'bs-example-type': true
    };
    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classes)}
      >
        {this.props.children}
      </div>
    );
  }
}

Example.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Example;
