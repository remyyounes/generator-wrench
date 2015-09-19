import React from 'react';
import {Col, Row } from 'react-bootstrap';
import <% componentName%> from 'components/<% componentName %>';

export default class Index extends React.Component {
  render(){
    return (
      <Row>
        <Col xs={12}>
          <h1>Live Version of <% componentName%></h1>
          <<% componentName%> editable={true} isEditing={true}/>
        </Col>
      </Row>
    )
  }
}
