'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGroupItemHeader = function (_React$Component) {
  _inherits(ListGroupItemHeader, _React$Component);

  function ListGroupItemHeader(props) {
    _classCallCheck(this, ListGroupItemHeader);

    return _possibleConstructorReturn(this, (ListGroupItemHeader.__proto__ || Object.getPrototypeOf(ListGroupItemHeader)).call(this, props));
  }

  _createClass(ListGroupItemHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          componentClass = _props.componentClass,
          headerClassName = _props.headerClassName,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['componentClass', 'headerClassName', 'className']);

      var Component = componentClass;
      return _react2.default.createElement(
        Component,
        _extends({}, props, { className: (0, _classnames2.default)(className, headerClassName) }),
        this.props.children
      );
    }
  }]);

  return ListGroupItemHeader;
}(_react2.default.Component);

ListGroupItemHeader.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  componentClass: _propTypes2.default.string,
  headerClassName: _propTypes2.default.string
};

ListGroupItemHeader.defaultProps = {
  componentClass: 'h4',
  headerClassName: 'list-group-item-heading'
};

exports.default = ListGroupItemHeader;