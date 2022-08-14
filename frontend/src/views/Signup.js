import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import {  Signup } from "../redux/slice/user";
import { useSelector, useDispatch } from "react-redux";
function CreatAccount(props) {
  const dispatch = useDispatch();
const [state,setState] = useState({})
const submit = ()=>{
  dispatch(Signup(state));
}
const handleState = (e)=>{
  e.preventDefault();
  setState({
    ...state,
    [e.target.name]:e.target.value
  })
}
  return (
    <>
      <Row>
        <Col md="12" className="align-center">
          <Card>
            <CardHeader>
              <h5 className="title">Sign Up</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="px-md-1" md="4">
                    <FormGroup>
                      <label>Username</label>
                      <Input
                        placeholder="Username"
                        type="text"
                        name="name"
                        onChange={handleState}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Input placeholder="mike@email.com" name="email" type="email" onChange={handleState} />
                    </FormGroup>
                  </Col>
                 
                </Row>
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <label>password</label>
                      <Input name="password" type="password" onChange={handleState} />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button className="btn-fill" color="primary" onClick={submit}>
                Save
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CreatAccount;
