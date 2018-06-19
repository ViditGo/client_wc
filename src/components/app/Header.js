import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import NavBar from './NavBar';
const background_URL = "https://t4.ftcdn.net/jpg/01/17/66/83/240_F_117668344_WIEDi2M0rNrDJaLWKF1jCRKsgt9xyowL.jpg"

const Header = () => {
    return (
    <div style={{ backgroundImage : `url(${background_URL})`}}>
        <Grid>
  <Row>
    <Col xs={2} md={2}>
    <Image src="https://api.fifa.com/api/v1/picture/tournaments-sq-4/254645_w" alt="100x100" height="100" width="100" align="left" responsive />
    </Col>
    <Col xs={10} md={10}>
    <h1 style={{color: "white"}}>2018 FIFA World Cup Russia™</h1>
    </Col>
  </Row>
        </Grid>;
    <NavBar />
    </div>
    );
}

export default Header;