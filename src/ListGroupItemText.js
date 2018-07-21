import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class ListGroupItemText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { componentClass, textClassName, className, ...props } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, textClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

ListGroupItemText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  componentClass: PropTypes.string,
  textClassName: PropTypes.string
};

ListGroupItemText.defaultProps = {
  componentClass: 'p',
  textClassName: 'list-group-item-text'
};

export default ListGroupItemText;
