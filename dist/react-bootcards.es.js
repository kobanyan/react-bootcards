import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Col, Panel } from 'react-bootstrap';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Container = function (_React$Component) {
  inherits(Container, _React$Component);

  function Container(props) {
    classCallCheck(this, Container);
    return possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));
  }

  createClass(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          componentClass = _props.componentClass,
          headingClassName = _props.headingClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['componentClass', 'headingClassName', 'className']);

      var Component = componentClass;
      return React.createElement(
        Component,
        _extends({}, props, { className: classNames(className, headingClassName) }),
        this.props.children
      );
    }
  }]);
  return Container;
}(React.Component);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  componentClass: PropTypes.string,
  headingClassName: PropTypes.string
};

Container.defaultProps = {
  componentClass: 'div',
  headingClassName: 'container'
};

var Cards = function (_React$Component) {
  inherits(Cards, _React$Component);

  function Cards(props) {
    classCallCheck(this, Cards);
    return possibleConstructorReturn(this, (Cards.__proto__ || Object.getPrototypeOf(Cards)).call(this, props));
  }

  createClass(Cards, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cardsClassName = _props.cardsClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['cardsClassName', 'className']);

      return React.createElement(
        Col,
        _extends({}, props, { className: classNames(className, cardsClassName) }),
        this.props.children
      );
    }
  }]);
  return Cards;
}(React.Component);

Cards.propTypes = {
  cardsClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

Cards.defaultProps = {
  cardsClassName: 'bootcards-cards'
};

var List = function (_React$Component) {
  inherits(List, _React$Component);

  function List(props) {
    classCallCheck(this, List);
    return possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));
  }

  createClass(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          listClassName = _props.listClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['listClassName', 'className']);

      return React.createElement(
        Col,
        _extends({}, props, { className: classNames(className, listClassName) }),
        this.props.children
      );
    }
  }]);
  return List;
}(React.Component);

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string
};

List.defaultProps = {
  listClassName: 'bootcards-list'
};

var ListGroupItemHeader = function (_React$Component) {
  inherits(ListGroupItemHeader, _React$Component);

  function ListGroupItemHeader(props) {
    classCallCheck(this, ListGroupItemHeader);
    return possibleConstructorReturn(this, (ListGroupItemHeader.__proto__ || Object.getPrototypeOf(ListGroupItemHeader)).call(this, props));
  }

  createClass(ListGroupItemHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          componentClass = _props.componentClass,
          headerClassName = _props.headerClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['componentClass', 'headerClassName', 'className']);

      var Component = componentClass;
      return React.createElement(
        Component,
        _extends({}, props, { className: classNames(className, headerClassName) }),
        this.props.children
      );
    }
  }]);
  return ListGroupItemHeader;
}(React.Component);

ListGroupItemHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  componentClass: PropTypes.string,
  headerClassName: PropTypes.string
};

ListGroupItemHeader.defaultProps = {
  componentClass: 'h4',
  headerClassName: 'list-group-item-heading'
};

var ListGroupItemText = function (_React$Component) {
  inherits(ListGroupItemText, _React$Component);

  function ListGroupItemText(props) {
    classCallCheck(this, ListGroupItemText);
    return possibleConstructorReturn(this, (ListGroupItemText.__proto__ || Object.getPrototypeOf(ListGroupItemText)).call(this, props));
  }

  createClass(ListGroupItemText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          componentClass = _props.componentClass,
          textClassName = _props.textClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['componentClass', 'textClassName', 'className']);

      var Component = componentClass;
      return React.createElement(
        Component,
        _extends({}, props, { className: classNames(className, textClassName) }),
        this.props.children
      );
    }
  }]);
  return ListGroupItemText;
}(React.Component);

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

var Card = function (_React$Component) {
  inherits(Card, _React$Component);

  function Card(props) {
    classCallCheck(this, Card);
    return possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
  }

  createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cardStyle = _props.cardStyle,
          props = objectWithoutProperties(_props, ['cardStyle']);

      var cardClassName = cardStyle === 'default' ? null : 'bootcards-' + cardStyle;
      return React.createElement(
        Panel,
        _extends({}, props, { className: classNames(props.className, cardClassName) }),
        this.props.children
      );
    }
  }]);
  return Card;
}(React.Component);

Card.propTypes = {
  cardStyle: PropTypes.oneOf(['default', 'chart', 'summary', 'media', 'file', 'richtext']),
  children: PropTypes.node,
  className: PropTypes.string
};

Card.defaultProps = {
  cardStyle: 'default'
};

var CardHeader = function (_React$Component) {
  inherits(CardHeader, _React$Component);

  function CardHeader(props) {
    classCallCheck(this, CardHeader);
    return possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).call(this, props));
  }

  createClass(CardHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          componentClass = _props.componentClass,
          headerClassName = _props.headerClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['componentClass', 'headerClassName', 'className']);

      var Component = componentClass;
      return React.createElement(
        Component,
        _extends({}, props, { className: classNames(className, headerClassName) }),
        this.props.children
      );
    }
  }]);
  return CardHeader;
}(React.Component);

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

var CardTitle = function (_React$Component) {
  inherits(CardTitle, _React$Component);

  function CardTitle(props) {
    classCallCheck(this, CardTitle);
    return possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).call(this, props));
  }

  createClass(CardTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          componentClass = _props.componentClass,
          titleClassName = _props.titleClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['componentClass', 'titleClassName', 'className']);

      var Component = componentClass;
      return React.createElement(
        Component,
        _extends({}, props, { className: classNames(className, titleClassName) }),
        this.props.children
      );
    }
  }]);
  return CardTitle;
}(React.Component);

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  componentClass: PropTypes.string,
  titleClassName: PropTypes.string
};

CardTitle.defaultProps = {
  componentClass: 'h3',
  titleClassName: 'panel-title'
};

var CardFooter = function (_React$Component) {
  inherits(CardFooter, _React$Component);

  function CardFooter(props) {
    classCallCheck(this, CardFooter);
    return possibleConstructorReturn(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).call(this, props));
  }

  createClass(CardFooter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          componentClass = _props.componentClass,
          footerClassName = _props.footerClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['componentClass', 'footerClassName', 'className']);

      var Component = componentClass;
      return React.createElement(
        Component,
        _extends({}, props, { className: classNames(className, footerClassName) }),
        this.props.children
      );
    }
  }]);
  return CardFooter;
}(React.Component);

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

var CardBody = function (_React$Component) {
  inherits(CardBody, _React$Component);

  function CardBody() {
    classCallCheck(this, CardBody);
    return possibleConstructorReturn(this, (CardBody.__proto__ || Object.getPrototypeOf(CardBody)).apply(this, arguments));
  }

  createClass(CardBody, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Panel.Body,
        this.props,
        this.props.children
      );
    }
  }]);
  return CardBody;
}(React.Component);

CardBody.propTypes = {
  children: PropTypes.node
};

var SummaryItem = function (_React$Component) {
  inherits(SummaryItem, _React$Component);

  function SummaryItem(props) {
    classCallCheck(this, SummaryItem);
    return possibleConstructorReturn(this, (SummaryItem.__proto__ || Object.getPrototypeOf(SummaryItem)).call(this, props));
  }

  createClass(SummaryItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          componentClass = _props.componentClass,
          itemClassName = _props.itemClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['componentClass', 'itemClassName', 'className']);

      var Component = componentClass;
      return React.createElement(
        Component,
        _extends({}, props, { className: classNames(className, itemClassName) }),
        this.props.children
      );
    }
  }]);
  return SummaryItem;
}(React.Component);

SummaryItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  componentClass: PropTypes.string,
  itemClassName: PropTypes.string
};

SummaryItem.defaultProps = {
  componentClass: 'a',
  itemClassName: 'bootcards-summary-item'
};

var ChartCanvas = function (_React$Component) {
  inherits(ChartCanvas, _React$Component);

  function ChartCanvas(props) {
    classCallCheck(this, ChartCanvas);
    return possibleConstructorReturn(this, (ChartCanvas.__proto__ || Object.getPrototypeOf(ChartCanvas)).call(this, props));
  }

  createClass(ChartCanvas, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          componentClass = _props.componentClass,
          canvasClassName = _props.canvasClassName,
          className = _props.className,
          props = objectWithoutProperties(_props, ['componentClass', 'canvasClassName', 'className']);

      var Component = componentClass;
      return React.createElement(
        Component,
        _extends({}, props, { className: classNames(className, canvasClassName) }),
        this.props.children
      );
    }
  }]);
  return ChartCanvas;
}(React.Component);

ChartCanvas.propTypes = {
  canvasClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  componentClass: PropTypes.string
};

ChartCanvas.defaultProps = {
  componentClass: 'div',
  canvasClassName: 'bootcards-chart-canvas'
};

export { Container, Cards, List, ListGroupItemHeader, ListGroupItemText, Card, CardHeader, CardTitle, CardFooter, CardBody, SummaryItem, ChartCanvas };
