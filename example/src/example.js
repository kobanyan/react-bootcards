import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Router, Route, IndexRoute} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Container} from 'react-bootcards';

import Home from './Home';
import Documentation from './Documentation';
import About from './About';

const App = React.createClass({
  render () {
    return (
      <div>
        <Navbar inverse fixedTop
          brand={<a title="Bootcards" href="/">Bootcards</a>}
          toggleNavKey={0}
        >
          <Nav eventKey={0}>
            <NavItem eventKey={1}>
              <LinkContainer to="/">
                <span><i className="fa fa-home" /> Home</span>
              </LinkContainer>
            </NavItem>
            <NavItem eventKey={2}>
              <LinkContainer to="/documentation">
                <span><i className="fa fa-book" /> Documentation</span>
              </LinkContainer>
            </NavItem>
            <NavItem eventKey={3}>
              <LinkContainer to="/about">
                <span><i className="fa fa-info-circle" /> About</span>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
});

React.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="documentation" component={Documentation} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.body);
