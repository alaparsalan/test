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
import React from "react";
import { Col, Row } from "reactstrap";
import Login from "../../views/Login";
import Signup from "../../views/Signup"
function Home(props) {
  return (
    <>
      {/* Nothing else is there so for now just calling Login component */}
      <div className="content"> 
        <Row>
          <Col lg="6">
      <Login/>
          </Col>
          
          <Col lg="6">

      <Signup />
          </Col>
          </Row>
          </div>
            
    </>
  );
}

export default Home;
