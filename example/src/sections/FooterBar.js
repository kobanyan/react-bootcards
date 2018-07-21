import React from 'react';

import Section from './Section';
import Highlight from './Highlight';

class FooterBar extends React.Component {
  render() {
    return (
      <Section id="doc-footerbar">
        <h3>Footer Bar</h3>
        <p className="lead">
          The Footer Bar offers usable mobile navigation for simpler apps with a
          few important navigation items.
        </p>
        <p>
          This uses Bootstrap's <code>.navbar-fixed-footer</code> markup, with a{' '}
          <code>.btn-group</code> to contain the navigation elements. These are
          styled to look like native footer tabs on iOS and Android devices.
        </p>
        <p>
          On desktop, the footer reverts to a simple, website-style footer to
          hold items like copyright information, version numbers, etc. These are
          contained in <code>.bootcards-desktop-footer</code>, and hidden from
          mobile devices.
        </p>
        <Highlight>
          {
            '<div class="navbar navbar-default navbar-fixed-bottom">\n  <div class="container">\n    <div class="btn-group">\n      <a href="#" class="btn btn-default active">\n        <i class="fa fa-2x fa-users"></i>\n        Contacts\n      </a>\n      <a href="#" class="btn btn-default">\n        <i class="fa fa-2x fa-building-o"></i>\n        Companies\n      </a>\n      <a href="#" class="btn btn-default">\n        <i class="fa fa-2x fa-gears"></i>\n        Settings\n      </a>\n    </div>\n    <div class="bootcards-desktop-footer clearfix">\n      <p class="pull-left">Text for desktop footer goes here</p>\n      <p class="pull-left">More text for desktop footer goes here</p>\n   </div>\n  </div>\n</div>'
          }
        </Highlight>
        <p>
          Apply the <code>.bootcards-nofooter</code> to the{' '}
          <code>&lt;body&gt;</code> element for layouts without a footer: this
          will remove the standard bottom padding.
        </p>
      </Section>
    );
  }
}

export default FooterBar;
