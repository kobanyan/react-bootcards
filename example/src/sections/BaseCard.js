import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  ListGroupItemHeader,
  ListGroupItemText
} from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

class BaseCard extends React.Component {
  render() {
    return (
      <Section id="doc-basecard">
        <h3>Base Cards</h3>
        <p className="lead">
          Base Cards display a list of information separated by dividers.
        </p>
        <p>
          Replace the default <code>.panel-body</code> with a{' '}
          <code>.list-group</code>.
        </p>
        <Example>
          <Card>
            <CardHeader className="clearfix">
              <CardTitle className="pull-left">Base Card Title</CardTitle>
              <Button bsStyle="primary" className="pull-right">
                <i className="fa fa-pencil" />
                Edit
              </Button>
            </CardHeader>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemText>Name</ListGroupItemText>
                <ListGroupItemHeader>John Smith</ListGroupItemHeader>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemText>Occupation</ListGroupItemText>
                <ListGroupItemHeader>Web Developer</ListGroupItemHeader>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus
                  tortor. Integer viverra turpis ac fringilla hendrerit. Sed
                  faucibus posuere felis et pellentesque. Cras varius tortor
                  vitae molestie tempor. Proin ut viverra elit, ac gravida
                  tortor.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
            <CardFooter>
              <small>Built with Bootcards - Base Card</small>
            </CardFooter>
          </Card>
        </Example>
        <Highlight>
          {
            '<Card>\n  <CardHeader className="clearfix">\n    <CardTitle className="pull-left">Base Card Title</CardTitle>\n    <Button bsStyle="primary" className="pull-right">\n      <i className="fa fa-pencil" />\n      Edit\n    </Button>\n  </CardHeader>\n  <ListGroup>\n    <ListGroupItem>\n      <ListGroupItemText>Name</ListGroupItemText>\n      <ListGroupItemHeader>John Smith</ListGroupItemHeader>\n    </ListGroupItem>\n    <ListGroupItem>\n      <ListGroupItemText>Occupation</ListGroupItemText>\n      <ListGroupItemHeader>Web Developer</ListGroupItemHeader>\n    </ListGroupItem>\n    <ListGroupItem>\n      <ListGroupItemText>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus\n        tortor. Integer viverra turpis ac fringilla hendrerit. Sed\n        faucibus posuere felis et pellentesque. Cras varius tortor\n        vitae molestie tempor. Proin ut viverra elit, ac gravida\n        tortor.\n      </ListGroupItemText>\n    </ListGroupItem>\n  </ListGroup>\n  <CardFooter>\n    <small>Built with Bootcards - Base Card</small>\n  </CardFooter>\n</Card>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default BaseCard;
