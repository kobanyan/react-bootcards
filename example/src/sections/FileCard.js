import React from 'react';
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap';
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

class FileCard extends React.Component {
  render() {
    return (
      <Section id="doc-filecard">
        <h3>File Cards</h3>
        <p className="lead">
          File Cards are intended to show information and functions for
          non-media file formats (PDFs, Word documents, spreadsheets, etc).
        </p>
        <Example>
          <Card cardStyle="file">
            <CardHeader>
              <CardTitle>File Card Heading</CardTitle>
            </CardHeader>
            <ListGroup>
              <ListGroupItem>
                <a href="#">
                  <i className="icon-file-pdf" />
                </a>
                <ListGroupItemHeader>
                  <a href="#">File Name Goes Here</a>
                </ListGroupItemHeader>
                <ListGroupItemText>
                  <strong>PDF</strong>
                </ListGroupItemText>
                <ListGroupItemText>
                  <strong>3.2Mb</strong>
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemText>
                  <strong>Added by John Smith on 5 March 2014</strong>
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemText>
                  MediaFile card description lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vestibulum commodo, nulla ut
                  porta interdum, mi mi venenatis felis, vitae pellentesque ante
                  eros at enim.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
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
            '<Card cardStyle="file">\n  <CardHeader>\n    <CardTitle>File Card Heading</CardTitle>\n  </CardHeader>\n  <ListGroup>\n    <ListGroupItem>\n      <a href="#">\n        <i className="icon-file-pdf" />\n      </a>\n      <ListGroupItemHeader>\n        <a href="#">File Name Goes Here</a>\n      </ListGroupItemHeader>\n      <ListGroupItemText>\n        <strong>PDF</strong>\n      </ListGroupItemText>\n      <ListGroupItemText>\n        <strong>3.2Mb</strong>\n      </ListGroupItemText>\n    </ListGroupItem>\n    <ListGroupItem>\n      <ListGroupItemText>\n        <strong>Added by John Smith on 5 March 2014</strong>\n      </ListGroupItemText>\n    </ListGroupItem>\n    <ListGroupItem>\n      <ListGroupItemText>\n        MediaFile card description lorem ipsum dolor sit amet,\n        consectetur adipiscing elit. Vestibulum commodo, nulla ut\n        porta interdum, mi mi venenatis felis, vitae pellentesque ante\n        eros at enim.\n      </ListGroupItemText>\n    </ListGroupItem>\n  </ListGroup>\n  <CardFooter>\n    <ButtonGroup justified>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-arrow-down" />\n          Download\n        </Button>\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-star" />\n          Favorite\n        </Button>\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button>\n          <i className="fa fa-envelope" />\n          Email\n        </Button>\n      </ButtonGroup>\n    </ButtonGroup>\n  </CardFooter>\n</Card>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default FileCard;
