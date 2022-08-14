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
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import { FetchFilms } from "redux/slice/film";

function Films() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { films } = useSelector((state) => state.film);
  console.log("films",films);
  useEffect(() => {
    dispatch(FetchFilms());
  }, []);

const handlOnMovieClick = (id)=>{
  history.push(`/admin/film?id=${id}`)
}
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">List of Films</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>Description</th>
                      <th>Genre</th>
                      <th>Rating</th>
                      <th>Release date</th>
                      <th>Ticket price</th>
                      <th>Photo</th>
   
                    </tr>
                  </thead>
                  <tbody>
                    {films.map(x=>{return (
                    <tr key={x.id} onClick={()=>{handlOnMovieClick(x.id)}}>
                      <td>{x.name}</td>
                      <td>{x.country}</td>
                      <td>{x.description }</td>
                      <td>{x.genre }</td>
                      <td>{x.rating }</td>
                      <td>{x.releaseDate }</td>
                      <td>{x.ticketPrice }</td>
                      <td><img src={x.photo} height={50} width={50} alt="Image Poster"/></td>
                
                    </tr>)})}
                   
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
      
        </Row>
      </div>
    </>
  );
}

export default Films;
