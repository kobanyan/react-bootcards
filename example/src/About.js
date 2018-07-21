import React from 'react';
import { Row, Well } from 'react-bootstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Well className="col-md-6">
          <p>
            Bootcards is an open source project created by{' '}
            <a href="http://www.twitter.com/markleusink" target="_blank">
              @markleusink
            </a>,{' '}
            <a href="http://www.twitter.com/sives" target="_blank">
              @sives
            </a>{' '}
            and{' '}
            <a href="http://www.twitter.com/jackherbert" target="_blank">
              @jackherbert
            </a>{' '}
            and sponsored by{' '}
            <a href="http://www.teamstudio.com" target="_blank">
              Teamstudio
            </a>.
          </p>
          <p>
            It was originally released on Monday April 14th 2014. It was created
            to meet Teamstudio's need for a modular user interface framework
            that could be used to build enterprise mobile apps very quickly. By
            building on top of Bootstrap, Bootcards takes advantage of
            Bootstrap's great capabilities, whilst adding support for the{' '}
            <a
              href="http://insideintercom.io/why-cards-are-the-future-of-the-web/"
              target="_blank"
            >
              Cards design pattern
            </a>.
          </p>
        </Well>
      </Row>
    );
  }
}

export default About;
