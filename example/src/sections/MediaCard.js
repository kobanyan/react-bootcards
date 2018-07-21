import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
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

class MediaCard extends React.Component {
  render() {
    return (
      <Section id="doc-mediacard">
        <h3>Media Cards</h3>
        <p className="lead">Media Cards hold larger images or videos.</p>
        <Example>
          <Card cardStyle="media">
            <CardHeader>
              <CardTitle>Media Card Heading</CardTitle>
            </CardHeader>
            <CardBody>
              Media card description lorem ipsum dolor est compendium
            </CardBody>
            <img
              src="http://www.teamstudio.com/Portals/218295/images/istock_000001242290small.jpg"
              className="img-responsive"
            />
            <CardFooter>
              <ButtonGroup justified>
                <ButtonGroup>
                  <Button>
                    <i className="fa fa-arrow-down" />
                    Download
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button>
                    <i className="fa fa-star" />
                    Favorite
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button>
                    <i className="fa fa-envelope" />
                    Email
                  </Button>
                </ButtonGroup>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Example>
        <Highlight>
          {
            '<Card cardStyle="media">\n  <CardHeader>\n    <CardTitle>Media Card Heading</CardTitle>\n  </CardHeader>\n  <CardBody>\n    Media card description lorem ipsum dolor est compendium\n  </CardBody>\n  <img\n    src="http://www.teamstudio.com/Portals/218295/images/istock_000001242290small.jpg"\n    className="img-responsive"\n  />\n  <CardFooter>\n    <ButtonGroup justified>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-arrow-down" />\n          Download\n        </Button>\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-star" />\n          Favorite\n        </Button>\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-envelope" />\n          Email\n        </Button>\n      </ButtonGroup>\n    </ButtonGroup>\n  </CardFooter>\n</Card>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default MediaCard;
