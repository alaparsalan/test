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

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CreateFilms } from "redux/slice/film";
function CreateFilm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({});
  const submit = () => {
    if (state.photo) {
      
      const formData = new FormData()
      Object.keys(state).map(x=>{
        formData.append(x, state[x])

      })
      dispatch(CreateFilms(formData));
    }
    else{
      alert("photo is required")
    }
   
  };

  const handleState = (e) => {
    e.preventDefault();

      setState({
        ...state,
        [e.target.name]:e.target.name==="photo"? e.target.files[0]:e.target.value,
      });

  };
  return (
    <>
      <div className="content">
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
                      <label >name</label>
                      <Input
                        name="name"
                        type="text"
                        onChange={handleState}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label >country</label>
                      <Input
                       
                        name="country"
                        type="text"
                        onChange={handleState}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label >description</label>
                      <Input
                       
                        name="description"
                        type="text"
                        onChange={handleState}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label >genre</label>
                      <Input
                       
                        name="genre"
                        type="text"
                        onChange={handleState}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label >photo</label>
                      <Input
                       
                        name="photo"
                        type="file"
                        onChange={handleState}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label >rating</label>
                      <Input
                       
                        name="rating"
                        type="number"
                        onChange={handleState}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label >releaseDate</label>
                      <Input
                       
                        name="releaseDate"
                        type="date"
                        onChange={handleState}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label >ticketPrice</label>
                      <Input
                       
                        name="ticketPrice"
                        type="number"
                        onChange={handleState}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button className="btn-fill" color="primary" onClick={submit}>
                Create Film
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      </div>
    </>
  );
}

export default CreateFilm;
