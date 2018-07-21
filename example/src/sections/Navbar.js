import React from 'react';

import Section from './Section';
import Highlight from './Highlight';

class Navbar extends React.Component {
  render() {
    return (
      <Section id="doc-navbar">
        <h3>Navbar</h3>
        <p className="lead">
          The Bootcards Navbar is the main navigation system for desktop
          browsers.
        </p>
        <p>
          On desktop, it uses Bootstrap's default <code>.navbar-fixed-top</code>{' '}
          styles and shows all the top level navigation items.
        </p>
        <p>
          On mobile devices, there isn't enough space for these items, so the
          Bootstrap Navbar is replaced with a simpler, more native version with
          only a Title and limited space for other functions (e.g. a Back button
          or Menu button). These buttons are hidden from desktop browsers, which
          don't need them.
        </p>
        <p>
          <strong>
            In addition to the Navbar, you'll also need to implement one of the
            other navigation structures below (Footer Bar or Sliding Sidebar) to
            allow mobile users to navigate your app.
          </strong>
        </p>
        <Highlight>
          {
            '<div class="navbar navbar-default navbar-fixed-top" role="navigation">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n    </div>\n    <button type="button" class="btn btn-default btn-back navbar-left pull-left hidden " onclick="history.back()">\n      <i class="fa fa-lg fa-chevron-left"></i>\n      <span>Back</span>\n    </button>\n    <button type="button" class="btn btn-default btn-menu navbar-left pull-left offcanvas-toggle">\n      <i class="fa fa-lg fa-bars"></i>\n      <span>Menu</span>\n    </button>\n    <a class="navbar-brand" title="Customers v{{getAppVersion}}" href="/">Customers</a>\n    <div class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li class="active">\n          <a href="#">\n            <i class="fa fa-users"></i> \n            Contacts\n          </a>\n        </li>\n        <li>\n          <a href="#">\n            <i class="fa fa-building-o"></i> \n            Companies\n          </a>\n        </li>\n        <li>\n          <a href="#">\n            <i class="fa fa-gears"></i> \n            Settings\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>'
          }
        </Highlight>
      </Section>
    );
  }
}

export default Navbar;
