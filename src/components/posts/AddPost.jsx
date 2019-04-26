import React, { Component } from 'react';
import { Card, CardTitle, Label, Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter, Navbar} from 'reactstrap';
import { postNewPost } from "../../utils/apicalls.jsx";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  handleTitleChange(e){
    this.setState({title:e.target.value})
  }

  handleDescriptionChange(e){
    this.setState({description:e.target.value})
  }

  addPost(e){
    e.preventDefault();
    const {
      title,
      description
    } = this.state;

  console.log("Los valores antes de crear el post son: iduser: " + sessionStorage.getItem('iduser')+", title: " + title+ ", description :" + description);
    //Save post in database with post api call
    postNewPost(sessionStorage.getItem('iduser'), title, description)
      .then((res) => this.checkPOSTNewPost(res));
  }

  //Check the response from the server
  checkPOSTNewPost(res) {
    if (res === "OK"){
      //TODO Show Modal when a new post is added
      console.log("La creación del post ha sido OK")
      this.setState({
        title: "",
        description: "",
    show: (
      <Modal color="dark">
          <Navbar color="dark">
        <ModalHeader color="dark">
          <span className="text-white">Propiedades del Usuario</span>
          </ModalHeader>
          </Navbar>
          <Navbar color="white">
        <ModalBody>
          <span className="text-green">El post se ha añadido correctamente</span>
        </ModalBody>
        </Navbar>
        <Navbar color="white">
        <ModalFooter>
          <Button color="secondary" onClick={() => this.setState({ show: null })}>Aceptar</Button>
        </ModalFooter>
        </Navbar>
      </Modal>)
    });
      this.props.updateMyPosts();
    }else{
      //TODO Show Modal when an error adding a new post occurs
    }
  }

  render() {
      return (
        <div>
          <Card body>
            <CardTitle tag="h5">Añadir un nuevo post</CardTitle>
            <Form>
              <FormGroup>
                <Label for="aTitulo">Titulo</Label>
                <Input type="text" name="title" value={this.state.title} id="aTitulo" placeholder="Introduce un título" onChange={this.handleTitleChange} required/>
              </FormGroup>
              <FormGroup>
                <Label for="aDescripcion">Descripción</Label>
                <Input style={{height: '200px'}} type="textarea" name="description" value={this.state.description} id="aDescripcion" placeholder="Introduce una descripción" onChange={this.handleDescriptionChange}/>
              </FormGroup>
              <Button onClick={this.addPost}>Añadir</Button>
            </Form>
          </Card>
        </div>
    );
  }
}
export default AddPost;
