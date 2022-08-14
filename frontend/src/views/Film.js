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
import React, { useEffect } from "react";
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
} from "reactstrap";
import { FetchFilms } from "redux/slice/film";

function Film() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { films } = useSelector((state) => state.film);
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const film = films.find((x) => x.id === +query.get("id"));
  console.log("ididid", film);
  useEffect(() => {
    dispatch(FetchFilms());
  }, []);
if (!query.get("id")) {
  return null
}

  return (
    <>
      <div className="content">
        <Row>
          <Row>
            <Col md="12" className="align-center">
              <Card>
                <CardHeader>
                  <h5 className="title"></h5>
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
          </Row>
        </Row>
      </div>
    </>
  );
}

export default Film;
