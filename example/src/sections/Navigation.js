import React from 'react';

import Section from './Section';

class Navigation extends React.Component {
  render() {
    return (
      <Section id="doc-navigation">
        <h2>Navigation</h2>
        <p className="lead">
          Bootcards offers 3 navigation methods: the Navbar, Footer Bar, or
          Sliding Sidebar.
        </p>
        <p>
          What you use will depend on the needs of your app, and the number of
          top-level navigation items. Apps with fewer items would suit using
          footer navigation on mobile, as they're always accessible, but footer
          navigation may be impractical for apps with many top level navigation
          items as it can only fit 4 on phones.
        </p>
      </Section>
    );
  }
}

export default Navigation;
