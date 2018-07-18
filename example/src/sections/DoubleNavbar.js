import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

import Section from './Section';
import Highlight from './Highlight';

class DoubleNavbar extends React.Component {
  render() {
    return (
      <Section id="doc-doublenavbar">
        <h3>Double Navbar</h3>
        <p className="lead">
          The Double Navbar is meant for desktop and allows you to have two rows
          of menu options.
        </p>
        <div>
          <Navbar fluid collapseOnSelect className="bootcards-navbar-double">
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Brand>
              <a title="Bootcards Starter" href="/">
                Bootcards Starter
              </a>
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="bootcards-nav-secondary" pullRight>
                <NavDropdown
                  eventKey={1}
                  id="doublenavbar-languages"
                  title={[
                    <i key="icon" className="fa fa-globe" />,
                    <span key="title"> Languages</span>
                  ]}
                >
                  <MenuItem eventKey={1.1}>Deutsch</MenuItem>
                  <MenuItem eventKey={1.2}>English</MenuItem>
                  <MenuItem eventKey={1.3}>Espanol</MenuItem>
                </NavDropdown>
                <NavItem eventKey={2} href="#">
                  <i className="fa fa-fw fa-lock" />
                  <span> Login</span>
                </NavItem>
              </Nav>
              <Nav className="bootcards-nav-primary" pullRight>
                <NavDropdown
                  eventKey={3}
                  id="doublenavbar-home"
                  title={[
                    <i key="icon" className="fa fa-fw fa-dashboard" />,
                    <span key="title"> Home</span>
                  ]}
                >
                  <MenuItem eventKey={3.1} href="#">
                    <i className="fa fa-fw fa-envelope-o" /> Action
                  </MenuItem>
                  <MenuItem eventKey={3.2} href="#">
                    <i className="fa fa-fw fa-film" /> Another action
                  </MenuItem>
                  <MenuItem eventKey={3.3} href="#">
                    <i className="fa fa-fw fa-file-o" /> Something else here
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4} href="#">
                    <i className="fa fa-fw fa-bar-chart-o" /> Separated link
                  </MenuItem>
                </NavDropdown>
                <NavItem eventKey={4} href="#">
                  <i className="fa fa-fw fa-briefcase" />
                  <span> Portfolio</span>
                </NavItem>
                <NavItem eventKey={5} href="#">
                  <i className="fa fa-fw fa-bullhorn" />
                  <span> Blog</span>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <p>
          Set <code>class="has-bootcards-navbar-double"</code> on the body
          element to deal with the increased height of the navbar.
        </p>
        <Highlight>
          {
            '<Navbar fluid collapseOnSelect className="bootcards-navbar-double">\n  <Navbar.Header>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Brand>\n    <a title="Bootcards Starter" href="/">\n      Bootcards Starter\n    </a>\n  </Navbar.Brand>\n  <Navbar.Collapse>\n    <Nav className="bootcards-nav-secondary" pullRight>\n      <NavDropdown\n        eventKey={1}\n        id="doublenavbar-languages"\n        title={[\n          <i key="icon" className="fa fa-globe" />,\n          <span key="title"> Languages</span>\n        ]}\n      >\n        <MenuItem eventKey={1.1}>Deutsch</MenuItem>\n        <MenuItem eventKey={1.2}>English</MenuItem>\n        <MenuItem eventKey={1.3}>Espanol</MenuItem>\n      </NavDropdown>\n      <NavItem eventKey={2} href="#">\n        <i className="fa fa-fw fa-lock" />\n        <span> Login</span>\n      </NavItem>\n    </Nav>\n    <Nav className="bootcards-nav-primary" pullRight>\n      <NavDropdown\n        eventKey={3}\n        id="doublenavbar-home"\n        title={[\n          <i key="icon" className="fa fa-fw fa-dashboard" />,\n          <span key="title"> Home</span>\n        ]}\n      >\n        <MenuItem eventKey={3.1} href="#">\n          <i className="fa fa-fw fa-envelope-o" /> Action\n        </MenuItem>\n        <MenuItem eventKey={3.2} href="#">\n          <i className="fa fa-fw fa-film" /> Another action\n        </MenuItem>\n        <MenuItem eventKey={3.3} href="#">\n          <i className="fa fa-fw fa-file-o" /> Something else here\n        </MenuItem>\n        <MenuItem divider />\n        <MenuItem eventKey={3.4} href="#">\n          <i className="fa fa-fw fa-bar-chart-o" /> Separated link\n        </MenuItem>\n      </NavDropdown>\n      <NavItem eventKey={4} href="#">\n        <i className="fa fa-fw fa-briefcase" />\n        <span> Portfolio</span>\n      </NavItem>\n      <NavItem eventKey={5} href="#">\n        <i className="fa fa-fw fa-bullhorn" />\n        <span> Blog</span>\n      </NavItem>\n    </Nav>\n  </Navbar.Collapse>\n</Navbar>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default DoubleNavbar;
