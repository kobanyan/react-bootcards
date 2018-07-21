import React from 'react';
import { Table } from 'react-bootstrap';
import { Card, CardHeader, CardTitle, CardFooter } from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

class TableCard extends React.Component {
  render() {
    return (
      <Section id="doc-tablecard">
        <h3>Table Cards</h3>
        <p className="lead">Table Cards display tabular data.</p>
        <p>
          You can use the same table classes as Bootstrap, e.g. the{' '}
          <code>.table-hover</code> and <code>.active</code> classes used in
          this example.
        </p>
        <p>
          Wrap wider tables in a{' '}
          <code>&lt;div class="table-responsive"&gt;</code> so they'll be able
          to scroll horizontally in narrower browsers such as mobiles, and not
          be cut off.
        </p>
        <Example>
          <Card>
            <CardHeader>
              <CardTitle>Table Card Title</CardTitle>
            </CardHeader>
            <Table responsive hover>
              <thead>
                <tr className="active">
                  <th>Name</th>
                  <th>Forecast</th>
                  <th>Quota</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Guy Bardsley</td>
                  <td>2750</td>
                  <td>4000</td>
                </tr>
                <tr>
                  <td>Adam Callahan</td>
                  <td>3300</td>
                  <td>4000</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>6050</strong>
                  </td>
                  <td>
                    <strong>8000</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
            <CardFooter>
              <small>Built with Bootcards - Table Card</small>
            </CardFooter>
          </Card>
        </Example>
        <Highlight>
          {
            '<Card>\n  <CardHeader>\n    <CardTitle>Table Card Title</CardTitle>\n  </CardHeader>\n  <Table responsive hover>\n    <thead>\n      <tr className="active">\n        <th>Name</th>\n        <th>Forecast</th>\n        <th>Quota</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Guy Bardsley</td>\n        <td>2750</td>\n        <td>4000</td>\n      </tr>\n      <tr>\n        <td>Adam Callahan</td>\n        <td>3300</td>\n        <td>4000</td>\n      </tr>\n      <tr>\n        <td>\n          <strong>Total</strong>\n        </td>\n        <td>\n          <strong>6050</strong>\n        </td>\n        <td>\n          <strong>8000</strong>\n        </td>\n      </tr>\n    </tbody>\n  </Table>\n  <CardFooter>\n    <small>Built with Bootcards - Table Card</small>\n  </CardFooter>\n</Card>\n'
          }
        </Highlight>
      </Section>
    );
  }
}

export default TableCard;
