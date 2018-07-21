import React from 'react';
import { Nav, NavItem, Row, Col } from 'react-bootstrap';
import { Cards, Card, CardBody } from 'react-bootcards';

import Grid from './sections/Grid';
import Navigation from './sections/Navigation';
import SecNavbar from './sections/Navbar';
import DoubleNavbar from './sections/DoubleNavbar';
import FooterBar from './sections/FooterBar';
import SlidingSidebar from './sections/SlidingSidebar';
import Submenus from './sections/Submenus';
import Lists from './sections/Lists';
import ListDetail from './sections/ListDetail';
import ListSearch from './sections/ListSearch';
import SecCards from './sections/Cards';
import BaseCard from './sections/BaseCard';
import FormCard from './sections/FormCard';
import TableCard from './sections/TableCard';
import ChartCard from './sections/ChartCard';
import SummaryCard from './sections/SummaryCard';
import MediaCard from './sections/MediaCard';
import FileCard from './sections/FileCard';
import RichTextCard from './sections/RichTextCard';
import Modals from './sections/Modals';

class Documentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDocsMenu: 'doc-grid'
    };
  }

  handleDocsMenuSelect(eventKey) {
    this.setState({ selectedDocsMenu: eventKey });
    window.location.hash = eventKey;
  }

  render() {
    return (
      <Row>
        <Col sm={3} className="hidden-xs">
          <div className="docs-menu affix">
            <Nav
              bsStyle="pills"
              stacked
              onSelect={this.handleDocsMenuSelect.bind(this)}
              activeKey={this.state.selectedDocsMenu}
            >
              <NavItem className="" href="#doc-grid" eventKey="doc-grid">
                Grid System
              </NavItem>
              <NavItem
                className=""
                href="#doc-navigation"
                eventKey="doc-navigation"
              >
                Navigation
              </NavItem>
              <NavItem className="sub" href="#doc-navbar" eventKey="doc-navbar">
                Navbar
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-doublenavbar"
                eventKey="doc-doublenavbar"
              >
                Double Navbar
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-footerbar"
                eventKey="doc-footerbar"
              >
                Footer Bar
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-slidingsidebar"
                eventKey="doc-slidingsidebar"
              >
                Sliding Sidebar
              </NavItem>
              <NavItem className="" href="#doc-lists" eventKey="doc-lists">
                Lists
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-listdetail"
                eventKey="doc-listdetail"
              >
                Detailed Lists
              </NavItem>
              <NavItem
                className=""
                href="#doc-listsearch"
                eventKey="doc-listsearch"
              >
                List Search &amp; List Actions
              </NavItem>
              <NavItem className="" href="#doc-cards" eventKey="doc-cards">
                Cards
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-basecard"
                eventKey="doc-basecard"
              >
                Base Cards
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-formcard"
                eventKey="doc-formcard"
              >
                Form Cards
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-tablecard"
                eventKey="doc-tablecard"
              >
                Table Cards
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-chartcard"
                eventKey="doc-chartcard"
              >
                Chart Cards
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-summarycard"
                eventKey="doc-summarycard"
              >
                Summary Cards
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-mediacard"
                eventKey="doc-mediacard"
              >
                Media Cards
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-filecard"
                eventKey="doc-filecard"
              >
                File Cards
              </NavItem>
              <NavItem
                className="sub"
                href="#doc-richtextcard"
                eventKey="doc-richtextcard"
              >
                Rich Text Cards
              </NavItem>
              <NavItem className="" href="#doc-modals" eventKey="doc-modals">
                Modals
              </NavItem>
            </Nav>
          </div>
        </Col>
        <Cards sm={9} className="bootcards-documentasion-cards">
          <Card cardStyle="richtext">
            <CardBody>
              <Grid />
              <Navigation />
              <SecNavbar />
              <DoubleNavbar />
              <FooterBar />
              <SlidingSidebar />
              <Submenus />
              <Lists />
              <ListDetail />
              <ListSearch />
              <SecCards />
              <BaseCard />
              <FormCard />
              <TableCard />
              <ChartCard />
              <SummaryCard />
              <MediaCard />
              <FileCard />
              <RichTextCard />
              <Modals />
            </CardBody>
          </Card>
        </Cards>
      </Row>
    );
  }
}

export default Documentation;
