import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import {
  List,
  Card,
  CardBody,
  ListGroupItemHeader,
  ListGroupItemText
} from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

import images from '../images';

class ListSearch extends React.Component {
  render() {
    return (
      <Section id="doc-listsearch">
        <h2>List Search & List Actions</h2>
        <p className="lead">
          A search form for when you want the user to be able to filter or
          search your list, and buttons for any other list functions you need.
        </p>
        <p>
          This goes at the top of your list, inside the <code>.modal-body</code>.
          You can add or remove functions by adding/removing columns in the
          containing <code>.row</code> and making sure the widths add up.
        </p>
        <Example>
          <List>
            <Card>
              <CardBody>
                <form>
                  <Row>
                    <Col xs={9}>
                      <FormGroup>
                        <FormControl
                          type="text"
                          placeholder="Search Contacts..."
                        />
                        <i className="fa fa-search" />
                      </FormGroup>
                    </Col>
                    <Col xs={3}>
                      <Button bsStyle="primary" block>
                        <i className="fa fa-plus" />
                        Add
                      </Button>
                    </Col>
                  </Row>
                </form>
              </CardBody>
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
            '<List>\n  <Card>\n    <CardBody>\n      <form>\n        <Row>\n          <Col xs={9}>\n            <FormGroup>\n              <FormControl\n                type="text"\n                placeholder="Search Contacts..."\n              />\n              <i className="fa fa-search" />\n            </FormGroup>\n          </Col>\n          <Col xs={3}>\n            <Button bsStyle="primary" block>\n              <i className="fa fa-plus" />\n              Add\n            </Button>\n          </Col>\n        </Row>\n      </form>\n    </CardBody>\n    <ListGroup>\n      <ListGroupItem href="#">\n        <img src={images.sofia} className="img-rounded pull-left" />\n        <ListGroupItemHeader>Acey, Sofia</ListGroupItemHeader>\n        <ListGroupItemText>Masung Corp.</ListGroupItemText>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <img src={images.joseph} className="img-rounded pull-left" />\n        <ListGroupItemHeader>Barish, Joseph</ListGroupItemHeader>\n        <ListGroupItemText>Masung Corp.</ListGroupItemText>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <img src={images.sarah} className="img-rounded pull-left" />\n        <ListGroupItemHeader>Benson, Sarah</ListGroupItemHeader>\n        <ListGroupItemText>ZetaComm</ListGroupItemText>\n      </ListGroupItem>\n    </ListGroup>\n  </Card>\n</List>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default ListSearch;
