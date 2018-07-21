import React from 'react';
import {
  ButtonGroup,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Col
} from 'react-bootstrap';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter
} from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

class FormCard extends React.Component {
  render() {
    return (
      <Section id="doc-formcard">
        <h2>Form Cards</h2>
        <p className="lead">Form Cards are used for user input in your app.</p>
        <p>
          Replace the default <code>.panel-body</code> with a{' '}
          <code>&lt;form&gt;</code>.
        </p>
        <Example>
          <Card>
            <CardHeader className="clearfix">
              <CardTitle className="pull-left">Form Card Title</CardTitle>
              <ButtonGroup className="pull-right">
                <Button bsStyle="danger">
                  <i className="fa fa-times" />
                  Cancel
                </Button>
                <Button bsStyle="success">
                  <i className="fa fa-check" />
                  Save
                </Button>
              </ButtonGroup>
            </CardHeader>
            <CardBody>
              <form className="form-horizontal">
                <FormGroup controlId="name">
                  <Col componentClass={ControlLabel} xs={3}>
                    Name
                  </Col>
                  <Col xs={9}>
                    <FormControl
                      type="text"
                      className="col-xs-9"
                      defaultValue="John Smith"
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="select">
                  <Col componentClass={ControlLabel} xs={3}>
                    Occupation
                  </Col>
                  <Col xs={9}>
                    <FormControl
                      componentClass="select"
                      className="col-xs-9"
                      defaultValue="Developer"
                    >
                      <option>Designer</option>
                      <option>Developer</option>
                      <option>Salesman</option>
                    </FormControl>
                  </Col>
                </FormGroup>
                <FormGroup controlId="description">
                  <Col componentClass={ControlLabel} xs={3}>
                    Description
                  </Col>
                  <Col xs={9}>
                    <FormControl
                      componentClass="textarea"
                      className="col-xs-9"
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus tortor. Integer viverra turpis ac fringilla hendrerit. Sed faucibus posuere felis et pellentesque. Cras varius tortor vitae molestie tempor. Proin ut viverra elit, ac gravida tortor."
                      rows="6"
                    />
                  </Col>
                </FormGroup>
              </form>
            </CardBody>
            <CardFooter>
              <small>Built with Bootcards - Form Card</small>
            </CardFooter>
          </Card>
        </Example>
        <Highlight>
          {
            '<Card>\n  <CardHeader className="clearfix">\n    <CardTitle className="pull-left">Form Card Title</CardTitle>\n    <ButtonGroup className="pull-right">\n      <Button bsStyle="danger">\n        <i className="fa fa-times" />\n        Cancel\n      </Button>\n      <Button bsStyle="success">\n        <i className="fa fa-check" />\n        Save\n      </Button>\n    </ButtonGroup>\n  </CardHeader>\n  <CardBody>\n    <form className="form-horizontal">\n      <FormGroup controlId="name">\n        <Col componentClass={ControlLabel} xs={3}>\n          Name\n        </Col>\n        <Col xs={9}>\n          <FormControl\n            type="text"\n            className="col-xs-9"\n            defaultValue="John Smith"\n          />\n        </Col>\n      </FormGroup>\n      <FormGroup controlId="select">\n        <Col componentClass={ControlLabel} xs={3}>\n          Occupation\n        </Col>\n        <Col xs={9}>\n          <FormControl\n            componentClass="select"\n            className="col-xs-9"\n            defaultValue="Developer"\n          >\n            <option>Designer</option>\n            <option>Developer</option>\n            <option>Salesman</option>\n          </FormControl>\n        </Col>\n      </FormGroup>\n      <FormGroup controlId="description">\n        <Col componentClass={ControlLabel} xs={3}>\n          Description\n        </Col>\n        <Col xs={9}>\n          <FormControl\n            componentClass="textarea"\n            className="col-xs-9"\n            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus tortor. Integer viverra turpis ac fringilla hendrerit. Sed faucibus posuere felis et pellentesque. Cras varius tortor vitae molestie tempor. Proin ut viverra elit, ac gravida tortor."\n            rows="6"\n          />\n        </Col>\n      </FormGroup>\n    </form>\n  </CardBody>\n  <CardFooter>\n    <small>Built with Bootcards - Form Card</small>\n  </CardFooter>\n</Card>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default FormCard;
