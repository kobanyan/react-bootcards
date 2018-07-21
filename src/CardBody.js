import PropTypes from 'prop-types';
import React from 'react';
import { Panel } from 'react-bootstrap';

class CardBody extends React.Component {
  render() {
    return <Panel.Body {...this.props}>{this.props.children}</Panel.Body>;
  }
}

CardBody.propTypes = {
  children: PropTypes.node
};

export default CardBody;
