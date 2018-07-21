import React from 'react';

import Section from './Section';
import Highlight from './Highlight';

class SlidingSidebar extends React.Component {
  render() {
    return (
      <Section id="doc-slidingsidebar">
        <h3>Sliding Sidebar ('offcanvas')</h3>
        <p className="lead">
          The Sliding Sidebar offers complex apps more space navigation items.
        </p>
        <p>
          This is hidden by default, and accessed when required via a Menu
          button on the left-hand side of the Navbar.
        </p>
        <p>
          On desktop browsers, the Sliding Sidebar is inactive, as it's
          unnecessary.
        </p>
        <p>The Sliding Sidebar consists of two elements:</p>
        <li>A button to show/ hide the sidebar:</li>
        <p />
        <Highlight>
          {
            '<button type="button" class="btn btn-default btn-menu" data-toggle="offcanvas">\n  <i class="fa fa-lg fa-bars"></i>\n  <span>Menu</span>\n</button>'
          }
        </Highlight>
        <p>
          Bootcards tries to find the element that has{' '}
          <code>data-toggle="offcanvas"</code> and attaches a handler to show/
          hide the menu.
        </p>
        <li>The menu:</li>
        <p />
        <Highlight>
          {
            '<div class="navmenu offcanvas offcanvas-left">\n  <ul class="nav">\n    <li class="active">\n      <a href="#">\n        <i class="fa fa-lg fa-users"></i>\n        Contacts\n      </a>\n    </li>\n    <li>\n      <a href="#">\n        <i class="fa fa-lg fa-building-o"></i>\n        Companies\n      </a>\n    </li>\n    <li>\n      <a href="#">\n        <i class="fa fa-lg fa-gears"></i>\n        Settings\n      </a>\n    </li>\n  </ul>\n</div>'
          }
        </Highlight>
      </Section>
    );
  }
}

export default SlidingSidebar;
