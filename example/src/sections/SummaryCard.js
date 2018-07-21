import React from 'react';
import { Row, Col, Label } from 'react-bootstrap';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  SummaryItem
} from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

class SummaryCard extends React.Component {
  render() {
    return (
      <Section id="doc-summarycard">
        <h3>Summary Cards</h3>
        <p className="lead">
          Summary cards can be used on dashboards, etc to highlight important
          pieces of data in your app.
        </p>
        <Example>
          <Card cardStyle="summary">
            <CardHeader>
              <CardTitle>Summay Card Heading</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs={6} sm={4}>
                  <SummaryItem href="#">
                    <i className="fa fa-3x fa-users" />
                    <h4>
                      Contacts <Label bsStyle="info">432</Label>
                    </h4>
                  </SummaryItem>
                </Col>
                <Col xs={6} sm={4}>
                  <SummaryItem href="#">
                    <i className="fa fa-3x fa-building-o" />
                    <h4>
                      Companies <Label bsStyle="info">98</Label>
                    </h4>
                  </SummaryItem>
                </Col>
                <Col xs={6} sm={4}>
                  <SummaryItem href="#">
                    <i className="fa fa-3x fa-clipboard" />
                    <h4>
                      Notes <Label bsStyle="danger">54</Label>
                    </h4>
                  </SummaryItem>
                </Col>
                <Col xs={6} sm={4}>
                  <SummaryItem href="#">
                    <i className="fa fa-3x fa-files-o" />
                    <h4>
                      Files <Label bsStyle="info">65</Label>
                    </h4>
                  </SummaryItem>
                </Col>
                <Col xs={6} sm={4}>
                  <SummaryItem href="#">
                    <i className="fa fa-3x fa-check-square-o" />
                    <h4>
                      Tasks <Label bsStyle="warning">109</Label>
                    </h4>
                  </SummaryItem>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <small>Built with Bootcards - Summary Card</small>
            </CardFooter>
          </Card>
        </Example>
        <Highlight>
          {
            '<Card cardStyle="summary">\n  <CardHeader>\n    <CardTitle>Summay Card Heading</CardTitle>\n  </CardHeader>\n  <CardBody>\n    <Row>\n      <Col xs={6} sm={4}>\n        <SummaryItem href="#">\n          <i className="fa fa-3x fa-users" />\n          <h4>\n            Contacts <Label bsStyle="info">432</Label>\n          </h4>\n        </SummaryItem>\n      </Col>\n      <Col xs={6} sm={4}>\n        <SummaryItem href="#">\n          <i className="fa fa-3x fa-building-o" />\n          <h4>\n            Companies <Label bsStyle="info">98</Label>\n          </h4>\n        </SummaryItem>\n      </Col>\n      <Col xs={6} sm={4}>\n        <SummaryItem href="#">\n          <i className="fa fa-3x fa-clipboard" />\n          <h4>\n            Notes <Label bsStyle="danger">54</Label>\n          </h4>\n        </SummaryItem>\n      </Col>\n      <Col xs={6} sm={4}>\n        <SummaryItem href="#">\n          <i className="fa fa-3x fa-files-o" />\n          <h4>\n            Files <Label bsStyle="info">65</Label>\n          </h4>\n        </SummaryItem>\n      </Col>\n      <Col xs={6} sm={4}>\n        <SummaryItem href="#">\n          <i className="fa fa-3x fa-check-square-o" />\n          <h4>\n            Tasks <Label bsStyle="warning">109</Label>\n          </h4>\n        </SummaryItem>\n      </Col>\n    </Row>\n  </CardBody>\n  <CardFooter>\n    <small>Built with Bootcards - Summary Card</small>\n  </CardFooter>\n</Card>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default SummaryCard;
