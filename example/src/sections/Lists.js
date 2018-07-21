import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import {
  List,
  Card,
  ListGroupItemHeader,
  ListGroupItemText
} from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

import images from '../images';

class Lists extends React.Component {
  render() {
    return (
      <Section id="doc-lists">
        <h2>Lists</h2>
        <p className="lead">
          Bootcards Lists are used to navigate the entities in your app (e.g.
          Contacts, Files, Messages, etc).
        </p>
        <p>
          Lists are wrapped in the <code>.bootcards-list</code> class
        </p>
        <Example>
          <List>
            <Card>
              <ListGroup>
                <ListGroupItem href="#">
                  <img src={images.sofia} className="img-rounded pull-left" />
                  <ListGroupItemHeader>Acey, Sofia</ListGroupItemHeader>
                  <ListGroupItemText>Masung Corp.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <img src={images.joseph} className="img-rounded pull-left" />
                  <ListGroupItemHeader>Barish, Joseph</ListGroupItemHeader>
                  <ListGroupItemText>Masung Corp.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <img src={images.sarah} className="img-rounded pull-left" />
                  <ListGroupItemHeader>Benson, Sarah</ListGroupItemHeader>
                  <ListGroupItemText>ZetaComm</ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </List>
        </Example>
        <Highlight>
          {
            '<List>\n  <Card>\n    <ListGroup>\n      <ListGroupItem href="#">\n        <img src={images.sofia} className="img-rounded pull-left" />\n        <ListGroupItemHeader>Acey, Sofia</ListGroupItemHeader>\n        <ListGroupItemText>Masung Corp.</ListGroupItemText>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <img src={images.joseph} className="img-rounded pull-left" />\n        <ListGroupItemHeader>Barish, Joseph</ListGroupItemHeader>\n        <ListGroupItemText>Masung Corp.</ListGroupItemText>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <img src={images.sarah} className="img-rounded pull-left" />\n        <ListGroupItemHeader>Benson, Sarah</ListGroupItemHeader>\n        <ListGroupItemText>ZetaComm</ListGroupItemText>\n      </ListGroupItem>\n    </ListGroup>\n  </Card>\n</List>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default Lists;
