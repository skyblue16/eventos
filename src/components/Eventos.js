import React, {Component} from 'react';
import {Divider, Thumbnail, Grid, Row, Col, Button} from 'react-bootstrap';

class Eventos extends Component {
    render(){
        return(
          
            <Grid className="grid">
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={process.env.PUBLIC_URL + '/images/user.png'} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={process.env.PUBLIC_URL + '/images/user.png'} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={process.env.PUBLIC_URL + '/images/user.png'} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>
        )
    }
}

export default Eventos;