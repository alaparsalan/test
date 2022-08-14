import React, { useEffect, useState } from "react";
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
import { FetchLogin, FetchProfile,  } from "../redux/slice/user";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [state,setState] = useState({})
const { user, token } = useSelector((state) => state.user);
useEffect(() => {
  if (!user && token) dispatch(FetchProfile());
}, [dispatch,token, user]);

useEffect(() => {
  if (token){
    history.push("/")
  }
}, [token, user]);
const submit = ()=>{
  dispatch(FetchLogin(state));

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
              <h5 className="title"></h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Input placeholder="mike@email.com" name="username" type="email" onChange={handleState} />
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
                Login
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Login;
