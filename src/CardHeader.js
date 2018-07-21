import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class CardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { componentClass, headerClassName, className, ...props } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, headerClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  componentClass: PropTypes.string,
  headerClassName: PropTypes.string
};

CardHeader.defaultProps = {
  componentClass: 'div',
  headerClassName: 'panel-heading'
};

export default CardHeader;
