import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Media, Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright} from "@fortawesome/free-solid-svg-icons";
import MyPlaceHolderPicture from '../images/lynx.png';
var imgStyle = {
  maxWidth: "85px",
};
class HeaderApp extends Component {
  render() {
    //class="container-fluid"
      return (
        <Container>
          <Row>
            <Col>
              <Navbar color="dark" light  expand="md">
                <NavbarBrand><h4 className="text-warning">Mi Aplicación de Microblogging</h4></NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="http://jesusfontecha.name/mern" target="_blank">
                      <span className="text-white">Curso Desarrollo web full-stack con MERN <FontAwesomeIcon icon={faCopyright} /></span><Media style={imgStyle} object src={MyPlaceHolderPicture} alt="Generic placeholder image" /></NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
    );
  }
}
export default HeaderApp;
