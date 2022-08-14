/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  CardFooter,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { CreateComment } from "redux/slice/comment";
import { FetchFilm } from "redux/slice/film";
import { FetchFilms } from "redux/slice/film";
import { FetchProfile } from "redux/slice/user";

function Film() {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const dispatch = useDispatch();
  const history = useHistory();
  const { films,filmComments } = useSelector((state) => state.film);
  const [state,setState] = useState({})
  const id = query.get("id")
  const film = films.find((x) => x.id === +query.get("id"));
  const { user, token } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(FetchProfile(token))
    dispatch(FetchFilm(id));
    dispatch(FetchFilms());

  }, [dispatch, token, id]);
if (!id || !film) {
  return null
}
const submit = ()=>{

  dispatch(CreateComment({state,token}))
}



const handleState = (e)=>{
  e.preventDefault();
  
  setState({
    ...state,
    filmId:query.get("id"),
    UserId:user.user.id,
    [e.target.name]:e.target.value
  })
}

  return (
    <>
      <div className="content">
        <Row>
          <Row>
            <Col md="12" className="align-center">
              <Card>
                <CardHeader>
                  <h5 className="title">{film.name}</h5>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="pl-md-1" md="4">
                      <strong><label> id </label></strong>
                      <p>{film.id} </p>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <label> name </label>
                      <p>{film.name} </p>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <label> description </label>
                      <p>{film.description} </p>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <label> genre </label>
                      <p>{film.genre} </p>
                    </Col>

                    <Col className="pl-md-1" md="4">
                      <label> rating </label>
                      <p>{film.rating} </p>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <label> country </label>
                      <p>{film.country} </p>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <label> releaseDate </label>
                      <p>{film.releaseDate} </p>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <label> ticketPrice </label>
                      <p>{film.ticketPrice} </p>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <label> photo </label>
                      <img src={film.photo} height={500} width={600} />
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <label> createdAt </label>
                      <p>{film.createdAt} </p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="align-center">
                  <Row>
               <Col md="12" className="align-center">
                <Card>
                  <CardHeader>
                    <h5 className="title"></h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <label>Comment</label>
                            <Input name="content" type="text" onChange={handleState} />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" onClick={submit}>
                      Comment
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>            
            </Col>
            <Col md="6" className="align-center">
              {filmComments.length? filmComments.map(x=>{
                return (<>
                <Row key={x.id}>
                        <Col md="4">
                          <FormGroup>
                            <label>Comment</label>
                            <p> {x.content} </p>
                          </FormGroup>
                        </Col>
                      </Row>
                </>)
              }):''}
            </Col>

          </Row>
        </Row>
      </div>
    </>
  );
}

export default Film;
