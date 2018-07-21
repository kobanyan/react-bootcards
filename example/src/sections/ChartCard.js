import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  ChartCanvas,
  CardFooter
} from 'react-bootcards';

import Section from './Section';
import Example from './Example';

class ChartCard extends React.Component {
  componentDidMount() {
    Morris.Bar({
      element: 'barChart',
      data: [
        { person: 'Guy Bardsley', sales: 550 },
        { person: 'Adam Callahan', sales: 1500 },
        { person: 'Arlo Geist', sales: 3750 },
        { person: 'Sheila Hutchins', sales: 3500 }
      ],
      xkey: 'person',
      ykeys: ['sales'],
      labels: ['Sales'],
      hideHover: 'auto',
      resize: true
    });
  }

  render() {
    return (
      <Section id="doc-chartcard">
        <h3>Chart Cards</h3>
        <p className="lead">Chart cards contain charts powered by Morris.js.</p>
        <p>
          These can be used with Table cards in order to toggle between a chart
          view and the raw data.
        </p>
        <Example>
          <Card cardStyle="chart">
            <CardHeader>
              <CardTitle>Chart Card Heading</CardTitle>
            </CardHeader>
            <ChartCanvas id="barChart" />
            <CardFooter>
              <small>Built with Bootcards - Base Card</small>
            </CardFooter>
          </Card>
        </Example>
      </Section>
    );
  }
}

export default ChartCard;
