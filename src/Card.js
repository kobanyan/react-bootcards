import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Panel } from 'react-bootstrap';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cardStyle, ...props } = this.props;
    const cardClassName =
      cardStyle === 'default' ? null : `bootcards-${cardStyle}`;
    return (
      <Panel {...props} className={classNames(props.className, cardClassName)}>
        {this.props.children}
      </Panel>
    );
  }
}

Card.propTypes = {
  cardStyle: PropTypes.oneOf([
    'default',
    'chart',
    'summary',
    'media',
    'file',
    'richtext'
  ]),
  children: PropTypes.node,
  className: PropTypes.string
};

Card.defaultProps = {
  cardStyle: 'default'
};

export default Card;
