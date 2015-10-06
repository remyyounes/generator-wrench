import React from 'react';
import { Row, Col, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

export default class Handler extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Nav bsStyle="tabs" activeKey={1}>
            <IndexLinkContainer to="/docs/<%= routeName %>">
              <NavItem eventKey={0} title="home">Index</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/docs/<%= routeName %>/live">
              <NavItem eventKey={1} title="home">Live</NavItem>
            </IndexLinkContainer>
          </Nav>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}
