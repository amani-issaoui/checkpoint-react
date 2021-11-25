
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Navbar,Nav,Container} from "react-bootstrap";
import image from "./images/prog.jpg"

function App() {
  return (
    <div className="App">
      <div><Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Welcome to my Website</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar></div>
      <div className="contenu"> 
         <Container  className="form">
      <Form className="contain">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary btn-block" type="submit" className="bt" >
    Submit
  </Button>
</Form>
        </Container>
        <img src={image}/>
        </div>
     

    </div>
  );
}

export default App;
