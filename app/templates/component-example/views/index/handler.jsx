import React, { Component } from 'react';
import <%= componentName %> from 'components/<%= componentName %>';
import {Col, Row } from 'react-bootstrap';

export default class Index extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <h1>Static Version of Input</h1>
          <<%= componentName %> editible={true} isEditing={true}/>
        </Col>
      </Row>
    )
  }
}
