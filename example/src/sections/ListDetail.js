import React from 'react';
import { ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import {
  List,
  Card,
  ListGroupItemHeader,
  ListGroupItemText
} from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

class ListDetail extends React.Component {
  render() {
    return (
      <Section id="doc-listdetail">
        <h3>Detailed Lists</h3>
        <p className="lead">
          Detailed Lists can be used when you need to show more information for
          each entry.
        </p>
        <p>
          You can use Bootstrap <code>.col-*</code> <code>&lt;div&gt;</code>s
          within each <code>.list-group-item</code> to show more pieces of
          information in whatever format you like, and respond to different
          device widths.
        </p>
        <Example>
          <List>
            <Card>
              <ListGroup>
                <ListGroupItem href="#">
                  <Row>
                    <Col sm={6}>
                      <i className="fa fa-3x fa-building-o pull-left" />
                      <ListGroupItemHeader>Alparvis Ltd</ListGroupItemHeader>
                      <ListGroupItemText>London, UK</ListGroupItemText>
                    </Col>
                    <Col sm={6}>
                      <ListGroupItemText>Contractor</ListGroupItemText>
                      <ListGroupItemText>$12,000 Revenue YTD</ListGroupItemText>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <Row>
                    <Col sm={6}>
                      <i className="fa fa-3x fa-building-o pull-left" />
                      <ListGroupItemHeader>Camion Corp</ListGroupItemHeader>
                      <ListGroupItemText>Tokyo, Japan</ListGroupItemText>
                    </Col>
                    <Col sm={6}>
                      <ListGroupItemText>Customer</ListGroupItemText>
                      <ListGroupItemText>$75,000 Revenue YTD</ListGroupItemText>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <Row>
                    <Col sm={6}>
                      <i className="fa fa-3x fa-building-o pull-left" />
                      <ListGroupItemHeader>
                        Derenden Systems
                      </ListGroupItemHeader>
                      <ListGroupItemText>Albuquerque, USA</ListGroupItemText>
                    </Col>
                    <Col sm={6}>
                      <ListGroupItemText>Supplier</ListGroupItemText>
                      <ListGroupItemText>$1.3m Revenue YTD</ListGroupItemText>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </List>
        </Example>
        <Highlight>
          {
            '<List>\n  <Card>\n    <ListGroup>\n      <ListGroupItem href="#">\n        <Row>\n          <Col sm={6}>\n            <i className="fa fa-3x fa-building-o pull-left" />\n            <ListGroupItemHeader>Alparvis Ltd</ListGroupItemHeader>\n            <ListGroupItemText>London, UK</ListGroupItemText>\n          </Col>\n          <Col sm={6}>\n            <ListGroupItemText>Contractor</ListGroupItemText>\n            <ListGroupItemText>$12,000 Revenue YTD</ListGroupItemText>\n          </Col>\n        </Row>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <Row>\n          <Col sm={6}>\n            <i className="fa fa-3x fa-building-o pull-left" />\n            <ListGroupItemHeader>Camion Corp</ListGroupItemHeader>\n            <ListGroupItemText>Tokyo, Japan</ListGroupItemText>\n          </Col>\n          <Col sm={6}>\n            <ListGroupItemText>Customer</ListGroupItemText>\n            <ListGroupItemText>$75,000 Revenue YTD</ListGroupItemText>\n          </Col>\n        </Row>\n      </ListGroupItem>\n      <ListGroupItem href="#">\n        <Row>\n          <Col sm={6}>\n            <i className="fa fa-3x fa-building-o pull-left" />\n            <ListGroupItemHeader>\n              Derenden Systems\n            </ListGroupItemHeader>\n            <ListGroupItemText>Albuquerque, USA</ListGroupItemText>\n          </Col>\n          <Col sm={6}>\n            <ListGroupItemText>Supplier</ListGroupItemText>\n            <ListGroupItemText>$1.3m Revenue YTD</ListGroupItemText>\n          </Col>\n        </Row>\n      </ListGroupItem>\n    </ListGroup>\n  </Card>\n</List>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default ListDetail;
