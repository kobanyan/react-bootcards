require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var About = (function (_React$Component) {
  _inherits(About, _React$Component);

  function About(props) {
    _classCallCheck(this, About);

    _get(Object.getPrototypeOf(About.prototype), 'constructor', this).call(this, props);
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.Row,
        null,
        _react2['default'].createElement(
          _reactBootstrap.Well,
          { className: 'col-md-6' },
          _react2['default'].createElement(
            'p',
            null,
            'Bootcards is an open source project created by ',
            _react2['default'].createElement(
              'a',
              { href: 'http://www.twitter.com/markleusink', target: '_blank' },
              '@markleusink'
            ),
            ', ',
            _react2['default'].createElement(
              'a',
              { href: 'http://www.twitter.com/sives', target: '_blank' },
              '@sives'
            ),
            ' and ',
            _react2['default'].createElement(
              'a',
              { href: 'http://www.twitter.com/jackherbert', target: '_blank' },
              '@jackherbert'
            ),
            ' and sponsored by ',
            _react2['default'].createElement(
              'a',
              { href: 'http://www.teamstudio.com', target: '_blank' },
              'Teamstudio'
            ),
            '.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'It was originally released on Monday April 14th 2014.  It was created to meet Teamstudio\'s need for a modular user interface framework that could be used to build enterprise mobile apps very quickly.  By building on top of Bootstrap, Bootcards takes advantage of Bootstrap\'s great capabilities, whilst adding support for the ',
            _react2['default'].createElement(
              'a',
              { href: 'http://insideintercom.io/why-cards-are-the-future-of-the-web/', target: '_blank' },
              'Cards design pattern'
            ),
            '.'
          )
        )
      );
    }
  }]);

  return About;
})(_react2['default'].Component);

exports['default'] = About;
module.exports = exports['default'];

},{"react":undefined,"react-bootstrap":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _sectionsGrid = require('./sections/Grid');

var _sectionsGrid2 = _interopRequireDefault(_sectionsGrid);

var _sectionsNavigation = require('./sections/Navigation');

var _sectionsNavigation2 = _interopRequireDefault(_sectionsNavigation);

var _sectionsNavbar = require('./sections/Navbar');

var _sectionsNavbar2 = _interopRequireDefault(_sectionsNavbar);

var _sectionsDoubleNavbar = require('./sections/DoubleNavbar');

var _sectionsDoubleNavbar2 = _interopRequireDefault(_sectionsDoubleNavbar);

var _sectionsFooterBar = require('./sections/FooterBar');

var _sectionsFooterBar2 = _interopRequireDefault(_sectionsFooterBar);

var _sectionsSlidingSidebar = require('./sections/SlidingSidebar');

var _sectionsSlidingSidebar2 = _interopRequireDefault(_sectionsSlidingSidebar);

var _sectionsSubmenus = require('./sections/Submenus');

var _sectionsSubmenus2 = _interopRequireDefault(_sectionsSubmenus);

var _sectionsLists = require('./sections/Lists');

var _sectionsLists2 = _interopRequireDefault(_sectionsLists);

var _sectionsListDetail = require('./sections/ListDetail');

var _sectionsListDetail2 = _interopRequireDefault(_sectionsListDetail);

var _sectionsListSearch = require('./sections/ListSearch');

var _sectionsListSearch2 = _interopRequireDefault(_sectionsListSearch);

var _sectionsCards = require('./sections/Cards');

var _sectionsCards2 = _interopRequireDefault(_sectionsCards);

var _sectionsBaseCard = require('./sections/BaseCard');

var _sectionsBaseCard2 = _interopRequireDefault(_sectionsBaseCard);

var _sectionsFormCard = require('./sections/FormCard');

var _sectionsFormCard2 = _interopRequireDefault(_sectionsFormCard);

var _sectionsTableCard = require('./sections/TableCard');

var _sectionsTableCard2 = _interopRequireDefault(_sectionsTableCard);

var _sectionsChartCard = require('./sections/ChartCard');

var _sectionsChartCard2 = _interopRequireDefault(_sectionsChartCard);

var _sectionsSummaryCard = require('./sections/SummaryCard');

var _sectionsSummaryCard2 = _interopRequireDefault(_sectionsSummaryCard);

var _sectionsMediaCard = require('./sections/MediaCard');

var _sectionsMediaCard2 = _interopRequireDefault(_sectionsMediaCard);

var _sectionsFileCard = require('./sections/FileCard');

var _sectionsFileCard2 = _interopRequireDefault(_sectionsFileCard);

var _sectionsRichTextCard = require('./sections/RichTextCard');

var _sectionsRichTextCard2 = _interopRequireDefault(_sectionsRichTextCard);

var _sectionsModals = require('./sections/Modals');

var _sectionsModals2 = _interopRequireDefault(_sectionsModals);

var Documentation = (function (_React$Component) {
  _inherits(Documentation, _React$Component);

  function Documentation(props) {
    _classCallCheck(this, Documentation);

    _get(Object.getPrototypeOf(Documentation.prototype), 'constructor', this).call(this, props);
    this.state = {
      selectedDocsMenu: 'doc-grid'
    };
  }

  _createClass(Documentation, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.Row,
        null,
        _react2['default'].createElement(
          _reactBootstrap.Col,
          { sm: 3, className: 'hidden-xs' },
          _react2['default'].createElement(
            'div',
            { className: 'docs-menu affix' },
            _react2['default'].createElement(
              _reactBootstrap.Nav,
              { bsStyle: 'pills', stacked: true, onSelect: this.handleDocsMenuSelect.bind(this), activeKey: this.state.selectedDocsMenu },
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: '', href: '#doc-grid', eventKey: 'doc-grid' },
                'Grid System'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: '', href: '#doc-navigation', eventKey: 'doc-navigation' },
                'Navigation'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-navbar', eventKey: 'doc-navbar' },
                'Navbar'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-doublenavbar', eventKey: 'doc-doublenavbar' },
                'Double Navbar'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-footerbar', eventKey: 'doc-footerbar' },
                'Footer Bar'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-slidingsidebar', eventKey: 'doc-slidingsidebar' },
                'Sliding Sidebar'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: '', href: '#doc-lists', eventKey: 'doc-lists' },
                'Lists'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-listdetail', eventKey: 'doc-listdetail' },
                'Detailed Lists'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: '', href: '#doc-listsearch', eventKey: 'doc-listsearch' },
                'List Search & List Actions'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: '', href: '#doc-cards', eventKey: 'doc-cards' },
                'Cards'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-basecard', eventKey: 'doc-basecard' },
                'Base Cards'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-formcard', eventKey: 'doc-formcard' },
                'Form Cards'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-tablecard', eventKey: 'doc-tablecard' },
                'Table Cards'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-chartcard', eventKey: 'doc-chartcard' },
                'Chart Cards'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-summarycard', eventKey: 'doc-summarycard' },
                'Summary Cards'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-mediacard', eventKey: 'doc-mediacard' },
                'Media Cards'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-filecard', eventKey: 'doc-filecard' },
                'File Cards'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: 'sub', href: '#doc-richtextcard', eventKey: 'doc-richtextcard' },
                'Rich Text Cards'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { className: '', href: '#doc-modals', eventKey: 'doc-modals' },
                'Modals'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _reactBootcards.Cards,
          { sm: 9, className: 'bootcards-documentasion-cards' },
          _react2['default'].createElement(
            _reactBootcards.Card,
            { cardStyle: 'richtext' },
            _react2['default'].createElement(_sectionsGrid2['default'], null),
            _react2['default'].createElement(_sectionsNavigation2['default'], null),
            _react2['default'].createElement(_sectionsNavbar2['default'], null),
            _react2['default'].createElement(_sectionsDoubleNavbar2['default'], null),
            _react2['default'].createElement(_sectionsFooterBar2['default'], null),
            _react2['default'].createElement(_sectionsSlidingSidebar2['default'], null),
            _react2['default'].createElement(_sectionsSubmenus2['default'], null),
            _react2['default'].createElement(_sectionsLists2['default'], null),
            _react2['default'].createElement(_sectionsListDetail2['default'], null),
            _react2['default'].createElement(_sectionsListSearch2['default'], null),
            _react2['default'].createElement(_sectionsCards2['default'], null),
            _react2['default'].createElement(_sectionsBaseCard2['default'], null),
            _react2['default'].createElement(_sectionsFormCard2['default'], null),
            _react2['default'].createElement(_sectionsTableCard2['default'], null),
            _react2['default'].createElement(_sectionsChartCard2['default'], null),
            _react2['default'].createElement(_sectionsSummaryCard2['default'], null),
            _react2['default'].createElement(_sectionsMediaCard2['default'], null),
            _react2['default'].createElement(_sectionsFileCard2['default'], null),
            _react2['default'].createElement(_sectionsRichTextCard2['default'], null),
            _react2['default'].createElement(_sectionsModals2['default'], null)
          )
        )
      );
    }
  }, {
    key: 'handleDocsMenuSelect',
    value: function handleDocsMenuSelect(eventKey) {
      this.setState({ selectedDocsMenu: eventKey });
      window.location.hash = eventKey;
    }
  }]);

  return Documentation;
})(_react2['default'].Component);

exports['default'] = Documentation;
module.exports = exports['default'];

},{"./sections/BaseCard":5,"./sections/Cards":6,"./sections/ChartCard":7,"./sections/DoubleNavbar":8,"./sections/FileCard":10,"./sections/FooterBar":11,"./sections/FormCard":12,"./sections/Grid":13,"./sections/ListDetail":15,"./sections/ListSearch":16,"./sections/Lists":17,"./sections/MediaCard":18,"./sections/Modals":19,"./sections/Navbar":20,"./sections/Navigation":21,"./sections/RichTextCard":22,"./sections/SlidingSidebar":24,"./sections/Submenus":25,"./sections/SummaryCard":26,"./sections/TableCard":27,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        'Home'
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"react":undefined}],4:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _historyLibCreateBrowserHistory = require('history/lib/createBrowserHistory');

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _reactRouterBootstrap = require('react-router-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Documentation = require('./Documentation');

var _Documentation2 = _interopRequireDefault(_Documentation);

var _About = require('./About');

var _About2 = _interopRequireDefault(_About);

var App = _react2['default'].createClass({
  displayName: 'App',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        _reactBootstrap.Navbar,
        { inverse: true, fixedTop: true,
          brand: _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/react-bootcards', title: 'Bootcards' },
            'Bootcards'
          ),
          toggleNavKey: 0
        },
        _react2['default'].createElement(
          _reactBootstrap.Nav,
          { eventKey: 0 },
          _react2['default'].createElement(
            _reactBootstrap.NavItem,
            { eventKey: 1 },
            _react2['default'].createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/react-bootcards' },
              _react2['default'].createElement(
                'span',
                null,
                _react2['default'].createElement('i', { className: 'fa fa-home' }),
                ' Home'
              )
            )
          ),
          _react2['default'].createElement(
            _reactBootstrap.NavItem,
            { eventKey: 2 },
            _react2['default'].createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/react-bootcards/documentation' },
              _react2['default'].createElement(
                'span',
                null,
                _react2['default'].createElement('i', { className: 'fa fa-book' }),
                ' Documentation'
              )
            )
          ),
          _react2['default'].createElement(
            _reactBootstrap.NavItem,
            { eventKey: 3 },
            _react2['default'].createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/react-bootcards/about' },
              _react2['default'].createElement(
                'span',
                null,
                _react2['default'].createElement('i', { className: 'fa fa-info-circle' }),
                ' About'
              )
            )
          )
        )
      ),
      _react2['default'].createElement(
        _reactBootcards.Container,
        null,
        this.props.children
      )
    );
  }
});

_react2['default'].render(_react2['default'].createElement(
  _reactRouter.Router,
  { history: (0, _historyLibCreateBrowserHistory2['default'])() },
  _react2['default'].createElement(
    _reactRouter.Route,
    { path: '/', component: App },
    _react2['default'].createElement(_reactRouter.IndexRoute, { component: _Home2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: 'react-bootcards/documentation', component: _Documentation2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: 'react-bootcards/about', component: _About2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _Home2['default'] })
  )
), document.body);

},{"./About":1,"./Documentation":2,"./Home":3,"history/lib/createBrowserHistory":33,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined,"react-router":undefined,"react-router-bootstrap":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var BaseCard = (function (_React$Component) {
  _inherits(BaseCard, _React$Component);

  function BaseCard() {
    _classCallCheck(this, BaseCard);

    _get(Object.getPrototypeOf(BaseCard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BaseCard, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-basecard' },
        _react2['default'].createElement(
          'h3',
          null,
          'Base Cards'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Base Cards display a list of information separated by dividers.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Replace the default ',
          _react2['default'].createElement(
            'code',
            null,
            '.panel-body'
          ),
          ' with a ',
          _react2['default'].createElement(
            'code',
            null,
            '.list-group'
          ),
          '.'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.Card,
            null,
            _react2['default'].createElement(
              _reactBootcards.CardHeader,
              { className: 'clearfix' },
              _react2['default'].createElement(
                _reactBootcards.CardTitle,
                { className: 'pull-left' },
                'Base Card Title'
              ),
              _react2['default'].createElement(
                _reactBootstrap.Button,
                { bsStyle: 'primary', className: 'pull-right' },
                _react2['default'].createElement('i', { className: 'fa fa-pencil' }),
                'Edit'
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.ListGroup,
              { fill: true },
              _react2['default'].createElement(
                _reactBootstrap.ListGroupItem,
                null,
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemText,
                  null,
                  'Name'
                ),
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemHeader,
                  null,
                  'John Smith'
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.ListGroupItem,
                null,
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemText,
                  null,
                  'Occupation'
                ),
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemHeader,
                  null,
                  'Web Developer'
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.ListGroupItem,
                null,
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemText,
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus tortor. Integer viverra turpis ac fringilla hendrerit. Sed faucibus posuere felis et pellentesque. Cras varius tortor vitae molestie tempor. Proin ut viverra elit, ac gravida tortor.'
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootcards.CardFooter,
              null,
              _react2['default'].createElement(
                'small',
                null,
                'Built with Bootcards - Base Card'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<Card>\n  <CardHeader className="clearfix">\n    <CardTitle className="pull-left">Base Card Title</CardTitle>\n    <Button bsStyle="primary" className="pull-right">\n      <i className="fa fa-pencil" />\n      Edit\n    </Button>\n  </CardHeader>\n  <ListGroup fill>\n    <ListGroupItem>\n      <ListGroupItemText>Name</ListGroupItemText>\n      <ListGroupItemHeader>John Smith</ListGroupItemHeader>\n    </ListGroupItem>\n    <ListGroupItem>\n      <ListGroupItemText>Occupation</ListGroupItemText>\n      <ListGroupItemHeader>Web Developer</ListGroupItemHeader>\n    </ListGroupItem>\n    <ListGroupItem>\n      <ListGroupItemText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus tortor. Integer viverra turpis ac fringilla hendrerit. Sed faucibus posuere felis et pellentesque. Cras varius tortor vitae molestie tempor. Proin ut viverra elit, ac gravida tortor.</ListGroupItemText>\n    </ListGroupItem>\n  </ListGroup>\n  <CardFooter>\n    <small>Built with Bootcards - Base Card</small>\n  </CardFooter>\n</Card>'
        )
      );
    }
  }]);

  return BaseCard;
})(_react2['default'].Component);

exports['default'] = BaseCard;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var Cards = (function (_React$Component) {
  _inherits(Cards, _React$Component);

  function Cards() {
    _classCallCheck(this, Cards);

    _get(Object.getPrototypeOf(Cards.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Cards, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-cards' },
        _react2['default'].createElement(
          'h2',
          null,
          'Cards'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Cards are the core of Bootcards, and contain your app\'s content. Different Cards are available for different types of content (text, tables, forms, charts, media, files, etc).'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Cards are based on the same markup as Bootstrap\'s ',
          _react2['default'].createElement(
            'code',
            null,
            '.panel'
          ),
          '. Each card can have a ',
          _react2['default'].createElement(
            'code',
            null,
            '.panel-heading'
          ),
          ', ',
          _react2['default'].createElement(
            'code',
            null,
            '.panel-body'
          ),
          ' and a ',
          _react2['default'].createElement(
            'code',
            null,
            '.panel-footer'
          ),
          '. All of these are optional, so just use whichever parts your app needs. You can even use multiple headers or footers (e.g. if you needed separate footer areas separated by a divider).'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootstrap.Panel,
            null,
            _react2['default'].createElement(
              _reactBootcards.CardHeader,
              { className: 'clearfix' },
              _react2['default'].createElement(
                _reactBootcards.CardTitle,
                { className: 'pull-left' },
                'Card Title'
              ),
              _react2['default'].createElement(
                _reactBootstrap.Button,
                { className: 'pull-right' },
                _react2['default'].createElement('i', { className: 'fa fa-check' }),
                'Button'
              )
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Card content...'
            ),
            _react2['default'].createElement(
              _reactBootcards.CardFooter,
              null,
              _react2['default'].createElement(
                'small',
                null,
                'Card footer...'
              )
            )
          )
        )
      );
    }
  }]);

  return Cards;
})(_react2['default'].Component);

exports['default'] = Cards;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var ChartCard = (function (_React$Component) {
  _inherits(ChartCard, _React$Component);

  function ChartCard() {
    _classCallCheck(this, ChartCard);

    _get(Object.getPrototypeOf(ChartCard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ChartCard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      Morris.Bar({
        element: 'barChart',
        data: [{ person: 'Guy Bardsley', sales: 550 }, { person: 'Adam Callahan', sales: 1500 }, { person: 'Arlo Geist', sales: 3750 }, { person: 'Sheila Hutchins', sales: 3500 }],
        xkey: 'person',
        ykeys: ['sales'],
        labels: ['Sales'],
        hideHover: 'auto',
        resize: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-chartcard' },
        _react2['default'].createElement(
          'h3',
          null,
          'Chart Cards'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Chart cards contain charts powered by Morris.js.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'These can be used with Table cards in order to toggle between a chart view and the raw data.'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.Card,
            { cardStyle: 'chart' },
            _react2['default'].createElement(
              _reactBootcards.CardHeader,
              null,
              _react2['default'].createElement(
                _reactBootcards.CardTitle,
                null,
                'Chart Card Heading'
              )
            ),
            _react2['default'].createElement(_reactBootcards.ChartCanvas, { id: 'barChart' }),
            _react2['default'].createElement(
              _reactBootcards.CardFooter,
              null,
              _react2['default'].createElement(
                'small',
                null,
                'Built with Bootcards - Base Card'
              )
            )
          )
        )
      );
    }
  }]);

  return ChartCard;
})(_react2['default'].Component);

exports['default'] = ChartCard;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var DoubleNavbar = (function (_React$Component) {
  _inherits(DoubleNavbar, _React$Component);

  function DoubleNavbar() {
    _classCallCheck(this, DoubleNavbar);

    _get(Object.getPrototypeOf(DoubleNavbar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DoubleNavbar, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-doublenavbar' },
        _react2['default'].createElement(
          'h3',
          null,
          'Double Navbar'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'The Double Navbar is meant for desktop and allows you to have two rows of menu options.'
        ),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _reactBootstrap.Navbar,
            { fluid: true, className: 'bootcards-navbar-double',
              brand: _react2['default'].createElement(
                'a',
                { title: 'Bootcards Starter', href: '/' },
                'Bootcards Starter'
              ),
              toggleNavKey: 0
            },
            _react2['default'].createElement(
              _reactBootstrap.Nav,
              { right: true, eventKey: 0, className: 'bootcards-nav-secondary' },
              _react2['default'].createElement(
                _reactBootstrap.NavDropdown,
                { eventKey: 1, id: 'doublenavbar-languages',
                  title: [_react2['default'].createElement('i', { key: 'icon', className: 'fa fa-globe' }), _react2['default'].createElement(
                    'span',
                    { key: 'title' },
                    ' Languages'
                  )] },
                _react2['default'].createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: '1' },
                  'Deutsch'
                ),
                _react2['default'].createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: '2' },
                  'English'
                ),
                _react2['default'].createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: '3' },
                  'Espanol'
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { eventKey: 2, href: '#' },
                _react2['default'].createElement('i', { className: 'fa fa-fw fa-lock' }),
                _react2['default'].createElement(
                  'span',
                  null,
                  ' Login'
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Nav,
              { right: true, eventKey: 3, className: 'bootcards-nav-primary' },
              _react2['default'].createElement(
                _reactBootstrap.NavDropdown,
                { eventKey: 4, id: 'doublenavbar-home',
                  title: [_react2['default'].createElement('i', { key: 'icon', className: 'fa fa-fw fa-dashboard' }), _react2['default'].createElement(
                    'span',
                    { key: 'title' },
                    ' Home'
                  )] },
                _react2['default'].createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: '1', href: '#' },
                  _react2['default'].createElement('i', { className: 'fa fa-fw fa-envelope-o' }),
                  ' Action'
                ),
                _react2['default'].createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: '2', href: '#' },
                  _react2['default'].createElement('i', { className: 'fa fa-fw fa-film' }),
                  ' Another action'
                ),
                _react2['default'].createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: '3', href: '#' },
                  _react2['default'].createElement('i', { className: 'fa fa-fw fa-file-o' }),
                  ' Something else here'
                ),
                _react2['default'].createElement(_reactBootstrap.MenuItem, { divider: true }),
                _react2['default'].createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: '4', href: '#' },
                  _react2['default'].createElement('i', { className: 'fa fa-fw fa-bar-chart-o' }),
                  ' Separated link'
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { eventKey: 5, href: '#' },
                _react2['default'].createElement('i', { className: 'fa fa-fw fa-briefcase' }),
                _react2['default'].createElement(
                  'span',
                  null,
                  ' Portfolio'
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { eventKey: 6, href: '#' },
                _react2['default'].createElement('i', { className: 'fa fa-fw fa-bullhorn' }),
                _react2['default'].createElement(
                  'span',
                  null,
                  ' Blog'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Set ',
          _react2['default'].createElement(
            'code',
            null,
            'class="has-bootcards-navbar-double"'
          ),
          ' on the body element to deal with the increased height of the navbar.'
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<Navbar fluid className="bootcards-navbar-double" brand={<a title="Bootcards Starter" href="/">Bootcards Starter</a>} toggleNavKey={0}>\n  <Nav right eventKey={0} className="bootcards-nav-secondary">\n    <NavDropdown eventKey={1} id="doublenavbar-languages" title={[<i key="icon" className="fa fa-globe" />, <span key="title"> Languages</span>]}>\n      <MenuItem eventKey="1">Deutsch</MenuItem>\n      <MenuItem eventKey="2">English</MenuItem>\n      <MenuItem eventKey="3">Espanol</MenuItem>\n    </NavDropdown>\n    <NavItem eventKey={2} href="#">\n      <i className="fa fa-fw fa-lock" />\n      <span> Login</span>\n    </NavItem>\n  </Nav>\n  <Nav right eventKey={3} className="bootcards-nav-primary">\n    <NavDropdown eventKey={4} id="doublenavbar-home" title={[<i key="icon" className="fa fa-fw fa-dashboard" />, <span key="title"> Home</span>]}>\n      <MenuItem eventKey="1" href="#"><i className="fa fa-fw fa-envelope-o" /> Action</MenuItem>\n      <MenuItem eventKey="2" href="#"><i className="fa fa-fw fa-film" /> Another action</MenuItem>\n      <MenuItem eventKey="3" href="#"><i className="fa fa-fw fa-file-o" /> Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4" href="#"><i className="fa fa-fw fa-bar-chart-o" /> Separated link</MenuItem>\n    </NavDropdown>\n    <NavItem eventKey={5} href="#">\n      <i className="fa fa-fw fa-briefcase" />\n      <span> Portfolio</span>\n    </NavItem>\n    <NavItem eventKey={6} href="#">\n      <i className="fa fa-fw fa-bullhorn" />\n      <span> Blog</span>\n    </NavItem>\n  </Nav>\n</Navbar>'
        )
      );
    }
  }]);

  return DoubleNavbar;
})(_react2['default'].Component);

exports['default'] = DoubleNavbar;
module.exports = exports['default'];

},{"./Highlight":14,"./Section":23,"react":undefined,"react-bootstrap":undefined}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Example = (function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    _get(Object.getPrototypeOf(Example.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      var classes = {
        'bs-example': true,
        'bs-example-type': true
      };
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
        this.props.children
      );
    }
  }]);

  return Example;
})(_react2['default'].Component);

exports['default'] = Example;
module.exports = exports['default'];

},{"classnames":undefined,"react":undefined}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var FileCard = (function (_React$Component) {
  _inherits(FileCard, _React$Component);

  function FileCard() {
    _classCallCheck(this, FileCard);

    _get(Object.getPrototypeOf(FileCard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FileCard, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-filecard' },
        _react2['default'].createElement(
          'h3',
          null,
          'File Cards'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'File Cards are intended to show information and functions for non-media file formats (PDFs, Word documents, spreadsheets, etc).'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.Card,
            { cardStyle: 'file' },
            _react2['default'].createElement(
              _reactBootcards.CardHeader,
              null,
              _react2['default'].createElement(
                _reactBootcards.CardTitle,
                null,
                'File Card Heading'
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.ListGroup,
              { fill: true },
              _react2['default'].createElement(
                _reactBootstrap.ListGroupItem,
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '#' },
                  _react2['default'].createElement('i', { className: 'icon-file-pdf' })
                ),
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemHeader,
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: '#' },
                    'File Name Goes Here'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemText,
                  null,
                  _react2['default'].createElement(
                    'strong',
                    null,
                    'PDF'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemText,
                  null,
                  _react2['default'].createElement(
                    'strong',
                    null,
                    '3.2Mb'
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.ListGroupItem,
                null,
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemText,
                  null,
                  _react2['default'].createElement(
                    'strong',
                    null,
                    'Added by John Smith on 5 March 2014'
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.ListGroupItem,
                null,
                _react2['default'].createElement(
                  _reactBootcards.ListGroupItemText,
                  null,
                  'MediaFile card description lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo, nulla ut porta interdum, mi mi venenatis felis, vitae pellentesque ante eros at enim.'
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootcards.CardFooter,
              null,
              _react2['default'].createElement(
                _reactBootstrap.ButtonGroup,
                { justified: true },
                _react2['default'].createElement(
                  _reactBootstrap.ButtonGroup,
                  null,
                  _react2['default'].createElement(
                    _reactBootstrap.Button,
                    null,
                    _react2['default'].createElement('i', { className: 'fa fa-arrow-down' }),
                    'Download'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ButtonGroup,
                  null,
                  _react2['default'].createElement(
                    _reactBootstrap.Button,
                    null,
                    _react2['default'].createElement('i', { className: 'fa fa-star' }),
                    'Favorite'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ButtonGroup,
                  null,
                  _react2['default'].createElement(
                    _reactBootstrap.Button,
                    null,
                    _react2['default'].createElement('i', { className: 'fa fa-envelope' }),
                    'Email'
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<Card cardStyle="file">\n  <CardHeader>\n    <CardTitle>File Card Heading</CardTitle>\n  </CardHeader>\n  <ListGroup fill>\n    <ListGroupItem>\n      <a href="#">\n        <i className="icon-file-pdf" />\n      </a>\n      <ListGroupItemHeader>\n        <a href="#">File Name Goes Here</a>\n      </ListGroupItemHeader>\n      <ListGroupItemText><strong>PDF</strong></ListGroupItemText>\n      <ListGroupItemText><strong>3.2Mb</strong></ListGroupItemText>\n    </ListGroupItem>\n    <ListGroupItem>\n      <ListGroupItemText>\n        <strong>Added by John Smith on 5 March 2014</strong>\n      </ListGroupItemText>\n    </ListGroupItem>\n    <ListGroupItem>\n      <ListGroupItemText>MediaFile card description lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo, nulla ut porta interdum, mi mi venenatis felis, vitae pellentesque ante eros at enim.</ListGroupItemText>\n    </ListGroupItem>\n  </ListGroup>\n  <CardFooter>\n    <ButtonGroup justified>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-arrow-down" />\n          Download\n        </Button>\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-star" />\n          Favorite\n        </Button>\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-envelope" />\n          Email\n        </Button>\n      </ButtonGroup>\n    </ButtonGroup>\n  </CardFooter>\n</Card>'
        )
      );
    }
  }]);

  return FileCard;
})(_react2['default'].Component);

exports['default'] = FileCard;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var FooterBar = (function (_React$Component) {
  _inherits(FooterBar, _React$Component);

  function FooterBar() {
    _classCallCheck(this, FooterBar);

    _get(Object.getPrototypeOf(FooterBar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FooterBar, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-footerbar' },
        _react2['default'].createElement(
          'h3',
          null,
          'Footer Bar'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'The Footer Bar offers usable mobile navigation for simpler apps with a few important navigation items.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'This uses Bootstrap\'s ',
          _react2['default'].createElement(
            'code',
            null,
            '.navbar-fixed-footer'
          ),
          ' markup, with a ',
          _react2['default'].createElement(
            'code',
            null,
            '.btn-group'
          ),
          ' to contain the navigation elements. These are styled to look like native footer tabs on iOS and Android devices.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'On desktop, the footer reverts to a simple, website-style footer to hold items like copyright information, version numbers, etc. These are contained in ',
          _react2['default'].createElement(
            'code',
            null,
            '.bootcards-desktop-footer'
          ),
          ', and hidden from mobile devices.'
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<div class="navbar navbar-default navbar-fixed-bottom">\n  <div class="container">\n    <div class="btn-group">\n      <a href="#" class="btn btn-default active">\n        <i class="fa fa-2x fa-users"></i>\n        Contacts\n      </a>\n      <a href="#" class="btn btn-default">\n        <i class="fa fa-2x fa-building-o"></i>\n        Companies\n      </a>\n      <a href="#" class="btn btn-default">\n        <i class="fa fa-2x fa-gears"></i>\n        Settings\n      </a>\n    </div>\n    <div class="bootcards-desktop-footer clearfix">\n      <p class="pull-left">Text for desktop footer goes here</p>\n      <p class="pull-left">More text for desktop footer goes here</p>\n   </div>\n  </div>\n</div>'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Apply the ',
          _react2['default'].createElement(
            'code',
            null,
            '.bootcards-nofooter'
          ),
          ' to the ',
          _react2['default'].createElement(
            'code',
            null,
            '<body>'
          ),
          ' element for layouts without a footer: this will remove the standard bottom padding.'
        )
      );
    }
  }]);

  return FooterBar;
})(_react2['default'].Component);

exports['default'] = FooterBar;
module.exports = exports['default'];

},{"./Highlight":14,"./Section":23,"react":undefined}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var FormCard = (function (_React$Component) {
  _inherits(FormCard, _React$Component);

  function FormCard() {
    _classCallCheck(this, FormCard);

    _get(Object.getPrototypeOf(FormCard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FormCard, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-formcard' },
        _react2['default'].createElement(
          'h2',
          null,
          'Form Cards'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Form Cards are used for user input in your app.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Replace the default ',
          _react2['default'].createElement(
            'code',
            null,
            '.panel-body'
          ),
          ' with a ',
          _react2['default'].createElement(
            'code',
            null,
            '<form>'
          ),
          '.'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.Card,
            null,
            _react2['default'].createElement(
              _reactBootcards.CardHeader,
              { className: 'clearfix' },
              _react2['default'].createElement(
                _reactBootcards.CardTitle,
                { className: 'pull-left' },
                'Form Card Title'
              ),
              _react2['default'].createElement(
                _reactBootstrap.ButtonGroup,
                { className: 'pull-right' },
                _react2['default'].createElement(
                  _reactBootstrap.Button,
                  { bsStyle: 'danger' },
                  _react2['default'].createElement('i', { className: 'fa fa-times' }),
                  'Cancel'
                ),
                _react2['default'].createElement(
                  _reactBootstrap.Button,
                  { bsStyle: 'success' },
                  _react2['default'].createElement('i', { className: 'fa fa-check' }),
                  'Save'
                )
              )
            ),
            _react2['default'].createElement(
              'form',
              { className: 'form-horizontal' },
              _react2['default'].createElement(_reactBootstrap.Input, {
                type: 'text',
                label: 'Name',
                labelClassName: 'col-xs-3',
                wrapperClassName: 'col-xs-9',
                defaultValue: 'John Smith' }),
              _react2['default'].createElement(
                _reactBootstrap.Input,
                {
                  type: 'select',
                  label: 'Occupation',
                  labelClassName: 'col-xs-3',
                  wrapperClassName: 'col-xs-9',
                  defaultValue: 'Developer'
                },
                _react2['default'].createElement(
                  'option',
                  null,
                  'Designer'
                ),
                _react2['default'].createElement(
                  'option',
                  null,
                  'Developer'
                ),
                _react2['default'].createElement(
                  'option',
                  null,
                  'Salesman'
                )
              ),
              _react2['default'].createElement(_reactBootstrap.Input, {
                type: 'textarea',
                label: 'Description',
                labelClassName: 'col-xs-3',
                wrapperClassName: 'col-xs-9',
                defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus tortor. Integer viverra turpis ac fringilla hendrerit. Sed faucibus posuere felis et pellentesque. Cras varius tortor vitae molestie tempor. Proin ut viverra elit, ac gravida tortor.',
                rows: '6'
              })
            ),
            _react2['default'].createElement(
              _reactBootcards.CardFooter,
              null,
              _react2['default'].createElement(
                'small',
                null,
                'Built with Bootcards - Form Card'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<Card>\n  <CardHeader className="clearfix">\n    <CardTitle className="pull-left">Form Card Title</CardTitle>\n    <ButtonGroup className="pull-right">\n      <Button bsStyle="danger">\n        <i className="fa fa-times" />\n        Cancel\n      </Button>\n      <Button bsStyle="success">\n        <i className="fa fa-check" />\n        Save\n      </Button>\n    </ButtonGroup>\n  </CardHeader>\n  <form className="form-horizontal">\n    <Input type="text" label="Name" labelClassName="col-xs-3" wrapperClassName="col-xs-9" defaultValue="John Smith" />\n    <Input type="select" label="Occupation" labelClassName="col-xs-3" wrapperClassName="col-xs-9" defaultValue="Developer">\n      <option>Designer</option>\n      <option>Developer</option>\n      <option>Salesman</option>\n    </Input>\n    <Input type="textarea" label="Description" labelClassName="col-xs-3" wrapperClassName="col-xs-9" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus tortor. Integer viverra turpis ac fringilla hendrerit. Sed faucibus posuere felis et pellentesque. Cras varius tortor vitae molestie tempor. Proin ut viverra elit, ac gravida tortor." rows="6" />\n  </form>\n  <CardFooter>\n    <small>Built with Bootcards - Form Card</small>\n  </CardFooter>\n</Card>'
        )
      );
    }
  }]);

  return FormCard;
})(_react2['default'].Component);

exports['default'] = FormCard;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var Grid = (function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-grid' },
        _react2['default'].createElement(
          'h2',
          null,
          'Grid System'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Bootcards builds on Twitter Bootstrap\'s grid system to allow separate column scrolling in touchscreen devices.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'The 2 main top-level columns are ',
          _react2['default'].createElement(
            'code',
            null,
            '.bootcards-list'
          ),
          ' (which is used to navigate your app) and ',
          _react2['default'].createElement(
            'code',
            null,
            '.bootcards-cards'
          ),
          ' (which contains your app\'s content). In desktop browsers, these will behave like regular bootstrap columns, but on touchscreen devices the user will be able to scroll them separately.'
        )
      );
    }
  }]);

  return Grid;
})(_react2['default'].Component);

exports['default'] = Grid;
module.exports = exports['default'];

},{"./Highlight":14,"./Section":23,"react":undefined}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var Highlight = (function (_React$Component) {
  _inherits(Highlight, _React$Component);

  function Highlight() {
    _classCallCheck(this, Highlight);

    _get(Object.getPrototypeOf(Highlight.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Highlight, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'highlight') }),
        _react2['default'].createElement(
          _reactHighlight2['default'],
          { className: this.props.highlightClassName },
          this.props.children
        )
      );
    }
  }]);

  return Highlight;
})(_react2['default'].Component);

Highlight.propTypes = {
  highlightClassName: _react2['default'].PropTypes.string
};

Highlight.defaultProps = {
  highlightClassName: 'xml'
};

exports['default'] = Highlight;
module.exports = exports['default'];

},{"classnames":undefined,"react":undefined,"react-highlight":undefined}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var ListDetail = (function (_React$Component) {
  _inherits(ListDetail, _React$Component);

  function ListDetail() {
    _classCallCheck(this, ListDetail);

    _get(Object.getPrototypeOf(ListDetail.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ListDetail, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-listdetail' },
        _react2['default'].createElement(
          'h3',
          null,
          'Detailed Lists'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Detailed Lists can be used when you need to show more information for each entry.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'You can use Bootstrap ',
          _react2['default'].createElement(
            'code',
            null,
            '.col-*'
          ),
          ' ',
          _react2['default'].createElement(
            'code',
            null,
            '<div>'
          ),
          's within each ',
          _react2['default'].createElement(
            'code',
            null,
            '.list-group-item'
          ),
          ' to show more pieces of information in whatever format you like, and respond to different device widths.'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.List,
            null,
            _react2['default'].createElement(
              _reactBootcards.Card,
              null,
              _react2['default'].createElement(
                _reactBootstrap.ListGroup,
                { fill: true },
                _react2['default'].createElement(
                  _reactBootstrap.ListGroupItem,
                  { href: '#' },
                  _react2['default'].createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2['default'].createElement(
                      _reactBootstrap.Col,
                      { sm: 6 },
                      _react2['default'].createElement('i', { className: 'fa fa-3x fa-building-o pull-left' }),
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemHeader,
                        null,
                        'Alparvis Ltd'
                      ),
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemText,
                        null,
                        'London, UK'
                      )
                    ),
                    _react2['default'].createElement(
                      _reactBootstrap.Col,
                      { sm: 6 },
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemText,
                        null,
                        'Contractor'
                      ),
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemText,
                        null,
                        '$12,000 Revenue YTD'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ListGroupItem,
                  { href: '#' },
                  _react2['default'].createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2['default'].createElement(
                      _reactBootstrap.Col,
                      { sm: 6 },
                      _react2['default'].createElement('i', { className: 'fa fa-3x fa-building-o pull-left' }),
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemHeader,
                        null,
                        'Camion Corp'
                      ),
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemText,
                        null,
                        'Tokyo, Japan'
                      )
                    ),
                    _react2['default'].createElement(
                      _reactBootstrap.Col,
                      { sm: 6 },
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemText,
                        null,
                        'Customer'
                      ),
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemText,
                        null,
                        '$75,000 Revenue YTD'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ListGroupItem,
                  { href: '#' },
                  _react2['default'].createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2['default'].createElement(
                      _reactBootstrap.Col,
                      { sm: 6 },
                      _react2['default'].createElement('i', { className: 'fa fa-3x fa-building-o pull-left' }),
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemHeader,
                        null,
                        'Derenden Systems'
                      ),
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemText,
                        null,
                        'Albuquerque, USA'
                      )
                    ),
                    _react2['default'].createElement(
                      _reactBootstrap.Col,
                      { sm: 6 },
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemText,
                        null,
                        'Supplier'
                      ),
                      _react2['default'].createElement(
                        _reactBootcards.ListGroupItemText,
                        null,
                        '$1.3m Revenue YTD'
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<List>\n  <Card>\n    <ListGroup fill>\n      <ListGroupItem href="#">\n        <Row>\n          <Col sm={6}>\n            <i className="fa fa-3x fa-building-o pull-left" />\n            <ListGroupItemHeader>Alparvis Ltd</ListGroupItemHeader>\n            <ListGroupItemText>London, UK</ListGroupItemText>\n          </Col>\n          <Col sm={6}>\n            <ListGroupItemText>Contractor</ListGroupItemText>\n            <ListGroupItemText>$12,000 Revenue YTD</ListGroupItemText>\n          </Col>\n        </Row>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <Row>\n          <Col sm={6}>\n            <i className="fa fa-3x fa-building-o pull-left" />\n            <ListGroupItemHeader>Camion Corp</ListGroupItemHeader>\n            <ListGroupItemText>Tokyo, Japan</ListGroupItemText>\n          </Col>\n          <Col sm={6}>\n            <ListGroupItemText>Customer</ListGroupItemText>\n            <ListGroupItemText>$75,000 Revenue YTD</ListGroupItemText>\n          </Col>\n        </Row>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <Row>\n          <Col sm={6}>\n            <i className="fa fa-3x fa-building-o pull-left" />\n            <ListGroupItemHeader>Derenden Systems</ListGroupItemHeader>\n            <ListGroupItemText>Albuquerque, USA</ListGroupItemText>\n          </Col>\n          <Col sm={6}>\n            <ListGroupItemText>Supplier</ListGroupItemText>\n            <ListGroupItemText>$1.3m Revenue YTD</ListGroupItemText>\n          </Col>\n        </Row>\n      </ListGroupItem>\n    </ListGroup>\n  </Card>\n</List>'
        )
      );
    }
  }]);

  return ListDetail;
})(_react2['default'].Component);

exports['default'] = ListDetail;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var ListSearch = (function (_React$Component) {
  _inherits(ListSearch, _React$Component);

  function ListSearch() {
    _classCallCheck(this, ListSearch);

    _get(Object.getPrototypeOf(ListSearch.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ListSearch, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-listsearch' },
        _react2['default'].createElement(
          'h2',
          null,
          'List Search & List Actions'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'A search form for when you want the user to be able to filter or search your list, and buttons for any other list functions you need.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'This goes at the top of your list, inside the ',
          _react2['default'].createElement(
            'code',
            null,
            '.modal-body'
          ),
          '. You can add or remove functions by adding/removing columns in the containing ',
          _react2['default'].createElement(
            'code',
            null,
            '.row'
          ),
          ' and making sure the widths add up.'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.List,
            null,
            _react2['default'].createElement(
              _reactBootcards.Card,
              null,
              _react2['default'].createElement(
                'form',
                null,
                _react2['default'].createElement(
                  _reactBootstrap.Row,
                  null,
                  _react2['default'].createElement(
                    _reactBootstrap.Col,
                    { xs: 9 },
                    _react2['default'].createElement(
                      _reactBootstrap.Input,
                      { type: 'text', placeholder: 'Search Contacts...' },
                      _react2['default'].createElement('i', { className: 'fa fa-search' })
                    )
                  ),
                  _react2['default'].createElement(
                    _reactBootstrap.Col,
                    { xs: 3 },
                    _react2['default'].createElement(
                      _reactBootstrap.Button,
                      { bsStyle: 'primary', block: true },
                      _react2['default'].createElement('i', { className: 'fa fa-plus' }),
                      'Add'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.ListGroup,
                { fill: true },
                _react2['default'].createElement(
                  _reactBootstrap.ListGroupItem,
                  { href: '#' },
                  _react2['default'].createElement('img', { src: 'images/Sofia Acey.jpg', className: 'img-rounded pull-left' }),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemHeader,
                    null,
                    'Acey, Sofia'
                  ),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemText,
                    null,
                    'Masung Corp.'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ListGroupItem,
                  { href: '#' },
                  _react2['default'].createElement('img', { src: 'images/Joseph Barish.jpg', className: 'img-rounded pull-left' }),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemHeader,
                    null,
                    'Barish, Joseph'
                  ),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemText,
                    null,
                    'Masung Corp.'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ListGroupItem,
                  { href: '#' },
                  _react2['default'].createElement('img', { src: 'images/Sarah Benson.jpg', className: 'img-rounded pull-left' }),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemHeader,
                    null,
                    'Benson, Sarah'
                  ),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemText,
                    null,
                    'ZetaComm'
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<List>\n  <Card>\n    <form>\n      <Row>\n        <Col xs={9}>\n          <Input type="text" placeholder="Search Contacts...">\n            <i className="fa fa-search" />\n          </Input>\n        </Col>\n        <Col xs={3}>\n          <Button bsStyle="primary" block>\n            <i className="fa fa-plus" />\n            Add\n          </Button>\n        </Col>\n      </Row>\n    </form>\n\n    ...list markup goes here...\n\n  </Card>\n</List>'
        )
      );
    }
  }]);

  return ListSearch;
})(_react2['default'].Component);

exports['default'] = ListSearch;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var Lists = (function (_React$Component) {
  _inherits(Lists, _React$Component);

  function Lists() {
    _classCallCheck(this, Lists);

    _get(Object.getPrototypeOf(Lists.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Lists, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-lists' },
        _react2['default'].createElement(
          'h2',
          null,
          'Lists'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Bootcards Lists are used to navigate the entities in your app (e.g. Contacts, Files, Messages, etc).'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Lists are wrapped in the ',
          _react2['default'].createElement(
            'code',
            null,
            '.bootcards-list'
          ),
          ' class'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.List,
            null,
            _react2['default'].createElement(
              _reactBootcards.Card,
              null,
              _react2['default'].createElement(
                _reactBootstrap.ListGroup,
                { fill: true },
                _react2['default'].createElement(
                  _reactBootstrap.ListGroupItem,
                  { href: '#' },
                  _react2['default'].createElement('img', { src: 'images/Sofia Acey.jpg', className: 'img-rounded pull-left' }),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemHeader,
                    null,
                    'Acey, Sofia'
                  ),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemText,
                    null,
                    'Masung Corp.'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ListGroupItem,
                  { href: '#' },
                  _react2['default'].createElement('img', { src: 'images/Joseph Barish.jpg', className: 'img-rounded pull-left' }),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemHeader,
                    null,
                    'Barish, Joseph'
                  ),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemText,
                    null,
                    'Masung Corp.'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ListGroupItem,
                  { href: '#' },
                  _react2['default'].createElement('img', { src: 'images/Sarah Benson.jpg', className: 'img-rounded pull-left' }),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemHeader,
                    null,
                    'Benson, Sarah'
                  ),
                  _react2['default'].createElement(
                    _reactBootcards.ListGroupItemText,
                    null,
                    'ZetaComm'
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<List>\n  <Card>\n    <ListGroup fill>\n      <ListGroupItem href="#">\n        <img src="images/Sofia Acey.jpg" className="img-rounded pull-left"/>\n        <ListGroupItemHeader>Acey, Sofia</ListGroupItemHeader>\n        <ListGroupItemText>Masung Corp.</ListGroupItemText>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <img src="images/Joseph Barish.jpg" className="img-rounded pull-left"/>\n        <ListGroupItemHeader>Barish, Joseph</ListGroupItemHeader>\n        <ListGroupItemText>Masung Corp.</ListGroupItemText>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <img src="images/Sarah Benson.jpg" className="img-rounded pull-left"/>\n        <ListGroupItemHeader>Benson, Sarah</ListGroupItemHeader>\n        <ListGroupItemText>ZetaComm</ListGroupItemText>\n      </ListGroupItem>\n    </ListGroup>\n  </Card>\n</List>'
        )
      );
    }
  }]);

  return Lists;
})(_react2['default'].Component);

exports['default'] = Lists;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var MediaCard = (function (_React$Component) {
  _inherits(MediaCard, _React$Component);

  function MediaCard() {
    _classCallCheck(this, MediaCard);

    _get(Object.getPrototypeOf(MediaCard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MediaCard, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-mediacard' },
        _react2['default'].createElement(
          'h3',
          null,
          'Media Cards'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Media Cards hold larger images or videos.'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.Card,
            { cardStyle: 'media' },
            _react2['default'].createElement(
              _reactBootcards.CardHeader,
              null,
              _react2['default'].createElement(
                _reactBootcards.CardTitle,
                null,
                'Media Card Heading'
              )
            ),
            'Media card description lorem ipsum dolor est compendium',
            _react2['default'].createElement('img', { fill: true, src: 'http://www.teamstudio.com/Portals/218295/images/istock_000001242290small.jpg', className: 'img-responsive' }),
            _react2['default'].createElement(
              _reactBootcards.CardFooter,
              null,
              _react2['default'].createElement(
                _reactBootstrap.ButtonGroup,
                { justified: true },
                _react2['default'].createElement(
                  _reactBootstrap.ButtonGroup,
                  null,
                  _react2['default'].createElement(
                    _reactBootstrap.Button,
                    null,
                    _react2['default'].createElement('i', { className: 'fa fa-arrow-down' }),
                    'Download'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ButtonGroup,
                  null,
                  _react2['default'].createElement(
                    _reactBootstrap.Button,
                    null,
                    _react2['default'].createElement('i', { className: 'fa fa-star' }),
                    'Favorite'
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.ButtonGroup,
                  null,
                  _react2['default'].createElement(
                    _reactBootstrap.Button,
                    null,
                    _react2['default'].createElement('i', { className: 'fa fa-envelope' }),
                    'Email'
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<Card cardStyle="media">\n  <CardHeader>\n    <CardTitle>Media Card Heading</CardTitle>\n  </CardHeader>\n  Media card description lorem ipsum dolor est compendium\n  <img fill src="http://www.teamstudio.com/Portals/218295/images/istock_000001242290small.jpg" className="img-responsive" />\n  <CardFooter>\n    <ButtonGroup justified>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-arrow-down" />\n          Download\n        </Button>\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-star" />\n          Favorite\n        </Button>\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-envelope" />\n          Email\n        </Button>\n      </ButtonGroup>\n    </ButtonGroup>\n  </CardFooter>\n</Card>'
        )
      );
    }
  }]);

  return MediaCard;
})(_react2['default'].Component);

exports['default'] = MediaCard;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var Modals = (function (_React$Component) {
  _inherits(Modals, _React$Component);

  function Modals() {
    _classCallCheck(this, Modals);

    _get(Object.getPrototypeOf(Modals.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Modals, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-modals' },
        _react2['default'].createElement(
          'h2',
          null,
          'Modals'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Sometimes, you\'ll want to put something like a form or an important message in a modal, obscuring the other content completely.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'The markup is quite similar to Cards, with a header, body, and footer.'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'warning' },
          'Remember to wrap buttons in the header of your modals in <div className="btn-group"> or your buttons might not work.'
        )
      );
    }
  }]);

  return Modals;
})(_react2['default'].Component);

exports['default'] = Modals;
module.exports = exports['default'];

},{"./Highlight":14,"./Section":23,"react":undefined,"react-bootstrap":undefined}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-navbar' },
        _react2['default'].createElement(
          'h3',
          null,
          'Navbar'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'The Bootcards Navbar is the main navigation system for desktop browsers.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'On desktop, it uses Bootstrap\'s default ',
          _react2['default'].createElement(
            'code',
            null,
            '.navbar-fixed-top'
          ),
          ' styles and shows all the top level navigation items.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'On mobile devices, there isn\'t enough space for these items, so the Bootstrap Navbar is replaced with a simpler, more native version with only a Title and limited space for other functions (e.g. a Back button or Menu button). These buttons are hidden from desktop browsers, which don\'t need them.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          _react2['default'].createElement(
            'strong',
            null,
            'In addition to the Navbar, you\'ll also need to implement one of the other navigation structures below (Footer Bar or Sliding Sidebar) to allow mobile users to navigate your app.'
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<div class="navbar navbar-default navbar-fixed-top" role="navigation">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n    </div>\n    <button type="button" class="btn btn-default btn-back navbar-left pull-left hidden " onclick="history.back()">\n      <i class="fa fa-lg fa-chevron-left"></i>\n      <span>Back</span>\n    </button>\n    <button type="button" class="btn btn-default btn-menu navbar-left pull-left offcanvas-toggle">\n      <i class="fa fa-lg fa-bars"></i>\n      <span>Menu</span>\n    </button>\n    <a class="navbar-brand" title="Customers v{{getAppVersion}}" href="/">Customers</a>\n    <div class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li class="active">\n          <a href="#">\n            <i class="fa fa-users"></i> \n            Contacts\n          </a>\n        </li>\n        <li>\n          <a href="#">\n            <i class="fa fa-building-o"></i> \n            Companies\n          </a>\n        </li>\n        <li>\n          <a href="#">\n            <i class="fa fa-gears"></i> \n            Settings\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>'
        )
      );
    }
  }]);

  return Navbar;
})(_react2['default'].Component);

exports['default'] = Navbar;
module.exports = exports['default'];

},{"./Highlight":14,"./Section":23,"react":undefined}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var Navigation = (function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    _get(Object.getPrototypeOf(Navigation.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-navigation' },
        _react2['default'].createElement(
          'h2',
          null,
          'Navigation'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Bootcards offers 3 navigation methods: the Navbar, Footer Bar, or Sliding Sidebar.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'What you use will depend on the needs of your app, and the number of top-level navigation items. Apps with fewer items would suit using footer navigation on mobile, as they\'re always accessible, but footer navigation may be impractical for apps with many top level navigation items as it can only fit 4 on phones.'
        )
      );
    }
  }]);

  return Navigation;
})(_react2['default'].Component);

exports['default'] = Navigation;
module.exports = exports['default'];

},{"./Highlight":14,"./Section":23,"react":undefined}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var RichTextCard = (function (_React$Component) {
  _inherits(RichTextCard, _React$Component);

  function RichTextCard() {
    _classCallCheck(this, RichTextCard);

    _get(Object.getPrototypeOf(RichTextCard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(RichTextCard, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-richtextcard' },
        _react2['default'].createElement(
          'h3',
          null,
          'Rich Text Cards'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Rich Text Cards are designed for longer passages of text, which may include various heading levels, paragraphs and lists.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'They have more padding around the ',
          _react2['default'].createElement(
            'code',
            null,
            '.panel-content'
          ),
          ' to help readability.'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.Card,
            { cardStyle: 'richtext' },
            _react2['default'].createElement(
              _reactBootcards.CardHeader,
              null,
              _react2['default'].createElement(
                _reactBootcards.CardTitle,
                null,
                'Rich Text Card Heading'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'lead' },
              'Lead body copy vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.'
            ),
            _react2['default'].createElement(
              'h1',
              null,
              'Heading 1'
            ),
            _react2['default'].createElement(
              'h2',
              null,
              'Heading 2'
            ),
            _react2['default'].createElement(
              'h3',
              null,
              'Heading 3'
            ),
            _react2['default'].createElement(
              'h4',
              null,
              'Heading 4'
            ),
            _react2['default'].createElement(
              'h5',
              null,
              'Heading 5'
            ),
            _react2['default'].createElement(
              'h6',
              null,
              'Heading 6'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis pretium nisl. Etiam at vestibulum purus, sit amet blandit mi. Duis enim lectus, tempus nec varius sed, sollicitudin quis velit. Fusce quis sem porttitor, euismod ante vitae, ultricies erat.'
            ),
            _react2['default'].createElement(
              'ul',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'Duis cursus dui et turpis gravida sollicitudin.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Donec eget mauris feugiat, euismod purus nec, feugiat neque.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Nunc erat est, molestie eget magna in, consectetur euismod lorem.'
              )
            ),
            _react2['default'].createElement(
              'ol',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'Sed luctus congue orci quis tempus.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Praesent in viverra lorem.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Suspendisse augue lacus, porta quis imperdiet at, posuere vel nulla.'
              )
            ),
            _react2['default'].createElement(
              _reactBootcards.CardFooter,
              null,
              _react2['default'].createElement(
                'small',
                null,
                'Built with Bootcards - Rich Text Card'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<Card cardStyle="richtext">\n  <CardHeader>\n    <CardTitle>Rich Text Card Heading</CardTitle>\n  </CardHeader>\n  <p className="lead">Lead body copy vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>\n  <h1>Heading 1</h1>\n  <h2>Heading 2</h2>\n  <h3>Heading 3</h3>\n  <h4>Heading 4</h4>\n  <h5>Heading 5</h5>\n  <h6>Heading 6</h6>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis pretium nisl. Etiam at vestibulum purus, sit amet blandit mi. Duis enim lectus, tempus nec varius sed, sollicitudin quis velit. Fusce quis sem porttitor, euismod ante vitae, ultricies erat.</p>\n  <ul>\n    <li>Duis cursus dui et turpis gravida sollicitudin.</li>\n    <li>Donec eget mauris feugiat, euismod purus nec, feugiat neque.</li>\n    <li>Nunc erat est, molestie eget magna in, consectetur euismod lorem.</li>\n  </ul>\n  <ol>\n    <li>Sed luctus congue orci quis tempus.</li>\n    <li>Praesent in viverra lorem.</li>\n    <li>Suspendisse augue lacus, porta quis imperdiet at, posuere vel nulla.</li>\n  </ol>\n  <CardFooter>\n    <small>Built with Bootcards - Rich Text Card</small>\n  </CardFooter>\n</Card>'
        )
      );
    }
  }]);

  return RichTextCard;
})(_react2['default'].Component);

exports['default'] = RichTextCard;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Section = (function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section() {
    _classCallCheck(this, Section);

    _get(Object.getPrototypeOf(Section.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'bs-docs-section') }),
        this.props.children
      );
    }
  }]);

  return Section;
})(_react2['default'].Component);

exports['default'] = Section;
module.exports = exports['default'];

},{"classnames":undefined,"react":undefined}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var SlidingSidebar = (function (_React$Component) {
  _inherits(SlidingSidebar, _React$Component);

  function SlidingSidebar() {
    _classCallCheck(this, SlidingSidebar);

    _get(Object.getPrototypeOf(SlidingSidebar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SlidingSidebar, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-slidingsidebar' },
        _react2['default'].createElement(
          'h3',
          null,
          'Sliding Sidebar (\'offcanvas\')'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'The Sliding Sidebar offers complex apps more space navigation items.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'This is hidden by default, and accessed when required via a Menu button on the left-hand side of the Navbar.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'On desktop browsers, the Sliding Sidebar is inactive, as it\'s unnecessary.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'The Sliding Sidebar consists of two elements:'
        ),
        _react2['default'].createElement(
          'li',
          null,
          'A button to show/ hide the sidebar:'
        ),
        _react2['default'].createElement('p', null),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<button type="button" class="btn btn-default btn-menu" data-toggle="offcanvas">\n  <i class="fa fa-lg fa-bars"></i>\n  <span>Menu</span>\n</button>'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Bootcards tries to find the element that has ',
          _react2['default'].createElement(
            'code',
            null,
            'data-toggle="offcanvas"'
          ),
          ' and attaches a handler to show/ hide the menu.'
        ),
        _react2['default'].createElement(
          'li',
          null,
          'The menu:'
        ),
        _react2['default'].createElement('p', null),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<div class="navmenu offcanvas offcanvas-left">\n  <ul class="nav">\n    <li class="active">\n      <a href="#">\n        <i class="fa fa-lg fa-users"></i>\n        Contacts\n      </a>\n    </li>\n    <li>\n      <a href="#">\n        <i class="fa fa-lg fa-building-o"></i>\n        Companies\n      </a>\n    </li>\n    <li>\n      <a href="#">\n        <i class="fa fa-lg fa-gears"></i>\n        Settings\n      </a>\n    </li>\n  </ul>\n</div>'
        )
      );
    }
  }]);

  return SlidingSidebar;
})(_react2['default'].Component);

exports['default'] = SlidingSidebar;
module.exports = exports['default'];

},{"./Highlight":14,"./Section":23,"react":undefined}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var Submenus = (function (_React$Component) {
  _inherits(Submenus, _React$Component);

  function Submenus() {
    _classCallCheck(this, Submenus);

    _get(Object.getPrototypeOf(Submenus.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Submenus, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-submenus' },
        _react2['default'].createElement(
          'h4',
          null,
          'Submenus'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Using the standard Bootstap \'collapse\' function, the offcanvas can also contain menu options with submenu options.'
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<!--option with submenu-->\n<li class="collapse litop4">\n  <a href="#otherControls" class="bootcards-parent" data-toggle="collapse" data-parent=".collapse">\n    <i class="fa fa-lg fa-fw fa-chevron-circle-right"></i> Settings\n  </a>\n  <div id="otherControls" class="collapse in">\n    <ul class="nav navmenu-nav"><li >\n      <a href="#" ><i class="fa fa-lg fa-fw fa-cog"></i> General</a></li>\n    <li>\n      <a href="#"><i class="fa fa-lg fa-fw fa-user"></i> Account</a>\n    </li>\n     <li>\n      <a href="#"><i class="fa fa-lg fa-fw fa-refresh"></i> Sync</a>\n    </li>\n    </ul>\n  </div>\n</li>'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Enable the collapsible menu using the following script: ',
          _react2['default'].createElement(
            'code',
            null,
            '$(\'.collapse\').collapse();'
          )
        ),
        _react2['default'].createElement(
          'p',
          null,
          'For more details, see ',
          _react2['default'].createElement(
            'a',
            { href: 'http://getbootstrap.com/javascript/#collapse', target: '_blank' },
            'here'
          ),
          '.'
        )
      );
    }
  }]);

  return Submenus;
})(_react2['default'].Component);

exports['default'] = Submenus;
module.exports = exports['default'];

},{"./Highlight":14,"./Section":23,"react":undefined}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var SummaryCard = (function (_React$Component) {
  _inherits(SummaryCard, _React$Component);

  function SummaryCard() {
    _classCallCheck(this, SummaryCard);

    _get(Object.getPrototypeOf(SummaryCard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SummaryCard, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-summarycard' },
        _react2['default'].createElement(
          'h3',
          null,
          'Summary Cards'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Summary cards can be used on dashboards, etc to highlight important pieces of data in your app.'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.Card,
            { cardStyle: 'summary' },
            _react2['default'].createElement(
              _reactBootcards.CardHeader,
              null,
              _react2['default'].createElement(
                _reactBootcards.CardTitle,
                null,
                'Summay Card Heading'
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Row,
              null,
              _react2['default'].createElement(
                _reactBootstrap.Col,
                { xs: 6, sm: 4 },
                _react2['default'].createElement(
                  _reactBootcards.SummaryItem,
                  { href: '#' },
                  _react2['default'].createElement('i', { className: 'fa fa-3x fa-users' }),
                  _react2['default'].createElement(
                    'h4',
                    null,
                    'Contacts ',
                    _react2['default'].createElement(
                      _reactBootstrap.Label,
                      { bsStyle: 'info' },
                      '432'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.Col,
                { xs: 6, sm: 4 },
                _react2['default'].createElement(
                  _reactBootcards.SummaryItem,
                  { href: '#' },
                  _react2['default'].createElement('i', { className: 'fa fa-3x fa-building-o' }),
                  _react2['default'].createElement(
                    'h4',
                    null,
                    'Companies ',
                    _react2['default'].createElement(
                      _reactBootstrap.Label,
                      { bsStyle: 'info' },
                      '98'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.Col,
                { xs: 6, sm: 4 },
                _react2['default'].createElement(
                  _reactBootcards.SummaryItem,
                  { href: '#' },
                  _react2['default'].createElement('i', { className: 'fa fa-3x fa-clipboard' }),
                  _react2['default'].createElement(
                    'h4',
                    null,
                    'Notes ',
                    _react2['default'].createElement(
                      _reactBootstrap.Label,
                      { bsStyle: 'danger' },
                      '54'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.Col,
                { xs: 6, sm: 4 },
                _react2['default'].createElement(
                  _reactBootcards.SummaryItem,
                  { href: '#' },
                  _react2['default'].createElement('i', { className: 'fa fa-3x fa-files-o' }),
                  _react2['default'].createElement(
                    'h4',
                    null,
                    'Files ',
                    _react2['default'].createElement(
                      _reactBootstrap.Label,
                      { bsStyle: 'info' },
                      '65'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.Col,
                { xs: 6, sm: 4 },
                _react2['default'].createElement(
                  _reactBootcards.SummaryItem,
                  { href: '#' },
                  _react2['default'].createElement('i', { className: 'fa fa-3x fa-check-square-o' }),
                  _react2['default'].createElement(
                    'h4',
                    null,
                    'Tasks ',
                    _react2['default'].createElement(
                      _reactBootstrap.Label,
                      { bsStyle: 'warning' },
                      '109'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootcards.CardFooter,
              null,
              _react2['default'].createElement(
                'small',
                null,
                'Built with Bootcards - Summary Card'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<Card cardStyle="summary">\n  <CardHeader>\n    <CardTitle>Summay Card Heading</CardTitle>\n  </CardHeader>\n  <Row>\n    <Col xs={6} sm={4}>\n      <SummaryItem href="#">\n        <i className="fa fa-3x fa-users"/>\n        <h4>Contacts <Label bsStyle="info">432</Label></h4>\n      </SummaryItem>\n    </Col>\n    <Col xs={6} sm={4}>\n      <SummaryItem href="#">\n        <i className="fa fa-3x fa-building-o"/>\n        <h4>Companies <Label bsStyle="info">98</Label></h4>\n      </SummaryItem>\n    </Col>\n    <Col xs={6} sm={4}>\n      <SummaryItem href="#">\n        <i className="fa fa-3x fa-clipboard"/>\n        <h4>Notes <Label bsStyle="danger">54</Label></h4>\n      </SummaryItem>\n    </Col>\n    <Col xs={6} sm={4}>\n      <SummaryItem href="#">\n        <i className="fa fa-3x fa-files-o"/>\n        <h4>Files <Label bsStyle="info">65</Label></h4>\n      </SummaryItem>\n    </Col>\n    <Col xs={6} sm={4}>\n      <SummaryItem href="#">\n        <i className="fa fa-3x fa-check-square-o"/>\n        <h4>Tasks <Label bsStyle="warning">109</Label></h4>\n      </SummaryItem>\n    </Col>\n  </Row>\n  <CardFooter>\n    <small>Built with Bootcards - Summary Card</small>\n  </CardFooter>\n</Card>'
        )
      );
    }
  }]);

  return SummaryCard;
})(_react2['default'].Component);

exports['default'] = SummaryCard;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactBootcards = require('react-bootcards');

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Highlight = require('./Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var TableCard = (function (_React$Component) {
  _inherits(TableCard, _React$Component);

  function TableCard() {
    _classCallCheck(this, TableCard);

    _get(Object.getPrototypeOf(TableCard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TableCard, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Section2['default'],
        { id: 'doc-tablecard' },
        _react2['default'].createElement(
          'h3',
          null,
          'Table Cards'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          'Table Cards display tabular data.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'You can use the same table classes as Bootstrap, e.g. the ',
          _react2['default'].createElement(
            'code',
            null,
            '.table-hover'
          ),
          ' and ',
          _react2['default'].createElement(
            'code',
            null,
            '.active'
          ),
          ' classes used in this example.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Wrap wider tables in a ',
          _react2['default'].createElement(
            'code',
            null,
            '<div class="table-responsive">'
          ),
          ' so they\'ll be able to scroll horizontally in narrower browsers such as mobiles, and not be cut off.'
        ),
        _react2['default'].createElement(
          _Example2['default'],
          null,
          _react2['default'].createElement(
            _reactBootcards.Card,
            null,
            _react2['default'].createElement(
              _reactBootcards.CardHeader,
              null,
              _react2['default'].createElement(
                _reactBootcards.CardTitle,
                null,
                'Table Card Title'
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Table,
              { responsive: true, hover: true, fill: true },
              _react2['default'].createElement(
                'thead',
                null,
                _react2['default'].createElement(
                  'tr',
                  { className: 'active' },
                  _react2['default'].createElement(
                    'th',
                    null,
                    'Name'
                  ),
                  _react2['default'].createElement(
                    'th',
                    null,
                    'Forecast'
                  ),
                  _react2['default'].createElement(
                    'th',
                    null,
                    'Quota'
                  )
                )
              ),
              _react2['default'].createElement(
                'tbody',
                null,
                _react2['default'].createElement(
                  'tr',
                  null,
                  _react2['default'].createElement(
                    'td',
                    null,
                    'Guy Bardsley'
                  ),
                  _react2['default'].createElement(
                    'td',
                    null,
                    '2750'
                  ),
                  _react2['default'].createElement(
                    'td',
                    null,
                    '4000'
                  )
                ),
                _react2['default'].createElement(
                  'tr',
                  null,
                  _react2['default'].createElement(
                    'td',
                    null,
                    'Adam Callahan'
                  ),
                  _react2['default'].createElement(
                    'td',
                    null,
                    '3300'
                  ),
                  _react2['default'].createElement(
                    'td',
                    null,
                    '4000'
                  )
                ),
                _react2['default'].createElement(
                  'tr',
                  null,
                  _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                      'strong',
                      null,
                      'Total'
                    )
                  ),
                  _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                      'strong',
                      null,
                      '6050'
                    )
                  ),
                  _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                      'strong',
                      null,
                      '8000'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootcards.CardFooter,
              null,
              _react2['default'].createElement(
                'small',
                null,
                'Built with Bootcards - Table Card'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _Highlight2['default'],
          null,
          '<Card>\n  <CardHeader>\n    <CardTitle>Table Card Title</CardTitle>\n  </CardHeader>\n  <Table responsive hover fill>\n    <thead>\n      <tr className="active"><th>Name</th><th>Forecast</th><th>Quota</th></tr>\n    </thead>\n    <tbody>\n      <tr><td>Guy Bardsley</td><td>2750</td><td>4000</td></tr>\n      <tr><td>Adam Callahan</td><td>3300</td><td>4000</td></tr>\n      <tr><td><strong>Total</strong></td><td><strong>6050</strong></td><td><strong>8000</strong></td></tr>\n    </tbody>\n  </Table>\n  <CardFooter>\n    <small>Built with Bootcards - Table Card</small>\n  </CardFooter>\n</Card>'
        )
      );
    }
  }]);

  return TableCard;
})(_react2['default'].Component);

exports['default'] = TableCard;
module.exports = exports['default'];

},{"./Example":9,"./Highlight":14,"./Section":23,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined}],28:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],29:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],30:[function(require,module,exports){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;
var KeyPrefix = '@@History/';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
}

function readState(key) {
  var json = window.sessionStorage.getItem(createKey(key));

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
},{}],31:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],33:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _createLocation = require('./createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory(options) {
  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Browser history needs a DOM');

  var isSupported = _DOMUtils.supportsHistory();

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    return _createLocation2['default'](path, state, undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (isSupported) {
        window.history.pushState(historyState, null, path);
      } else {
        window.location.href = path; // Use page reload to preserve the URL.
      }
    } else {
        // REPLACE
        if (isSupported) {
          window.history.replaceState(historyState, null, path);
        } else {
          window.location.replace(path); // Use page reload to preserve the URL.
        }
      }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
},{"./Actions":28,"./DOMStateStorage":30,"./DOMUtils":31,"./ExecutionEnvironment":32,"./createDOMHistory":34,"./createLocation":36,"invariant":42}],34:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'DOM history needs a DOM');

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
},{"./DOMUtils":31,"./ExecutionEnvironment":32,"./createHistory":35,"invariant":42}],35:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation = require('./createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        finishTransition(nextLocation);
        updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function pushState(state, path) {
    transitionTo(_createLocation2['default'](path, state, _Actions.PUSH, createKey()));
  }

  function replaceState(state, path) {
    transitionTo(_createLocation2['default'](path, state, _Actions.REPLACE, createKey()));
  }

  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(path) {
    return path;
  }

  function createHref(path) {
    return path;
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    pushState: pushState,
    replaceState: replaceState,
    setState: setState,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,

    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":28,"./AsyncUtils":29,"./createLocation":36,"./deprecate":37,"./runTransitionHook":38,"deep-equal":39}],36:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Actions = require('./Actions');

function extractPath(string) {
  var match = string.match(/https?:\/\/[^\/]*/);

  if (match == null) return string;

  _warning2['default'](false, 'Location path must be pathname + query string only, not a fully qualified URL like "%s"', string);

  return string.substring(match[0].length);
}

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  path = extractPath(path);

  var pathname = path;
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":28,"warning":43}],37:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    _warning2['default'](false, message);
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
},{"warning":43}],38:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead');
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
},{"warning":43}],39:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":40,"./lib/keys.js":41}],40:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],41:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],42:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":44}],43:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":44}],44:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZDovU291cmNlL2pzL3JlYWN0LWJvb3RjYXJkcy9leGFtcGxlL3NyYy9BYm91dC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvRG9jdW1lbnRhdGlvbi5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvSG9tZS5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvQmFzZUNhcmQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0NhcmRzLmpzIiwiZDovU291cmNlL2pzL3JlYWN0LWJvb3RjYXJkcy9leGFtcGxlL3NyYy9zZWN0aW9ucy9DaGFydENhcmQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0RvdWJsZU5hdmJhci5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvRXhhbXBsZS5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvRmlsZUNhcmQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0Zvb3RlckJhci5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvRm9ybUNhcmQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0dyaWQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0hpZ2hsaWdodC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvTGlzdERldGFpbC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvTGlzdFNlYXJjaC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvTGlzdHMuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL01lZGlhQ2FyZC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvTW9kYWxzLmpzIiwiZDovU291cmNlL2pzL3JlYWN0LWJvb3RjYXJkcy9leGFtcGxlL3NyYy9zZWN0aW9ucy9OYXZiYXIuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL05hdmlnYXRpb24uanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL1JpY2hUZXh0Q2FyZC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvU2VjdGlvbi5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvU2xpZGluZ1NpZGViYXIuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL1N1Ym1lbnVzLmpzIiwiZDovU291cmNlL2pzL3JlYWN0LWJvb3RjYXJkcy9leGFtcGxlL3NyYy9zZWN0aW9ucy9TdW1tYXJ5Q2FyZC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvVGFibGVDYXJkLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0FjdGlvbnMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQXN5bmNVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ET01TdGF0ZVN0b3JhZ2UuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRE9NVXRpbHMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlRE9NSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUxvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2RlcHJlY2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ydW5UcmFuc2l0aW9uSG9vay5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2hpc3Rvcnkvbm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2lzX2FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3Rvcnkvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2hpc3Rvcnkvbm9kZV9tb2R1bGVzL3dhcm5pbmcvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9i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QUNDO1FBQ1Y7OztVQUNHLHNsQkFBc2xCO1NBQzdrQjtPQUNKLENBQ1Y7S0FDSDs7O1NBakNHLFNBQVM7R0FBUyxtQkFBTSxTQUFTOztxQkFvQ3hCLFNBQVM7Ozs7QUM1Q3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Um93LCBXZWxsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxXZWxsIGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICA8cD5Cb290Y2FyZHMgaXMgYW4gb3BlbiBzb3VyY2UgcHJvamVjdCBjcmVhdGVkIGJ5IDxhIGhyZWY9XCJodHRwOi8vd3d3LnR3aXR0ZXIuY29tL21hcmtsZXVzaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QG1hcmtsZXVzaW5rPC9hPiwgPGEgaHJlZj1cImh0dHA6Ly93d3cudHdpdHRlci5jb20vc2l2ZXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Ac2l2ZXM8L2E+IGFuZCA8YSBocmVmPVwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9qYWNraGVyYmVydFwiIHRhcmdldD1cIl9ibGFua1wiPkBqYWNraGVyYmVydDwvYT4gYW5kIHNwb25zb3JlZCBieSA8YSBocmVmPVwiaHR0cDovL3d3dy50ZWFtc3R1ZGlvLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlRlYW1zdHVkaW88L2E+LjwvcD5cclxuICAgICAgICAgIDxwPkl0IHdhcyBvcmlnaW5hbGx5IHJlbGVhc2VkIG9uIE1vbmRheSBBcHJpbCAxNHRoIDIwMTQuICBJdCB3YXMgY3JlYXRlZCB0byBtZWV0IFRlYW1zdHVkaW8ncyBuZWVkIGZvciBhIG1vZHVsYXIgdXNlciBpbnRlcmZhY2UgZnJhbWV3b3JrIHRoYXQgY291bGQgYmUgdXNlZCB0byBidWlsZCBlbnRlcnByaXNlIG1vYmlsZSBhcHBzIHZlcnkgcXVpY2tseS4gIEJ5IGJ1aWxkaW5nIG9uIHRvcCBvZiBCb290c3RyYXAsIEJvb3RjYXJkcyB0YWtlcyBhZHZhbnRhZ2Ugb2YgQm9vdHN0cmFwJ3MgZ3JlYXQgY2FwYWJpbGl0aWVzLCB3aGlsc3QgYWRkaW5nIHN1cHBvcnQgZm9yIHRoZSA8YSBocmVmPVwiaHR0cDovL2luc2lkZWludGVyY29tLmlvL3doeS1jYXJkcy1hcmUtdGhlLWZ1dHVyZS1vZi10aGUtd2ViL1wiIHRhcmdldD1cIl9ibGFua1wiPkNhcmRzIGRlc2lnbiBwYXR0ZXJuPC9hPi48L3A+XHJcbiAgICAgICAgPC9XZWxsPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtOYXYsIE5hdkl0ZW0sIFJvdywgQ29sfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge0NvbnRhaW5lciwgQ2FyZHMsIENhcmR9IGZyb20gJ3JlYWN0LWJvb3RjYXJkcyc7XHJcblxyXG5pbXBvcnQgR3JpZCBmcm9tICcuL3NlY3Rpb25zL0dyaWQnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL3NlY3Rpb25zL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgU2VjTmF2YmFyIGZyb20gJy4vc2VjdGlvbnMvTmF2YmFyJztcclxuaW1wb3J0IERvdWJsZU5hdmJhciBmcm9tICcuL3NlY3Rpb25zL0RvdWJsZU5hdmJhcic7XHJcbmltcG9ydCBGb290ZXJCYXIgZnJvbSAnLi9zZWN0aW9ucy9Gb290ZXJCYXInO1xyXG5pbXBvcnQgU2xpZGluZ1NpZGViYXIgZnJvbSAnLi9zZWN0aW9ucy9TbGlkaW5nU2lkZWJhcic7XHJcbmltcG9ydCBTdWJtZW51cyBmcm9tICcuL3NlY3Rpb25zL1N1Ym1lbnVzJztcclxuaW1wb3J0IExpc3RzIGZyb20gJy4vc2VjdGlvbnMvTGlzdHMnO1xyXG5pbXBvcnQgTGlzdERldGFpbCBmcm9tICcuL3NlY3Rpb25zL0xpc3REZXRhaWwnO1xyXG5pbXBvcnQgTGlzdFNlYXJjaCBmcm9tICcuL3NlY3Rpb25zL0xpc3RTZWFyY2gnO1xyXG5pbXBvcnQgU2VjQ2FyZHMgZnJvbSAnLi9zZWN0aW9ucy9DYXJkcyc7XHJcbmltcG9ydCBCYXNlQ2FyZCBmcm9tICcuL3NlY3Rpb25zL0Jhc2VDYXJkJztcclxuaW1wb3J0IEZvcm1DYXJkIGZyb20gJy4vc2VjdGlvbnMvRm9ybUNhcmQnO1xyXG5pbXBvcnQgVGFibGVDYXJkIGZyb20gJy4vc2VjdGlvbnMvVGFibGVDYXJkJztcclxuaW1wb3J0IENoYXJ0Q2FyZCBmcm9tICcuL3NlY3Rpb25zL0NoYXJ0Q2FyZCc7XHJcbmltcG9ydCBTdW1tYXJ5Q2FyZCBmcm9tICcuL3NlY3Rpb25zL1N1bW1hcnlDYXJkJztcclxuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tICcuL3NlY3Rpb25zL01lZGlhQ2FyZCc7XHJcbmltcG9ydCBGaWxlQ2FyZCBmcm9tICcuL3NlY3Rpb25zL0ZpbGVDYXJkJztcclxuaW1wb3J0IFJpY2hUZXh0Q2FyZCBmcm9tICcuL3NlY3Rpb25zL1JpY2hUZXh0Q2FyZCc7XHJcbmltcG9ydCBNb2RhbHMgZnJvbSAnLi9zZWN0aW9ucy9Nb2RhbHMnO1xyXG5cclxuY2xhc3MgRG9jdW1lbnRhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlbGVjdGVkRG9jc01lbnU6ICdkb2MtZ3JpZCdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHNtPXszfSBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jcy1tZW51IGFmZml4XCI+XHJcbiAgICAgICAgICAgIDxOYXYgYnNTdHlsZT1cInBpbGxzXCIgc3RhY2tlZCBvblNlbGVjdD17dGhpcy5oYW5kbGVEb2NzTWVudVNlbGVjdC5iaW5kKHRoaXMpfSBhY3RpdmVLZXk9e3RoaXMuc3RhdGUuc2VsZWN0ZWREb2NzTWVudX0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwiXCIgaHJlZj1cIiNkb2MtZ3JpZFwiIGV2ZW50S2V5PVwiZG9jLWdyaWRcIj5HcmlkIFN5c3RlbTwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJcIiBocmVmPVwiI2RvYy1uYXZpZ2F0aW9uXCIgZXZlbnRLZXk9XCJkb2MtbmF2aWdhdGlvblwiPk5hdmlnYXRpb248L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtbmF2YmFyXCIgZXZlbnRLZXk9XCJkb2MtbmF2YmFyXCI+TmF2YmFyPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cInN1YlwiIGhyZWY9XCIjZG9jLWRvdWJsZW5hdmJhclwiIGV2ZW50S2V5PVwiZG9jLWRvdWJsZW5hdmJhclwiPkRvdWJsZSBOYXZiYXI8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtZm9vdGVyYmFyXCIgZXZlbnRLZXk9XCJkb2MtZm9vdGVyYmFyXCI+Rm9vdGVyIEJhcjwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1zbGlkaW5nc2lkZWJhclwiIGV2ZW50S2V5PVwiZG9jLXNsaWRpbmdzaWRlYmFyXCI+U2xpZGluZyBTaWRlYmFyPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIjZG9jLWxpc3RzXCIgZXZlbnRLZXk9XCJkb2MtbGlzdHNcIj5MaXN0czwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1saXN0ZGV0YWlsXCIgZXZlbnRLZXk9XCJkb2MtbGlzdGRldGFpbFwiPkRldGFpbGVkIExpc3RzPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIjZG9jLWxpc3RzZWFyY2hcIiBldmVudEtleT1cImRvYy1saXN0c2VhcmNoXCI+TGlzdCBTZWFyY2ggJmFtcDsgTGlzdCBBY3Rpb25zPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIjZG9jLWNhcmRzXCIgZXZlbnRLZXk9XCJkb2MtY2FyZHNcIj5DYXJkczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1iYXNlY2FyZFwiIGV2ZW50S2V5PVwiZG9jLWJhc2VjYXJkXCI+QmFzZSBDYXJkczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1mb3JtY2FyZFwiIGV2ZW50S2V5PVwiZG9jLWZvcm1jYXJkXCI+Rm9ybSBDYXJkczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy10YWJsZWNhcmRcIiBldmVudEtleT1cImRvYy10YWJsZWNhcmRcIj5UYWJsZSBDYXJkczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1jaGFydGNhcmRcIiBldmVudEtleT1cImRvYy1jaGFydGNhcmRcIj5DaGFydCBDYXJkczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1zdW1tYXJ5Y2FyZFwiIGV2ZW50S2V5PVwiZG9jLXN1bW1hcnljYXJkXCI+U3VtbWFyeSBDYXJkczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1tZWRpYWNhcmRcIiBldmVudEtleT1cImRvYy1tZWRpYWNhcmRcIj5NZWRpYSBDYXJkczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1maWxlY2FyZFwiIGV2ZW50S2V5PVwiZG9jLWZpbGVjYXJkXCI+RmlsZSBDYXJkczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1yaWNodGV4dGNhcmRcIiBldmVudEtleT1cImRvYy1yaWNodGV4dGNhcmRcIj5SaWNoIFRleHQgQ2FyZHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwiXCIgaHJlZj1cIiNkb2MtbW9kYWxzXCIgZXZlbnRLZXk9XCJkb2MtbW9kYWxzXCI+TW9kYWxzPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDYXJkcyBzbT17OX0gY2xhc3NOYW1lPVwiYm9vdGNhcmRzLWRvY3VtZW50YXNpb24tY2FyZHNcIj5cclxuICAgICAgICAgIDxDYXJkIGNhcmRTdHlsZT1cInJpY2h0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxHcmlkIC8+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxTZWNOYXZiYXIgLz5cclxuICAgICAgICAgICAgPERvdWJsZU5hdmJhciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyQmFyIC8+XHJcbiAgICAgICAgICAgIDxTbGlkaW5nU2lkZWJhciAvPlxyXG4gICAgICAgICAgICA8U3VibWVudXMgLz5cclxuICAgICAgICAgICAgPExpc3RzIC8+XHJcbiAgICAgICAgICAgIDxMaXN0RGV0YWlsIC8+XHJcbiAgICAgICAgICAgIDxMaXN0U2VhcmNoIC8+XHJcbiAgICAgICAgICAgIDxTZWNDYXJkcyAvPlxyXG4gICAgICAgICAgICA8QmFzZUNhcmQgLz5cclxuICAgICAgICAgICAgPEZvcm1DYXJkIC8+XHJcbiAgICAgICAgICAgIDxUYWJsZUNhcmQgLz5cclxuICAgICAgICAgICAgPENoYXJ0Q2FyZCAvPlxyXG4gICAgICAgICAgICA8U3VtbWFyeUNhcmQgLz5cclxuICAgICAgICAgICAgPE1lZGlhQ2FyZCAvPlxyXG4gICAgICAgICAgICA8RmlsZUNhcmQgLz5cclxuICAgICAgICAgICAgPFJpY2hUZXh0Q2FyZCAvPlxyXG4gICAgICAgICAgICA8TW9kYWxzIC8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9DYXJkcz5cclxuICAgICAgPC9Sb3c+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRG9jc01lbnVTZWxlY3QoZXZlbnRLZXkpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkRG9jc01lbnU6IGV2ZW50S2V5fSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGV2ZW50S2V5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PkhvbWU8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY3JlYXRlQnJvd3Nlckhpc3RvcnkgZnJvbSAnaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnknO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7TmF2YmFyLCBOYXYsIE5hdkl0ZW19IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7TGlua0NvbnRhaW5lcn0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcclxuaW1wb3J0IERvY3VtZW50YXRpb24gZnJvbSAnLi9Eb2N1bWVudGF0aW9uJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnO1xyXG5cclxuY29uc3QgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZiYXIgaW52ZXJzZSBmaXhlZFRvcFxyXG4gICAgICAgICAgYnJhbmQ9ezxMaW5rIHRvPVwiL3JlYWN0LWJvb3RjYXJkc1wiIHRpdGxlPVwiQm9vdGNhcmRzXCI+Qm9vdGNhcmRzPC9MaW5rPn1cclxuICAgICAgICAgIHRvZ2dsZU5hdktleT17MH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TmF2IGV2ZW50S2V5PXswfT5cclxuICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezF9PlxyXG4gICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3JlYWN0LWJvb3RjYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaG9tZVwiIC8+IEhvbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsyfT5cclxuICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9yZWFjdC1ib290Y2FyZHMvZG9jdW1lbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYm9va1wiIC8+IERvY3VtZW50YXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXszfT5cclxuICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9yZWFjdC1ib290Y2FyZHMvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm8tY2lyY2xlXCIgLz4gQWJvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuUmVhY3QucmVuZGVyKChcclxuICA8Um91dGVyIGhpc3Rvcnk9e2NyZWF0ZUJyb3dzZXJIaXN0b3J5KCl9PlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxyXG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9IC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwicmVhY3QtYm9vdGNhcmRzL2RvY3VtZW50YXRpb25cIiBjb21wb25lbnQ9e0RvY3VtZW50YXRpb259IC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwicmVhY3QtYm9vdGNhcmRzL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtIb21lfS8+XHJcbiAgICA8L1JvdXRlPlxyXG4gIDwvUm91dGVyPlxyXG4pLCBkb2N1bWVudC5ib2R5KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIExpc3RHcm91cCwgTGlzdEdyb3VwSXRlbX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtDYXJkLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUsIENhcmRGb290ZXIsIExpc3RHcm91cEl0ZW1IZWFkZXIsIExpc3RHcm91cEl0ZW1UZXh0fSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XHJcbmltcG9ydCBFeGFtcGxlIGZyb20gJy4vRXhhbXBsZSc7XHJcblxyXG5jbGFzcyBCYXNlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtYmFzZWNhcmRcIj5cclxuICAgICAgICA8aDM+QmFzZSBDYXJkczwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPkJhc2UgQ2FyZHMgZGlzcGxheSBhIGxpc3Qgb2YgaW5mb3JtYXRpb24gc2VwYXJhdGVkIGJ5IGRpdmlkZXJzLjwvcD5cclxuICAgICAgICA8cD5SZXBsYWNlIHRoZSBkZWZhdWx0IDxjb2RlPi5wYW5lbC1ib2R5PC9jb2RlPiB3aXRoIGEgPGNvZGU+Lmxpc3QtZ3JvdXA8L2NvZGU+LjwvcD5cclxuICAgICAgICA8RXhhbXBsZT5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+QmFzZSBDYXJkIFRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgPExpc3RHcm91cCBmaWxsPlxyXG4gICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0Pk5hbWU8L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+Sm9obiBTbWl0aDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cclxuICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+T2NjdXBhdGlvbjwvTGlzdEdyb3VwSXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5XZWIgRGV2ZWxvcGVyPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gbWF1cmlzIHRlbGx1cywgdmVoaWN1bGEgdXQgdGVsbHVzIGlkLCBzdXNjaXBpdCBkYXBpYnVzIHRvcnRvci4gSW50ZWdlciB2aXZlcnJhIHR1cnBpcyBhYyBmcmluZ2lsbGEgaGVuZHJlcml0LiBTZWQgZmF1Y2lidXMgcG9zdWVyZSBmZWxpcyBldCBwZWxsZW50ZXNxdWUuIENyYXMgdmFyaXVzIHRvcnRvciB2aXRhZSBtb2xlc3RpZSB0ZW1wb3IuIFByb2luIHV0IHZpdmVycmEgZWxpdCwgYWMgZ3JhdmlkYSB0b3J0b3IuPC9MaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgICAgICAgICA8Q2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBCYXNlIENhcmQ8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9FeGFtcGxlPlxyXG4gICAgICAgIDxIaWdobGlnaHQ+XHJcbiAgICAgICAgICB7JzxDYXJkPlxcbiAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cXG4gICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj5CYXNlIENhcmQgVGl0bGU8L0NhcmRUaXRsZT5cXG4gICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cXG4gICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxcbiAgICAgIEVkaXRcXG4gICAgPC9CdXR0b24+XFxuICA8L0NhcmRIZWFkZXI+XFxuICA8TGlzdEdyb3VwIGZpbGw+XFxuICAgIDxMaXN0R3JvdXBJdGVtPlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5OYW1lPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5Kb2huIFNtaXRoPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxcbiAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgIDxMaXN0R3JvdXBJdGVtPlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5PY2N1cGF0aW9uPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5XZWIgRGV2ZWxvcGVyPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxcbiAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgIDxMaXN0R3JvdXBJdGVtPlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gbWF1cmlzIHRlbGx1cywgdmVoaWN1bGEgdXQgdGVsbHVzIGlkLCBzdXNjaXBpdCBkYXBpYnVzIHRvcnRvci4gSW50ZWdlciB2aXZlcnJhIHR1cnBpcyBhYyBmcmluZ2lsbGEgaGVuZHJlcml0LiBTZWQgZmF1Y2lidXMgcG9zdWVyZSBmZWxpcyBldCBwZWxsZW50ZXNxdWUuIENyYXMgdmFyaXVzIHRvcnRvciB2aXRhZSBtb2xlc3RpZSB0ZW1wb3IuIFByb2luIHV0IHZpdmVycmEgZWxpdCwgYWMgZ3JhdmlkYSB0b3J0b3IuPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgPC9MaXN0R3JvdXBJdGVtPlxcbiAgPC9MaXN0R3JvdXA+XFxuICA8Q2FyZEZvb3Rlcj5cXG4gICAgPHNtYWxsPkJ1aWx0IHdpdGggQm9vdGNhcmRzIC0gQmFzZSBDYXJkPC9zbWFsbD5cXG4gIDwvQ2FyZEZvb3Rlcj5cXG48L0NhcmQ+J31cclxuICAgICAgICA8L0hpZ2hsaWdodD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1BhbmVsLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7Q2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDYXJkRm9vdGVyfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XHJcbmltcG9ydCBFeGFtcGxlIGZyb20gJy4vRXhhbXBsZSc7XHJcblxyXG5jbGFzcyBDYXJkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtY2FyZHNcIj5cclxuICAgICAgICA8aDI+Q2FyZHM8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5DYXJkcyBhcmUgdGhlIGNvcmUgb2YgQm9vdGNhcmRzLCBhbmQgY29udGFpbiB5b3VyIGFwcCdzIGNvbnRlbnQuIERpZmZlcmVudCBDYXJkcyBhcmUgYXZhaWxhYmxlIGZvciBkaWZmZXJlbnQgdHlwZXMgb2YgY29udGVudCAodGV4dCwgdGFibGVzLCBmb3JtcywgY2hhcnRzLCBtZWRpYSwgZmlsZXMsIGV0YykuPC9wPlxyXG4gICAgICAgIDxwPkNhcmRzIGFyZSBiYXNlZCBvbiB0aGUgc2FtZSBtYXJrdXAgYXMgQm9vdHN0cmFwJ3MgPGNvZGU+LnBhbmVsPC9jb2RlPi4gRWFjaCBjYXJkIGNhbiBoYXZlIGEgPGNvZGU+LnBhbmVsLWhlYWRpbmc8L2NvZGU+LCA8Y29kZT4ucGFuZWwtYm9keTwvY29kZT4gYW5kIGEgPGNvZGU+LnBhbmVsLWZvb3RlcjwvY29kZT4uIEFsbCBvZiB0aGVzZSBhcmUgb3B0aW9uYWwsIHNvIGp1c3QgdXNlIHdoaWNoZXZlciBwYXJ0cyB5b3VyIGFwcCBuZWVkcy4gWW91IGNhbiBldmVuIHVzZSBtdWx0aXBsZSBoZWFkZXJzIG9yIGZvb3RlcnMgKGUuZy4gaWYgeW91IG5lZWRlZCBzZXBhcmF0ZSBmb290ZXIgYXJlYXMgc2VwYXJhdGVkIGJ5IGEgZGl2aWRlcikuPC9wPlxyXG4gICAgICAgIDxFeGFtcGxlPlxyXG4gICAgICAgICAgPFBhbmVsPlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+Q2FyZCBUaXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgQnV0dG9uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgPHA+Q2FyZCBjb250ZW50Li4uPC9wPlxyXG4gICAgICAgICAgICA8Q2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgICA8c21hbGw+Q2FyZCBmb290ZXIuLi48L3NtYWxsPlxyXG4gICAgICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgIDwvRXhhbXBsZT5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSwgQ2hhcnRDYW52YXMsIENhcmRGb290ZXJ9IGZyb20gJ3JlYWN0LWJvb3RjYXJkcyc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcclxuXHJcbmNsYXNzIENoYXJ0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBNb3JyaXMuQmFyKHtcclxuICAgICAgZWxlbWVudDogJ2JhckNoYXJ0JyxcclxuICAgICAgZGF0YTogW1xyXG4gICAgICAgIHtwZXJzb246ICdHdXkgQmFyZHNsZXknLCBzYWxlczogNTUwfSxcclxuICAgICAgICB7cGVyc29uOiAnQWRhbSBDYWxsYWhhbicsIHNhbGVzOiAxNTAwfSxcclxuICAgICAgICB7cGVyc29uOiAnQXJsbyBHZWlzdCcsIHNhbGVzOiAzNzUwfSxcclxuICAgICAgICB7cGVyc29uOiAnU2hlaWxhIEh1dGNoaW5zJywgc2FsZXM6IDM1MDB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHhrZXk6ICdwZXJzb24nLFxyXG4gICAgICB5a2V5czogWydzYWxlcyddLFxyXG4gICAgICBsYWJlbHM6IFsnU2FsZXMnXSxcclxuICAgICAgaGlkZUhvdmVyOiAnYXV0bycsXHJcbiAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1jaGFydGNhcmRcIj5cclxuICAgICAgICA8aDM+Q2hhcnQgQ2FyZHM8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5DaGFydCBjYXJkcyBjb250YWluIGNoYXJ0cyBwb3dlcmVkIGJ5IE1vcnJpcy5qcy48L3A+XHJcbiAgICAgICAgPHA+VGhlc2UgY2FuIGJlIHVzZWQgd2l0aCBUYWJsZSBjYXJkcyBpbiBvcmRlciB0byB0b2dnbGUgYmV0d2VlbiBhIGNoYXJ0IHZpZXcgYW5kIHRoZSByYXcgZGF0YS48L3A+XHJcbiAgICAgICAgPEV4YW1wbGU+XHJcbiAgICAgICAgICA8Q2FyZCBjYXJkU3R5bGU9XCJjaGFydFwiPlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPkNoYXJ0IENhcmQgSGVhZGluZzwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgIDxDaGFydENhbnZhcyBpZD1cImJhckNoYXJ0XCIvPlxyXG4gICAgICAgICAgICA8Q2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBCYXNlIENhcmQ8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9FeGFtcGxlPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge05hdmJhciwgTmF2LCBOYXZEcm9wZG93biwgTWVudUl0ZW0sIE5hdkl0ZW19IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuXHJcbmNsYXNzIERvdWJsZU5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtZG91YmxlbmF2YmFyXCI+XHJcbiAgICAgICAgPGgzPkRvdWJsZSBOYXZiYXI8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5UaGUgRG91YmxlIE5hdmJhciBpcyBtZWFudCBmb3IgZGVza3RvcCBhbmQgYWxsb3dzIHlvdSB0byBoYXZlIHR3byByb3dzIG9mIG1lbnUgb3B0aW9ucy48L3A+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxOYXZiYXIgZmx1aWQgY2xhc3NOYW1lPVwiYm9vdGNhcmRzLW5hdmJhci1kb3VibGVcIlxyXG4gICAgICAgICAgICBicmFuZD17PGEgdGl0bGU9XCJCb290Y2FyZHMgU3RhcnRlclwiIGhyZWY9XCIvXCI+Qm9vdGNhcmRzIFN0YXJ0ZXI8L2E+fVxyXG4gICAgICAgICAgICB0b2dnbGVOYXZLZXk9ezB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxOYXYgcmlnaHQgZXZlbnRLZXk9ezB9IGNsYXNzTmFtZT1cImJvb3RjYXJkcy1uYXYtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIGV2ZW50S2V5PXsxfSBpZD1cImRvdWJsZW5hdmJhci1sYW5ndWFnZXNcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1tcclxuICAgICAgICAgICAgICAgICAgPGkga2V5PVwiaWNvblwiIGNsYXNzTmFtZT1cImZhIGZhLWdsb2JlXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT1cInRpdGxlXCI+IExhbmd1YWdlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIF19PlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiMVwiPkRldXRzY2g8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiMlwiPkVuZ2xpc2g8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiM1wiPkVzcGFub2w8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezJ9IGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1sb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiBMb2dpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8TmF2IHJpZ2h0IGV2ZW50S2V5PXszfSBjbGFzc05hbWU9XCJib290Y2FyZHMtbmF2LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezR9IGlkPVwiZG91YmxlbmF2YmFyLWhvbWVcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1tcclxuICAgICAgICAgICAgICAgICAgPGkga2V5PVwiaWNvblwiIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWRhc2hib2FyZFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9XCJ0aXRsZVwiPiBIb21lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXX0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCIxXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1lbnZlbG9wZS1vXCIgLz4gQWN0aW9uPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT1cIjJcIiBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWZpbG1cIiAvPiBBbm90aGVyIGFjdGlvbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCIzXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1maWxlLW9cIiAvPiBTb21ldGhpbmcgZWxzZSBoZXJlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCI0XCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1iYXItY2hhcnQtb1wiIC8+IFNlcGFyYXRlZCBsaW5rPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXs1fSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtYnJpZWZjYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiBQb3J0Zm9saW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXs2fSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtYnVsbGhvcm5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IEJsb2c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPlNldCA8Y29kZT5jbGFzcz1cImhhcy1ib290Y2FyZHMtbmF2YmFyLWRvdWJsZVwiPC9jb2RlPiBvbiB0aGUgYm9keSBlbGVtZW50IHRvIGRlYWwgd2l0aCB0aGUgaW5jcmVhc2VkIGhlaWdodCBvZiB0aGUgbmF2YmFyLjwvcD5cclxuICAgICAgICA8SGlnaGxpZ2h0PlxyXG4gICAgICAgICAgeyc8TmF2YmFyIGZsdWlkIGNsYXNzTmFtZT1cImJvb3RjYXJkcy1uYXZiYXItZG91YmxlXCIgYnJhbmQ9ezxhIHRpdGxlPVwiQm9vdGNhcmRzIFN0YXJ0ZXJcIiBocmVmPVwiL1wiPkJvb3RjYXJkcyBTdGFydGVyPC9hPn0gdG9nZ2xlTmF2S2V5PXswfT5cXG4gIDxOYXYgcmlnaHQgZXZlbnRLZXk9ezB9IGNsYXNzTmFtZT1cImJvb3RjYXJkcy1uYXYtc2Vjb25kYXJ5XCI+XFxuICAgIDxOYXZEcm9wZG93biBldmVudEtleT17MX0gaWQ9XCJkb3VibGVuYXZiYXItbGFuZ3VhZ2VzXCIgdGl0bGU9e1s8aSBrZXk9XCJpY29uXCIgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIiAvPiwgPHNwYW4ga2V5PVwidGl0bGVcIj4gTGFuZ3VhZ2VzPC9zcGFuPl19PlxcbiAgICAgIDxNZW51SXRlbSBldmVudEtleT1cIjFcIj5EZXV0c2NoPC9NZW51SXRlbT5cXG4gICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCIyXCI+RW5nbGlzaDwvTWVudUl0ZW0+XFxuICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiM1wiPkVzcGFub2w8L01lbnVJdGVtPlxcbiAgICA8L05hdkRyb3Bkb3duPlxcbiAgICA8TmF2SXRlbSBldmVudEtleT17Mn0gaHJlZj1cIiNcIj5cXG4gICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1sb2NrXCIgLz5cXG4gICAgICA8c3Bhbj4gTG9naW48L3NwYW4+XFxuICAgIDwvTmF2SXRlbT5cXG4gIDwvTmF2PlxcbiAgPE5hdiByaWdodCBldmVudEtleT17M30gY2xhc3NOYW1lPVwiYm9vdGNhcmRzLW5hdi1wcmltYXJ5XCI+XFxuICAgIDxOYXZEcm9wZG93biBldmVudEtleT17NH0gaWQ9XCJkb3VibGVuYXZiYXItaG9tZVwiIHRpdGxlPXtbPGkga2V5PVwiaWNvblwiIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWRhc2hib2FyZFwiIC8+LCA8c3BhbiBrZXk9XCJ0aXRsZVwiPiBIb21lPC9zcGFuPl19PlxcbiAgICAgIDxNZW51SXRlbSBldmVudEtleT1cIjFcIiBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWVudmVsb3BlLW9cIiAvPiBBY3Rpb248L01lbnVJdGVtPlxcbiAgICAgIDxNZW51SXRlbSBldmVudEtleT1cIjJcIiBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWZpbG1cIiAvPiBBbm90aGVyIGFjdGlvbjwvTWVudUl0ZW0+XFxuICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiM1wiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtZmlsZS1vXCIgLz4gU29tZXRoaW5nIGVsc2UgaGVyZTwvTWVudUl0ZW0+XFxuICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cXG4gICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCI0XCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1iYXItY2hhcnQtb1wiIC8+IFNlcGFyYXRlZCBsaW5rPC9NZW51SXRlbT5cXG4gICAgPC9OYXZEcm9wZG93bj5cXG4gICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezV9IGhyZWY9XCIjXCI+XFxuICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtYnJpZWZjYXNlXCIgLz5cXG4gICAgICA8c3Bhbj4gUG9ydGZvbGlvPC9zcGFuPlxcbiAgICA8L05hdkl0ZW0+XFxuICAgIDxOYXZJdGVtIGV2ZW50S2V5PXs2fSBocmVmPVwiI1wiPlxcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWJ1bGxob3JuXCIgLz5cXG4gICAgICA8c3Bhbj4gQmxvZzwvc3Bhbj5cXG4gICAgPC9OYXZJdGVtPlxcbiAgPC9OYXY+XFxuPC9OYXZiYXI+J31cclxuICAgICAgICA8L0hpZ2hsaWdodD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvdWJsZU5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAnYnMtZXhhbXBsZSc6IHRydWUsXHJcbiAgICAgICdicy1leGFtcGxlLXR5cGUnOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKX0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtLCBCdXR0b25Hcm91cCwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge0NhcmQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSwgQ2FyZEZvb3RlciwgTGlzdEdyb3VwSXRlbUhlYWRlciwgTGlzdEdyb3VwSXRlbVRleHR9IGZyb20gJ3JlYWN0LWJvb3RjYXJkcyc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcclxuXHJcbmNsYXNzIEZpbGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtZmlsZWNhcmRcIj5cclxuICAgICAgICA8aDM+RmlsZSBDYXJkczwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPkZpbGUgQ2FyZHMgYXJlIGludGVuZGVkIHRvIHNob3cgaW5mb3JtYXRpb24gYW5kIGZ1bmN0aW9ucyBmb3Igbm9uLW1lZGlhIGZpbGUgZm9ybWF0cyAoUERGcywgV29yZCBkb2N1bWVudHMsIHNwcmVhZHNoZWV0cywgZXRjKS48L3A+XHJcbiAgICAgICAgPEV4YW1wbGU+XHJcbiAgICAgICAgICA8Q2FyZCBjYXJkU3R5bGU9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGU+RmlsZSBDYXJkIEhlYWRpbmc8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICA8TGlzdEdyb3VwIGZpbGw+XHJcbiAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWZpbGUtcGRmXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZpbGUgTmFtZSBHb2VzIEhlcmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+PHN0cm9uZz5QREY8L3N0cm9uZz48L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PjxzdHJvbmc+My4yTWI8L3N0cm9uZz48L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BZGRlZCBieSBKb2huIFNtaXRoIG9uIDUgTWFyY2ggMjAxNDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TWVkaWFGaWxlIGNhcmQgZGVzY3JpcHRpb24gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBjb21tb2RvLCBudWxsYSB1dCBwb3J0YSBpbnRlcmR1bSwgbWkgbWkgdmVuZW5hdGlzIGZlbGlzLCB2aXRhZSBwZWxsZW50ZXNxdWUgYW50ZSBlcm9zIGF0IGVuaW0uPC9MaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgICAgICAgICA8Q2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAganVzdGlmaWVkPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWRvd25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBGYXZvcml0ZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9FeGFtcGxlPlxyXG4gICAgICAgIDxIaWdobGlnaHQ+XHJcbiAgICAgICAgICB7JzxDYXJkIGNhcmRTdHlsZT1cImZpbGVcIj5cXG4gIDxDYXJkSGVhZGVyPlxcbiAgICA8Q2FyZFRpdGxlPkZpbGUgQ2FyZCBIZWFkaW5nPC9DYXJkVGl0bGU+XFxuICA8L0NhcmRIZWFkZXI+XFxuICA8TGlzdEdyb3VwIGZpbGw+XFxuICAgIDxMaXN0R3JvdXBJdGVtPlxcbiAgICAgIDxhIGhyZWY9XCIjXCI+XFxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWZpbGUtcGRmXCIgLz5cXG4gICAgICA8L2E+XFxuICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+XFxuICAgICAgICA8YSBocmVmPVwiI1wiPkZpbGUgTmFtZSBHb2VzIEhlcmU8L2E+XFxuICAgICAgPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD48c3Ryb25nPlBERjwvc3Ryb25nPjwvTGlzdEdyb3VwSXRlbVRleHQ+XFxuICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PjxzdHJvbmc+My4yTWI8L3N0cm9uZz48L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgIDxMaXN0R3JvdXBJdGVtPlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICAgIDxzdHJvbmc+QWRkZWQgYnkgSm9obiBTbWl0aCBvbiA1IE1hcmNoIDIwMTQ8L3N0cm9uZz5cXG4gICAgICA8L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgIDxMaXN0R3JvdXBJdGVtPlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5NZWRpYUZpbGUgY2FyZCBkZXNjcmlwdGlvbiBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGNvbW1vZG8sIG51bGxhIHV0IHBvcnRhIGludGVyZHVtLCBtaSBtaSB2ZW5lbmF0aXMgZmVsaXMsIHZpdGFlIHBlbGxlbnRlc3F1ZSBhbnRlIGVyb3MgYXQgZW5pbS48L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICA8L0xpc3RHcm91cD5cXG4gIDxDYXJkRm9vdGVyPlxcbiAgICA8QnV0dG9uR3JvdXAganVzdGlmaWVkPlxcbiAgICAgIDxCdXR0b25Hcm91cD5cXG4gICAgICAgIDxCdXR0b24+XFxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWRvd25cIiAvPlxcbiAgICAgICAgICBEb3dubG9hZFxcbiAgICAgICAgPC9CdXR0b24+XFxuICAgICAgPC9CdXR0b25Hcm91cD5cXG4gICAgICA8QnV0dG9uR3JvdXA+XFxuICAgICAgICA8QnV0dG9uPlxcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cXG4gICAgICAgICAgRmF2b3JpdGVcXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgICAgPEJ1dHRvbkdyb3VwPlxcbiAgICAgICAgPEJ1dHRvbj5cXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIiAvPlxcbiAgICAgICAgICBFbWFpbFxcbiAgICAgICAgPC9CdXR0b24+XFxuICAgICAgPC9CdXR0b25Hcm91cD5cXG4gICAgPC9CdXR0b25Hcm91cD5cXG4gIDwvQ2FyZEZvb3Rlcj5cXG48L0NhcmQ+J31cclxuICAgICAgICA8L0hpZ2hsaWdodD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XHJcblxyXG5jbGFzcyBGb290ZXJCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZWN0aW9uIGlkPVwiZG9jLWZvb3RlcmJhclwiPlxyXG4gICAgICAgIDxoMz5Gb290ZXIgQmFyPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+VGhlIEZvb3RlciBCYXIgb2ZmZXJzIHVzYWJsZSBtb2JpbGUgbmF2aWdhdGlvbiBmb3Igc2ltcGxlciBhcHBzIHdpdGggYSBmZXcgaW1wb3J0YW50IG5hdmlnYXRpb24gaXRlbXMuPC9wPlxyXG4gICAgICAgIDxwPlRoaXMgdXNlcyBCb290c3RyYXAncyA8Y29kZT4ubmF2YmFyLWZpeGVkLWZvb3RlcjwvY29kZT4gbWFya3VwLCB3aXRoIGEgPGNvZGU+LmJ0bi1ncm91cDwvY29kZT4gdG8gY29udGFpbiB0aGUgbmF2aWdhdGlvbiBlbGVtZW50cy4gVGhlc2UgYXJlIHN0eWxlZCB0byBsb29rIGxpa2UgbmF0aXZlIGZvb3RlciB0YWJzIG9uIGlPUyBhbmQgQW5kcm9pZCBkZXZpY2VzLjwvcD5cclxuICAgICAgICA8cD5PbiBkZXNrdG9wLCB0aGUgZm9vdGVyIHJldmVydHMgdG8gYSBzaW1wbGUsIHdlYnNpdGUtc3R5bGUgZm9vdGVyIHRvIGhvbGQgaXRlbXMgbGlrZSBjb3B5cmlnaHQgaW5mb3JtYXRpb24sIHZlcnNpb24gbnVtYmVycywgZXRjLiBUaGVzZSBhcmUgY29udGFpbmVkIGluIDxjb2RlPi5ib290Y2FyZHMtZGVza3RvcC1mb290ZXI8L2NvZGU+LCBhbmQgaGlkZGVuIGZyb20gbW9iaWxlIGRldmljZXMuPC9wPlxyXG4gICAgICAgIDxIaWdobGlnaHQ+XHJcbiAgICAgICAgICB7JzxkaXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLWJvdHRvbVwiPlxcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XFxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBhY3RpdmVcIj5cXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtMnggZmEtdXNlcnNcIj48L2k+XFxuICAgICAgICBDb250YWN0c1xcbiAgICAgIDwvYT5cXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XFxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLTJ4IGZhLWJ1aWxkaW5nLW9cIj48L2k+XFxuICAgICAgICBDb21wYW5pZXNcXG4gICAgICA8L2E+XFxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS0yeCBmYS1nZWFyc1wiPjwvaT5cXG4gICAgICAgIFNldHRpbmdzXFxuICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImJvb3RjYXJkcy1kZXNrdG9wLWZvb3RlciBjbGVhcmZpeFwiPlxcbiAgICAgIDxwIGNsYXNzPVwicHVsbC1sZWZ0XCI+VGV4dCBmb3IgZGVza3RvcCBmb290ZXIgZ29lcyBoZXJlPC9wPlxcbiAgICAgIDxwIGNsYXNzPVwicHVsbC1sZWZ0XCI+TW9yZSB0ZXh0IGZvciBkZXNrdG9wIGZvb3RlciBnb2VzIGhlcmU8L3A+XFxuICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj4nfVxyXG4gICAgICAgIDwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDxwPkFwcGx5IHRoZSA8Y29kZT4uYm9vdGNhcmRzLW5vZm9vdGVyPC9jb2RlPiB0byB0aGUgPGNvZGU+Jmx0O2JvZHkmZ3Q7PC9jb2RlPiBlbGVtZW50IGZvciBsYXlvdXRzIHdpdGhvdXQgYSBmb290ZXI6IHRoaXMgd2lsbCByZW1vdmUgdGhlIHN0YW5kYXJkIGJvdHRvbSBwYWRkaW5nLjwvcD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlckJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b25Hcm91cCwgQnV0dG9uLCBJbnB1dH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtDYXJkLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUsIENhcmRGb290ZXJ9IGZyb20gJ3JlYWN0LWJvb3RjYXJkcyc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcclxuXHJcbmNsYXNzIEZvcm1DYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1mb3JtY2FyZFwiPlxyXG4gICAgICAgIDxoMj5Gb3JtIENhcmRzPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+Rm9ybSBDYXJkcyBhcmUgdXNlZCBmb3IgdXNlciBpbnB1dCBpbiB5b3VyIGFwcC48L3A+XHJcbiAgICAgICAgPHA+UmVwbGFjZSB0aGUgZGVmYXVsdCA8Y29kZT4ucGFuZWwtYm9keTwvY29kZT4gd2l0aCBhIDxjb2RlPiZsdDtmb3JtJmd0OzwvY29kZT4uPC9wPlxyXG4gICAgICAgIDxFeGFtcGxlPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj5Gb3JtIENhcmQgVGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lPVwiY29sLXhzLTNcIlxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImNvbC14cy05XCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkpvaG4gU21pdGhcIi8+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiT2NjdXBhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzTmFtZT1cImNvbC14cy0zXCJcclxuICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJjb2wteHMtOVwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJEZXZlbG9wZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+RGVzaWduZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+RGV2ZWxvcGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlNhbGVzbWFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9JbnB1dD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lPVwiY29sLXhzLTNcIlxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImNvbC14cy05XCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhbSBtYXVyaXMgdGVsbHVzLCB2ZWhpY3VsYSB1dCB0ZWxsdXMgaWQsIHN1c2NpcGl0IGRhcGlidXMgdG9ydG9yLiBJbnRlZ2VyIHZpdmVycmEgdHVycGlzIGFjIGZyaW5naWxsYSBoZW5kcmVyaXQuIFNlZCBmYXVjaWJ1cyBwb3N1ZXJlIGZlbGlzIGV0IHBlbGxlbnRlc3F1ZS4gQ3JhcyB2YXJpdXMgdG9ydG9yIHZpdGFlIG1vbGVzdGllIHRlbXBvci4gUHJvaW4gdXQgdml2ZXJyYSBlbGl0LCBhYyBncmF2aWRhIHRvcnRvci5cIlxyXG4gICAgICAgICAgICAgICAgcm93cz1cIjZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPENhcmRGb290ZXI+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPkJ1aWx0IHdpdGggQm9vdGNhcmRzIC0gRm9ybSBDYXJkPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvRXhhbXBsZT5cclxuICAgICAgICA8SGlnaGxpZ2h0PlxyXG4gICAgICAgICAgeyc8Q2FyZD5cXG4gIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XFxuICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+Rm9ybSBDYXJkIFRpdGxlPC9DYXJkVGl0bGU+XFxuICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XFxuICAgICAgPEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCI+XFxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIC8+XFxuICAgICAgICBDYW5jZWxcXG4gICAgICA8L0J1dHRvbj5cXG4gICAgICA8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCI+XFxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVja1wiIC8+XFxuICAgICAgICBTYXZlXFxuICAgICAgPC9CdXR0b24+XFxuICAgIDwvQnV0dG9uR3JvdXA+XFxuICA8L0NhcmRIZWFkZXI+XFxuICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cXG4gICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJOYW1lXCIgbGFiZWxDbGFzc05hbWU9XCJjb2wteHMtM1wiIHdyYXBwZXJDbGFzc05hbWU9XCJjb2wteHMtOVwiIGRlZmF1bHRWYWx1ZT1cIkpvaG4gU21pdGhcIiAvPlxcbiAgICA8SW5wdXQgdHlwZT1cInNlbGVjdFwiIGxhYmVsPVwiT2NjdXBhdGlvblwiIGxhYmVsQ2xhc3NOYW1lPVwiY29sLXhzLTNcIiB3cmFwcGVyQ2xhc3NOYW1lPVwiY29sLXhzLTlcIiBkZWZhdWx0VmFsdWU9XCJEZXZlbG9wZXJcIj5cXG4gICAgICA8b3B0aW9uPkRlc2lnbmVyPC9vcHRpb24+XFxuICAgICAgPG9wdGlvbj5EZXZlbG9wZXI8L29wdGlvbj5cXG4gICAgICA8b3B0aW9uPlNhbGVzbWFuPC9vcHRpb24+XFxuICAgIDwvSW5wdXQ+XFxuICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBsYWJlbD1cIkRlc2NyaXB0aW9uXCIgbGFiZWxDbGFzc05hbWU9XCJjb2wteHMtM1wiIHdyYXBwZXJDbGFzc05hbWU9XCJjb2wteHMtOVwiIGRlZmF1bHRWYWx1ZT1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhbSBtYXVyaXMgdGVsbHVzLCB2ZWhpY3VsYSB1dCB0ZWxsdXMgaWQsIHN1c2NpcGl0IGRhcGlidXMgdG9ydG9yLiBJbnRlZ2VyIHZpdmVycmEgdHVycGlzIGFjIGZyaW5naWxsYSBoZW5kcmVyaXQuIFNlZCBmYXVjaWJ1cyBwb3N1ZXJlIGZlbGlzIGV0IHBlbGxlbnRlc3F1ZS4gQ3JhcyB2YXJpdXMgdG9ydG9yIHZpdGFlIG1vbGVzdGllIHRlbXBvci4gUHJvaW4gdXQgdml2ZXJyYSBlbGl0LCBhYyBncmF2aWRhIHRvcnRvci5cIiByb3dzPVwiNlwiIC8+XFxuICA8L2Zvcm0+XFxuICA8Q2FyZEZvb3Rlcj5cXG4gICAgPHNtYWxsPkJ1aWx0IHdpdGggQm9vdGNhcmRzIC0gRm9ybSBDYXJkPC9zbWFsbD5cXG4gIDwvQ2FyZEZvb3Rlcj5cXG48L0NhcmQ+J31cclxuICAgICAgICA8L0hpZ2hsaWdodD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XHJcblxyXG5jbGFzcyBHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1ncmlkXCI+XHJcbiAgICAgICAgPGgyPkdyaWQgU3lzdGVtPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+Qm9vdGNhcmRzIGJ1aWxkcyBvbiBUd2l0dGVyIEJvb3RzdHJhcCdzIGdyaWQgc3lzdGVtIHRvIGFsbG93IHNlcGFyYXRlIGNvbHVtbiBzY3JvbGxpbmcgaW4gdG91Y2hzY3JlZW4gZGV2aWNlcy48L3A+XHJcbiAgICAgICAgPHA+VGhlIDIgbWFpbiB0b3AtbGV2ZWwgY29sdW1ucyBhcmUgPGNvZGU+LmJvb3RjYXJkcy1saXN0PC9jb2RlPiAod2hpY2ggaXMgdXNlZCB0byBuYXZpZ2F0ZSB5b3VyIGFwcCkgYW5kIDxjb2RlPi5ib290Y2FyZHMtY2FyZHM8L2NvZGU+ICh3aGljaCBjb250YWlucyB5b3VyIGFwcCdzIGNvbnRlbnQpLiBJbiBkZXNrdG9wIGJyb3dzZXJzLCB0aGVzZSB3aWxsIGJlaGF2ZSBsaWtlIHJlZ3VsYXIgYm9vdHN0cmFwIGNvbHVtbnMsIGJ1dCBvbiB0b3VjaHNjcmVlbiBkZXZpY2VzIHRoZSB1c2VyIHdpbGwgYmUgYWJsZSB0byBzY3JvbGwgdGhlbSBzZXBhcmF0ZWx5LjwvcD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgUmVhY3RIaWdobGlnaHQgZnJvbSAncmVhY3QtaGlnaGxpZ2h0JztcclxuXHJcbmNsYXNzIEhpZ2hsaWdodCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnaGlnaGxpZ2h0Jyl9PlxyXG4gICAgICAgIDxSZWFjdEhpZ2hsaWdodCBjbGFzc05hbWU9e3RoaXMucHJvcHMuaGlnaGxpZ2h0Q2xhc3NOYW1lfT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUmVhY3RIaWdobGlnaHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkhpZ2hsaWdodC5wcm9wVHlwZXMgPSB7XHJcbiAgaGlnaGxpZ2h0Q2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuSGlnaGxpZ2h0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBoaWdobGlnaHRDbGFzc05hbWU6ICd4bWwnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0xpc3RHcm91cCwgTGlzdEdyb3VwSXRlbSwgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7TGlzdCwgQ2FyZCwgTGlzdEdyb3VwSXRlbUhlYWRlciwgTGlzdEdyb3VwSXRlbVRleHR9IGZyb20gJ3JlYWN0LWJvb3RjYXJkcyc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcclxuXHJcbmNsYXNzIExpc3REZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1saXN0ZGV0YWlsXCI+XHJcbiAgICAgICAgPGgzPkRldGFpbGVkIExpc3RzPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+RGV0YWlsZWQgTGlzdHMgY2FuIGJlIHVzZWQgd2hlbiB5b3UgbmVlZCB0byBzaG93IG1vcmUgaW5mb3JtYXRpb24gZm9yIGVhY2ggZW50cnkuPC9wPlxyXG4gICAgICAgIDxwPllvdSBjYW4gdXNlIEJvb3RzdHJhcCA8Y29kZT4uY29sLSo8L2NvZGU+IDxjb2RlPiZsdDtkaXYmZ3Q7PC9jb2RlPnMgd2l0aGluIGVhY2ggPGNvZGU+Lmxpc3QtZ3JvdXAtaXRlbTwvY29kZT4gdG8gc2hvdyBtb3JlIHBpZWNlcyBvZiBpbmZvcm1hdGlvbiBpbiB3aGF0ZXZlciBmb3JtYXQgeW91IGxpa2UsIGFuZCByZXNwb25kIHRvIGRpZmZlcmVudCBkZXZpY2Ugd2lkdGhzLjwvcD5cclxuICAgICAgICA8RXhhbXBsZT5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8TGlzdEdyb3VwIGZpbGw+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtYnVpbGRpbmctbyBwdWxsLWxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+QWxwYXJ2aXMgTHRkPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkxvbmRvbiwgVUs8L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkNvbnRyYWN0b3I8L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PiQxMiwwMDAgUmV2ZW51ZSBZVEQ8L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS1idWlsZGluZy1vIHB1bGwtbGVmdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5DYW1pb24gQ29ycDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5Ub2t5bywgSmFwYW48L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkN1c3RvbWVyPC9MaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD4kNzUsMDAwIFJldmVudWUgWVREPC9MaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtYnVpbGRpbmctbyBwdWxsLWxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+RGVyZW5kZW4gU3lzdGVtczwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5BbGJ1cXVlcnF1ZSwgVVNBPC9MaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5TdXBwbGllcjwvTGlzdEdyb3VwSXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+JDEuM20gUmV2ZW51ZSBZVEQ8L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRXhhbXBsZT5cclxuICAgICAgICA8SGlnaGxpZ2h0PlxyXG4gICAgICAgICAgeyc8TGlzdD5cXG4gIDxDYXJkPlxcbiAgICA8TGlzdEdyb3VwIGZpbGw+XFxuICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxSb3c+XFxuICAgICAgICAgIDxDb2wgc209ezZ9PlxcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLTN4IGZhLWJ1aWxkaW5nLW8gcHVsbC1sZWZ0XCIgLz5cXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5BbHBhcnZpcyBMdGQ8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XFxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkxvbmRvbiwgVUs8L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgICAgICA8L0NvbD5cXG4gICAgICAgICAgPENvbCBzbT17Nn0+XFxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkNvbnRyYWN0b3I8L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD4kMTIsMDAwIFJldmVudWUgWVREPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICAgICAgPC9Db2w+XFxuICAgICAgICA8L1Jvdz5cXG4gICAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxSb3c+XFxuICAgICAgICAgIDxDb2wgc209ezZ9PlxcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLTN4IGZhLWJ1aWxkaW5nLW8gcHVsbC1sZWZ0XCIgLz5cXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5DYW1pb24gQ29ycDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+VG9reW8sIEphcGFuPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICAgICAgPC9Db2w+XFxuICAgICAgICAgIDxDb2wgc209ezZ9PlxcbiAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5DdXN0b21lcjwvTGlzdEdyb3VwSXRlbVRleHQ+XFxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PiQ3NSwwMDAgUmV2ZW51ZSBZVEQ8L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgICAgICA8L0NvbD5cXG4gICAgICAgIDwvUm93PlxcbiAgICAgIDwvTGlzdEdyb3VwSXRlbT5cXG4gICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxcbiAgICAgICAgPFJvdz5cXG4gICAgICAgICAgPENvbCBzbT17Nn0+XFxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtYnVpbGRpbmctbyBwdWxsLWxlZnRcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkRlcmVuZGVuIFN5c3RlbXM8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XFxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkFsYnVxdWVycXVlLCBVU0E8L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgICAgICA8L0NvbD5cXG4gICAgICAgICAgPENvbCBzbT17Nn0+XFxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PlN1cHBsaWVyPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+JDEuM20gUmV2ZW51ZSBZVEQ8L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgICAgICA8L0NvbD5cXG4gICAgICAgIDwvUm93PlxcbiAgICAgIDwvTGlzdEdyb3VwSXRlbT5cXG4gICAgPC9MaXN0R3JvdXA+XFxuICA8L0NhcmQ+XFxuPC9MaXN0Pid9XHJcbiAgICAgICAgPC9IaWdobGlnaHQ+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0RGV0YWlsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0xpc3RHcm91cCwgTGlzdEdyb3VwSXRlbSwgUm93LCBDb2wsIElucHV0LCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7TGlzdCwgQ2FyZCwgTGlzdEdyb3VwSXRlbUhlYWRlciwgTGlzdEdyb3VwSXRlbVRleHR9IGZyb20gJ3JlYWN0LWJvb3RjYXJkcyc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcclxuXHJcbmNsYXNzIExpc3RTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1saXN0c2VhcmNoXCI+XHJcbiAgICAgICAgPGgyPkxpc3QgU2VhcmNoICYgTGlzdCBBY3Rpb25zPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+QSBzZWFyY2ggZm9ybSBmb3Igd2hlbiB5b3Ugd2FudCB0aGUgdXNlciB0byBiZSBhYmxlIHRvIGZpbHRlciBvciBzZWFyY2ggeW91ciBsaXN0LCBhbmQgYnV0dG9ucyBmb3IgYW55IG90aGVyIGxpc3QgZnVuY3Rpb25zIHlvdSBuZWVkLjwvcD5cclxuICAgICAgICA8cD5UaGlzIGdvZXMgYXQgdGhlIHRvcCBvZiB5b3VyIGxpc3QsIGluc2lkZSB0aGUgPGNvZGU+Lm1vZGFsLWJvZHk8L2NvZGU+LiBZb3UgY2FuIGFkZCBvciByZW1vdmUgZnVuY3Rpb25zIGJ5IGFkZGluZy9yZW1vdmluZyBjb2x1bW5zIGluIHRoZSBjb250YWluaW5nIDxjb2RlPi5yb3c8L2NvZGU+IGFuZCBtYWtpbmcgc3VyZSB0aGUgd2lkdGhzIGFkZCB1cC48L3A+XHJcbiAgICAgICAgPEV4YW1wbGU+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBDb250YWN0cy4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIGJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPExpc3RHcm91cCBmaWxsPlxyXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvU29maWEgQWNleS5qcGdcIiBjbGFzc05hbWU9XCJpbWctcm91bmRlZCBwdWxsLWxlZnRcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkFjZXksIFNvZmlhPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TWFzdW5nIENvcnAuPC9MaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL0pvc2VwaCBCYXJpc2guanBnXCIgY2xhc3NOYW1lPVwiaW1nLXJvdW5kZWQgcHVsbC1sZWZ0XCIvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5CYXJpc2gsIEpvc2VwaDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0Pk1hc3VuZyBDb3JwLjwvTGlzdEdyb3VwSXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9TYXJhaCBCZW5zb24uanBnXCIgY2xhc3NOYW1lPVwiaW1nLXJvdW5kZWQgcHVsbC1sZWZ0XCIvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5CZW5zb24sIFNhcmFoPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+WmV0YUNvbW08L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9FeGFtcGxlPlxyXG4gICAgICAgIDxIaWdobGlnaHQ+XHJcbiAgICAgICAgICB7JzxMaXN0PlxcbiAgPENhcmQ+XFxuICAgIDxmb3JtPlxcbiAgICAgIDxSb3c+XFxuICAgICAgICA8Q29sIHhzPXs5fT5cXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggQ29udGFjdHMuLi5cIj5cXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiAvPlxcbiAgICAgICAgICA8L0lucHV0PlxcbiAgICAgICAgPC9Db2w+XFxuICAgICAgICA8Q29sIHhzPXszfT5cXG4gICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIGJsb2NrPlxcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIiAvPlxcbiAgICAgICAgICAgIEFkZFxcbiAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgIDwvQ29sPlxcbiAgICAgIDwvUm93PlxcbiAgICA8L2Zvcm0+XFxuXFxuICAgIC4uLmxpc3QgbWFya3VwIGdvZXMgaGVyZS4uLlxcblxcbiAgPC9DYXJkPlxcbjwvTGlzdD4nfVxyXG4gICAgICAgIDwvSGlnaGxpZ2h0PlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFNlYXJjaDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW19IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7TGlzdCwgQ2FyZCwgTGlzdEdyb3VwSXRlbUhlYWRlciwgTGlzdEdyb3VwSXRlbVRleHR9IGZyb20gJ3JlYWN0LWJvb3RjYXJkcyc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcclxuXHJcbmNsYXNzIExpc3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtbGlzdHNcIj5cclxuICAgICAgICA8aDI+TGlzdHM8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5Cb290Y2FyZHMgTGlzdHMgYXJlIHVzZWQgdG8gbmF2aWdhdGUgdGhlIGVudGl0aWVzIGluIHlvdXIgYXBwIChlLmcuIENvbnRhY3RzLCBGaWxlcywgTWVzc2FnZXMsIGV0YykuPC9wPlxyXG4gICAgICAgIDxwPkxpc3RzIGFyZSB3cmFwcGVkIGluIHRoZSA8Y29kZT4uYm9vdGNhcmRzLWxpc3Q8L2NvZGU+IGNsYXNzPC9wPlxyXG4gICAgICAgIDxFeGFtcGxlPlxyXG4gICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAgZmlsbD5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1NvZmlhIEFjZXkuanBnXCIgY2xhc3NOYW1lPVwiaW1nLXJvdW5kZWQgcHVsbC1sZWZ0XCIvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5BY2V5LCBTb2ZpYTwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0Pk1hc3VuZyBDb3JwLjwvTGlzdEdyb3VwSXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9Kb3NlcGggQmFyaXNoLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1yb3VuZGVkIHB1bGwtbGVmdFwiLz5cclxuICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+QmFyaXNoLCBKb3NlcGg8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5NYXN1bmcgQ29ycC48L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvU2FyYWggQmVuc29uLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1yb3VuZGVkIHB1bGwtbGVmdFwiLz5cclxuICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+QmVuc29uLCBTYXJhaDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PlpldGFDb21tPC9MaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRXhhbXBsZT5cclxuICAgICAgICA8SGlnaGxpZ2h0PlxyXG4gICAgICAgICAgeyc8TGlzdD5cXG4gIDxDYXJkPlxcbiAgICA8TGlzdEdyb3VwIGZpbGw+XFxuICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1NvZmlhIEFjZXkuanBnXCIgY2xhc3NOYW1lPVwiaW1nLXJvdW5kZWQgcHVsbC1sZWZ0XCIvPlxcbiAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+QWNleSwgU29maWE8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XFxuICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TWFzdW5nIENvcnAuPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL0pvc2VwaCBCYXJpc2guanBnXCIgY2xhc3NOYW1lPVwiaW1nLXJvdW5kZWQgcHVsbC1sZWZ0XCIvPlxcbiAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+QmFyaXNoLCBKb3NlcGg8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XFxuICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TWFzdW5nIENvcnAuPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1NhcmFoIEJlbnNvbi5qcGdcIiBjbGFzc05hbWU9XCJpbWctcm91bmRlZCBwdWxsLWxlZnRcIi8+XFxuICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5CZW5zb24sIFNhcmFoPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxcbiAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PlpldGFDb21tPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgIDwvTGlzdEdyb3VwPlxcbiAgPC9DYXJkPlxcbjwvTGlzdD4nfVxyXG4gICAgICAgIDwvSGlnaGxpZ2h0PlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9uR3JvdXAsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtDYXJkLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUsIENhcmRGb290ZXJ9IGZyb20gJ3JlYWN0LWJvb3RjYXJkcyc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcclxuXHJcbmNsYXNzIE1lZGlhQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtbWVkaWFjYXJkXCI+XHJcbiAgICAgICAgPGgzPk1lZGlhIENhcmRzPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+TWVkaWEgQ2FyZHMgaG9sZCBsYXJnZXIgaW1hZ2VzIG9yIHZpZGVvcy48L3A+XHJcbiAgICAgICAgPEV4YW1wbGU+XHJcbiAgICAgICAgICA8Q2FyZCBjYXJkU3R5bGU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPk1lZGlhIENhcmQgSGVhZGluZzwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgIE1lZGlhIGNhcmQgZGVzY3JpcHRpb24gbG9yZW0gaXBzdW0gZG9sb3IgZXN0IGNvbXBlbmRpdW1cclxuICAgICAgICAgICAgPGltZyBmaWxsIHNyYz1cImh0dHA6Ly93d3cudGVhbXN0dWRpby5jb20vUG9ydGFscy8yMTgyOTUvaW1hZ2VzL2lzdG9ja18wMDAwMDEyNDIyOTBzbWFsbC5qcGdcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIC8+XHJcbiAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBqdXN0aWZpZWQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIEZhdm9yaXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0V4YW1wbGU+XHJcbiAgICAgICAgPEhpZ2hsaWdodD5cclxuICAgICAgICAgIHsnPENhcmQgY2FyZFN0eWxlPVwibWVkaWFcIj5cXG4gIDxDYXJkSGVhZGVyPlxcbiAgICA8Q2FyZFRpdGxlPk1lZGlhIENhcmQgSGVhZGluZzwvQ2FyZFRpdGxlPlxcbiAgPC9DYXJkSGVhZGVyPlxcbiAgTWVkaWEgY2FyZCBkZXNjcmlwdGlvbiBsb3JlbSBpcHN1bSBkb2xvciBlc3QgY29tcGVuZGl1bVxcbiAgPGltZyBmaWxsIHNyYz1cImh0dHA6Ly93d3cudGVhbXN0dWRpby5jb20vUG9ydGFscy8yMTgyOTUvaW1hZ2VzL2lzdG9ja18wMDAwMDEyNDIyOTBzbWFsbC5qcGdcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIC8+XFxuICA8Q2FyZEZvb3Rlcj5cXG4gICAgPEJ1dHRvbkdyb3VwIGp1c3RpZmllZD5cXG4gICAgICA8QnV0dG9uR3JvdXA+XFxuICAgICAgICA8QnV0dG9uPlxcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1kb3duXCIgLz5cXG4gICAgICAgICAgRG93bmxvYWRcXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgICAgPEJ1dHRvbkdyb3VwPlxcbiAgICAgICAgPEJ1dHRvbj5cXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XFxuICAgICAgICAgIEZhdm9yaXRlXFxuICAgICAgICA8L0J1dHRvbj5cXG4gICAgICA8L0J1dHRvbkdyb3VwPlxcbiAgICAgIDxCdXR0b25Hcm91cD5cXG4gICAgICAgIDxCdXR0b24+XFxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCIgLz5cXG4gICAgICAgICAgRW1haWxcXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgIDwvQnV0dG9uR3JvdXA+XFxuICA8L0NhcmRGb290ZXI+XFxuPC9DYXJkPid9XHJcbiAgICAgICAgPC9IaWdobGlnaHQ+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWRpYUNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QWxlcnR9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuXHJcbmNsYXNzIE1vZGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtbW9kYWxzXCI+XHJcbiAgICAgICAgPGgyPk1vZGFsczwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlNvbWV0aW1lcywgeW91J2xsIHdhbnQgdG8gcHV0IHNvbWV0aGluZyBsaWtlIGEgZm9ybSBvciBhbiBpbXBvcnRhbnQgbWVzc2FnZSBpbiBhIG1vZGFsLCBvYnNjdXJpbmcgdGhlIG90aGVyIGNvbnRlbnQgY29tcGxldGVseS48L3A+XHJcbiAgICAgICAgPHA+VGhlIG1hcmt1cCBpcyBxdWl0ZSBzaW1pbGFyIHRvIENhcmRzLCB3aXRoIGEgaGVhZGVyLCBib2R5LCBhbmQgZm9vdGVyLjwvcD5cclxuICAgICAgICA8QWxlcnQgYnNTdHlsZT1cIndhcm5pbmdcIj5SZW1lbWJlciB0byB3cmFwIGJ1dHRvbnMgaW4gdGhlIGhlYWRlciBvZiB5b3VyIG1vZGFscyBpbiAmbHQ7ZGl2IGNsYXNzTmFtZT0mcXVvdDtidG4tZ3JvdXAmcXVvdDsmZ3Q7IG9yIHlvdXIgYnV0dG9ucyBtaWdodCBub3Qgd29yay48L0FsZXJ0PlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XHJcblxyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZWN0aW9uIGlkPVwiZG9jLW5hdmJhclwiPlxyXG4gICAgICAgIDxoMz5OYXZiYXI8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5UaGUgQm9vdGNhcmRzIE5hdmJhciBpcyB0aGUgbWFpbiBuYXZpZ2F0aW9uIHN5c3RlbSBmb3IgZGVza3RvcCBicm93c2Vycy48L3A+XHJcbiAgICAgICAgPHA+T24gZGVza3RvcCwgaXQgdXNlcyBCb290c3RyYXAncyBkZWZhdWx0IDxjb2RlPi5uYXZiYXItZml4ZWQtdG9wPC9jb2RlPiBzdHlsZXMgYW5kIHNob3dzIGFsbCB0aGUgdG9wIGxldmVsIG5hdmlnYXRpb24gaXRlbXMuPC9wPlxyXG4gICAgICAgIDxwPk9uIG1vYmlsZSBkZXZpY2VzLCB0aGVyZSBpc24ndCBlbm91Z2ggc3BhY2UgZm9yIHRoZXNlIGl0ZW1zLCBzbyB0aGUgQm9vdHN0cmFwIE5hdmJhciBpcyByZXBsYWNlZCB3aXRoIGEgc2ltcGxlciwgbW9yZSBuYXRpdmUgdmVyc2lvbiB3aXRoIG9ubHkgYSBUaXRsZSBhbmQgbGltaXRlZCBzcGFjZSBmb3Igb3RoZXIgZnVuY3Rpb25zIChlLmcuIGEgQmFjayBidXR0b24gb3IgTWVudSBidXR0b24pLiBUaGVzZSBidXR0b25zIGFyZSBoaWRkZW4gZnJvbSBkZXNrdG9wIGJyb3dzZXJzLCB3aGljaCBkb24ndCBuZWVkIHRoZW0uPC9wPlxyXG4gICAgICAgIDxwPjxzdHJvbmc+SW4gYWRkaXRpb24gdG8gdGhlIE5hdmJhciwgeW91J2xsIGFsc28gbmVlZCB0byBpbXBsZW1lbnQgb25lIG9mIHRoZSBvdGhlciBuYXZpZ2F0aW9uIHN0cnVjdHVyZXMgYmVsb3cgKEZvb3RlciBCYXIgb3IgU2xpZGluZyBTaWRlYmFyKSB0byBhbGxvdyBtb2JpbGUgdXNlcnMgdG8gbmF2aWdhdGUgeW91ciBhcHAuPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgIDxIaWdobGlnaHQ+XHJcbiAgICAgICAgICB7JzxkaXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tYmFjayBuYXZiYXItbGVmdCBwdWxsLWxlZnQgaGlkZGVuIFwiIG9uY2xpY2s9XCJoaXN0b3J5LmJhY2soKVwiPlxcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPlxcbiAgICAgIDxzcGFuPkJhY2s8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbWVudSBuYXZiYXItbGVmdCBwdWxsLWxlZnQgb2ZmY2FudmFzLXRvZ2dsZVwiPlxcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtYmFyc1wiPjwvaT5cXG4gICAgICA8c3Bhbj5NZW51PC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiB0aXRsZT1cIkN1c3RvbWVycyB2e3tnZXRBcHBWZXJzaW9ufX1cIiBocmVmPVwiL1wiPkN1c3RvbWVyczwvYT5cXG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxcbiAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XFxuICAgICAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj5cXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVzZXJzXCI+PC9pPiBcXG4gICAgICAgICAgICBDb250YWN0c1xcbiAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpPlxcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYnVpbGRpbmctb1wiPjwvaT4gXFxuICAgICAgICAgICAgQ29tcGFuaWVzXFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGk+XFxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1nZWFyc1wiPjwvaT4gXFxuICAgICAgICAgICAgU2V0dGluZ3NcXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9saT5cXG4gICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2Pid9XHJcbiAgICAgICAgPC9IaWdobGlnaHQ+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcclxuXHJcbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZWN0aW9uIGlkPVwiZG9jLW5hdmlnYXRpb25cIj5cclxuICAgICAgICA8aDI+TmF2aWdhdGlvbjwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPkJvb3RjYXJkcyBvZmZlcnMgMyBuYXZpZ2F0aW9uIG1ldGhvZHM6IHRoZSBOYXZiYXIsIEZvb3RlciBCYXIsIG9yIFNsaWRpbmcgU2lkZWJhci48L3A+XHJcbiAgICAgICAgPHA+V2hhdCB5b3UgdXNlIHdpbGwgZGVwZW5kIG9uIHRoZSBuZWVkcyBvZiB5b3VyIGFwcCwgYW5kIHRoZSBudW1iZXIgb2YgdG9wLWxldmVsIG5hdmlnYXRpb24gaXRlbXMuIEFwcHMgd2l0aCBmZXdlciBpdGVtcyB3b3VsZCBzdWl0IHVzaW5nIGZvb3RlciBuYXZpZ2F0aW9uIG9uIG1vYmlsZSwgYXMgdGhleSdyZSBhbHdheXMgYWNjZXNzaWJsZSwgYnV0IGZvb3RlciBuYXZpZ2F0aW9uIG1heSBiZSBpbXByYWN0aWNhbCBmb3IgYXBwcyB3aXRoIG1hbnkgdG9wIGxldmVsIG5hdmlnYXRpb24gaXRlbXMgYXMgaXQgY2FuIG9ubHkgZml0IDQgb24gcGhvbmVzLjwvcD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDYXJkRm9vdGVyfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XHJcbmltcG9ydCBFeGFtcGxlIGZyb20gJy4vRXhhbXBsZSc7XHJcblxyXG5jbGFzcyBSaWNoVGV4dENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZWN0aW9uIGlkPVwiZG9jLXJpY2h0ZXh0Y2FyZFwiPlxyXG4gICAgICAgIDxoMz5SaWNoIFRleHQgQ2FyZHM8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5SaWNoIFRleHQgQ2FyZHMgYXJlIGRlc2lnbmVkIGZvciBsb25nZXIgcGFzc2FnZXMgb2YgdGV4dCwgd2hpY2ggbWF5IGluY2x1ZGUgdmFyaW91cyBoZWFkaW5nIGxldmVscywgcGFyYWdyYXBocyBhbmQgbGlzdHMuPC9wPlxyXG4gICAgICAgIDxwPlRoZXkgaGF2ZSBtb3JlIHBhZGRpbmcgYXJvdW5kIHRoZSA8Y29kZT4ucGFuZWwtY29udGVudDwvY29kZT4gdG8gaGVscCByZWFkYWJpbGl0eS48L3A+XHJcbiAgICAgICAgPEV4YW1wbGU+XHJcbiAgICAgICAgICA8Q2FyZCBjYXJkU3R5bGU9XCJyaWNodGV4dFwiPlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlJpY2ggVGV4dCBDYXJkIEhlYWRpbmc8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+TGVhZCBib2R5IGNvcHkgdml2YW11cyBzYWdpdHRpcyBsYWN1cyB2ZWwgYXVndWUgbGFvcmVldCBydXRydW0gZmF1Y2lidXMgZG9sb3IgYXVjdG9yLiBEdWlzIG1vbGxpcywgZXN0IG5vbiBjb21tb2RvIGx1Y3R1cy48L3A+XHJcbiAgICAgICAgICAgIDxoMT5IZWFkaW5nIDE8L2gxPlxyXG4gICAgICAgICAgICA8aDI+SGVhZGluZyAyPC9oMj5cclxuICAgICAgICAgICAgPGgzPkhlYWRpbmcgMzwvaDM+XHJcbiAgICAgICAgICAgIDxoND5IZWFkaW5nIDQ8L2g0PlxyXG4gICAgICAgICAgICA8aDU+SGVhZGluZyA1PC9oNT5cclxuICAgICAgICAgICAgPGg2PkhlYWRpbmcgNjwvaDY+XHJcbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhIGxvYm9ydGlzIHByZXRpdW0gbmlzbC4gRXRpYW0gYXQgdmVzdGlidWx1bSBwdXJ1cywgc2l0IGFtZXQgYmxhbmRpdCBtaS4gRHVpcyBlbmltIGxlY3R1cywgdGVtcHVzIG5lYyB2YXJpdXMgc2VkLCBzb2xsaWNpdHVkaW4gcXVpcyB2ZWxpdC4gRnVzY2UgcXVpcyBzZW0gcG9ydHRpdG9yLCBldWlzbW9kIGFudGUgdml0YWUsIHVsdHJpY2llcyBlcmF0LjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5EdWlzIGN1cnN1cyBkdWkgZXQgdHVycGlzIGdyYXZpZGEgc29sbGljaXR1ZGluLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkRvbmVjIGVnZXQgbWF1cmlzIGZldWdpYXQsIGV1aXNtb2QgcHVydXMgbmVjLCBmZXVnaWF0IG5lcXVlLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPk51bmMgZXJhdCBlc3QsIG1vbGVzdGllIGVnZXQgbWFnbmEgaW4sIGNvbnNlY3RldHVyIGV1aXNtb2QgbG9yZW0uPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgIDxsaT5TZWQgbHVjdHVzIGNvbmd1ZSBvcmNpIHF1aXMgdGVtcHVzLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlByYWVzZW50IGluIHZpdmVycmEgbG9yZW0uPC9saT5cclxuICAgICAgICAgICAgICA8bGk+U3VzcGVuZGlzc2UgYXVndWUgbGFjdXMsIHBvcnRhIHF1aXMgaW1wZXJkaWV0IGF0LCBwb3N1ZXJlIHZlbCBudWxsYS48L2xpPlxyXG4gICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICA8Q2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBSaWNoIFRleHQgQ2FyZDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0V4YW1wbGU+XHJcbiAgICAgICAgPEhpZ2hsaWdodD5cclxuICAgICAgICAgIHsnPENhcmQgY2FyZFN0eWxlPVwicmljaHRleHRcIj5cXG4gIDxDYXJkSGVhZGVyPlxcbiAgICA8Q2FyZFRpdGxlPlJpY2ggVGV4dCBDYXJkIEhlYWRpbmc8L0NhcmRUaXRsZT5cXG4gIDwvQ2FyZEhlYWRlcj5cXG4gIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5MZWFkIGJvZHkgY29weSB2aXZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0IHJ1dHJ1bSBmYXVjaWJ1cyBkb2xvciBhdWN0b3IuIER1aXMgbW9sbGlzLCBlc3Qgbm9uIGNvbW1vZG8gbHVjdHVzLjwvcD5cXG4gIDxoMT5IZWFkaW5nIDE8L2gxPlxcbiAgPGgyPkhlYWRpbmcgMjwvaDI+XFxuICA8aDM+SGVhZGluZyAzPC9oMz5cXG4gIDxoND5IZWFkaW5nIDQ8L2g0PlxcbiAgPGg1PkhlYWRpbmcgNTwvaDU+XFxuICA8aDY+SGVhZGluZyA2PC9oNj5cXG4gIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhIGxvYm9ydGlzIHByZXRpdW0gbmlzbC4gRXRpYW0gYXQgdmVzdGlidWx1bSBwdXJ1cywgc2l0IGFtZXQgYmxhbmRpdCBtaS4gRHVpcyBlbmltIGxlY3R1cywgdGVtcHVzIG5lYyB2YXJpdXMgc2VkLCBzb2xsaWNpdHVkaW4gcXVpcyB2ZWxpdC4gRnVzY2UgcXVpcyBzZW0gcG9ydHRpdG9yLCBldWlzbW9kIGFudGUgdml0YWUsIHVsdHJpY2llcyBlcmF0LjwvcD5cXG4gIDx1bD5cXG4gICAgPGxpPkR1aXMgY3Vyc3VzIGR1aSBldCB0dXJwaXMgZ3JhdmlkYSBzb2xsaWNpdHVkaW4uPC9saT5cXG4gICAgPGxpPkRvbmVjIGVnZXQgbWF1cmlzIGZldWdpYXQsIGV1aXNtb2QgcHVydXMgbmVjLCBmZXVnaWF0IG5lcXVlLjwvbGk+XFxuICAgIDxsaT5OdW5jIGVyYXQgZXN0LCBtb2xlc3RpZSBlZ2V0IG1hZ25hIGluLCBjb25zZWN0ZXR1ciBldWlzbW9kIGxvcmVtLjwvbGk+XFxuICA8L3VsPlxcbiAgPG9sPlxcbiAgICA8bGk+U2VkIGx1Y3R1cyBjb25ndWUgb3JjaSBxdWlzIHRlbXB1cy48L2xpPlxcbiAgICA8bGk+UHJhZXNlbnQgaW4gdml2ZXJyYSBsb3JlbS48L2xpPlxcbiAgICA8bGk+U3VzcGVuZGlzc2UgYXVndWUgbGFjdXMsIHBvcnRhIHF1aXMgaW1wZXJkaWV0IGF0LCBwb3N1ZXJlIHZlbCBudWxsYS48L2xpPlxcbiAgPC9vbD5cXG4gIDxDYXJkRm9vdGVyPlxcbiAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBSaWNoIFRleHQgQ2FyZDwvc21hbGw+XFxuICA8L0NhcmRGb290ZXI+XFxuPC9DYXJkPid9XHJcbiAgICAgICAgPC9IaWdobGlnaHQ+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnYnMtZG9jcy1zZWN0aW9uJyl9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XHJcblxyXG5jbGFzcyBTbGlkaW5nU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2Mtc2xpZGluZ3NpZGViYXJcIj5cclxuICAgICAgICA8aDM+U2xpZGluZyBTaWRlYmFyICgnb2ZmY2FudmFzJyk8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5UaGUgU2xpZGluZyBTaWRlYmFyIG9mZmVycyBjb21wbGV4IGFwcHMgbW9yZSBzcGFjZSBuYXZpZ2F0aW9uIGl0ZW1zLjwvcD5cclxuICAgICAgICA8cD5UaGlzIGlzIGhpZGRlbiBieSBkZWZhdWx0LCBhbmQgYWNjZXNzZWQgd2hlbiByZXF1aXJlZCB2aWEgYSBNZW51IGJ1dHRvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIE5hdmJhci48L3A+XHJcbiAgICAgICAgPHA+T24gZGVza3RvcCBicm93c2VycywgdGhlIFNsaWRpbmcgU2lkZWJhciBpcyBpbmFjdGl2ZSwgYXMgaXQncyB1bm5lY2Vzc2FyeS48L3A+XHJcbiAgICAgICAgPHA+VGhlIFNsaWRpbmcgU2lkZWJhciBjb25zaXN0cyBvZiB0d28gZWxlbWVudHM6PC9wPlxyXG4gICAgICAgIDxsaT5BIGJ1dHRvbiB0byBzaG93LyBoaWRlIHRoZSBzaWRlYmFyOjwvbGk+XHJcbiAgICAgICAgPHAgLz5cclxuICAgICAgICA8SGlnaGxpZ2h0PlxyXG4gICAgICAgICAgeyc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbWVudVwiIGRhdGEtdG9nZ2xlPVwib2ZmY2FudmFzXCI+XFxuICA8aSBjbGFzcz1cImZhIGZhLWxnIGZhLWJhcnNcIj48L2k+XFxuICA8c3Bhbj5NZW51PC9zcGFuPlxcbjwvYnV0dG9uPid9XHJcbiAgICAgICAgPC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPHA+Qm9vdGNhcmRzIHRyaWVzIHRvIGZpbmQgdGhlIGVsZW1lbnQgdGhhdCBoYXMgPGNvZGU+ZGF0YS10b2dnbGU9XCJvZmZjYW52YXNcIjwvY29kZT4gYW5kIGF0dGFjaGVzIGEgaGFuZGxlciB0byBzaG93LyBoaWRlIHRoZSBtZW51LjwvcD5cclxuICAgICAgICA8bGk+VGhlIG1lbnU6PC9saT5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxIaWdobGlnaHQ+XHJcbiAgICAgICAgICB7JzxkaXYgY2xhc3M9XCJuYXZtZW51IG9mZmNhbnZhcyBvZmZjYW52YXMtbGVmdFwiPlxcbiAgPHVsIGNsYXNzPVwibmF2XCI+XFxuICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPlxcbiAgICAgIDxhIGhyZWY9XCIjXCI+XFxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxnIGZhLXVzZXJzXCI+PC9pPlxcbiAgICAgICAgQ29udGFjdHNcXG4gICAgICA8L2E+XFxuICAgIDwvbGk+XFxuICAgIDxsaT5cXG4gICAgICA8YSBocmVmPVwiI1wiPlxcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS1idWlsZGluZy1vXCI+PC9pPlxcbiAgICAgICAgQ29tcGFuaWVzXFxuICAgICAgPC9hPlxcbiAgICA8L2xpPlxcbiAgICA8bGk+XFxuICAgICAgPGEgaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtZ2VhcnNcIj48L2k+XFxuICAgICAgICBTZXR0aW5nc1xcbiAgICAgIDwvYT5cXG4gICAgPC9saT5cXG4gIDwvdWw+XFxuPC9kaXY+J31cclxuICAgICAgICA8L0hpZ2hsaWdodD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRpbmdTaWRlYmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XHJcblxyXG5jbGFzcyBTdWJtZW51cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2Mtc3VibWVudXNcIj5cclxuICAgICAgICA8aDQ+U3VibWVudXM8L2g0PlxyXG4gICAgICAgIDxwPlVzaW5nIHRoZSBzdGFuZGFyZCBCb290c3RhcCAnY29sbGFwc2UnIGZ1bmN0aW9uLCB0aGUgb2ZmY2FudmFzIGNhbiBhbHNvIGNvbnRhaW4gbWVudSBvcHRpb25zIHdpdGggc3VibWVudSBvcHRpb25zLjwvcD5cclxuICAgICAgICA8SGlnaGxpZ2h0PlxyXG4gICAgICAgICAgeyc8IS0tb3B0aW9uIHdpdGggc3VibWVudS0tPlxcbjxsaSBjbGFzcz1cImNvbGxhcHNlIGxpdG9wNFwiPlxcbiAgPGEgaHJlZj1cIiNvdGhlckNvbnRyb2xzXCIgY2xhc3M9XCJib290Y2FyZHMtcGFyZW50XCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtcGFyZW50PVwiLmNvbGxhcHNlXCI+XFxuICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtZncgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIj48L2k+IFNldHRpbmdzXFxuICA8L2E+XFxuICA8ZGl2IGlkPVwib3RoZXJDb250cm9sc1wiIGNsYXNzPVwiY29sbGFwc2UgaW5cIj5cXG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdm1lbnUtbmF2XCI+PGxpID5cXG4gICAgICA8YSBocmVmPVwiI1wiID48aSBjbGFzcz1cImZhIGZhLWxnIGZhLWZ3IGZhLWNvZ1wiPjwvaT4gR2VuZXJhbDwvYT48L2xpPlxcbiAgICA8bGk+XFxuICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWxnIGZhLWZ3IGZhLXVzZXJcIj48L2k+IEFjY291bnQ8L2E+XFxuICAgIDwvbGk+XFxuICAgICA8bGk+XFxuICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWxnIGZhLWZ3IGZhLXJlZnJlc2hcIj48L2k+IFN5bmM8L2E+XFxuICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L2xpPid9XHJcbiAgICAgICAgPC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPHA+RW5hYmxlIHRoZSBjb2xsYXBzaWJsZSBtZW51IHVzaW5nIHRoZSBmb2xsb3dpbmcgc2NyaXB0OiA8Y29kZT4kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgpOzwvY29kZT48L3A+XHJcbiAgICAgICAgPHA+Rm9yIG1vcmUgZGV0YWlscywgc2VlIDxhIGhyZWY9XCJodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNjb2xsYXBzZVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+LjwvcD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Ym1lbnVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdywgQ29sLCBMYWJlbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtDYXJkLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUsIENhcmRGb290ZXIsIFN1bW1hcnlJdGVtfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XHJcbmltcG9ydCBFeGFtcGxlIGZyb20gJy4vRXhhbXBsZSc7XHJcblxyXG5jbGFzcyBTdW1tYXJ5Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2Mtc3VtbWFyeWNhcmRcIj5cclxuICAgICAgICA8aDM+U3VtbWFyeSBDYXJkczwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlN1bW1hcnkgY2FyZHMgY2FuIGJlIHVzZWQgb24gZGFzaGJvYXJkcywgZXRjIHRvIGhpZ2hsaWdodCBpbXBvcnRhbnQgcGllY2VzIG9mIGRhdGEgaW4geW91ciBhcHAuPC9wPlxyXG4gICAgICAgIDxFeGFtcGxlPlxyXG4gICAgICAgICAgPENhcmQgY2FyZFN0eWxlPVwic3VtbWFyeVwiPlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlN1bW1heSBDYXJkIEhlYWRpbmc8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs0fT5cclxuICAgICAgICAgICAgICAgIDxTdW1tYXJ5SXRlbSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS11c2Vyc1wiLz5cclxuICAgICAgICAgICAgICAgICAgPGg0PkNvbnRhY3RzIDxMYWJlbCBic1N0eWxlPVwiaW5mb1wiPjQzMjwvTGFiZWw+PC9oND5cclxuICAgICAgICAgICAgICAgIDwvU3VtbWFyeUl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc209ezR9PlxyXG4gICAgICAgICAgICAgICAgPFN1bW1hcnlJdGVtIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLTN4IGZhLWJ1aWxkaW5nLW9cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5Db21wYW5pZXMgPExhYmVsIGJzU3R5bGU9XCJpbmZvXCI+OTg8L0xhYmVsPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L1N1bW1hcnlJdGVtPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs0fT5cclxuICAgICAgICAgICAgICAgIDxTdW1tYXJ5SXRlbSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS1jbGlwYm9hcmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5Ob3RlcyA8TGFiZWwgYnNTdHlsZT1cImRhbmdlclwiPjU0PC9MYWJlbD48L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9TdW1tYXJ5SXRlbT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICA8U3VtbWFyeUl0ZW0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtZmlsZXMtb1wiLz5cclxuICAgICAgICAgICAgICAgICAgPGg0PkZpbGVzIDxMYWJlbCBic1N0eWxlPVwiaW5mb1wiPjY1PC9MYWJlbD48L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9TdW1tYXJ5SXRlbT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICA8U3VtbWFyeUl0ZW0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtY2hlY2stc3F1YXJlLW9cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5UYXNrcyA8TGFiZWwgYnNTdHlsZT1cIndhcm5pbmdcIj4xMDk8L0xhYmVsPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L1N1bW1hcnlJdGVtPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPENhcmRGb290ZXI+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPkJ1aWx0IHdpdGggQm9vdGNhcmRzIC0gU3VtbWFyeSBDYXJkPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvRXhhbXBsZT5cclxuICAgICAgICA8SGlnaGxpZ2h0PlxyXG4gICAgICAgICAgeyc8Q2FyZCBjYXJkU3R5bGU9XCJzdW1tYXJ5XCI+XFxuICA8Q2FyZEhlYWRlcj5cXG4gICAgPENhcmRUaXRsZT5TdW1tYXkgQ2FyZCBIZWFkaW5nPC9DYXJkVGl0bGU+XFxuICA8L0NhcmRIZWFkZXI+XFxuICA8Um93PlxcbiAgICA8Q29sIHhzPXs2fSBzbT17NH0+XFxuICAgICAgPFN1bW1hcnlJdGVtIGhyZWY9XCIjXCI+XFxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS11c2Vyc1wiLz5cXG4gICAgICAgIDxoND5Db250YWN0cyA8TGFiZWwgYnNTdHlsZT1cImluZm9cIj40MzI8L0xhYmVsPjwvaDQ+XFxuICAgICAgPC9TdW1tYXJ5SXRlbT5cXG4gICAgPC9Db2w+XFxuICAgIDxDb2wgeHM9ezZ9IHNtPXs0fT5cXG4gICAgICA8U3VtbWFyeUl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLTN4IGZhLWJ1aWxkaW5nLW9cIi8+XFxuICAgICAgICA8aDQ+Q29tcGFuaWVzIDxMYWJlbCBic1N0eWxlPVwiaW5mb1wiPjk4PC9MYWJlbD48L2g0PlxcbiAgICAgIDwvU3VtbWFyeUl0ZW0+XFxuICAgIDwvQ29sPlxcbiAgICA8Q29sIHhzPXs2fSBzbT17NH0+XFxuICAgICAgPFN1bW1hcnlJdGVtIGhyZWY9XCIjXCI+XFxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS1jbGlwYm9hcmRcIi8+XFxuICAgICAgICA8aDQ+Tm90ZXMgPExhYmVsIGJzU3R5bGU9XCJkYW5nZXJcIj41NDwvTGFiZWw+PC9oND5cXG4gICAgICA8L1N1bW1hcnlJdGVtPlxcbiAgICA8L0NvbD5cXG4gICAgPENvbCB4cz17Nn0gc209ezR9PlxcbiAgICAgIDxTdW1tYXJ5SXRlbSBocmVmPVwiI1wiPlxcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtZmlsZXMtb1wiLz5cXG4gICAgICAgIDxoND5GaWxlcyA8TGFiZWwgYnNTdHlsZT1cImluZm9cIj42NTwvTGFiZWw+PC9oND5cXG4gICAgICA8L1N1bW1hcnlJdGVtPlxcbiAgICA8L0NvbD5cXG4gICAgPENvbCB4cz17Nn0gc209ezR9PlxcbiAgICAgIDxTdW1tYXJ5SXRlbSBocmVmPVwiI1wiPlxcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtY2hlY2stc3F1YXJlLW9cIi8+XFxuICAgICAgICA8aDQ+VGFza3MgPExhYmVsIGJzU3R5bGU9XCJ3YXJuaW5nXCI+MTA5PC9MYWJlbD48L2g0PlxcbiAgICAgIDwvU3VtbWFyeUl0ZW0+XFxuICAgIDwvQ29sPlxcbiAgPC9Sb3c+XFxuICA8Q2FyZEZvb3Rlcj5cXG4gICAgPHNtYWxsPkJ1aWx0IHdpdGggQm9vdGNhcmRzIC0gU3VtbWFyeSBDYXJkPC9zbWFsbD5cXG4gIDwvQ2FyZEZvb3Rlcj5cXG48L0NhcmQ+J31cclxuICAgICAgICA8L0hpZ2hsaWdodD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1bW1hcnlDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge0NhcmQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSwgQ2FyZEZvb3Rlcn0gZnJvbSAncmVhY3QtYm9vdGNhcmRzJztcclxuXHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XHJcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi9IaWdobGlnaHQnO1xyXG5pbXBvcnQgRXhhbXBsZSBmcm9tICcuL0V4YW1wbGUnO1xyXG5cclxuY2xhc3MgVGFibGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy10YWJsZWNhcmRcIj5cclxuICAgICAgICA8aDM+VGFibGUgQ2FyZHM8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5UYWJsZSBDYXJkcyBkaXNwbGF5IHRhYnVsYXIgZGF0YS48L3A+XHJcbiAgICAgICAgPHA+WW91IGNhbiB1c2UgdGhlIHNhbWUgdGFibGUgY2xhc3NlcyBhcyBCb290c3RyYXAsIGUuZy4gdGhlIDxjb2RlPi50YWJsZS1ob3ZlcjwvY29kZT4gYW5kIDxjb2RlPi5hY3RpdmU8L2NvZGU+IGNsYXNzZXMgdXNlZCBpbiB0aGlzIGV4YW1wbGUuPC9wPlxyXG4gICAgICAgIDxwPldyYXAgd2lkZXIgdGFibGVzIGluIGEgPGNvZGU+Jmx0O2RpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIiZndDs8L2NvZGU+IHNvIHRoZXknbGwgYmUgYWJsZSB0byBzY3JvbGwgaG9yaXpvbnRhbGx5IGluIG5hcnJvd2VyIGJyb3dzZXJzIHN1Y2ggYXMgbW9iaWxlcywgYW5kIG5vdCBiZSBjdXQgb2ZmLjwvcD5cclxuICAgICAgICA8RXhhbXBsZT5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlRhYmxlIENhcmQgVGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBob3ZlciBmaWxsPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJhY3RpdmVcIj48dGg+TmFtZTwvdGg+PHRoPkZvcmVjYXN0PC90aD48dGg+UXVvdGE8L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+PHRkPkd1eSBCYXJkc2xleTwvdGQ+PHRkPjI3NTA8L3RkPjx0ZD40MDAwPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPjx0ZD5BZGFtIENhbGxhaGFuPC90ZD48dGQ+MzMwMDwvdGQ+PHRkPjQwMDA8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+PHRkPjxzdHJvbmc+VG90YWw8L3N0cm9uZz48L3RkPjx0ZD48c3Ryb25nPjYwNTA8L3N0cm9uZz48L3RkPjx0ZD48c3Ryb25nPjgwMDA8L3N0cm9uZz48L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPENhcmRGb290ZXI+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPkJ1aWx0IHdpdGggQm9vdGNhcmRzIC0gVGFibGUgQ2FyZDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0V4YW1wbGU+XHJcbiAgICAgICAgPEhpZ2hsaWdodD5cclxuICAgICAgICAgIHsnPENhcmQ+XFxuICA8Q2FyZEhlYWRlcj5cXG4gICAgPENhcmRUaXRsZT5UYWJsZSBDYXJkIFRpdGxlPC9DYXJkVGl0bGU+XFxuICA8L0NhcmRIZWFkZXI+XFxuICA8VGFibGUgcmVzcG9uc2l2ZSBob3ZlciBmaWxsPlxcbiAgICA8dGhlYWQ+XFxuICAgICAgPHRyIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjx0aD5OYW1lPC90aD48dGg+Rm9yZWNhc3Q8L3RoPjx0aD5RdW90YTwvdGg+PC90cj5cXG4gICAgPC90aGVhZD5cXG4gICAgPHRib2R5PlxcbiAgICAgIDx0cj48dGQ+R3V5IEJhcmRzbGV5PC90ZD48dGQ+Mjc1MDwvdGQ+PHRkPjQwMDA8L3RkPjwvdHI+XFxuICAgICAgPHRyPjx0ZD5BZGFtIENhbGxhaGFuPC90ZD48dGQ+MzMwMDwvdGQ+PHRkPjQwMDA8L3RkPjwvdHI+XFxuICAgICAgPHRyPjx0ZD48c3Ryb25nPlRvdGFsPC9zdHJvbmc+PC90ZD48dGQ+PHN0cm9uZz42MDUwPC9zdHJvbmc+PC90ZD48dGQ+PHN0cm9uZz44MDAwPC9zdHJvbmc+PC90ZD48L3RyPlxcbiAgICA8L3Rib2R5PlxcbiAgPC9UYWJsZT5cXG4gIDxDYXJkRm9vdGVyPlxcbiAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBUYWJsZSBDYXJkPC9zbWFsbD5cXG4gIDwvQ2FyZEZvb3Rlcj5cXG48L0NhcmQ+J31cclxuICAgICAgICA8L0hpZ2hsaWdodD5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ2FyZDtcclxuIiwiLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucHVzaC5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFBVU0ggPSAnUFVTSCc7XG5cbmV4cG9ydHMuUFVTSCA9IFBVU0g7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5yZXBsYWNlLlxuICovXG52YXIgUkVQTEFDRSA9ICdSRVBMQUNFJztcblxuZXhwb3J0cy5SRVBMQUNFID0gUkVQTEFDRTtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IHNvbWUgb3RoZXIgYWN0aW9uIHN1Y2hcbiAqIGFzIHVzaW5nIGEgYnJvd3NlcidzIGJhY2svZm9yd2FyZCBidXR0b25zIGFuZC9vciBtYW51YWxseSBtYW5pcHVsYXRpbmdcbiAqIHRoZSBVUkwgaW4gYSBicm93c2VyJ3MgbG9jYXRpb24gYmFyLiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICpcbiAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93RXZlbnRIYW5kbGVycy9vbnBvcHN0YXRlXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xudmFyIFBPUCA9ICdQT1AnO1xuXG5leHBvcnRzLlBPUCA9IFBPUDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgUFVTSDogUFVTSCxcbiAgUkVQTEFDRTogUkVQTEFDRSxcbiAgUE9QOiBQT1Bcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmxvb3BBc3luYyA9IGxvb3BBc3luYztcblxuZnVuY3Rpb24gbG9vcEFzeW5jKHR1cm5zLCB3b3JrLCBjYWxsYmFjaykge1xuICB2YXIgY3VycmVudFR1cm4gPSAwO1xuICB2YXIgaXNEb25lID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpc0RvbmUgPSB0cnVlO1xuICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpc0RvbmUpIHJldHVybjtcblxuICAgIGlmIChjdXJyZW50VHVybiA8IHR1cm5zKSB7XG4gICAgICB3b3JrLmNhbGwodGhpcywgY3VycmVudFR1cm4rKywgbmV4dCwgZG9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk7XG59IiwiLyplc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zYXZlU3RhdGUgPSBzYXZlU3RhdGU7XG5leHBvcnRzLnJlYWRTdGF0ZSA9IHJlYWRTdGF0ZTtcbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgcmV0dXJuIEtleVByZWZpeCArIGtleTtcbn1cblxuZnVuY3Rpb24gc2F2ZVN0YXRlKGtleSwgc3RhdGUpIHtcbiAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oY3JlYXRlS2V5KGtleSksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG59XG5cbmZ1bmN0aW9uIHJlYWRTdGF0ZShrZXkpIHtcbiAgdmFyIGpzb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVLZXkoa2V5KSk7XG5cbiAgaWYgKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElnbm9yZSBpbnZhbGlkIEpTT04uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5leHBvcnRzLmdldEhhc2hQYXRoID0gZ2V0SGFzaFBhdGg7XG5leHBvcnRzLnJlcGxhY2VIYXNoUGF0aCA9IHJlcGxhY2VIYXNoUGF0aDtcbmV4cG9ydHMuZ2V0V2luZG93UGF0aCA9IGdldFdpbmRvd1BhdGg7XG5leHBvcnRzLmdvID0gZ287XG5leHBvcnRzLmdldFVzZXJDb25maXJtYXRpb24gPSBnZXRVc2VyQ29uZmlybWF0aW9uO1xuZXhwb3J0cy5zdXBwb3J0c0hpc3RvcnkgPSBzdXBwb3J0c0hpc3Rvcnk7XG5leHBvcnRzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2g7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJyc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93UGF0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn1cblxuZnVuY3Rpb24gZ28obikge1xuICBpZiAobikgd2luZG93Lmhpc3RvcnkuZ28obik7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIG1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gdWEuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9ET01TdGF0ZVN0b3JhZ2UgPSByZXF1aXJlKCcuL0RPTVN0YXRlU3RvcmFnZScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZURPTUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZURPTUhpc3RvcnkpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uID0gcmVxdWlyZSgnLi9jcmVhdGVMb2NhdGlvbicpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUxvY2F0aW9uKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIEhUTUw1J3MgaGlzdG9yeSBBUElcbiAqIChwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudCkgdG8gbWFuYWdlIGhpc3RvcnkuXG4gKiBUaGlzIGlzIHRoZSByZWNvbW1lbmRlZCBtZXRob2Qgb2YgbWFuYWdpbmcgaGlzdG9yeSBpbiBicm93c2VycyBiZWNhdXNlXG4gKiBpdCBwcm92aWRlcyB0aGUgY2xlYW5lc3QgVVJMcy5cbiAqXG4gKiBOb3RlOiBJbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBmdWxsXG4gKiBwYWdlIHJlbG9hZHMgd2lsbCBiZSB1c2VkIHRvIHByZXNlcnZlIFVSTHMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KG9wdGlvbnMpIHtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgdmFyIGlzU3VwcG9ydGVkID0gX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSgpO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGUgfHwgd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG5cbiAgICB2YXIgcGF0aCA9IF9ET01VdGlscy5nZXRXaW5kb3dQYXRoKCk7XG4gICAgdmFyIF9oaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGU7XG4gICAgdmFyIGtleSA9IF9oaXN0b3J5U3RhdGUua2V5O1xuXG4gICAgdmFyIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHN0YXRlID0gX0RPTVN0YXRlU3RvcmFnZS5yZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcblxuICAgICAgaWYgKGlzU3VwcG9ydGVkKSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGhpc3RvcnlTdGF0ZSwgeyBrZXk6IGtleSB9KSwgbnVsbCwgcGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jcmVhdGVMb2NhdGlvbjJbJ2RlZmF1bHQnXShwYXRoLCBzdGF0ZSwgdW5kZWZpbmVkLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBwb3BTdGF0ZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gICAgICB0cmFuc2l0aW9uVG8oZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gICAgfVxuXG4gICAgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcbiAgICB2YXIgYWN0aW9uID0gbG9jYXRpb24uYWN0aW9uO1xuICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXk7XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlKGtleSwgc3RhdGUpO1xuXG4gICAgdmFyIHBhdGggPSAoYmFzZW5hbWUgfHwgJycpICsgcGF0aG5hbWUgKyBzZWFyY2g7XG4gICAgdmFyIGhpc3RvcnlTdGF0ZSA9IHtcbiAgICAgIGtleToga2V5XG4gICAgfTtcblxuICAgIGlmIChhY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgIGlmIChpc1N1cHBvcnRlZCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aDsgLy8gVXNlIHBhZ2UgcmVsb2FkIHRvIHByZXNlcnZlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUkVQTEFDRVxuICAgICAgICBpZiAoaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTsgLy8gVXNlIHBhZ2UgcmVsb2FkIHRvIHByZXNlcnZlIHRoZSBVUkwuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZURPTUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBmaW5pc2hUcmFuc2l0aW9uOiBmaW5pc2hUcmFuc2l0aW9uLFxuICAgIHNhdmVTdGF0ZTogX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGVcbiAgfSkpO1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMCxcbiAgICAgIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgdmFyIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbjogbGlzdGVuXG4gIH0pO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVCcm93c2VySGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVET01IaXN0b3J5KG9wdGlvbnMpIHtcbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7XG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX0RPTVV0aWxzLmdldFVzZXJDb25maXJtYXRpb25cbiAgfSwgb3B0aW9ucywge1xuICAgIGdvOiBfRE9NVXRpbHMuZ29cbiAgfSkpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZURPTUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kZWVwRXF1YWwgPSByZXF1aXJlKCdkZWVwLWVxdWFsJyk7XG5cbnZhciBfZGVlcEVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZXBFcXVhbCk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbiA9IHJlcXVpcmUoJy4vY3JlYXRlTG9jYXRpb24nKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVMb2NhdGlvbik7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2sgPSByZXF1aXJlKCcuL3J1blRyYW5zaXRpb25Ib29rJyk7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcnVuVHJhbnNpdGlvbkhvb2spO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUtleShsZW5ndGgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBsZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJlxuICAvL2EuYWN0aW9uID09PSBiLmFjdGlvbiAmJiAvLyBEaWZmZXJlbnQgYWN0aW9uICE9PSBsb2NhdGlvbiBjaGFuZ2UuXG4gIGEua2V5ID09PSBiLmtleSAmJiBfZGVlcEVxdWFsMlsnZGVmYXVsdCddKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG52YXIgRGVmYXVsdEtleUxlbmd0aCA9IDY7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBvcHRpb25zLmdldEN1cnJlbnRMb2NhdGlvbjtcbiAgdmFyIGZpbmlzaFRyYW5zaXRpb24gPSBvcHRpb25zLmZpbmlzaFRyYW5zaXRpb247XG4gIHZhciBzYXZlU3RhdGUgPSBvcHRpb25zLnNhdmVTdGF0ZTtcbiAgdmFyIGdvID0gb3B0aW9ucy5nbztcbiAgdmFyIGtleUxlbmd0aCA9IG9wdGlvbnMua2V5TGVuZ3RoO1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IG9wdGlvbnMuZ2V0VXNlckNvbmZpcm1hdGlvbjtcblxuICBpZiAodHlwZW9mIGtleUxlbmd0aCAhPT0gJ251bWJlcicpIGtleUxlbmd0aCA9IERlZmF1bHRLZXlMZW5ndGg7XG5cbiAgdmFyIHRyYW5zaXRpb25Ib29rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICB2YXIgYWxsS2V5cyA9IFtdO1xuICB2YXIgY2hhbmdlTGlzdGVuZXJzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIGlmIChwZW5kaW5nTG9jYXRpb24gJiYgcGVuZGluZ0xvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKHBlbmRpbmdMb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnZXRDdXJyZW50KCk7XG5cbiAgICBsb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXG4gICAgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgYWxsS2V5cyA9IFtdLmNvbmNhdChhbGxLZXlzLnNsaWNlKDAsIGN1cnJlbnQgKyAxKSwgW2xvY2F0aW9uLmtleV0pO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5SRVBMQUNFKSB7XG4gICAgICBhbGxLZXlzW2N1cnJlbnRdID0gbG9jYXRpb24ua2V5O1xuICAgIH1cblxuICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgY2hhbmdlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfbG9jYXRpb24gPSBnZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICAgIGFsbEtleXMgPSBbX2xvY2F0aW9uLmtleV07XG4gICAgICB1cGRhdGVMb2NhdGlvbihfbG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VMaXN0ZW5lcnMgPSBjaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgIF9Bc3luY1V0aWxzLmxvb3BBc3luYyh0cmFuc2l0aW9uSG9va3MubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICAgIF9ydW5UcmFuc2l0aW9uSG9vazJbJ2RlZmF1bHQnXSh0cmFuc2l0aW9uSG9va3NbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKGdldFVzZXJDb25maXJtYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgY2FsbGJhY2sob2sgIT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhtZXNzYWdlICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGVuZGluZ0xvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb25zQXJlRXF1YWwobG9jYXRpb24sIG5leHRMb2NhdGlvbikpIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIHBlbmRpbmdMb2NhdGlvbiA9IG5leHRMb2NhdGlvbjtcblxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG8obmV4dExvY2F0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChwZW5kaW5nTG9jYXRpb24gIT09IG5leHRMb2NhdGlvbikgcmV0dXJuOyAvLyBUcmFuc2l0aW9uIHdhcyBpbnRlcnJ1cHRlZC5cblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIGZpbmlzaFRyYW5zaXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgICAgdXBkYXRlTG9jYXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gJiYgbmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGFsbEtleXMuaW5kZXhPZihuZXh0TG9jYXRpb24ua2V5KTtcblxuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSAmJiBuZXh0SW5kZXggIT09IC0xKSBnbyhwcmV2SW5kZXggLSBuZXh0SW5kZXgpOyAvLyBSZXN0b3JlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICB0cmFuc2l0aW9uVG8oX2NyZWF0ZUxvY2F0aW9uMlsnZGVmYXVsdCddKHBhdGgsIHN0YXRlLCBfQWN0aW9ucy5QVVNILCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgdHJhbnNpdGlvblRvKF9jcmVhdGVMb2NhdGlvbjJbJ2RlZmF1bHQnXShwYXRoLCBzdGF0ZSwgX0FjdGlvbnMuUkVQTEFDRSwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSk7XG4gICAgICB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUoZ2V0Q3VycmVudExvY2F0aW9uKCksIHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSkge1xuICAgIGxvY2F0aW9uLnN0YXRlID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLnN0YXRlLCBzdGF0ZSk7XG4gICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gY3JlYXRlUmFuZG9tS2V5KGtleUxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYocGF0aCkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAodHJhbnNpdGlvbkhvb2tzLmluZGV4T2YoaG9vaykgPT09IC0xKSB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaFN0YXRlOiBwdXNoU3RhdGUsXG4gICAgcmVwbGFjZVN0YXRlOiByZXBsYWNlU3RhdGUsXG4gICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG5cbiAgICByZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICdyZWdpc3RlclRyYW5zaXRpb25Ib29rIGlzIGRlcHJlY2F0ZWQ7IHVzZSBsaXN0ZW5CZWZvcmUgaW5zdGVhZCcpLFxuICAgIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXSh1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICd1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIHRoZSBjYWxsYmFjayByZXR1cm5lZCBmcm9tIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJylcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIGV4dHJhY3RQYXRoKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goL2h0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpIHJldHVybiBzdHJpbmc7XG5cbiAgX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdMb2NhdGlvbiBwYXRoIG11c3QgYmUgcGF0aG5hbWUgKyBxdWVyeSBzdHJpbmcgb25seSwgbm90IGEgZnVsbHkgcXVhbGlmaWVkIFVSTCBsaWtlIFwiJXNcIicsIHN0cmluZyk7XG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gIHZhciBwYXRoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJy8nIDogYXJndW1lbnRzWzBdO1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gX0FjdGlvbnMuUE9QIDogYXJndW1lbnRzWzJdO1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICBwYXRoID0gZXh0cmFjdFBhdGgocGF0aCk7XG5cbiAgdmFyIHBhdGhuYW1lID0gcGF0aDtcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIGlmIChwYXRobmFtZSA9PT0gJycpIHBhdGhuYW1lID0gJy8nO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBkZXByZWNhdGUoZm4sIG1lc3NhZ2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgbWVzc2FnZSk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlcHJlY2F0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gcnVuVHJhbnNpdGlvbkhvb2soaG9vaywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBob29rKGxvY2F0aW9uLCBjYWxsYmFjayk7XG5cbiAgaWYgKGhvb2subGVuZ3RoIDwgMikge1xuICAgIC8vIEFzc3VtZSB0aGUgaG9vayBydW5zIHN5bmNocm9ub3VzbHkgYW5kIGF1dG9tYXRpY2FsbHlcbiAgICAvLyBjYWxsIHRoZSBjYWxsYmFjayB3aXRoIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgY2FsbGJhY2socmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBfd2FybmluZzJbJ2RlZmF1bHQnXShyZXN1bHQgPT09IHVuZGVmaW5lZCwgJ1lvdSBzaG91bGQgbm90IFwicmV0dXJuXCIgaW4gYSB0cmFuc2l0aW9uIGhvb2sgd2l0aCBhIGNhbGxiYWNrIGFyZ3VtZW50OyBjYWxsIHRoZSBjYWxsYmFjayBpbnN0ZWFkJyk7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gcnVuVHJhbnNpdGlvbkhvb2s7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJ2YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuL2xpYi9rZXlzLmpzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2xpYi9pc19hcmd1bWVudHMuanMnKTtcblxudmFyIGRlZXBFcXVhbCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYWN0dWFsIGluc3RhbmNlb2YgRGF0ZSAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCB8fCB0eXBlb2YgYWN0dWFsICE9ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgdmFyIGksIGtleTtcbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LlxuICBpZiAoYS5wcm90b3R5cGUgIT09IGIucHJvdG90eXBlKSByZXR1cm4gZmFsc2U7XG4gIC8vfn5+SSd2ZSBtYW5hZ2VkIHRvIGJyZWFrIE9iamVjdC5rZXlzIHRocm91Z2ggc2NyZXd5IGFyZ3VtZW50cyBwYXNzaW5nLlxuICAvLyAgIENvbnZlcnRpbmcgdG8gYXJyYXkgc29sdmVzIHRoZSBwcm9ibGVtLlxuICBpZiAoaXNBcmd1bWVudHMoYSkpIHtcbiAgICBpZiAoIWlzQXJndW1lbnRzKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCBvcHRzKTtcbiAgfVxuICBpZiAoaXNCdWZmZXIoYSkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpLFxuICAgICAgICBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsvL2hhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGEgPT09IHR5cGVvZiBiO1xufVxuIiwidmFyIHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPSAoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHMpXG59KSgpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID8gc3VwcG9ydGVkIDogdW5zdXBwb3J0ZWQ7XG5cbmV4cG9ydHMuc3VwcG9ydGVkID0gc3VwcG9ydGVkO1xuZnVuY3Rpb24gc3VwcG9ydGVkKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59O1xuXG5leHBvcnRzLnVuc3VwcG9ydGVkID0gdW5zdXBwb3J0ZWQ7XG5mdW5jdGlvbiB1bnN1cHBvcnRlZChvYmplY3Qpe1xuICByZXR1cm4gb2JqZWN0ICYmXG4gICAgdHlwZW9mIG9iamVjdCA9PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBvYmplY3QubGVuZ3RoID09ICdudW1iZXInICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsICdjYWxsZWUnKSB8fFxuICAgIGZhbHNlO1xufTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJ1xuICA/IE9iamVjdC5rZXlzIDogc2hpbTtcblxuZXhwb3J0cy5zaGltID0gc2hpbTtcbmZ1bmN0aW9uIHNoaW0gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgcmV0dXJuIGtleXM7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19
