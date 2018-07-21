import React from 'react';

import Section from './Section';

class Grid extends React.Component {
  render() {
    return (
      <Section id="doc-grid">
        <h2>Grid System</h2>
        <p className="lead">
          Bootcards builds on Twitter Bootstrap's grid system to allow separate
          column scrolling in touchscreen devices.
        </p>
        <p>
          The 2 main top-level columns are <code>.bootcards-list</code> (which
          is used to navigate your app) and <code>.bootcards-cards</code> (which
          contains your app's content). In desktop browsers, these will behave
          like regular bootstrap columns, but on touchscreen devices the user
          will be able to scroll them separately.
        </p>
      </Section>
    );
  }
}

export default Grid;
