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
            'a',
            { title: 'Bootcards', href: '/' },
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
              { to: '/' },
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
              { to: '/documentation' },
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
              { to: '/about' },
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
    _react2['default'].createElement(_reactRouter.Route, { path: 'documentation', component: _Documentation2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: 'about', component: _About2['default'] })
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZDovU291cmNlL2pzL3JlYWN0LWJvb3RjYXJkcy9leGFtcGxlL3NyYy9BYm91dC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvRG9jdW1lbnRhdGlvbi5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvSG9tZS5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvQmFzZUNhcmQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0NhcmRzLmpzIiwiZDovU291cmNlL2pzL3JlYWN0LWJvb3RjYXJkcy9leGFtcGxlL3NyYy9zZWN0aW9ucy9DaGFydENhcmQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0RvdWJsZU5hdmJhci5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvRXhhbXBsZS5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvRmlsZUNhcmQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0Zvb3RlckJhci5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvRm9ybUNhcmQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0dyaWQuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL0hpZ2hsaWdodC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvTGlzdERldGFpbC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvTGlzdFNlYXJjaC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvTGlzdHMuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL01lZGlhQ2FyZC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvTW9kYWxzLmpzIiwiZDovU291cmNlL2pzL3JlYWN0LWJvb3RjYXJkcy9leGFtcGxlL3NyYy9zZWN0aW9ucy9OYXZiYXIuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL05hdmlnYXRpb24uanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL1JpY2hUZXh0Q2FyZC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvU2VjdGlvbi5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvU2xpZGluZ1NpZGViYXIuanMiLCJkOi9Tb3VyY2UvanMvcmVhY3QtYm9vdGNhcmRzL2V4YW1wbGUvc3JjL3NlY3Rpb25zL1N1Ym1lbnVzLmpzIiwiZDovU291cmNlL2pzL3JlYWN0LWJvb3RjYXJkcy9leGFtcGxlL3NyYy9zZWN0aW9ucy9TdW1tYXJ5Q2FyZC5qcyIsImQ6L1NvdXJjZS9qcy9yZWFjdC1ib290Y2FyZHMvZXhhbXBsZS9zcmMvc2VjdGlvbnMvVGFibGVDYXJkLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0FjdGlvbnMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQXN5bmNVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ET01TdGF0ZVN0b3JhZ2UuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRE9NVXRpbHMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlRE9NSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUxvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2RlcHJlY2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ydW5UcmFuc2l0aW9uSG9vay5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2hpc3Rvcnkvbm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2lzX2FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3Rvcnkvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2hpc3Rvcnkvbm9kZV9tb2R1bGVzL3dhcm5pbmcvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9i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O0dBQVMsbUJBQU0sU0FBUzs7cUJBb0N4QixTQUFTOzs7O0FDNUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3csIFdlbGx9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3c+XG4gICAgICAgIDxXZWxsIGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPHA+Qm9vdGNhcmRzIGlzIGFuIG9wZW4gc291cmNlIHByb2plY3QgY3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9tYXJrbGV1c2lua1wiIHRhcmdldD1cIl9ibGFua1wiPkBtYXJrbGV1c2luazwvYT4sIDxhIGhyZWY9XCJodHRwOi8vd3d3LnR3aXR0ZXIuY29tL3NpdmVzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QHNpdmVzPC9hPiBhbmQgPGEgaHJlZj1cImh0dHA6Ly93d3cudHdpdHRlci5jb20vamFja2hlcmJlcnRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5AamFja2hlcmJlcnQ8L2E+IGFuZCBzcG9uc29yZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly93d3cudGVhbXN0dWRpby5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UZWFtc3R1ZGlvPC9hPi48L3A+XG4gICAgICAgICAgPHA+SXQgd2FzIG9yaWdpbmFsbHkgcmVsZWFzZWQgb24gTW9uZGF5IEFwcmlsIDE0dGggMjAxNC4gIEl0IHdhcyBjcmVhdGVkIHRvIG1lZXQgVGVhbXN0dWRpbydzIG5lZWQgZm9yIGEgbW9kdWxhciB1c2VyIGludGVyZmFjZSBmcmFtZXdvcmsgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIGJ1aWxkIGVudGVycHJpc2UgbW9iaWxlIGFwcHMgdmVyeSBxdWlja2x5LiAgQnkgYnVpbGRpbmcgb24gdG9wIG9mIEJvb3RzdHJhcCwgQm9vdGNhcmRzIHRha2VzIGFkdmFudGFnZSBvZiBCb290c3RyYXAncyBncmVhdCBjYXBhYmlsaXRpZXMsIHdoaWxzdCBhZGRpbmcgc3VwcG9ydCBmb3IgdGhlIDxhIGhyZWY9XCJodHRwOi8vaW5zaWRlaW50ZXJjb20uaW8vd2h5LWNhcmRzLWFyZS10aGUtZnV0dXJlLW9mLXRoZS13ZWIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q2FyZHMgZGVzaWduIHBhdHRlcm48L2E+LjwvcD5cbiAgICAgICAgPC9XZWxsPlxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TmF2LCBOYXZJdGVtLCBSb3csIENvbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtDb250YWluZXIsIENhcmRzLCBDYXJkfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xyXG5cclxuaW1wb3J0IEdyaWQgZnJvbSAnLi9zZWN0aW9ucy9HcmlkJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9zZWN0aW9ucy9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IFNlY05hdmJhciBmcm9tICcuL3NlY3Rpb25zL05hdmJhcic7XHJcbmltcG9ydCBEb3VibGVOYXZiYXIgZnJvbSAnLi9zZWN0aW9ucy9Eb3VibGVOYXZiYXInO1xyXG5pbXBvcnQgRm9vdGVyQmFyIGZyb20gJy4vc2VjdGlvbnMvRm9vdGVyQmFyJztcclxuaW1wb3J0IFNsaWRpbmdTaWRlYmFyIGZyb20gJy4vc2VjdGlvbnMvU2xpZGluZ1NpZGViYXInO1xyXG5pbXBvcnQgU3VibWVudXMgZnJvbSAnLi9zZWN0aW9ucy9TdWJtZW51cyc7XHJcbmltcG9ydCBMaXN0cyBmcm9tICcuL3NlY3Rpb25zL0xpc3RzJztcclxuaW1wb3J0IExpc3REZXRhaWwgZnJvbSAnLi9zZWN0aW9ucy9MaXN0RGV0YWlsJztcclxuaW1wb3J0IExpc3RTZWFyY2ggZnJvbSAnLi9zZWN0aW9ucy9MaXN0U2VhcmNoJztcclxuaW1wb3J0IFNlY0NhcmRzIGZyb20gJy4vc2VjdGlvbnMvQ2FyZHMnO1xyXG5pbXBvcnQgQmFzZUNhcmQgZnJvbSAnLi9zZWN0aW9ucy9CYXNlQ2FyZCc7XHJcbmltcG9ydCBGb3JtQ2FyZCBmcm9tICcuL3NlY3Rpb25zL0Zvcm1DYXJkJztcclxuaW1wb3J0IFRhYmxlQ2FyZCBmcm9tICcuL3NlY3Rpb25zL1RhYmxlQ2FyZCc7XHJcbmltcG9ydCBDaGFydENhcmQgZnJvbSAnLi9zZWN0aW9ucy9DaGFydENhcmQnO1xyXG5pbXBvcnQgU3VtbWFyeUNhcmQgZnJvbSAnLi9zZWN0aW9ucy9TdW1tYXJ5Q2FyZCc7XHJcbmltcG9ydCBNZWRpYUNhcmQgZnJvbSAnLi9zZWN0aW9ucy9NZWRpYUNhcmQnO1xyXG5pbXBvcnQgRmlsZUNhcmQgZnJvbSAnLi9zZWN0aW9ucy9GaWxlQ2FyZCc7XHJcbmltcG9ydCBSaWNoVGV4dENhcmQgZnJvbSAnLi9zZWN0aW9ucy9SaWNoVGV4dENhcmQnO1xyXG5pbXBvcnQgTW9kYWxzIGZyb20gJy4vc2VjdGlvbnMvTW9kYWxzJztcclxuXHJcbmNsYXNzIERvY3VtZW50YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZWxlY3RlZERvY3NNZW51OiAnZG9jLWdyaWQnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzbT17M30gY2xhc3NOYW1lPVwiaGlkZGVuLXhzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3MtbWVudSBhZmZpeFwiPlxyXG4gICAgICAgICAgICA8TmF2IGJzU3R5bGU9XCJwaWxsc1wiIHN0YWNrZWQgb25TZWxlY3Q9e3RoaXMuaGFuZGxlRG9jc01lbnVTZWxlY3QuYmluZCh0aGlzKX0gYWN0aXZlS2V5PXt0aGlzLnN0YXRlLnNlbGVjdGVkRG9jc01lbnV9PlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIjZG9jLWdyaWRcIiBldmVudEtleT1cImRvYy1ncmlkXCI+R3JpZCBTeXN0ZW08L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwiXCIgaHJlZj1cIiNkb2MtbmF2aWdhdGlvblwiIGV2ZW50S2V5PVwiZG9jLW5hdmlnYXRpb25cIj5OYXZpZ2F0aW9uPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cInN1YlwiIGhyZWY9XCIjZG9jLW5hdmJhclwiIGV2ZW50S2V5PVwiZG9jLW5hdmJhclwiPk5hdmJhcjwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJzdWJcIiBocmVmPVwiI2RvYy1kb3VibGVuYXZiYXJcIiBldmVudEtleT1cImRvYy1kb3VibGVuYXZiYXJcIj5Eb3VibGUgTmF2YmFyPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cInN1YlwiIGhyZWY9XCIjZG9jLWZvb3RlcmJhclwiIGV2ZW50S2V5PVwiZG9jLWZvb3RlcmJhclwiPkZvb3RlciBCYXI8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2Mtc2xpZGluZ3NpZGViYXJcIiBldmVudEtleT1cImRvYy1zbGlkaW5nc2lkZWJhclwiPlNsaWRpbmcgU2lkZWJhcjwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJcIiBocmVmPVwiI2RvYy1saXN0c1wiIGV2ZW50S2V5PVwiZG9jLWxpc3RzXCI+TGlzdHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtbGlzdGRldGFpbFwiIGV2ZW50S2V5PVwiZG9jLWxpc3RkZXRhaWxcIj5EZXRhaWxlZCBMaXN0czwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJcIiBocmVmPVwiI2RvYy1saXN0c2VhcmNoXCIgZXZlbnRLZXk9XCJkb2MtbGlzdHNlYXJjaFwiPkxpc3QgU2VhcmNoICZhbXA7IExpc3QgQWN0aW9uczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJcIiBocmVmPVwiI2RvYy1jYXJkc1wiIGV2ZW50S2V5PVwiZG9jLWNhcmRzXCI+Q2FyZHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtYmFzZWNhcmRcIiBldmVudEtleT1cImRvYy1iYXNlY2FyZFwiPkJhc2UgQ2FyZHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtZm9ybWNhcmRcIiBldmVudEtleT1cImRvYy1mb3JtY2FyZFwiPkZvcm0gQ2FyZHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtdGFibGVjYXJkXCIgZXZlbnRLZXk9XCJkb2MtdGFibGVjYXJkXCI+VGFibGUgQ2FyZHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtY2hhcnRjYXJkXCIgZXZlbnRLZXk9XCJkb2MtY2hhcnRjYXJkXCI+Q2hhcnQgQ2FyZHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2Mtc3VtbWFyeWNhcmRcIiBldmVudEtleT1cImRvYy1zdW1tYXJ5Y2FyZFwiPlN1bW1hcnkgQ2FyZHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtbWVkaWFjYXJkXCIgZXZlbnRLZXk9XCJkb2MtbWVkaWFjYXJkXCI+TWVkaWEgQ2FyZHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtZmlsZWNhcmRcIiBldmVudEtleT1cImRvYy1maWxlY2FyZFwiPkZpbGUgQ2FyZHM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwic3ViXCIgaHJlZj1cIiNkb2MtcmljaHRleHRjYXJkXCIgZXZlbnRLZXk9XCJkb2MtcmljaHRleHRjYXJkXCI+UmljaCBUZXh0IENhcmRzPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIjZG9jLW1vZGFsc1wiIGV2ZW50S2V5PVwiZG9jLW1vZGFsc1wiPk1vZGFsczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q2FyZHMgc209ezl9IGNsYXNzTmFtZT1cImJvb3RjYXJkcy1kb2N1bWVudGFzaW9uLWNhcmRzXCI+XHJcbiAgICAgICAgICA8Q2FyZCBjYXJkU3R5bGU9XCJyaWNodGV4dFwiPlxyXG4gICAgICAgICAgICA8R3JpZCAvPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICA8U2VjTmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxEb3VibGVOYXZiYXIgLz5cclxuICAgICAgICAgICAgPEZvb3RlckJhciAvPlxyXG4gICAgICAgICAgICA8U2xpZGluZ1NpZGViYXIgLz5cclxuICAgICAgICAgICAgPFN1Ym1lbnVzIC8+XHJcbiAgICAgICAgICAgIDxMaXN0cyAvPlxyXG4gICAgICAgICAgICA8TGlzdERldGFpbCAvPlxyXG4gICAgICAgICAgICA8TGlzdFNlYXJjaCAvPlxyXG4gICAgICAgICAgICA8U2VjQ2FyZHMgLz5cclxuICAgICAgICAgICAgPEJhc2VDYXJkIC8+XHJcbiAgICAgICAgICAgIDxGb3JtQ2FyZCAvPlxyXG4gICAgICAgICAgICA8VGFibGVDYXJkIC8+XHJcbiAgICAgICAgICAgIDxDaGFydENhcmQgLz5cclxuICAgICAgICAgICAgPFN1bW1hcnlDYXJkIC8+XHJcbiAgICAgICAgICAgIDxNZWRpYUNhcmQgLz5cclxuICAgICAgICAgICAgPEZpbGVDYXJkIC8+XHJcbiAgICAgICAgICAgIDxSaWNoVGV4dENhcmQgLz5cclxuICAgICAgICAgICAgPE1vZGFscyAvPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ2FyZHM+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURvY3NNZW51U2VsZWN0KGV2ZW50S2V5KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZERvY3NNZW51OiBldmVudEtleX0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBldmVudEtleTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50YXRpb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5Ib21lPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge05hdmJhciwgTmF2LCBOYXZJdGVtfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHtMaW5rQ29udGFpbmVyfSBmcm9tICdyZWFjdC1yb3V0ZXItYm9vdHN0cmFwJztcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuaW1wb3J0IERvY3VtZW50YXRpb24gZnJvbSAnLi9Eb2N1bWVudGF0aW9uJztcbmltcG9ydCBBYm91dCBmcm9tICcuL0Fib3V0JztcblxuY29uc3QgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGludmVyc2UgZml4ZWRUb3BcbiAgICAgICAgICBicmFuZD17PGEgdGl0bGU9XCJCb290Y2FyZHNcIiBocmVmPVwiL1wiPkJvb3RjYXJkczwvYT59XG4gICAgICAgICAgdG9nZ2xlTmF2S2V5PXswfVxuICAgICAgICA+XG4gICAgICAgICAgPE5hdiBldmVudEtleT17MH0+XG4gICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0+XG4gICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWhvbWVcIiAvPiBIb21lPC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17Mn0+XG4gICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2RvY3VtZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS1ib29rXCIgLz4gRG9jdW1lbnRhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezN9PlxuICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm8tY2lyY2xlXCIgLz4gQWJvdXQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblJlYWN0LnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17Y3JlYXRlQnJvd3Nlckhpc3RvcnkoKX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJkb2N1bWVudGF0aW9uXCIgY29tcG9uZW50PXtEb2N1bWVudGF0aW9ufSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJhYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5ib2R5KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbiwgTGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHtDYXJkLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUsIENhcmRGb290ZXIsIExpc3RHcm91cEl0ZW1IZWFkZXIsIExpc3RHcm91cEl0ZW1UZXh0fSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tICcuL0V4YW1wbGUnO1xuXG5jbGFzcyBCYXNlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtYmFzZWNhcmRcIj5cbiAgICAgICAgPGgzPkJhc2UgQ2FyZHM8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+QmFzZSBDYXJkcyBkaXNwbGF5IGEgbGlzdCBvZiBpbmZvcm1hdGlvbiBzZXBhcmF0ZWQgYnkgZGl2aWRlcnMuPC9wPlxuICAgICAgICA8cD5SZXBsYWNlIHRoZSBkZWZhdWx0IDxjb2RlPi5wYW5lbC1ib2R5PC9jb2RlPiB3aXRoIGEgPGNvZGU+Lmxpc3QtZ3JvdXA8L2NvZGU+LjwvcD5cbiAgICAgICAgPEV4YW1wbGU+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPkJhc2UgQ2FyZCBUaXRsZTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiIC8+XG4gICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxMaXN0R3JvdXAgZmlsbD5cbiAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0Pk5hbWU8L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkpvaG4gU21pdGg8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0Pk9jY3VwYXRpb248L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPldlYiBEZXZlbG9wZXI8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhbSBtYXVyaXMgdGVsbHVzLCB2ZWhpY3VsYSB1dCB0ZWxsdXMgaWQsIHN1c2NpcGl0IGRhcGlidXMgdG9ydG9yLiBJbnRlZ2VyIHZpdmVycmEgdHVycGlzIGFjIGZyaW5naWxsYSBoZW5kcmVyaXQuIFNlZCBmYXVjaWJ1cyBwb3N1ZXJlIGZlbGlzIGV0IHBlbGxlbnRlc3F1ZS4gQ3JhcyB2YXJpdXMgdG9ydG9yIHZpdGFlIG1vbGVzdGllIHRlbXBvci4gUHJvaW4gdXQgdml2ZXJyYSBlbGl0LCBhYyBncmF2aWRhIHRvcnRvci48L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBCYXNlIENhcmQ8L3NtYWxsPlxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9FeGFtcGxlPlxuICAgICAgICA8SGlnaGxpZ2h0PlxuICAgICAgICAgIHsnPENhcmQ+XFxuICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxcbiAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPkJhc2UgQ2FyZCBUaXRsZTwvQ2FyZFRpdGxlPlxcbiAgICA8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiIC8+XFxuICAgICAgRWRpdFxcbiAgICA8L0J1dHRvbj5cXG4gIDwvQ2FyZEhlYWRlcj5cXG4gIDxMaXN0R3JvdXAgZmlsbD5cXG4gICAgPExpc3RHcm91cEl0ZW0+XFxuICAgICAgPExpc3RHcm91cEl0ZW1UZXh0Pk5hbWU8L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkpvaG4gU21pdGg8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XFxuICAgIDwvTGlzdEdyb3VwSXRlbT5cXG4gICAgPExpc3RHcm91cEl0ZW0+XFxuICAgICAgPExpc3RHcm91cEl0ZW1UZXh0Pk9jY3VwYXRpb248L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPldlYiBEZXZlbG9wZXI8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XFxuICAgIDwvTGlzdEdyb3VwSXRlbT5cXG4gICAgPExpc3RHcm91cEl0ZW0+XFxuICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhbSBtYXVyaXMgdGVsbHVzLCB2ZWhpY3VsYSB1dCB0ZWxsdXMgaWQsIHN1c2NpcGl0IGRhcGlidXMgdG9ydG9yLiBJbnRlZ2VyIHZpdmVycmEgdHVycGlzIGFjIGZyaW5naWxsYSBoZW5kcmVyaXQuIFNlZCBmYXVjaWJ1cyBwb3N1ZXJlIGZlbGlzIGV0IHBlbGxlbnRlc3F1ZS4gQ3JhcyB2YXJpdXMgdG9ydG9yIHZpdGFlIG1vbGVzdGllIHRlbXBvci4gUHJvaW4gdXQgdml2ZXJyYSBlbGl0LCBhYyBncmF2aWRhIHRvcnRvci48L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICA8L0xpc3RHcm91cD5cXG4gIDxDYXJkRm9vdGVyPlxcbiAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBCYXNlIENhcmQ8L3NtYWxsPlxcbiAgPC9DYXJkRm9vdGVyPlxcbjwvQ2FyZD4nfVxuICAgICAgICA8L0hpZ2hsaWdodD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UGFuZWwsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7Q2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDYXJkRm9vdGVyfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tICcuL0V4YW1wbGUnO1xuXG5jbGFzcyBDYXJkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtY2FyZHNcIj5cbiAgICAgICAgPGgyPkNhcmRzPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPkNhcmRzIGFyZSB0aGUgY29yZSBvZiBCb290Y2FyZHMsIGFuZCBjb250YWluIHlvdXIgYXBwJ3MgY29udGVudC4gRGlmZmVyZW50IENhcmRzIGFyZSBhdmFpbGFibGUgZm9yIGRpZmZlcmVudCB0eXBlcyBvZiBjb250ZW50ICh0ZXh0LCB0YWJsZXMsIGZvcm1zLCBjaGFydHMsIG1lZGlhLCBmaWxlcywgZXRjKS48L3A+XG4gICAgICAgIDxwPkNhcmRzIGFyZSBiYXNlZCBvbiB0aGUgc2FtZSBtYXJrdXAgYXMgQm9vdHN0cmFwJ3MgPGNvZGU+LnBhbmVsPC9jb2RlPi4gRWFjaCBjYXJkIGNhbiBoYXZlIGEgPGNvZGU+LnBhbmVsLWhlYWRpbmc8L2NvZGU+LCA8Y29kZT4ucGFuZWwtYm9keTwvY29kZT4gYW5kIGEgPGNvZGU+LnBhbmVsLWZvb3RlcjwvY29kZT4uIEFsbCBvZiB0aGVzZSBhcmUgb3B0aW9uYWwsIHNvIGp1c3QgdXNlIHdoaWNoZXZlciBwYXJ0cyB5b3VyIGFwcCBuZWVkcy4gWW91IGNhbiBldmVuIHVzZSBtdWx0aXBsZSBoZWFkZXJzIG9yIGZvb3RlcnMgKGUuZy4gaWYgeW91IG5lZWRlZCBzZXBhcmF0ZSBmb290ZXIgYXJlYXMgc2VwYXJhdGVkIGJ5IGEgZGl2aWRlcikuPC9wPlxuICAgICAgICA8RXhhbXBsZT5cbiAgICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPkNhcmQgVGl0bGU8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIiAvPlxuICAgICAgICAgICAgICAgIEJ1dHRvblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxwPkNhcmQgY29udGVudC4uLjwvcD5cbiAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICA8c21hbGw+Q2FyZCBmb290ZXIuLi48L3NtYWxsPlxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgIDwvRXhhbXBsZT5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDaGFydENhbnZhcywgQ2FyZEZvb3Rlcn0gZnJvbSAncmVhY3QtYm9vdGNhcmRzJztcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi9IaWdobGlnaHQnO1xuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcblxuY2xhc3MgQ2hhcnRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgTW9ycmlzLkJhcih7XG4gICAgICBlbGVtZW50OiAnYmFyQ2hhcnQnLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7cGVyc29uOiAnR3V5IEJhcmRzbGV5Jywgc2FsZXM6IDU1MH0sXG4gICAgICAgIHtwZXJzb246ICdBZGFtIENhbGxhaGFuJywgc2FsZXM6IDE1MDB9LFxuICAgICAgICB7cGVyc29uOiAnQXJsbyBHZWlzdCcsIHNhbGVzOiAzNzUwfSxcbiAgICAgICAge3BlcnNvbjogJ1NoZWlsYSBIdXRjaGlucycsIHNhbGVzOiAzNTAwfVxuICAgICAgXSxcbiAgICAgIHhrZXk6ICdwZXJzb24nLFxuICAgICAgeWtleXM6IFsnc2FsZXMnXSxcbiAgICAgIGxhYmVsczogWydTYWxlcyddLFxuICAgICAgaGlkZUhvdmVyOiAnYXV0bycsXG4gICAgICByZXNpemU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtY2hhcnRjYXJkXCI+XG4gICAgICAgIDxoMz5DaGFydCBDYXJkczwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5DaGFydCBjYXJkcyBjb250YWluIGNoYXJ0cyBwb3dlcmVkIGJ5IE1vcnJpcy5qcy48L3A+XG4gICAgICAgIDxwPlRoZXNlIGNhbiBiZSB1c2VkIHdpdGggVGFibGUgY2FyZHMgaW4gb3JkZXIgdG8gdG9nZ2xlIGJldHdlZW4gYSBjaGFydCB2aWV3IGFuZCB0aGUgcmF3IGRhdGEuPC9wPlxuICAgICAgICA8RXhhbXBsZT5cbiAgICAgICAgICA8Q2FyZCBjYXJkU3R5bGU9XCJjaGFydFwiPlxuICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGU+Q2hhcnQgQ2FyZCBIZWFkaW5nPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2hhcnRDYW52YXMgaWQ9XCJiYXJDaGFydFwiLz5cbiAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBCYXNlIENhcmQ8L3NtYWxsPlxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9FeGFtcGxlPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TmF2YmFyLCBOYXYsIE5hdkRyb3Bkb3duLCBNZW51SXRlbSwgTmF2SXRlbX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi9IaWdobGlnaHQnO1xuXG5jbGFzcyBEb3VibGVOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWN0aW9uIGlkPVwiZG9jLWRvdWJsZW5hdmJhclwiPlxuICAgICAgICA8aDM+RG91YmxlIE5hdmJhcjwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5UaGUgRG91YmxlIE5hdmJhciBpcyBtZWFudCBmb3IgZGVza3RvcCBhbmQgYWxsb3dzIHlvdSB0byBoYXZlIHR3byByb3dzIG9mIG1lbnUgb3B0aW9ucy48L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5hdmJhciBmbHVpZCBjbGFzc05hbWU9XCJib290Y2FyZHMtbmF2YmFyLWRvdWJsZVwiXG4gICAgICAgICAgICBicmFuZD17PGEgdGl0bGU9XCJCb290Y2FyZHMgU3RhcnRlclwiIGhyZWY9XCIvXCI+Qm9vdGNhcmRzIFN0YXJ0ZXI8L2E+fVxuICAgICAgICAgICAgdG9nZ2xlTmF2S2V5PXswfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYXYgcmlnaHQgZXZlbnRLZXk9ezB9IGNsYXNzTmFtZT1cImJvb3RjYXJkcy1uYXYtc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93biBldmVudEtleT17MX0gaWQ9XCJkb3VibGVuYXZiYXItbGFuZ3VhZ2VzXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17W1xuICAgICAgICAgICAgICAgICAgPGkga2V5PVwiaWNvblwiIGNsYXNzTmFtZT1cImZhIGZhLWdsb2JlXCIgLz4sXG4gICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9XCJ0aXRsZVwiPiBMYW5ndWFnZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgXX0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiMVwiPkRldXRzY2g8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT1cIjJcIj5FbmdsaXNoPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCIzXCI+RXNwYW5vbDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsyfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWxvY2tcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPiBMb2dpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICA8TmF2IHJpZ2h0IGV2ZW50S2V5PXszfSBjbGFzc05hbWU9XCJib290Y2FyZHMtbmF2LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIGV2ZW50S2V5PXs0fSBpZD1cImRvdWJsZW5hdmJhci1ob21lXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17W1xuICAgICAgICAgICAgICAgICAgPGkga2V5PVwiaWNvblwiIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWRhc2hib2FyZFwiIC8+LFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PVwidGl0bGVcIj4gSG9tZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICBdfT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCIxXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1lbnZlbG9wZS1vXCIgLz4gQWN0aW9uPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCIyXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1maWxtXCIgLz4gQW5vdGhlciBhY3Rpb248L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT1cIjNcIiBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWZpbGUtb1wiIC8+IFNvbWV0aGluZyBlbHNlIGhlcmU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiNFwiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtYmFyLWNoYXJ0LW9cIiAvPiBTZXBhcmF0ZWQgbGluazwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXs1fSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWJyaWVmY2FzZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+IFBvcnRmb2xpbzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17Nn0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1idWxsaG9yblwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+IEJsb2c8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+U2V0IDxjb2RlPmNsYXNzPVwiaGFzLWJvb3RjYXJkcy1uYXZiYXItZG91YmxlXCI8L2NvZGU+IG9uIHRoZSBib2R5IGVsZW1lbnQgdG8gZGVhbCB3aXRoIHRoZSBpbmNyZWFzZWQgaGVpZ2h0IG9mIHRoZSBuYXZiYXIuPC9wPlxuICAgICAgICA8SGlnaGxpZ2h0PlxuICAgICAgICAgIHsnPE5hdmJhciBmbHVpZCBjbGFzc05hbWU9XCJib290Y2FyZHMtbmF2YmFyLWRvdWJsZVwiIGJyYW5kPXs8YSB0aXRsZT1cIkJvb3RjYXJkcyBTdGFydGVyXCIgaHJlZj1cIi9cIj5Cb290Y2FyZHMgU3RhcnRlcjwvYT59IHRvZ2dsZU5hdktleT17MH0+XFxuICA8TmF2IHJpZ2h0IGV2ZW50S2V5PXswfSBjbGFzc05hbWU9XCJib290Y2FyZHMtbmF2LXNlY29uZGFyeVwiPlxcbiAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezF9IGlkPVwiZG91YmxlbmF2YmFyLWxhbmd1YWdlc1wiIHRpdGxlPXtbPGkga2V5PVwiaWNvblwiIGNsYXNzTmFtZT1cImZhIGZhLWdsb2JlXCIgLz4sIDxzcGFuIGtleT1cInRpdGxlXCI+IExhbmd1YWdlczwvc3Bhbj5dfT5cXG4gICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCIxXCI+RGV1dHNjaDwvTWVudUl0ZW0+XFxuICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiMlwiPkVuZ2xpc2g8L01lbnVJdGVtPlxcbiAgICAgIDxNZW51SXRlbSBldmVudEtleT1cIjNcIj5Fc3Bhbm9sPC9NZW51SXRlbT5cXG4gICAgPC9OYXZEcm9wZG93bj5cXG4gICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezJ9IGhyZWY9XCIjXCI+XFxuICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtbG9ja1wiIC8+XFxuICAgICAgPHNwYW4+IExvZ2luPC9zcGFuPlxcbiAgICA8L05hdkl0ZW0+XFxuICA8L05hdj5cXG4gIDxOYXYgcmlnaHQgZXZlbnRLZXk9ezN9IGNsYXNzTmFtZT1cImJvb3RjYXJkcy1uYXYtcHJpbWFyeVwiPlxcbiAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezR9IGlkPVwiZG91YmxlbmF2YmFyLWhvbWVcIiB0aXRsZT17WzxpIGtleT1cImljb25cIiBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1kYXNoYm9hcmRcIiAvPiwgPHNwYW4ga2V5PVwidGl0bGVcIj4gSG9tZTwvc3Bhbj5dfT5cXG4gICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCIxXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1lbnZlbG9wZS1vXCIgLz4gQWN0aW9uPC9NZW51SXRlbT5cXG4gICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9XCIyXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1maWxtXCIgLz4gQW5vdGhlciBhY3Rpb248L01lbnVJdGVtPlxcbiAgICAgIDxNZW51SXRlbSBldmVudEtleT1cIjNcIiBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWZpbGUtb1wiIC8+IFNvbWV0aGluZyBlbHNlIGhlcmU8L01lbnVJdGVtPlxcbiAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XFxuICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiNFwiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtYmFyLWNoYXJ0LW9cIiAvPiBTZXBhcmF0ZWQgbGluazwvTWVudUl0ZW0+XFxuICAgIDwvTmF2RHJvcGRvd24+XFxuICAgIDxOYXZJdGVtIGV2ZW50S2V5PXs1fSBocmVmPVwiI1wiPlxcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWJyaWVmY2FzZVwiIC8+XFxuICAgICAgPHNwYW4+IFBvcnRmb2xpbzwvc3Bhbj5cXG4gICAgPC9OYXZJdGVtPlxcbiAgICA8TmF2SXRlbSBldmVudEtleT17Nn0gaHJlZj1cIiNcIj5cXG4gICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1idWxsaG9yblwiIC8+XFxuICAgICAgPHNwYW4+IEJsb2c8L3NwYW4+XFxuICAgIDwvTmF2SXRlbT5cXG4gIDwvTmF2PlxcbjwvTmF2YmFyPid9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG91YmxlTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnYnMtZXhhbXBsZSc6IHRydWUsXG4gICAgICAnYnMtZXhhbXBsZS10eXBlJzogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3Nlcyl9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpc3RHcm91cCwgTGlzdEdyb3VwSXRlbSwgQnV0dG9uR3JvdXAsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDYXJkRm9vdGVyLCBMaXN0R3JvdXBJdGVtSGVhZGVyLCBMaXN0R3JvdXBJdGVtVGV4dH0gZnJvbSAncmVhY3QtYm9vdGNhcmRzJztcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi9IaWdobGlnaHQnO1xuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcblxuY2xhc3MgRmlsZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1maWxlY2FyZFwiPlxuICAgICAgICA8aDM+RmlsZSBDYXJkczwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5GaWxlIENhcmRzIGFyZSBpbnRlbmRlZCB0byBzaG93IGluZm9ybWF0aW9uIGFuZCBmdW5jdGlvbnMgZm9yIG5vbi1tZWRpYSBmaWxlIGZvcm1hdHMgKFBERnMsIFdvcmQgZG9jdW1lbnRzLCBzcHJlYWRzaGVldHMsIGV0YykuPC9wPlxuICAgICAgICA8RXhhbXBsZT5cbiAgICAgICAgICA8Q2FyZCBjYXJkU3R5bGU9XCJmaWxlXCI+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZT5GaWxlIENhcmQgSGVhZGluZzwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPExpc3RHcm91cCBmaWxsPlxuICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1maWxlLXBkZlwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5GaWxlIE5hbWUgR29lcyBIZXJlPC9hPlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+PHN0cm9uZz5QREY8L3N0cm9uZz48L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD48c3Ryb25nPjMuMk1iPC9zdHJvbmc+PC9MaXN0R3JvdXBJdGVtVGV4dD5cbiAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkFkZGVkIGJ5IEpvaG4gU21pdGggb24gNSBNYXJjaCAyMDE0PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtVGV4dD5cbiAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TWVkaWFGaWxlIGNhcmQgZGVzY3JpcHRpb24gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBjb21tb2RvLCBudWxsYSB1dCBwb3J0YSBpbnRlcmR1bSwgbWkgbWkgdmVuZW5hdGlzIGZlbGlzLCB2aXRhZSBwZWxsZW50ZXNxdWUgYW50ZSBlcm9zIGF0IGVuaW0uPC9MaXN0R3JvdXBJdGVtVGV4dD5cbiAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICA8Q2FyZEZvb3Rlcj5cbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGp1c3RpZmllZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1kb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIEZhdm9yaXRlXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0V4YW1wbGU+XG4gICAgICAgIDxIaWdobGlnaHQ+XG4gICAgICAgICAgeyc8Q2FyZCBjYXJkU3R5bGU9XCJmaWxlXCI+XFxuICA8Q2FyZEhlYWRlcj5cXG4gICAgPENhcmRUaXRsZT5GaWxlIENhcmQgSGVhZGluZzwvQ2FyZFRpdGxlPlxcbiAgPC9DYXJkSGVhZGVyPlxcbiAgPExpc3RHcm91cCBmaWxsPlxcbiAgICA8TGlzdEdyb3VwSXRlbT5cXG4gICAgICA8YSBocmVmPVwiI1wiPlxcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1maWxlLXBkZlwiIC8+XFxuICAgICAgPC9hPlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPlxcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5GaWxlIE5hbWUgR29lcyBIZXJlPC9hPlxcbiAgICAgIDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cXG4gICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+PHN0cm9uZz5QREY8L3N0cm9uZz48L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD48c3Ryb25nPjMuMk1iPC9zdHJvbmc+PC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgPC9MaXN0R3JvdXBJdGVtPlxcbiAgICA8TGlzdEdyb3VwSXRlbT5cXG4gICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+XFxuICAgICAgICA8c3Ryb25nPkFkZGVkIGJ5IEpvaG4gU21pdGggb24gNSBNYXJjaCAyMDE0PC9zdHJvbmc+XFxuICAgICAgPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgPC9MaXN0R3JvdXBJdGVtPlxcbiAgICA8TGlzdEdyb3VwSXRlbT5cXG4gICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TWVkaWFGaWxlIGNhcmQgZGVzY3JpcHRpb24gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBjb21tb2RvLCBudWxsYSB1dCBwb3J0YSBpbnRlcmR1bSwgbWkgbWkgdmVuZW5hdGlzIGZlbGlzLCB2aXRhZSBwZWxsZW50ZXNxdWUgYW50ZSBlcm9zIGF0IGVuaW0uPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgPC9MaXN0R3JvdXBJdGVtPlxcbiAgPC9MaXN0R3JvdXA+XFxuICA8Q2FyZEZvb3Rlcj5cXG4gICAgPEJ1dHRvbkdyb3VwIGp1c3RpZmllZD5cXG4gICAgICA8QnV0dG9uR3JvdXA+XFxuICAgICAgICA8QnV0dG9uPlxcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1kb3duXCIgLz5cXG4gICAgICAgICAgRG93bmxvYWRcXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgICAgPEJ1dHRvbkdyb3VwPlxcbiAgICAgICAgPEJ1dHRvbj5cXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XFxuICAgICAgICAgIEZhdm9yaXRlXFxuICAgICAgICA8L0J1dHRvbj5cXG4gICAgICA8L0J1dHRvbkdyb3VwPlxcbiAgICAgIDxCdXR0b25Hcm91cD5cXG4gICAgICAgIDxCdXR0b24+XFxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCIgLz5cXG4gICAgICAgICAgRW1haWxcXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgIDwvQnV0dG9uR3JvdXA+XFxuICA8L0NhcmRGb290ZXI+XFxuPC9DYXJkPid9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZUNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XG5cbmNsYXNzIEZvb3RlckJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtZm9vdGVyYmFyXCI+XG4gICAgICAgIDxoMz5Gb290ZXIgQmFyPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlRoZSBGb290ZXIgQmFyIG9mZmVycyB1c2FibGUgbW9iaWxlIG5hdmlnYXRpb24gZm9yIHNpbXBsZXIgYXBwcyB3aXRoIGEgZmV3IGltcG9ydGFudCBuYXZpZ2F0aW9uIGl0ZW1zLjwvcD5cbiAgICAgICAgPHA+VGhpcyB1c2VzIEJvb3RzdHJhcCdzIDxjb2RlPi5uYXZiYXItZml4ZWQtZm9vdGVyPC9jb2RlPiBtYXJrdXAsIHdpdGggYSA8Y29kZT4uYnRuLWdyb3VwPC9jb2RlPiB0byBjb250YWluIHRoZSBuYXZpZ2F0aW9uIGVsZW1lbnRzLiBUaGVzZSBhcmUgc3R5bGVkIHRvIGxvb2sgbGlrZSBuYXRpdmUgZm9vdGVyIHRhYnMgb24gaU9TIGFuZCBBbmRyb2lkIGRldmljZXMuPC9wPlxuICAgICAgICA8cD5PbiBkZXNrdG9wLCB0aGUgZm9vdGVyIHJldmVydHMgdG8gYSBzaW1wbGUsIHdlYnNpdGUtc3R5bGUgZm9vdGVyIHRvIGhvbGQgaXRlbXMgbGlrZSBjb3B5cmlnaHQgaW5mb3JtYXRpb24sIHZlcnNpb24gbnVtYmVycywgZXRjLiBUaGVzZSBhcmUgY29udGFpbmVkIGluIDxjb2RlPi5ib290Y2FyZHMtZGVza3RvcC1mb290ZXI8L2NvZGU+LCBhbmQgaGlkZGVuIGZyb20gbW9iaWxlIGRldmljZXMuPC9wPlxuICAgICAgICA8SGlnaGxpZ2h0PlxuICAgICAgICAgIHsnPGRpdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWQtYm90dG9tXCI+XFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGFjdGl2ZVwiPlxcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS0yeCBmYS11c2Vyc1wiPjwvaT5cXG4gICAgICAgIENvbnRhY3RzXFxuICAgICAgPC9hPlxcbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtMnggZmEtYnVpbGRpbmctb1wiPjwvaT5cXG4gICAgICAgIENvbXBhbmllc1xcbiAgICAgIDwvYT5cXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XFxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLTJ4IGZhLWdlYXJzXCI+PC9pPlxcbiAgICAgICAgU2V0dGluZ3NcXG4gICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiYm9vdGNhcmRzLWRlc2t0b3AtZm9vdGVyIGNsZWFyZml4XCI+XFxuICAgICAgPHAgY2xhc3M9XCJwdWxsLWxlZnRcIj5UZXh0IGZvciBkZXNrdG9wIGZvb3RlciBnb2VzIGhlcmU8L3A+XFxuICAgICAgPHAgY2xhc3M9XCJwdWxsLWxlZnRcIj5Nb3JlIHRleHQgZm9yIGRlc2t0b3AgZm9vdGVyIGdvZXMgaGVyZTwvcD5cXG4gICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2Pid9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICA8cD5BcHBseSB0aGUgPGNvZGU+LmJvb3RjYXJkcy1ub2Zvb3RlcjwvY29kZT4gdG8gdGhlIDxjb2RlPiZsdDtib2R5Jmd0OzwvY29kZT4gZWxlbWVudCBmb3IgbGF5b3V0cyB3aXRob3V0IGEgZm9vdGVyOiB0aGlzIHdpbGwgcmVtb3ZlIHRoZSBzdGFuZGFyZCBib3R0b20gcGFkZGluZy48L3A+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJCYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdXR0b25Hcm91cCwgQnV0dG9uLCBJbnB1dH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDYXJkRm9vdGVyfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tICcuL0V4YW1wbGUnO1xuXG5jbGFzcyBGb3JtQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtZm9ybWNhcmRcIj5cbiAgICAgICAgPGgyPkZvcm0gQ2FyZHM8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+Rm9ybSBDYXJkcyBhcmUgdXNlZCBmb3IgdXNlciBpbnB1dCBpbiB5b3VyIGFwcC48L3A+XG4gICAgICAgIDxwPlJlcGxhY2UgdGhlIGRlZmF1bHQgPGNvZGU+LnBhbmVsLWJvZHk8L2NvZGU+IHdpdGggYSA8Y29kZT4mbHQ7Zm9ybSZndDs8L2NvZGU+LjwvcD5cbiAgICAgICAgPEV4YW1wbGU+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPkZvcm0gQ2FyZCBUaXRsZTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cImRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lPVwiY29sLXhzLTNcIlxuICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJjb2wteHMtOVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiSm9obiBTbWl0aFwiLz5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJPY2N1cGF0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzTmFtZT1cImNvbC14cy0zXCJcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwiY29sLXhzLTlcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkRldmVsb3BlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkRlc2lnbmVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5EZXZlbG9wZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlNhbGVzbWFuPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvSW5wdXQ+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzc05hbWU9XCJjb2wteHMtM1wiXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImNvbC14cy05XCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gbWF1cmlzIHRlbGx1cywgdmVoaWN1bGEgdXQgdGVsbHVzIGlkLCBzdXNjaXBpdCBkYXBpYnVzIHRvcnRvci4gSW50ZWdlciB2aXZlcnJhIHR1cnBpcyBhYyBmcmluZ2lsbGEgaGVuZHJlcml0LiBTZWQgZmF1Y2lidXMgcG9zdWVyZSBmZWxpcyBldCBwZWxsZW50ZXNxdWUuIENyYXMgdmFyaXVzIHRvcnRvciB2aXRhZSBtb2xlc3RpZSB0ZW1wb3IuIFByb2luIHV0IHZpdmVycmEgZWxpdCwgYWMgZ3JhdmlkYSB0b3J0b3IuXCJcbiAgICAgICAgICAgICAgICByb3dzPVwiNlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8Q2FyZEZvb3Rlcj5cbiAgICAgICAgICAgICAgPHNtYWxsPkJ1aWx0IHdpdGggQm9vdGNhcmRzIC0gRm9ybSBDYXJkPC9zbWFsbD5cbiAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvRXhhbXBsZT5cbiAgICAgICAgPEhpZ2hsaWdodD5cbiAgICAgICAgICB7JzxDYXJkPlxcbiAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cXG4gICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj5Gb3JtIENhcmQgVGl0bGU8L0NhcmRUaXRsZT5cXG4gICAgPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cXG4gICAgICA8QnV0dG9uIGJzU3R5bGU9XCJkYW5nZXJcIj5cXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgLz5cXG4gICAgICAgIENhbmNlbFxcbiAgICAgIDwvQnV0dG9uPlxcbiAgICAgIDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIj5cXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgLz5cXG4gICAgICAgIFNhdmVcXG4gICAgICA8L0J1dHRvbj5cXG4gICAgPC9CdXR0b25Hcm91cD5cXG4gIDwvQ2FyZEhlYWRlcj5cXG4gIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiPlxcbiAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIk5hbWVcIiBsYWJlbENsYXNzTmFtZT1cImNvbC14cy0zXCIgd3JhcHBlckNsYXNzTmFtZT1cImNvbC14cy05XCIgZGVmYXVsdFZhbHVlPVwiSm9obiBTbWl0aFwiIC8+XFxuICAgIDxJbnB1dCB0eXBlPVwic2VsZWN0XCIgbGFiZWw9XCJPY2N1cGF0aW9uXCIgbGFiZWxDbGFzc05hbWU9XCJjb2wteHMtM1wiIHdyYXBwZXJDbGFzc05hbWU9XCJjb2wteHMtOVwiIGRlZmF1bHRWYWx1ZT1cIkRldmVsb3BlclwiPlxcbiAgICAgIDxvcHRpb24+RGVzaWduZXI8L29wdGlvbj5cXG4gICAgICA8b3B0aW9uPkRldmVsb3Blcjwvb3B0aW9uPlxcbiAgICAgIDxvcHRpb24+U2FsZXNtYW48L29wdGlvbj5cXG4gICAgPC9JbnB1dD5cXG4gICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIGxhYmVsPVwiRGVzY3JpcHRpb25cIiBsYWJlbENsYXNzTmFtZT1cImNvbC14cy0zXCIgd3JhcHBlckNsYXNzTmFtZT1cImNvbC14cy05XCIgZGVmYXVsdFZhbHVlPVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGFtIG1hdXJpcyB0ZWxsdXMsIHZlaGljdWxhIHV0IHRlbGx1cyBpZCwgc3VzY2lwaXQgZGFwaWJ1cyB0b3J0b3IuIEludGVnZXIgdml2ZXJyYSB0dXJwaXMgYWMgZnJpbmdpbGxhIGhlbmRyZXJpdC4gU2VkIGZhdWNpYnVzIHBvc3VlcmUgZmVsaXMgZXQgcGVsbGVudGVzcXVlLiBDcmFzIHZhcml1cyB0b3J0b3Igdml0YWUgbW9sZXN0aWUgdGVtcG9yLiBQcm9pbiB1dCB2aXZlcnJhIGVsaXQsIGFjIGdyYXZpZGEgdG9ydG9yLlwiIHJvd3M9XCI2XCIgLz5cXG4gIDwvZm9ybT5cXG4gIDxDYXJkRm9vdGVyPlxcbiAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBGb3JtIENhcmQ8L3NtYWxsPlxcbiAgPC9DYXJkRm9vdGVyPlxcbjwvQ2FyZD4nfVxuICAgICAgICA8L0hpZ2hsaWdodD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1DYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi9IaWdobGlnaHQnO1xuXG5jbGFzcyBHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1ncmlkXCI+XG4gICAgICAgIDxoMj5HcmlkIFN5c3RlbTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5Cb290Y2FyZHMgYnVpbGRzIG9uIFR3aXR0ZXIgQm9vdHN0cmFwJ3MgZ3JpZCBzeXN0ZW0gdG8gYWxsb3cgc2VwYXJhdGUgY29sdW1uIHNjcm9sbGluZyBpbiB0b3VjaHNjcmVlbiBkZXZpY2VzLjwvcD5cbiAgICAgICAgPHA+VGhlIDIgbWFpbiB0b3AtbGV2ZWwgY29sdW1ucyBhcmUgPGNvZGU+LmJvb3RjYXJkcy1saXN0PC9jb2RlPiAod2hpY2ggaXMgdXNlZCB0byBuYXZpZ2F0ZSB5b3VyIGFwcCkgYW5kIDxjb2RlPi5ib290Y2FyZHMtY2FyZHM8L2NvZGU+ICh3aGljaCBjb250YWlucyB5b3VyIGFwcCdzIGNvbnRlbnQpLiBJbiBkZXNrdG9wIGJyb3dzZXJzLCB0aGVzZSB3aWxsIGJlaGF2ZSBsaWtlIHJlZ3VsYXIgYm9vdHN0cmFwIGNvbHVtbnMsIGJ1dCBvbiB0b3VjaHNjcmVlbiBkZXZpY2VzIHRoZSB1c2VyIHdpbGwgYmUgYWJsZSB0byBzY3JvbGwgdGhlbSBzZXBhcmF0ZWx5LjwvcD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3RIaWdobGlnaHQgZnJvbSAncmVhY3QtaGlnaGxpZ2h0JztcblxuY2xhc3MgSGlnaGxpZ2h0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsICdoaWdobGlnaHQnKX0+XG4gICAgICAgIDxSZWFjdEhpZ2hsaWdodCBjbGFzc05hbWU9e3RoaXMucHJvcHMuaGlnaGxpZ2h0Q2xhc3NOYW1lfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9SZWFjdEhpZ2hsaWdodD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSGlnaGxpZ2h0LnByb3BUeXBlcyA9IHtcbiAgaGlnaGxpZ2h0Q2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuSGlnaGxpZ2h0LmRlZmF1bHRQcm9wcyA9IHtcbiAgaGlnaGxpZ2h0Q2xhc3NOYW1lOiAneG1sJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpc3RHcm91cCwgTGlzdEdyb3VwSXRlbSwgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQge0xpc3QsIENhcmQsIExpc3RHcm91cEl0ZW1IZWFkZXIsIExpc3RHcm91cEl0ZW1UZXh0fSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tICcuL0V4YW1wbGUnO1xuXG5jbGFzcyBMaXN0RGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtbGlzdGRldGFpbFwiPlxuICAgICAgICA8aDM+RGV0YWlsZWQgTGlzdHM8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+RGV0YWlsZWQgTGlzdHMgY2FuIGJlIHVzZWQgd2hlbiB5b3UgbmVlZCB0byBzaG93IG1vcmUgaW5mb3JtYXRpb24gZm9yIGVhY2ggZW50cnkuPC9wPlxuICAgICAgICA8cD5Zb3UgY2FuIHVzZSBCb290c3RyYXAgPGNvZGU+LmNvbC0qPC9jb2RlPiA8Y29kZT4mbHQ7ZGl2Jmd0OzwvY29kZT5zIHdpdGhpbiBlYWNoIDxjb2RlPi5saXN0LWdyb3VwLWl0ZW08L2NvZGU+IHRvIHNob3cgbW9yZSBwaWVjZXMgb2YgaW5mb3JtYXRpb24gaW4gd2hhdGV2ZXIgZm9ybWF0IHlvdSBsaWtlLCBhbmQgcmVzcG9uZCB0byBkaWZmZXJlbnQgZGV2aWNlIHdpZHRocy48L3A+XG4gICAgICAgIDxFeGFtcGxlPlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAgZmlsbD5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtYnVpbGRpbmctbyBwdWxsLWxlZnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkFscGFydmlzIEx0ZDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TG9uZG9uLCBVSzwvTGlzdEdyb3VwSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+Q29udHJhY3RvcjwvTGlzdEdyb3VwSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PiQxMiwwMDAgUmV2ZW51ZSBZVEQ8L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtYnVpbGRpbmctbyBwdWxsLWxlZnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkNhbWlvbiBDb3JwPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5Ub2t5bywgSmFwYW48L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkN1c3RvbWVyPC9MaXN0R3JvdXBJdGVtVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+JDc1LDAwMCBSZXZlbnVlIFlURDwvTGlzdEdyb3VwSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS1idWlsZGluZy1vIHB1bGwtbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+RGVyZW5kZW4gU3lzdGVtczwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+QWxidXF1ZXJxdWUsIFVTQTwvTGlzdEdyb3VwSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+U3VwcGxpZXI8L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD4kMS4zbSBSZXZlbnVlIFlURDwvTGlzdEdyb3VwSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvRXhhbXBsZT5cbiAgICAgICAgPEhpZ2hsaWdodD5cbiAgICAgICAgICB7JzxMaXN0PlxcbiAgPENhcmQ+XFxuICAgIDxMaXN0R3JvdXAgZmlsbD5cXG4gICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxcbiAgICAgICAgPFJvdz5cXG4gICAgICAgICAgPENvbCBzbT17Nn0+XFxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtYnVpbGRpbmctbyBwdWxsLWxlZnRcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkFscGFydmlzIEx0ZDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TG9uZG9uLCBVSzwvTGlzdEdyb3VwSXRlbVRleHQ+XFxuICAgICAgICAgIDwvQ29sPlxcbiAgICAgICAgICA8Q29sIHNtPXs2fT5cXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+Q29udHJhY3RvcjwvTGlzdEdyb3VwSXRlbVRleHQ+XFxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PiQxMiwwMDAgUmV2ZW51ZSBZVEQ8L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgICAgICA8L0NvbD5cXG4gICAgICAgIDwvUm93PlxcbiAgICAgIDwvTGlzdEdyb3VwSXRlbT5cXG4gICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxcbiAgICAgICAgPFJvdz5cXG4gICAgICAgICAgPENvbCBzbT17Nn0+XFxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtYnVpbGRpbmctbyBwdWxsLWxlZnRcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkNhbWlvbiBDb3JwPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxcbiAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5Ub2t5bywgSmFwYW48L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgICAgICA8L0NvbD5cXG4gICAgICAgICAgPENvbCBzbT17Nn0+XFxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PkN1c3RvbWVyPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+JDc1LDAwMCBSZXZlbnVlIFlURDwvTGlzdEdyb3VwSXRlbVRleHQ+XFxuICAgICAgICAgIDwvQ29sPlxcbiAgICAgICAgPC9Sb3c+XFxuICAgICAgPC9MaXN0R3JvdXBJdGVtPlxcbiAgICAgIDxMaXN0R3JvdXBJdGVtIGhyZWY9XCIjXCI+XFxuICAgICAgICA8Um93PlxcbiAgICAgICAgICA8Q29sIHNtPXs2fT5cXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS1idWlsZGluZy1vIHB1bGwtbGVmdFwiIC8+XFxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+RGVyZW5kZW4gU3lzdGVtczwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+QWxidXF1ZXJxdWUsIFVTQTwvTGlzdEdyb3VwSXRlbVRleHQ+XFxuICAgICAgICAgIDwvQ29sPlxcbiAgICAgICAgICA8Q29sIHNtPXs2fT5cXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+U3VwcGxpZXI8L0xpc3RHcm91cEl0ZW1UZXh0PlxcbiAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD4kMS4zbSBSZXZlbnVlIFlURDwvTGlzdEdyb3VwSXRlbVRleHQ+XFxuICAgICAgICAgIDwvQ29sPlxcbiAgICAgICAgPC9Sb3c+XFxuICAgICAgPC9MaXN0R3JvdXBJdGVtPlxcbiAgICA8L0xpc3RHcm91cD5cXG4gIDwvQ2FyZD5cXG48L0xpc3Q+J31cbiAgICAgICAgPC9IaWdobGlnaHQ+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RGV0YWlsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtLCBSb3csIENvbCwgSW5wdXQsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7TGlzdCwgQ2FyZCwgTGlzdEdyb3VwSXRlbUhlYWRlciwgTGlzdEdyb3VwSXRlbVRleHR9IGZyb20gJ3JlYWN0LWJvb3RjYXJkcyc7XG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcbmltcG9ydCBFeGFtcGxlIGZyb20gJy4vRXhhbXBsZSc7XG5cbmNsYXNzIExpc3RTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1saXN0c2VhcmNoXCI+XG4gICAgICAgIDxoMj5MaXN0IFNlYXJjaCAmIExpc3QgQWN0aW9uczwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5BIHNlYXJjaCBmb3JtIGZvciB3aGVuIHlvdSB3YW50IHRoZSB1c2VyIHRvIGJlIGFibGUgdG8gZmlsdGVyIG9yIHNlYXJjaCB5b3VyIGxpc3QsIGFuZCBidXR0b25zIGZvciBhbnkgb3RoZXIgbGlzdCBmdW5jdGlvbnMgeW91IG5lZWQuPC9wPlxuICAgICAgICA8cD5UaGlzIGdvZXMgYXQgdGhlIHRvcCBvZiB5b3VyIGxpc3QsIGluc2lkZSB0aGUgPGNvZGU+Lm1vZGFsLWJvZHk8L2NvZGU+LiBZb3UgY2FuIGFkZCBvciByZW1vdmUgZnVuY3Rpb25zIGJ5IGFkZGluZy9yZW1vdmluZyBjb2x1bW5zIGluIHRoZSBjb250YWluaW5nIDxjb2RlPi5yb3c8L2NvZGU+IGFuZCBtYWtpbmcgc3VyZSB0aGUgd2lkdGhzIGFkZCB1cC48L3A+XG4gICAgICAgIDxFeGFtcGxlPlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXs5fT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggQ29udGFjdHMuLi5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0PlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIGJsb2NrPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAgZmlsbD5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvU29maWEgQWNleS5qcGdcIiBjbGFzc05hbWU9XCJpbWctcm91bmRlZCBwdWxsLWxlZnRcIi8+XG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5BY2V5LCBTb2ZpYTwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5NYXN1bmcgQ29ycC48L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvSm9zZXBoIEJhcmlzaC5qcGdcIiBjbGFzc05hbWU9XCJpbWctcm91bmRlZCBwdWxsLWxlZnRcIi8+XG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5CYXJpc2gsIEpvc2VwaDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5NYXN1bmcgQ29ycC48L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvU2FyYWggQmVuc29uLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1yb3VuZGVkIHB1bGwtbGVmdFwiLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkJlbnNvbiwgU2FyYWg8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+WmV0YUNvbW08L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0V4YW1wbGU+XG4gICAgICAgIDxIaWdobGlnaHQ+XG4gICAgICAgICAgeyc8TGlzdD5cXG4gIDxDYXJkPlxcbiAgICA8Zm9ybT5cXG4gICAgICA8Um93PlxcbiAgICAgICAgPENvbCB4cz17OX0+XFxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIENvbnRhY3RzLi4uXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgLz5cXG4gICAgICAgICAgPC9JbnB1dD5cXG4gICAgICAgIDwvQ29sPlxcbiAgICAgICAgPENvbCB4cz17M30+XFxuICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBibG9jaz5cXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzXCIgLz5cXG4gICAgICAgICAgICBBZGRcXG4gICAgICAgICAgPC9CdXR0b24+XFxuICAgICAgICA8L0NvbD5cXG4gICAgICA8L1Jvdz5cXG4gICAgPC9mb3JtPlxcblxcbiAgICAuLi5saXN0IG1hcmt1cCBnb2VzIGhlcmUuLi5cXG5cXG4gIDwvQ2FyZD5cXG48L0xpc3Q+J31cbiAgICAgICAgPC9IaWdobGlnaHQ+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0U2VhcmNoO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHtMaXN0LCBDYXJkLCBMaXN0R3JvdXBJdGVtSGVhZGVyLCBMaXN0R3JvdXBJdGVtVGV4dH0gZnJvbSAncmVhY3QtYm9vdGNhcmRzJztcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi9IaWdobGlnaHQnO1xuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcblxuY2xhc3MgTGlzdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1saXN0c1wiPlxuICAgICAgICA8aDI+TGlzdHM8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+Qm9vdGNhcmRzIExpc3RzIGFyZSB1c2VkIHRvIG5hdmlnYXRlIHRoZSBlbnRpdGllcyBpbiB5b3VyIGFwcCAoZS5nLiBDb250YWN0cywgRmlsZXMsIE1lc3NhZ2VzLCBldGMpLjwvcD5cbiAgICAgICAgPHA+TGlzdHMgYXJlIHdyYXBwZWQgaW4gdGhlIDxjb2RlPi5ib290Y2FyZHMtbGlzdDwvY29kZT4gY2xhc3M8L3A+XG4gICAgICAgIDxFeGFtcGxlPlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAgZmlsbD5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvU29maWEgQWNleS5qcGdcIiBjbGFzc05hbWU9XCJpbWctcm91bmRlZCBwdWxsLWxlZnRcIi8+XG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5BY2V5LCBTb2ZpYTwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5NYXN1bmcgQ29ycC48L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvSm9zZXBoIEJhcmlzaC5qcGdcIiBjbGFzc05hbWU9XCJpbWctcm91bmRlZCBwdWxsLWxlZnRcIi8+XG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5CYXJpc2gsIEpvc2VwaDwvTGlzdEdyb3VwSXRlbUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD5NYXN1bmcgQ29ycC48L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvU2FyYWggQmVuc29uLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1yb3VuZGVkIHB1bGwtbGVmdFwiLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGVyPkJlbnNvbiwgU2FyYWg8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+WmV0YUNvbW08L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0V4YW1wbGU+XG4gICAgICAgIDxIaWdobGlnaHQ+XG4gICAgICAgICAgeyc8TGlzdD5cXG4gIDxDYXJkPlxcbiAgICA8TGlzdEdyb3VwIGZpbGw+XFxuICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1NvZmlhIEFjZXkuanBnXCIgY2xhc3NOYW1lPVwiaW1nLXJvdW5kZWQgcHVsbC1sZWZ0XCIvPlxcbiAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+QWNleSwgU29maWE8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XFxuICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TWFzdW5nIENvcnAuPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL0pvc2VwaCBCYXJpc2guanBnXCIgY2xhc3NOYW1lPVwiaW1nLXJvdW5kZWQgcHVsbC1sZWZ0XCIvPlxcbiAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkZXI+QmFyaXNoLCBKb3NlcGg8L0xpc3RHcm91cEl0ZW1IZWFkZXI+XFxuICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+TWFzdW5nIENvcnAuPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgICAgPExpc3RHcm91cEl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1NhcmFoIEJlbnNvbi5qcGdcIiBjbGFzc05hbWU9XCJpbWctcm91bmRlZCBwdWxsLWxlZnRcIi8+XFxuICAgICAgICA8TGlzdEdyb3VwSXRlbUhlYWRlcj5CZW5zb24sIFNhcmFoPC9MaXN0R3JvdXBJdGVtSGVhZGVyPlxcbiAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PlpldGFDb21tPC9MaXN0R3JvdXBJdGVtVGV4dD5cXG4gICAgICA8L0xpc3RHcm91cEl0ZW0+XFxuICAgIDwvTGlzdEdyb3VwPlxcbiAgPC9DYXJkPlxcbjwvTGlzdD4nfVxuICAgICAgICA8L0hpZ2hsaWdodD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uR3JvdXAsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDYXJkRm9vdGVyfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tICcuL0V4YW1wbGUnO1xuXG5jbGFzcyBNZWRpYUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWN0aW9uIGlkPVwiZG9jLW1lZGlhY2FyZFwiPlxuICAgICAgICA8aDM+TWVkaWEgQ2FyZHM8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+TWVkaWEgQ2FyZHMgaG9sZCBsYXJnZXIgaW1hZ2VzIG9yIHZpZGVvcy48L3A+XG4gICAgICAgIDxFeGFtcGxlPlxuICAgICAgICAgIDxDYXJkIGNhcmRTdHlsZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZT5NZWRpYSBDYXJkIEhlYWRpbmc8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgIE1lZGlhIGNhcmQgZGVzY3JpcHRpb24gbG9yZW0gaXBzdW0gZG9sb3IgZXN0IGNvbXBlbmRpdW1cbiAgICAgICAgICAgIDxpbWcgZmlsbCBzcmM9XCJodHRwOi8vd3d3LnRlYW1zdHVkaW8uY29tL1BvcnRhbHMvMjE4Mjk1L2ltYWdlcy9pc3RvY2tfMDAwMDAxMjQyMjkwc21hbGwuanBnXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgPENhcmRGb290ZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBqdXN0aWZpZWQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctZG93blwiIC8+XG4gICAgICAgICAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICBGYXZvcml0ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9FeGFtcGxlPlxuICAgICAgICA8SGlnaGxpZ2h0PlxuICAgICAgICAgIHsnPENhcmQgY2FyZFN0eWxlPVwibWVkaWFcIj5cXG4gIDxDYXJkSGVhZGVyPlxcbiAgICA8Q2FyZFRpdGxlPk1lZGlhIENhcmQgSGVhZGluZzwvQ2FyZFRpdGxlPlxcbiAgPC9DYXJkSGVhZGVyPlxcbiAgTWVkaWEgY2FyZCBkZXNjcmlwdGlvbiBsb3JlbSBpcHN1bSBkb2xvciBlc3QgY29tcGVuZGl1bVxcbiAgPGltZyBmaWxsIHNyYz1cImh0dHA6Ly93d3cudGVhbXN0dWRpby5jb20vUG9ydGFscy8yMTgyOTUvaW1hZ2VzL2lzdG9ja18wMDAwMDEyNDIyOTBzbWFsbC5qcGdcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIC8+XFxuICA8Q2FyZEZvb3Rlcj5cXG4gICAgPEJ1dHRvbkdyb3VwIGp1c3RpZmllZD5cXG4gICAgICA8QnV0dG9uR3JvdXA+XFxuICAgICAgICA8QnV0dG9uPlxcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1kb3duXCIgLz5cXG4gICAgICAgICAgRG93bmxvYWRcXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgICAgPEJ1dHRvbkdyb3VwPlxcbiAgICAgICAgPEJ1dHRvbj5cXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XFxuICAgICAgICAgIEZhdm9yaXRlXFxuICAgICAgICA8L0J1dHRvbj5cXG4gICAgICA8L0J1dHRvbkdyb3VwPlxcbiAgICAgIDxCdXR0b25Hcm91cD5cXG4gICAgICAgIDxCdXR0b24+XFxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCIgLz5cXG4gICAgICAgICAgRW1haWxcXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgIDwvQnV0dG9uR3JvdXA+XFxuICA8L0NhcmRGb290ZXI+XFxuPC9DYXJkPid9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QWxlcnR9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcblxuY2xhc3MgTW9kYWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1tb2RhbHNcIj5cbiAgICAgICAgPGgyPk1vZGFsczwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5Tb21ldGltZXMsIHlvdSdsbCB3YW50IHRvIHB1dCBzb21ldGhpbmcgbGlrZSBhIGZvcm0gb3IgYW4gaW1wb3J0YW50IG1lc3NhZ2UgaW4gYSBtb2RhbCwgb2JzY3VyaW5nIHRoZSBvdGhlciBjb250ZW50IGNvbXBsZXRlbHkuPC9wPlxuICAgICAgICA8cD5UaGUgbWFya3VwIGlzIHF1aXRlIHNpbWlsYXIgdG8gQ2FyZHMsIHdpdGggYSBoZWFkZXIsIGJvZHksIGFuZCBmb290ZXIuPC9wPlxuICAgICAgICA8QWxlcnQgYnNTdHlsZT1cIndhcm5pbmdcIj5SZW1lbWJlciB0byB3cmFwIGJ1dHRvbnMgaW4gdGhlIGhlYWRlciBvZiB5b3VyIG1vZGFscyBpbiAmbHQ7ZGl2IGNsYXNzTmFtZT0mcXVvdDtidG4tZ3JvdXAmcXVvdDsmZ3Q7IG9yIHlvdXIgYnV0dG9ucyBtaWdodCBub3Qgd29yay48L0FsZXJ0PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi9IaWdobGlnaHQnO1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWN0aW9uIGlkPVwiZG9jLW5hdmJhclwiPlxuICAgICAgICA8aDM+TmF2YmFyPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlRoZSBCb290Y2FyZHMgTmF2YmFyIGlzIHRoZSBtYWluIG5hdmlnYXRpb24gc3lzdGVtIGZvciBkZXNrdG9wIGJyb3dzZXJzLjwvcD5cbiAgICAgICAgPHA+T24gZGVza3RvcCwgaXQgdXNlcyBCb290c3RyYXAncyBkZWZhdWx0IDxjb2RlPi5uYXZiYXItZml4ZWQtdG9wPC9jb2RlPiBzdHlsZXMgYW5kIHNob3dzIGFsbCB0aGUgdG9wIGxldmVsIG5hdmlnYXRpb24gaXRlbXMuPC9wPlxuICAgICAgICA8cD5PbiBtb2JpbGUgZGV2aWNlcywgdGhlcmUgaXNuJ3QgZW5vdWdoIHNwYWNlIGZvciB0aGVzZSBpdGVtcywgc28gdGhlIEJvb3RzdHJhcCBOYXZiYXIgaXMgcmVwbGFjZWQgd2l0aCBhIHNpbXBsZXIsIG1vcmUgbmF0aXZlIHZlcnNpb24gd2l0aCBvbmx5IGEgVGl0bGUgYW5kIGxpbWl0ZWQgc3BhY2UgZm9yIG90aGVyIGZ1bmN0aW9ucyAoZS5nLiBhIEJhY2sgYnV0dG9uIG9yIE1lbnUgYnV0dG9uKS4gVGhlc2UgYnV0dG9ucyBhcmUgaGlkZGVuIGZyb20gZGVza3RvcCBicm93c2Vycywgd2hpY2ggZG9uJ3QgbmVlZCB0aGVtLjwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5JbiBhZGRpdGlvbiB0byB0aGUgTmF2YmFyLCB5b3UnbGwgYWxzbyBuZWVkIHRvIGltcGxlbWVudCBvbmUgb2YgdGhlIG90aGVyIG5hdmlnYXRpb24gc3RydWN0dXJlcyBiZWxvdyAoRm9vdGVyIEJhciBvciBTbGlkaW5nIFNpZGViYXIpIHRvIGFsbG93IG1vYmlsZSB1c2VycyB0byBuYXZpZ2F0ZSB5b3VyIGFwcC48L3N0cm9uZz48L3A+XG4gICAgICAgIDxIaWdobGlnaHQ+XG4gICAgICAgICAgeyc8ZGl2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3BcIiByb2xlPVwibmF2aWdhdGlvblwiPlxcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2VcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJhY2sgbmF2YmFyLWxlZnQgcHVsbC1sZWZ0IGhpZGRlbiBcIiBvbmNsaWNrPVwiaGlzdG9yeS5iYWNrKClcIj5cXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWxnIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cXG4gICAgICA8c3Bhbj5CYWNrPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLW1lbnUgbmF2YmFyLWxlZnQgcHVsbC1sZWZ0IG9mZmNhbnZhcy10b2dnbGVcIj5cXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWxnIGZhLWJhcnNcIj48L2k+XFxuICAgICAgPHNwYW4+TWVudTwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgdGl0bGU9XCJDdXN0b21lcnMgdnt7Z2V0QXBwVmVyc2lvbn19XCIgaHJlZj1cIi9cIj5DdXN0b21lcnM8L2E+XFxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIj5cXG4gICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxcbiAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+XFxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2Vyc1wiPjwvaT4gXFxuICAgICAgICAgICAgQ29udGFjdHNcXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaT5cXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWJ1aWxkaW5nLW9cIj48L2k+IFxcbiAgICAgICAgICAgIENvbXBhbmllc1xcbiAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpPlxcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZ2VhcnNcIj48L2k+IFxcbiAgICAgICAgICAgIFNldHRpbmdzXFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj4nfVxuICAgICAgICA8L0hpZ2hsaWdodD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcblxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2MtbmF2aWdhdGlvblwiPlxuICAgICAgICA8aDI+TmF2aWdhdGlvbjwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5Cb290Y2FyZHMgb2ZmZXJzIDMgbmF2aWdhdGlvbiBtZXRob2RzOiB0aGUgTmF2YmFyLCBGb290ZXIgQmFyLCBvciBTbGlkaW5nIFNpZGViYXIuPC9wPlxuICAgICAgICA8cD5XaGF0IHlvdSB1c2Ugd2lsbCBkZXBlbmQgb24gdGhlIG5lZWRzIG9mIHlvdXIgYXBwLCBhbmQgdGhlIG51bWJlciBvZiB0b3AtbGV2ZWwgbmF2aWdhdGlvbiBpdGVtcy4gQXBwcyB3aXRoIGZld2VyIGl0ZW1zIHdvdWxkIHN1aXQgdXNpbmcgZm9vdGVyIG5hdmlnYXRpb24gb24gbW9iaWxlLCBhcyB0aGV5J3JlIGFsd2F5cyBhY2Nlc3NpYmxlLCBidXQgZm9vdGVyIG5hdmlnYXRpb24gbWF5IGJlIGltcHJhY3RpY2FsIGZvciBhcHBzIHdpdGggbWFueSB0b3AgbGV2ZWwgbmF2aWdhdGlvbiBpdGVtcyBhcyBpdCBjYW4gb25seSBmaXQgNCBvbiBwaG9uZXMuPC9wPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NhcmQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSwgQ2FyZEZvb3Rlcn0gZnJvbSAncmVhY3QtYm9vdGNhcmRzJztcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi9IaWdobGlnaHQnO1xuaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9FeGFtcGxlJztcblxuY2xhc3MgUmljaFRleHRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1yaWNodGV4dGNhcmRcIj5cbiAgICAgICAgPGgzPlJpY2ggVGV4dCBDYXJkczwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5SaWNoIFRleHQgQ2FyZHMgYXJlIGRlc2lnbmVkIGZvciBsb25nZXIgcGFzc2FnZXMgb2YgdGV4dCwgd2hpY2ggbWF5IGluY2x1ZGUgdmFyaW91cyBoZWFkaW5nIGxldmVscywgcGFyYWdyYXBocyBhbmQgbGlzdHMuPC9wPlxuICAgICAgICA8cD5UaGV5IGhhdmUgbW9yZSBwYWRkaW5nIGFyb3VuZCB0aGUgPGNvZGU+LnBhbmVsLWNvbnRlbnQ8L2NvZGU+IHRvIGhlbHAgcmVhZGFiaWxpdHkuPC9wPlxuICAgICAgICA8RXhhbXBsZT5cbiAgICAgICAgICA8Q2FyZCBjYXJkU3R5bGU9XCJyaWNodGV4dFwiPlxuICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGU+UmljaCBUZXh0IENhcmQgSGVhZGluZzwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPkxlYWQgYm9keSBjb3B5IHZpdmFtdXMgc2FnaXR0aXMgbGFjdXMgdmVsIGF1Z3VlIGxhb3JlZXQgcnV0cnVtIGZhdWNpYnVzIGRvbG9yIGF1Y3Rvci4gRHVpcyBtb2xsaXMsIGVzdCBub24gY29tbW9kbyBsdWN0dXMuPC9wPlxuICAgICAgICAgICAgPGgxPkhlYWRpbmcgMTwvaDE+XG4gICAgICAgICAgICA8aDI+SGVhZGluZyAyPC9oMj5cbiAgICAgICAgICAgIDxoMz5IZWFkaW5nIDM8L2gzPlxuICAgICAgICAgICAgPGg0PkhlYWRpbmcgNDwvaDQ+XG4gICAgICAgICAgICA8aDU+SGVhZGluZyA1PC9oNT5cbiAgICAgICAgICAgIDxoNj5IZWFkaW5nIDY8L2g2PlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGEgbG9ib3J0aXMgcHJldGl1bSBuaXNsLiBFdGlhbSBhdCB2ZXN0aWJ1bHVtIHB1cnVzLCBzaXQgYW1ldCBibGFuZGl0IG1pLiBEdWlzIGVuaW0gbGVjdHVzLCB0ZW1wdXMgbmVjIHZhcml1cyBzZWQsIHNvbGxpY2l0dWRpbiBxdWlzIHZlbGl0LiBGdXNjZSBxdWlzIHNlbSBwb3J0dGl0b3IsIGV1aXNtb2QgYW50ZSB2aXRhZSwgdWx0cmljaWVzIGVyYXQuPC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+RHVpcyBjdXJzdXMgZHVpIGV0IHR1cnBpcyBncmF2aWRhIHNvbGxpY2l0dWRpbi48L2xpPlxuICAgICAgICAgICAgICA8bGk+RG9uZWMgZWdldCBtYXVyaXMgZmV1Z2lhdCwgZXVpc21vZCBwdXJ1cyBuZWMsIGZldWdpYXQgbmVxdWUuPC9saT5cbiAgICAgICAgICAgICAgPGxpPk51bmMgZXJhdCBlc3QsIG1vbGVzdGllIGVnZXQgbWFnbmEgaW4sIGNvbnNlY3RldHVyIGV1aXNtb2QgbG9yZW0uPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgIDxsaT5TZWQgbHVjdHVzIGNvbmd1ZSBvcmNpIHF1aXMgdGVtcHVzLjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5QcmFlc2VudCBpbiB2aXZlcnJhIGxvcmVtLjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TdXNwZW5kaXNzZSBhdWd1ZSBsYWN1cywgcG9ydGEgcXVpcyBpbXBlcmRpZXQgYXQsIHBvc3VlcmUgdmVsIG51bGxhLjwvbGk+XG4gICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPENhcmRGb290ZXI+XG4gICAgICAgICAgICAgIDxzbWFsbD5CdWlsdCB3aXRoIEJvb3RjYXJkcyAtIFJpY2ggVGV4dCBDYXJkPC9zbWFsbD5cbiAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvRXhhbXBsZT5cbiAgICAgICAgPEhpZ2hsaWdodD5cbiAgICAgICAgICB7JzxDYXJkIGNhcmRTdHlsZT1cInJpY2h0ZXh0XCI+XFxuICA8Q2FyZEhlYWRlcj5cXG4gICAgPENhcmRUaXRsZT5SaWNoIFRleHQgQ2FyZCBIZWFkaW5nPC9DYXJkVGl0bGU+XFxuICA8L0NhcmRIZWFkZXI+XFxuICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+TGVhZCBib2R5IGNvcHkgdml2YW11cyBzYWdpdHRpcyBsYWN1cyB2ZWwgYXVndWUgbGFvcmVldCBydXRydW0gZmF1Y2lidXMgZG9sb3IgYXVjdG9yLiBEdWlzIG1vbGxpcywgZXN0IG5vbiBjb21tb2RvIGx1Y3R1cy48L3A+XFxuICA8aDE+SGVhZGluZyAxPC9oMT5cXG4gIDxoMj5IZWFkaW5nIDI8L2gyPlxcbiAgPGgzPkhlYWRpbmcgMzwvaDM+XFxuICA8aDQ+SGVhZGluZyA0PC9oND5cXG4gIDxoNT5IZWFkaW5nIDU8L2g1PlxcbiAgPGg2PkhlYWRpbmcgNjwvaDY+XFxuICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYSBsb2JvcnRpcyBwcmV0aXVtIG5pc2wuIEV0aWFtIGF0IHZlc3RpYnVsdW0gcHVydXMsIHNpdCBhbWV0IGJsYW5kaXQgbWkuIER1aXMgZW5pbSBsZWN0dXMsIHRlbXB1cyBuZWMgdmFyaXVzIHNlZCwgc29sbGljaXR1ZGluIHF1aXMgdmVsaXQuIEZ1c2NlIHF1aXMgc2VtIHBvcnR0aXRvciwgZXVpc21vZCBhbnRlIHZpdGFlLCB1bHRyaWNpZXMgZXJhdC48L3A+XFxuICA8dWw+XFxuICAgIDxsaT5EdWlzIGN1cnN1cyBkdWkgZXQgdHVycGlzIGdyYXZpZGEgc29sbGljaXR1ZGluLjwvbGk+XFxuICAgIDxsaT5Eb25lYyBlZ2V0IG1hdXJpcyBmZXVnaWF0LCBldWlzbW9kIHB1cnVzIG5lYywgZmV1Z2lhdCBuZXF1ZS48L2xpPlxcbiAgICA8bGk+TnVuYyBlcmF0IGVzdCwgbW9sZXN0aWUgZWdldCBtYWduYSBpbiwgY29uc2VjdGV0dXIgZXVpc21vZCBsb3JlbS48L2xpPlxcbiAgPC91bD5cXG4gIDxvbD5cXG4gICAgPGxpPlNlZCBsdWN0dXMgY29uZ3VlIG9yY2kgcXVpcyB0ZW1wdXMuPC9saT5cXG4gICAgPGxpPlByYWVzZW50IGluIHZpdmVycmEgbG9yZW0uPC9saT5cXG4gICAgPGxpPlN1c3BlbmRpc3NlIGF1Z3VlIGxhY3VzLCBwb3J0YSBxdWlzIGltcGVyZGlldCBhdCwgcG9zdWVyZSB2ZWwgbnVsbGEuPC9saT5cXG4gIDwvb2w+XFxuICA8Q2FyZEZvb3Rlcj5cXG4gICAgPHNtYWxsPkJ1aWx0IHdpdGggQm9vdGNhcmRzIC0gUmljaCBUZXh0IENhcmQ8L3NtYWxsPlxcbiAgPC9DYXJkRm9vdGVyPlxcbjwvQ2FyZD4nfVxuICAgICAgICA8L0hpZ2hsaWdodD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpY2hUZXh0Q2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnYnMtZG9jcy1zZWN0aW9uJyl9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4vSGlnaGxpZ2h0JztcblxuY2xhc3MgU2xpZGluZ1NpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWN0aW9uIGlkPVwiZG9jLXNsaWRpbmdzaWRlYmFyXCI+XG4gICAgICAgIDxoMz5TbGlkaW5nIFNpZGViYXIgKCdvZmZjYW52YXMnKTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5UaGUgU2xpZGluZyBTaWRlYmFyIG9mZmVycyBjb21wbGV4IGFwcHMgbW9yZSBzcGFjZSBuYXZpZ2F0aW9uIGl0ZW1zLjwvcD5cbiAgICAgICAgPHA+VGhpcyBpcyBoaWRkZW4gYnkgZGVmYXVsdCwgYW5kIGFjY2Vzc2VkIHdoZW4gcmVxdWlyZWQgdmlhIGEgTWVudSBidXR0b24gb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBOYXZiYXIuPC9wPlxuICAgICAgICA8cD5PbiBkZXNrdG9wIGJyb3dzZXJzLCB0aGUgU2xpZGluZyBTaWRlYmFyIGlzIGluYWN0aXZlLCBhcyBpdCdzIHVubmVjZXNzYXJ5LjwvcD5cbiAgICAgICAgPHA+VGhlIFNsaWRpbmcgU2lkZWJhciBjb25zaXN0cyBvZiB0d28gZWxlbWVudHM6PC9wPlxuICAgICAgICA8bGk+QSBidXR0b24gdG8gc2hvdy8gaGlkZSB0aGUgc2lkZWJhcjo8L2xpPlxuICAgICAgICA8cCAvPlxuICAgICAgICA8SGlnaGxpZ2h0PlxuICAgICAgICAgIHsnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLW1lbnVcIiBkYXRhLXRvZ2dsZT1cIm9mZmNhbnZhc1wiPlxcbiAgPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS1iYXJzXCI+PC9pPlxcbiAgPHNwYW4+TWVudTwvc3Bhbj5cXG48L2J1dHRvbj4nfVxuICAgICAgICA8L0hpZ2hsaWdodD5cbiAgICAgICAgPHA+Qm9vdGNhcmRzIHRyaWVzIHRvIGZpbmQgdGhlIGVsZW1lbnQgdGhhdCBoYXMgPGNvZGU+ZGF0YS10b2dnbGU9XCJvZmZjYW52YXNcIjwvY29kZT4gYW5kIGF0dGFjaGVzIGEgaGFuZGxlciB0byBzaG93LyBoaWRlIHRoZSBtZW51LjwvcD5cbiAgICAgICAgPGxpPlRoZSBtZW51OjwvbGk+XG4gICAgICAgIDxwIC8+XG4gICAgICAgIDxIaWdobGlnaHQ+XG4gICAgICAgICAgeyc8ZGl2IGNsYXNzPVwibmF2bWVudSBvZmZjYW52YXMgb2ZmY2FudmFzLWxlZnRcIj5cXG4gIDx1bCBjbGFzcz1cIm5hdlwiPlxcbiAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj5cXG4gICAgICA8YSBocmVmPVwiI1wiPlxcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS11c2Vyc1wiPjwvaT5cXG4gICAgICAgIENvbnRhY3RzXFxuICAgICAgPC9hPlxcbiAgICA8L2xpPlxcbiAgICA8bGk+XFxuICAgICAgPGEgaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtYnVpbGRpbmctb1wiPjwvaT5cXG4gICAgICAgIENvbXBhbmllc1xcbiAgICAgIDwvYT5cXG4gICAgPC9saT5cXG4gICAgPGxpPlxcbiAgICAgIDxhIGhyZWY9XCIjXCI+XFxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxnIGZhLWdlYXJzXCI+PC9pPlxcbiAgICAgICAgU2V0dGluZ3NcXG4gICAgICA8L2E+XFxuICAgIDwvbGk+XFxuICA8L3VsPlxcbjwvZGl2Pid9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGluZ1NpZGViYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XG5cbmNsYXNzIFN1Ym1lbnVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiBpZD1cImRvYy1zdWJtZW51c1wiPlxuICAgICAgICA8aDQ+U3VibWVudXM8L2g0PlxuICAgICAgICA8cD5Vc2luZyB0aGUgc3RhbmRhcmQgQm9vdHN0YXAgJ2NvbGxhcHNlJyBmdW5jdGlvbiwgdGhlIG9mZmNhbnZhcyBjYW4gYWxzbyBjb250YWluIG1lbnUgb3B0aW9ucyB3aXRoIHN1Ym1lbnUgb3B0aW9ucy48L3A+XG4gICAgICAgIDxIaWdobGlnaHQ+XG4gICAgICAgICAgeyc8IS0tb3B0aW9uIHdpdGggc3VibWVudS0tPlxcbjxsaSBjbGFzcz1cImNvbGxhcHNlIGxpdG9wNFwiPlxcbiAgPGEgaHJlZj1cIiNvdGhlckNvbnRyb2xzXCIgY2xhc3M9XCJib290Y2FyZHMtcGFyZW50XCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtcGFyZW50PVwiLmNvbGxhcHNlXCI+XFxuICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtZncgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIj48L2k+IFNldHRpbmdzXFxuICA8L2E+XFxuICA8ZGl2IGlkPVwib3RoZXJDb250cm9sc1wiIGNsYXNzPVwiY29sbGFwc2UgaW5cIj5cXG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdm1lbnUtbmF2XCI+PGxpID5cXG4gICAgICA8YSBocmVmPVwiI1wiID48aSBjbGFzcz1cImZhIGZhLWxnIGZhLWZ3IGZhLWNvZ1wiPjwvaT4gR2VuZXJhbDwvYT48L2xpPlxcbiAgICA8bGk+XFxuICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWxnIGZhLWZ3IGZhLXVzZXJcIj48L2k+IEFjY291bnQ8L2E+XFxuICAgIDwvbGk+XFxuICAgICA8bGk+XFxuICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWxnIGZhLWZ3IGZhLXJlZnJlc2hcIj48L2k+IFN5bmM8L2E+XFxuICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L2xpPid9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICA8cD5FbmFibGUgdGhlIGNvbGxhcHNpYmxlIG1lbnUgdXNpbmcgdGhlIGZvbGxvd2luZyBzY3JpcHQ6IDxjb2RlPiQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCk7PC9jb2RlPjwvcD5cbiAgICAgICAgPHA+Rm9yIG1vcmUgZGV0YWlscywgc2VlIDxhIGhyZWY9XCJodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNjb2xsYXBzZVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+LjwvcD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Ym1lbnVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um93LCBDb2wsIExhYmVsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHtDYXJkLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUsIENhcmRGb290ZXIsIFN1bW1hcnlJdGVtfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tICcuL0V4YW1wbGUnO1xuXG5jbGFzcyBTdW1tYXJ5Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlY3Rpb24gaWQ9XCJkb2Mtc3VtbWFyeWNhcmRcIj5cbiAgICAgICAgPGgzPlN1bW1hcnkgQ2FyZHM8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+U3VtbWFyeSBjYXJkcyBjYW4gYmUgdXNlZCBvbiBkYXNoYm9hcmRzLCBldGMgdG8gaGlnaGxpZ2h0IGltcG9ydGFudCBwaWVjZXMgb2YgZGF0YSBpbiB5b3VyIGFwcC48L3A+XG4gICAgICAgIDxFeGFtcGxlPlxuICAgICAgICAgIDxDYXJkIGNhcmRTdHlsZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlN1bW1heSBDYXJkIEhlYWRpbmc8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgICA8U3VtbWFyeUl0ZW0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLTN4IGZhLXVzZXJzXCIvPlxuICAgICAgICAgICAgICAgICAgPGg0PkNvbnRhY3RzIDxMYWJlbCBic1N0eWxlPVwiaW5mb1wiPjQzMjwvTGFiZWw+PC9oND5cbiAgICAgICAgICAgICAgICA8L1N1bW1hcnlJdGVtPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc209ezR9PlxuICAgICAgICAgICAgICAgIDxTdW1tYXJ5SXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtYnVpbGRpbmctb1wiLz5cbiAgICAgICAgICAgICAgICAgIDxoND5Db21wYW5pZXMgPExhYmVsIGJzU3R5bGU9XCJpbmZvXCI+OTg8L0xhYmVsPjwvaDQ+XG4gICAgICAgICAgICAgICAgPC9TdW1tYXJ5SXRlbT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgICA8U3VtbWFyeUl0ZW0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLTN4IGZhLWNsaXBib2FyZFwiLz5cbiAgICAgICAgICAgICAgICAgIDxoND5Ob3RlcyA8TGFiZWwgYnNTdHlsZT1cImRhbmdlclwiPjU0PC9MYWJlbD48L2g0PlxuICAgICAgICAgICAgICAgIDwvU3VtbWFyeUl0ZW0+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBzbT17NH0+XG4gICAgICAgICAgICAgICAgPFN1bW1hcnlJdGVtIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS1maWxlcy1vXCIvPlxuICAgICAgICAgICAgICAgICAgPGg0PkZpbGVzIDxMYWJlbCBic1N0eWxlPVwiaW5mb1wiPjY1PC9MYWJlbD48L2g0PlxuICAgICAgICAgICAgICAgIDwvU3VtbWFyeUl0ZW0+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBzbT17NH0+XG4gICAgICAgICAgICAgICAgPFN1bW1hcnlJdGVtIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS1jaGVjay1zcXVhcmUtb1wiLz5cbiAgICAgICAgICAgICAgICAgIDxoND5UYXNrcyA8TGFiZWwgYnNTdHlsZT1cIndhcm5pbmdcIj4xMDk8L0xhYmVsPjwvaDQ+XG4gICAgICAgICAgICAgICAgPC9TdW1tYXJ5SXRlbT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBTdW1tYXJ5IENhcmQ8L3NtYWxsPlxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9FeGFtcGxlPlxuICAgICAgICA8SGlnaGxpZ2h0PlxuICAgICAgICAgIHsnPENhcmQgY2FyZFN0eWxlPVwic3VtbWFyeVwiPlxcbiAgPENhcmRIZWFkZXI+XFxuICAgIDxDYXJkVGl0bGU+U3VtbWF5IENhcmQgSGVhZGluZzwvQ2FyZFRpdGxlPlxcbiAgPC9DYXJkSGVhZGVyPlxcbiAgPFJvdz5cXG4gICAgPENvbCB4cz17Nn0gc209ezR9PlxcbiAgICAgIDxTdW1tYXJ5SXRlbSBocmVmPVwiI1wiPlxcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtdXNlcnNcIi8+XFxuICAgICAgICA8aDQ+Q29udGFjdHMgPExhYmVsIGJzU3R5bGU9XCJpbmZvXCI+NDMyPC9MYWJlbD48L2g0PlxcbiAgICAgIDwvU3VtbWFyeUl0ZW0+XFxuICAgIDwvQ29sPlxcbiAgICA8Q29sIHhzPXs2fSBzbT17NH0+XFxuICAgICAgPFN1bW1hcnlJdGVtIGhyZWY9XCIjXCI+XFxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS0zeCBmYS1idWlsZGluZy1vXCIvPlxcbiAgICAgICAgPGg0PkNvbXBhbmllcyA8TGFiZWwgYnNTdHlsZT1cImluZm9cIj45ODwvTGFiZWw+PC9oND5cXG4gICAgICA8L1N1bW1hcnlJdGVtPlxcbiAgICA8L0NvbD5cXG4gICAgPENvbCB4cz17Nn0gc209ezR9PlxcbiAgICAgIDxTdW1tYXJ5SXRlbSBocmVmPVwiI1wiPlxcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtM3ggZmEtY2xpcGJvYXJkXCIvPlxcbiAgICAgICAgPGg0Pk5vdGVzIDxMYWJlbCBic1N0eWxlPVwiZGFuZ2VyXCI+NTQ8L0xhYmVsPjwvaDQ+XFxuICAgICAgPC9TdW1tYXJ5SXRlbT5cXG4gICAgPC9Db2w+XFxuICAgIDxDb2wgeHM9ezZ9IHNtPXs0fT5cXG4gICAgICA8U3VtbWFyeUl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLTN4IGZhLWZpbGVzLW9cIi8+XFxuICAgICAgICA8aDQ+RmlsZXMgPExhYmVsIGJzU3R5bGU9XCJpbmZvXCI+NjU8L0xhYmVsPjwvaDQ+XFxuICAgICAgPC9TdW1tYXJ5SXRlbT5cXG4gICAgPC9Db2w+XFxuICAgIDxDb2wgeHM9ezZ9IHNtPXs0fT5cXG4gICAgICA8U3VtbWFyeUl0ZW0gaHJlZj1cIiNcIj5cXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLTN4IGZhLWNoZWNrLXNxdWFyZS1vXCIvPlxcbiAgICAgICAgPGg0PlRhc2tzIDxMYWJlbCBic1N0eWxlPVwid2FybmluZ1wiPjEwOTwvTGFiZWw+PC9oND5cXG4gICAgICA8L1N1bW1hcnlJdGVtPlxcbiAgICA8L0NvbD5cXG4gIDwvUm93PlxcbiAgPENhcmRGb290ZXI+XFxuICAgIDxzbWFsbD5CdWlsdCB3aXRoIEJvb3RjYXJkcyAtIFN1bW1hcnkgQ2FyZDwvc21hbGw+XFxuICA8L0NhcmRGb290ZXI+XFxuPC9DYXJkPid9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeUNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUYWJsZX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDYXJkRm9vdGVyfSBmcm9tICdyZWFjdC1ib290Y2FyZHMnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuL0hpZ2hsaWdodCc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tICcuL0V4YW1wbGUnO1xuXG5jbGFzcyBUYWJsZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWN0aW9uIGlkPVwiZG9jLXRhYmxlY2FyZFwiPlxuICAgICAgICA8aDM+VGFibGUgQ2FyZHM8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+VGFibGUgQ2FyZHMgZGlzcGxheSB0YWJ1bGFyIGRhdGEuPC9wPlxuICAgICAgICA8cD5Zb3UgY2FuIHVzZSB0aGUgc2FtZSB0YWJsZSBjbGFzc2VzIGFzIEJvb3RzdHJhcCwgZS5nLiB0aGUgPGNvZGU+LnRhYmxlLWhvdmVyPC9jb2RlPiBhbmQgPGNvZGU+LmFjdGl2ZTwvY29kZT4gY2xhc3NlcyB1c2VkIGluIHRoaXMgZXhhbXBsZS48L3A+XG4gICAgICAgIDxwPldyYXAgd2lkZXIgdGFibGVzIGluIGEgPGNvZGU+Jmx0O2RpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIiZndDs8L2NvZGU+IHNvIHRoZXknbGwgYmUgYWJsZSB0byBzY3JvbGwgaG9yaXpvbnRhbGx5IGluIG5hcnJvd2VyIGJyb3dzZXJzIHN1Y2ggYXMgbW9iaWxlcywgYW5kIG5vdCBiZSBjdXQgb2ZmLjwvcD5cbiAgICAgICAgPEV4YW1wbGU+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZT5UYWJsZSBDYXJkIFRpdGxlPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBob3ZlciBmaWxsPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjx0aD5OYW1lPC90aD48dGg+Rm9yZWNhc3Q8L3RoPjx0aD5RdW90YTwvdGg+PC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0cj48dGQ+R3V5IEJhcmRzbGV5PC90ZD48dGQ+Mjc1MDwvdGQ+PHRkPjQwMDA8L3RkPjwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPjx0ZD5BZGFtIENhbGxhaGFuPC90ZD48dGQ+MzMwMDwvdGQ+PHRkPjQwMDA8L3RkPjwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPjx0ZD48c3Ryb25nPlRvdGFsPC9zdHJvbmc+PC90ZD48dGQ+PHN0cm9uZz42MDUwPC9zdHJvbmc+PC90ZD48dGQ+PHN0cm9uZz44MDAwPC9zdHJvbmc+PC90ZD48L3RyPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICA8c21hbGw+QnVpbHQgd2l0aCBCb290Y2FyZHMgLSBUYWJsZSBDYXJkPC9zbWFsbD5cbiAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvRXhhbXBsZT5cbiAgICAgICAgPEhpZ2hsaWdodD5cbiAgICAgICAgICB7JzxDYXJkPlxcbiAgPENhcmRIZWFkZXI+XFxuICAgIDxDYXJkVGl0bGU+VGFibGUgQ2FyZCBUaXRsZTwvQ2FyZFRpdGxlPlxcbiAgPC9DYXJkSGVhZGVyPlxcbiAgPFRhYmxlIHJlc3BvbnNpdmUgaG92ZXIgZmlsbD5cXG4gICAgPHRoZWFkPlxcbiAgICAgIDx0ciBjbGFzc05hbWU9XCJhY3RpdmVcIj48dGg+TmFtZTwvdGg+PHRoPkZvcmVjYXN0PC90aD48dGg+UXVvdGE8L3RoPjwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuICAgIDx0Ym9keT5cXG4gICAgICA8dHI+PHRkPkd1eSBCYXJkc2xleTwvdGQ+PHRkPjI3NTA8L3RkPjx0ZD40MDAwPC90ZD48L3RyPlxcbiAgICAgIDx0cj48dGQ+QWRhbSBDYWxsYWhhbjwvdGQ+PHRkPjMzMDA8L3RkPjx0ZD40MDAwPC90ZD48L3RyPlxcbiAgICAgIDx0cj48dGQ+PHN0cm9uZz5Ub3RhbDwvc3Ryb25nPjwvdGQ+PHRkPjxzdHJvbmc+NjA1MDwvc3Ryb25nPjwvdGQ+PHRkPjxzdHJvbmc+ODAwMDwvc3Ryb25nPjwvdGQ+PC90cj5cXG4gICAgPC90Ym9keT5cXG4gIDwvVGFibGU+XFxuICA8Q2FyZEZvb3Rlcj5cXG4gICAgPHNtYWxsPkJ1aWx0IHdpdGggQm9vdGNhcmRzIC0gVGFibGUgQ2FyZDwvc21hbGw+XFxuICA8L0NhcmRGb290ZXI+XFxuPC9DYXJkPid9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVDYXJkO1xuIiwiLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucHVzaC5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFBVU0ggPSAnUFVTSCc7XG5cbmV4cG9ydHMuUFVTSCA9IFBVU0g7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5yZXBsYWNlLlxuICovXG52YXIgUkVQTEFDRSA9ICdSRVBMQUNFJztcblxuZXhwb3J0cy5SRVBMQUNFID0gUkVQTEFDRTtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IHNvbWUgb3RoZXIgYWN0aW9uIHN1Y2hcbiAqIGFzIHVzaW5nIGEgYnJvd3NlcidzIGJhY2svZm9yd2FyZCBidXR0b25zIGFuZC9vciBtYW51YWxseSBtYW5pcHVsYXRpbmdcbiAqIHRoZSBVUkwgaW4gYSBicm93c2VyJ3MgbG9jYXRpb24gYmFyLiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICpcbiAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93RXZlbnRIYW5kbGVycy9vbnBvcHN0YXRlXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xudmFyIFBPUCA9ICdQT1AnO1xuXG5leHBvcnRzLlBPUCA9IFBPUDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgUFVTSDogUFVTSCxcbiAgUkVQTEFDRTogUkVQTEFDRSxcbiAgUE9QOiBQT1Bcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmxvb3BBc3luYyA9IGxvb3BBc3luYztcblxuZnVuY3Rpb24gbG9vcEFzeW5jKHR1cm5zLCB3b3JrLCBjYWxsYmFjaykge1xuICB2YXIgY3VycmVudFR1cm4gPSAwO1xuICB2YXIgaXNEb25lID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpc0RvbmUgPSB0cnVlO1xuICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpc0RvbmUpIHJldHVybjtcblxuICAgIGlmIChjdXJyZW50VHVybiA8IHR1cm5zKSB7XG4gICAgICB3b3JrLmNhbGwodGhpcywgY3VycmVudFR1cm4rKywgbmV4dCwgZG9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk7XG59IiwiLyplc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zYXZlU3RhdGUgPSBzYXZlU3RhdGU7XG5leHBvcnRzLnJlYWRTdGF0ZSA9IHJlYWRTdGF0ZTtcbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgcmV0dXJuIEtleVByZWZpeCArIGtleTtcbn1cblxuZnVuY3Rpb24gc2F2ZVN0YXRlKGtleSwgc3RhdGUpIHtcbiAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oY3JlYXRlS2V5KGtleSksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG59XG5cbmZ1bmN0aW9uIHJlYWRTdGF0ZShrZXkpIHtcbiAgdmFyIGpzb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVLZXkoa2V5KSk7XG5cbiAgaWYgKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElnbm9yZSBpbnZhbGlkIEpTT04uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5leHBvcnRzLmdldEhhc2hQYXRoID0gZ2V0SGFzaFBhdGg7XG5leHBvcnRzLnJlcGxhY2VIYXNoUGF0aCA9IHJlcGxhY2VIYXNoUGF0aDtcbmV4cG9ydHMuZ2V0V2luZG93UGF0aCA9IGdldFdpbmRvd1BhdGg7XG5leHBvcnRzLmdvID0gZ287XG5leHBvcnRzLmdldFVzZXJDb25maXJtYXRpb24gPSBnZXRVc2VyQ29uZmlybWF0aW9uO1xuZXhwb3J0cy5zdXBwb3J0c0hpc3RvcnkgPSBzdXBwb3J0c0hpc3Rvcnk7XG5leHBvcnRzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2g7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJyc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93UGF0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn1cblxuZnVuY3Rpb24gZ28obikge1xuICBpZiAobikgd2luZG93Lmhpc3RvcnkuZ28obik7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIG1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gdWEuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9ET01TdGF0ZVN0b3JhZ2UgPSByZXF1aXJlKCcuL0RPTVN0YXRlU3RvcmFnZScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZURPTUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZURPTUhpc3RvcnkpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uID0gcmVxdWlyZSgnLi9jcmVhdGVMb2NhdGlvbicpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUxvY2F0aW9uKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIEhUTUw1J3MgaGlzdG9yeSBBUElcbiAqIChwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudCkgdG8gbWFuYWdlIGhpc3RvcnkuXG4gKiBUaGlzIGlzIHRoZSByZWNvbW1lbmRlZCBtZXRob2Qgb2YgbWFuYWdpbmcgaGlzdG9yeSBpbiBicm93c2VycyBiZWNhdXNlXG4gKiBpdCBwcm92aWRlcyB0aGUgY2xlYW5lc3QgVVJMcy5cbiAqXG4gKiBOb3RlOiBJbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBmdWxsXG4gKiBwYWdlIHJlbG9hZHMgd2lsbCBiZSB1c2VkIHRvIHByZXNlcnZlIFVSTHMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KG9wdGlvbnMpIHtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgdmFyIGlzU3VwcG9ydGVkID0gX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSgpO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGUgfHwgd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG5cbiAgICB2YXIgcGF0aCA9IF9ET01VdGlscy5nZXRXaW5kb3dQYXRoKCk7XG4gICAgdmFyIF9oaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGU7XG4gICAgdmFyIGtleSA9IF9oaXN0b3J5U3RhdGUua2V5O1xuXG4gICAgdmFyIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHN0YXRlID0gX0RPTVN0YXRlU3RvcmFnZS5yZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcblxuICAgICAgaWYgKGlzU3VwcG9ydGVkKSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGhpc3RvcnlTdGF0ZSwgeyBrZXk6IGtleSB9KSwgbnVsbCwgcGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jcmVhdGVMb2NhdGlvbjJbJ2RlZmF1bHQnXShwYXRoLCBzdGF0ZSwgdW5kZWZpbmVkLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBwb3BTdGF0ZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gICAgICB0cmFuc2l0aW9uVG8oZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gICAgfVxuXG4gICAgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcbiAgICB2YXIgYWN0aW9uID0gbG9jYXRpb24uYWN0aW9uO1xuICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXk7XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlKGtleSwgc3RhdGUpO1xuXG4gICAgdmFyIHBhdGggPSAoYmFzZW5hbWUgfHwgJycpICsgcGF0aG5hbWUgKyBzZWFyY2g7XG4gICAgdmFyIGhpc3RvcnlTdGF0ZSA9IHtcbiAgICAgIGtleToga2V5XG4gICAgfTtcblxuICAgIGlmIChhY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgIGlmIChpc1N1cHBvcnRlZCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aDsgLy8gVXNlIHBhZ2UgcmVsb2FkIHRvIHByZXNlcnZlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUkVQTEFDRVxuICAgICAgICBpZiAoaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTsgLy8gVXNlIHBhZ2UgcmVsb2FkIHRvIHByZXNlcnZlIHRoZSBVUkwuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZURPTUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBmaW5pc2hUcmFuc2l0aW9uOiBmaW5pc2hUcmFuc2l0aW9uLFxuICAgIHNhdmVTdGF0ZTogX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGVcbiAgfSkpO1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMCxcbiAgICAgIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgdmFyIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbjogbGlzdGVuXG4gIH0pO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVCcm93c2VySGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVET01IaXN0b3J5KG9wdGlvbnMpIHtcbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7XG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX0RPTVV0aWxzLmdldFVzZXJDb25maXJtYXRpb25cbiAgfSwgb3B0aW9ucywge1xuICAgIGdvOiBfRE9NVXRpbHMuZ29cbiAgfSkpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZURPTUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kZWVwRXF1YWwgPSByZXF1aXJlKCdkZWVwLWVxdWFsJyk7XG5cbnZhciBfZGVlcEVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZXBFcXVhbCk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbiA9IHJlcXVpcmUoJy4vY3JlYXRlTG9jYXRpb24nKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVMb2NhdGlvbik7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2sgPSByZXF1aXJlKCcuL3J1blRyYW5zaXRpb25Ib29rJyk7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcnVuVHJhbnNpdGlvbkhvb2spO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUtleShsZW5ndGgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBsZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJlxuICAvL2EuYWN0aW9uID09PSBiLmFjdGlvbiAmJiAvLyBEaWZmZXJlbnQgYWN0aW9uICE9PSBsb2NhdGlvbiBjaGFuZ2UuXG4gIGEua2V5ID09PSBiLmtleSAmJiBfZGVlcEVxdWFsMlsnZGVmYXVsdCddKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG52YXIgRGVmYXVsdEtleUxlbmd0aCA9IDY7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBvcHRpb25zLmdldEN1cnJlbnRMb2NhdGlvbjtcbiAgdmFyIGZpbmlzaFRyYW5zaXRpb24gPSBvcHRpb25zLmZpbmlzaFRyYW5zaXRpb247XG4gIHZhciBzYXZlU3RhdGUgPSBvcHRpb25zLnNhdmVTdGF0ZTtcbiAgdmFyIGdvID0gb3B0aW9ucy5nbztcbiAgdmFyIGtleUxlbmd0aCA9IG9wdGlvbnMua2V5TGVuZ3RoO1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IG9wdGlvbnMuZ2V0VXNlckNvbmZpcm1hdGlvbjtcblxuICBpZiAodHlwZW9mIGtleUxlbmd0aCAhPT0gJ251bWJlcicpIGtleUxlbmd0aCA9IERlZmF1bHRLZXlMZW5ndGg7XG5cbiAgdmFyIHRyYW5zaXRpb25Ib29rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICB2YXIgYWxsS2V5cyA9IFtdO1xuICB2YXIgY2hhbmdlTGlzdGVuZXJzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIGlmIChwZW5kaW5nTG9jYXRpb24gJiYgcGVuZGluZ0xvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKHBlbmRpbmdMb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnZXRDdXJyZW50KCk7XG5cbiAgICBsb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXG4gICAgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgYWxsS2V5cyA9IFtdLmNvbmNhdChhbGxLZXlzLnNsaWNlKDAsIGN1cnJlbnQgKyAxKSwgW2xvY2F0aW9uLmtleV0pO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5SRVBMQUNFKSB7XG4gICAgICBhbGxLZXlzW2N1cnJlbnRdID0gbG9jYXRpb24ua2V5O1xuICAgIH1cblxuICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgY2hhbmdlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfbG9jYXRpb24gPSBnZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICAgIGFsbEtleXMgPSBbX2xvY2F0aW9uLmtleV07XG4gICAgICB1cGRhdGVMb2NhdGlvbihfbG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VMaXN0ZW5lcnMgPSBjaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgIF9Bc3luY1V0aWxzLmxvb3BBc3luYyh0cmFuc2l0aW9uSG9va3MubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICAgIF9ydW5UcmFuc2l0aW9uSG9vazJbJ2RlZmF1bHQnXSh0cmFuc2l0aW9uSG9va3NbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKGdldFVzZXJDb25maXJtYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgY2FsbGJhY2sob2sgIT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhtZXNzYWdlICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGVuZGluZ0xvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb25zQXJlRXF1YWwobG9jYXRpb24sIG5leHRMb2NhdGlvbikpIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIHBlbmRpbmdMb2NhdGlvbiA9IG5leHRMb2NhdGlvbjtcblxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG8obmV4dExvY2F0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChwZW5kaW5nTG9jYXRpb24gIT09IG5leHRMb2NhdGlvbikgcmV0dXJuOyAvLyBUcmFuc2l0aW9uIHdhcyBpbnRlcnJ1cHRlZC5cblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIGZpbmlzaFRyYW5zaXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgICAgdXBkYXRlTG9jYXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gJiYgbmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGFsbEtleXMuaW5kZXhPZihuZXh0TG9jYXRpb24ua2V5KTtcblxuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSAmJiBuZXh0SW5kZXggIT09IC0xKSBnbyhwcmV2SW5kZXggLSBuZXh0SW5kZXgpOyAvLyBSZXN0b3JlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICB0cmFuc2l0aW9uVG8oX2NyZWF0ZUxvY2F0aW9uMlsnZGVmYXVsdCddKHBhdGgsIHN0YXRlLCBfQWN0aW9ucy5QVVNILCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgdHJhbnNpdGlvblRvKF9jcmVhdGVMb2NhdGlvbjJbJ2RlZmF1bHQnXShwYXRoLCBzdGF0ZSwgX0FjdGlvbnMuUkVQTEFDRSwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSk7XG4gICAgICB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUoZ2V0Q3VycmVudExvY2F0aW9uKCksIHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSkge1xuICAgIGxvY2F0aW9uLnN0YXRlID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLnN0YXRlLCBzdGF0ZSk7XG4gICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gY3JlYXRlUmFuZG9tS2V5KGtleUxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYocGF0aCkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAodHJhbnNpdGlvbkhvb2tzLmluZGV4T2YoaG9vaykgPT09IC0xKSB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaFN0YXRlOiBwdXNoU3RhdGUsXG4gICAgcmVwbGFjZVN0YXRlOiByZXBsYWNlU3RhdGUsXG4gICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG5cbiAgICByZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICdyZWdpc3RlclRyYW5zaXRpb25Ib29rIGlzIGRlcHJlY2F0ZWQ7IHVzZSBsaXN0ZW5CZWZvcmUgaW5zdGVhZCcpLFxuICAgIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXSh1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICd1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIHRoZSBjYWxsYmFjayByZXR1cm5lZCBmcm9tIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJylcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIGV4dHJhY3RQYXRoKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goL2h0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpIHJldHVybiBzdHJpbmc7XG5cbiAgX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdMb2NhdGlvbiBwYXRoIG11c3QgYmUgcGF0aG5hbWUgKyBxdWVyeSBzdHJpbmcgb25seSwgbm90IGEgZnVsbHkgcXVhbGlmaWVkIFVSTCBsaWtlIFwiJXNcIicsIHN0cmluZyk7XG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gIHZhciBwYXRoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJy8nIDogYXJndW1lbnRzWzBdO1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gX0FjdGlvbnMuUE9QIDogYXJndW1lbnRzWzJdO1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICBwYXRoID0gZXh0cmFjdFBhdGgocGF0aCk7XG5cbiAgdmFyIHBhdGhuYW1lID0gcGF0aDtcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIGlmIChwYXRobmFtZSA9PT0gJycpIHBhdGhuYW1lID0gJy8nO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBkZXByZWNhdGUoZm4sIG1lc3NhZ2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgbWVzc2FnZSk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlcHJlY2F0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gcnVuVHJhbnNpdGlvbkhvb2soaG9vaywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBob29rKGxvY2F0aW9uLCBjYWxsYmFjayk7XG5cbiAgaWYgKGhvb2subGVuZ3RoIDwgMikge1xuICAgIC8vIEFzc3VtZSB0aGUgaG9vayBydW5zIHN5bmNocm9ub3VzbHkgYW5kIGF1dG9tYXRpY2FsbHlcbiAgICAvLyBjYWxsIHRoZSBjYWxsYmFjayB3aXRoIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgY2FsbGJhY2socmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBfd2FybmluZzJbJ2RlZmF1bHQnXShyZXN1bHQgPT09IHVuZGVmaW5lZCwgJ1lvdSBzaG91bGQgbm90IFwicmV0dXJuXCIgaW4gYSB0cmFuc2l0aW9uIGhvb2sgd2l0aCBhIGNhbGxiYWNrIGFyZ3VtZW50OyBjYWxsIHRoZSBjYWxsYmFjayBpbnN0ZWFkJyk7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gcnVuVHJhbnNpdGlvbkhvb2s7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJ2YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuL2xpYi9rZXlzLmpzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2xpYi9pc19hcmd1bWVudHMuanMnKTtcblxudmFyIGRlZXBFcXVhbCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYWN0dWFsIGluc3RhbmNlb2YgRGF0ZSAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCB8fCB0eXBlb2YgYWN0dWFsICE9ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgdmFyIGksIGtleTtcbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LlxuICBpZiAoYS5wcm90b3R5cGUgIT09IGIucHJvdG90eXBlKSByZXR1cm4gZmFsc2U7XG4gIC8vfn5+SSd2ZSBtYW5hZ2VkIHRvIGJyZWFrIE9iamVjdC5rZXlzIHRocm91Z2ggc2NyZXd5IGFyZ3VtZW50cyBwYXNzaW5nLlxuICAvLyAgIENvbnZlcnRpbmcgdG8gYXJyYXkgc29sdmVzIHRoZSBwcm9ibGVtLlxuICBpZiAoaXNBcmd1bWVudHMoYSkpIHtcbiAgICBpZiAoIWlzQXJndW1lbnRzKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCBvcHRzKTtcbiAgfVxuICBpZiAoaXNCdWZmZXIoYSkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpLFxuICAgICAgICBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsvL2hhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGEgPT09IHR5cGVvZiBiO1xufVxuIiwidmFyIHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPSAoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHMpXG59KSgpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID8gc3VwcG9ydGVkIDogdW5zdXBwb3J0ZWQ7XG5cbmV4cG9ydHMuc3VwcG9ydGVkID0gc3VwcG9ydGVkO1xuZnVuY3Rpb24gc3VwcG9ydGVkKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59O1xuXG5leHBvcnRzLnVuc3VwcG9ydGVkID0gdW5zdXBwb3J0ZWQ7XG5mdW5jdGlvbiB1bnN1cHBvcnRlZChvYmplY3Qpe1xuICByZXR1cm4gb2JqZWN0ICYmXG4gICAgdHlwZW9mIG9iamVjdCA9PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBvYmplY3QubGVuZ3RoID09ICdudW1iZXInICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsICdjYWxsZWUnKSB8fFxuICAgIGZhbHNlO1xufTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJ1xuICA/IE9iamVjdC5rZXlzIDogc2hpbTtcblxuZXhwb3J0cy5zaGltID0gc2hpbTtcbmZ1bmN0aW9uIHNoaW0gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgcmV0dXJuIGtleXM7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19
