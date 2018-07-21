import React from 'react';
import { Alert } from 'react-bootstrap';

import Section from './Section';

class Modals extends React.Component {
  render() {
    return (
      <Section id="doc-modals">
        <h2>Modals</h2>
        <p className="lead">
          Sometimes, you'll want to put something like a form or an important
          message in a modal, obscuring the other content completely.
        </p>
        <p>
          The markup is quite similar to Cards, with a header, body, and footer.
        </p>
        <Alert bsStyle="warning">
          Remember to wrap buttons in the header of your modals in &lt;div
          className=&quot;btn-group&quot;&gt; or your buttons might not work.
        </Alert>
      </Section>
    );
  }
}

export default Modals;
