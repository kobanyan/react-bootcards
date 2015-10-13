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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

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
        { inverse: true, fixedTop: true, toggleNavKey: 0 },
        _react2['default'].createElement(
          _reactBootstrap.NavBrand,
          null,
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/react-bootcards', title: 'Bootcards' },
            'Bootcards'
          )
        ),
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

_reactDom2['default'].render(_react2['default'].createElement(
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
), document.getElementById('root'));

},{"./About":1,"./Documentation":2,"./Home":3,"history/lib/createBrowserHistory":33,"react":undefined,"react-bootcards":undefined,"react-bootstrap":undefined,"react-dom":undefined,"react-router":undefined,"react-router-bootstrap":undefined}],5:[function(require,module,exports){
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
            { fluid: true, className: 'bootcards-navbar-double', toggleNavKey: 0 },
            _react2['default'].createElement(
              _reactBootstrap.NavBrand,
              null,
              _react2['default'].createElement(
                'a',
                { title: 'Bootcards Starter', href: '/' },
                'Bootcards Starter'
              )
            ),
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
          '<Navbar fluid className="bootcards-navbar-double" toggleNavKey={0}>\n  <NabBrand>\n    <a title="Bootcards Starter" href="/">Bootcards Starter</a>\n  </NavBrand>\n  <Nav right eventKey={0} className="bootcards-nav-secondary">\n    <NavDropdown eventKey={1} id="doublenavbar-languages" title={[<i key="icon" className="fa fa-globe" />, <span key="title"> Languages</span>]}>\n      <MenuItem eventKey="1">Deutsch</MenuItem>\n      <MenuItem eventKey="2">English</MenuItem>\n      <MenuItem eventKey="3">Espanol</MenuItem>\n    </NavDropdown>\n    <NavItem eventKey={2} href="#">\n      <i className="fa fa-fw fa-lock" />\n      <span> Login</span>\n    </NavItem>\n  </Nav>\n  <Nav right eventKey={3} className="bootcards-nav-primary">\n    <NavDropdown eventKey={4} id="doublenavbar-home" title={[<i key="icon" className="fa fa-fw fa-dashboard" />, <span key="title"> Home</span>]}>\n      <MenuItem eventKey="1" href="#"><i className="fa fa-fw fa-envelope-o" /> Action</MenuItem>\n      <MenuItem eventKey="2" href="#"><i className="fa fa-fw fa-film" /> Another action</MenuItem>\n      <MenuItem eventKey="3" href="#"><i className="fa fa-fw fa-file-o" /> Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4" href="#"><i className="fa fa-fw fa-bar-chart-o" /> Separated link</MenuItem>\n    </NavDropdown>\n    <NavItem eventKey={5} href="#">\n      <i className="fa fa-fw fa-briefcase" />\n      <span> Portfolio</span>\n    </NavItem>\n    <NavItem eventKey={6} href="#">\n      <i className="fa fa-fw fa-bullhorn" />\n      <span> Blog</span>\n    </NavItem>\n  </Nav>\n</Navbar>'
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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _highlightJs = require('highlight.js');

var _highlightJs2 = _interopRequireDefault(_highlightJs);

var Highlight = (function (_React$Component) {
  _inherits(Highlight, _React$Component);

  function Highlight() {
    _classCallCheck(this, Highlight);

    _get(Object.getPrototypeOf(Highlight.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Highlight, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlightCode();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.highlightCode();
    }
  }, {
    key: 'highlightCode',
    value: function highlightCode() {
      var domNode = _reactDom2['default'].findDOMNode(this);
      var nodes = domNode.querySelectorAll('pre code');
      if (nodes.length > 0) {
        for (var i = 0; i < nodes.length; i++) {
          _highlightJs2['default'].highlightBlock(nodes[i]);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'highlight') }),
        _react2['default'].createElement(
          'pre',
          null,
          _react2['default'].createElement(
            'code',
            { className: this.props.highlightClassName },
            this.props.children
          )
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

},{"classnames":undefined,"highlight.js":undefined,"react":undefined,"react-dom":undefined}],15:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === QuotaExceededError || window.sessionStorage.length === 0) {
      // Probably in Safari "private mode" where sessionStorage quota is 0. #42
      _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode');

      return;
    }

    throw error;
  }
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
},{"warning":44}],31:[function(require,module,exports){
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

    return history.createLocation(path, state, undefined, key);
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
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (isSupported) {
        window.history.pushState(historyState, null, path);
      } else {
        // Use a full-page reload to preserve the URL.
        window.location.href = path;
      }
    } else {
      // REPLACE
      if (isSupported) {
        window.history.replaceState(historyState, null, path);
      } else {
        // Use a full-page reload to preserve the URL.
        window.location.replace(path);
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

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
},{"./Actions":28,"./DOMStateStorage":30,"./DOMUtils":31,"./ExecutionEnvironment":32,"./createDOMHistory":34,"invariant":43}],34:[function(require,module,exports){
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
},{"./DOMUtils":31,"./ExecutionEnvironment":32,"./createHistory":35,"invariant":43}],35:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

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
    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
  }

  function replaceState(state, path) {
    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
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
    if (path == null || typeof path === 'string') return path;

    var pathname = path.pathname;
    var search = path.search;
    var hash = path.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(path) {
    return createPath(path);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
  }

  // deprecated
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
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":28,"./AsyncUtils":29,"./createLocation":36,"./deprecate":37,"./runTransitionHook":39,"deep-equal":40}],36:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof path === 'string') path = _parsePath2['default'](path);

  var pathname = path.pathname || '/';
  var search = path.search || '';
  var hash = path.hash || '';

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
},{"./Actions":28,"./parsePath":38}],37:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    _warning2['default'](false, '[history] ' + message);
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
},{"warning":44}],38:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function extractPath(string) {
  var match = string.match(/https?:\/\/[^\/]*/);

  if (match == null) return string;

  _warning2['default'](false, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', string);

  return string.substring(match[0].length);
}

function parsePath(path) {
  var pathname = extractPath(path);
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
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
},{"warning":44}],39:[function(require,module,exports){
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
},{"warning":44}],40:[function(require,module,exports){
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

},{"./lib/is_arguments.js":41,"./lib/keys.js":42}],41:[function(require,module,exports){
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

},{}],42:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],43:[function(require,module,exports){
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
},{"_process":45}],44:[function(require,module,exports){
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
},{"_process":45}],45:[function(require,module,exports){
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

},{}]},{},[4]);
