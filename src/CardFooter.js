import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class CardFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { componentClass, footerClassName, className, ...props } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, footerClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  componentClass: PropTypes.string,
  footerClassName: PropTypes.string
};

CardFooter.defaultProps = {
  componentClass: 'div',
  footerClassName: 'panel-footer'
};

export default CardFooter;
