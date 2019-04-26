import React, { Component } from 'react';
import {Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Media, Navbar } from 'reactstrap';
import MyPlaceHolderPicture from '../images/lynx.png';
import HeaderDashboard from './HeaderDashboard';
import MyPostList from './posts/MyPostList';
import PostList from './posts/PostList';

var imgStyle = {
  maxWidth: "85px",

};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: (<PostList />)
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleOnShow = this.handleOnShow.bind(this);
  }

  handleLogout(){
    sessionStorage.clear();
    this.props.history.push("/");
  }

  handleOnShow(option){
    if (option === 1){
      this.setState({
        show: (<PostList />)
      });
    }else if (option === 2){
      this.setState({
        show: (<MyPostList />)
      });
    }else if (option === 3){
        //TODO Show UserEdit component!
        this.setState({
      show: (
        <Modal color="dark" isOpen="true">
            <Navbar color="dark">
          <ModalHeader color="dark">
            <span className="text-white">Propiedades del Usuario</span><Media style={imgStyle} object src={MyPlaceHolderPicture} alt="Generic placeholder image" />
            </ModalHeader>
            </Navbar>
            <Navbar color="warning">
          <ModalBody>
            <strong>Usuario:</strong> {sessionStorage.getItem('username')}<br />
            <strong>Rol:</strong> {sessionStorage.getItem('role')}<br />
            <strong>IdUsuario:</strong> {sessionStorage.getItem('iduser')}<br />
          </ModalBody>
          </Navbar>
          <Navbar color="white">
          <ModalFooter>
            <Button color="secondary" onClick={() => this.setState({ show: null })}>Aceptar</Button>
          </ModalFooter>
          </Navbar>
        </Modal>)
      });
    }
  }

  render() {
    if (sessionStorage.getItem("username") === null){
      this.props.history.push("/");
    }
    else{
      return (
        <Container>
          <Row>
            <Col><HeaderDashboard onLogout = {this.handleLogout} onShow= {this.handleOnShow} /></Col>
          </Row>
          <Row>
            <Col xs="12">
                {this.state.show}
              </Col>
          </Row>
        </Container>
      );
    }
  }
}
export default Home;
