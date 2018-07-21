import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootcards';
import Home from './Home';
import Documentation from './Documentation';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/react-bootcards" title="Bootcards">
                Bootcards
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <LinkContainer to="/react-bootcards">
                <span>
                  <i className="fa fa-home" /> Home
                </span>
              </LinkContainer>
            </NavItem>
            <NavItem eventKey={2}>
              <LinkContainer to="/react-bootcards/documentation">
                <span>
                  <i className="fa fa-book" /> Documentation
                </span>
              </LinkContainer>
            </NavItem>
            <NavItem eventKey={3}>
              <LinkContainer to="/react-bootcards/about">
                <span>
                  <i className="fa fa-info-circle" /> About
                </span>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar>
        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/react-bootcards" component={Home} />
          <Route
            path="/react-bootcards/documentation"
            component={Documentation}
          />
          <Route path="/react-bootcards/about" component={About} />
        </Container>
      </div>
    );
  }
}

export default App;
