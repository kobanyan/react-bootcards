import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import { CardHeader, CardTitle, CardBody, CardFooter } from 'react-bootcards';

import Section from './Section';
import Example from './Example';

class Cards extends React.Component {
  render() {
    return (
      <Section id="doc-cards">
        <h2>Cards</h2>
        <p className="lead">
          Cards are the core of Bootcards, and contain your app's content.
          Different Cards are available for different types of content (text,
          tables, forms, charts, media, files, etc).
        </p>
        <p>
          Cards are based on the same markup as Bootstrap's <code>.panel</code>.
          Each card can have a <code>.panel-heading</code>,{' '}
          <code>.panel-body</code> and a <code>.panel-footer</code>. All of
          these are optional, so just use whichever parts your app needs. You
          can even use multiple headers or footers (e.g. if you needed separate
          footer areas separated by a divider).
        </p>
        <Example>
          <Panel>
            <CardHeader className="clearfix">
              <CardTitle className="pull-left">Card Title</CardTitle>
              <Button className="pull-right">
                <i className="fa fa-check" />
                Button
              </Button>
            </CardHeader>
            <CardBody>
              <p>Card content...</p>
            </CardBody>
            <CardFooter>
              <small>Card footer...</small>
            </CardFooter>
          </Panel>
        </Example>
      </Section>
    );
  }
}

export default Cards;
