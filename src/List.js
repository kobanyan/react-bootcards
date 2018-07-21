import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Col } from 'react-bootstrap';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listClassName, className, ...props } = this.props;
    return (
      <Col {...props} className={classNames(className, listClassName)}>
        {this.props.children}
      </Col>
    );
  }
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string
};

List.defaultProps = {
  listClassName: 'bootcards-list'
};

export default List;
