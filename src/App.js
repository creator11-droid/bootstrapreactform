import './App.css';
import {Form,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <Form>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type ='email' placeholder='example@email.com'></Form.Control>
      </Form.Group>
           <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type ='password' placeholder='2344/#78.'></Form.Control>
        <Form.Text className='text-muted'> we will never share your password with anyone</Form.Text>
      </Form.Group>
      <Button variant='secondary' type='submit'>Log In</Button>
    </Form>
    </div>
  );
}

export default App;
