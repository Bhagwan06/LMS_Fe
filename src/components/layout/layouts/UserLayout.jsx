import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { AuthRoute } from "../../auth/AuthRoute";

export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar */}
      <Header />

      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="bg-dark text-white">
            <div className="p-3">
              <div>Welcome back</div>
              <h4>Bhagwan</h4>
            </div>
            <hr />
            <Sidebar />
          </Col>
          <Col md={3} xl={2}>
            {/* main body */}
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footer />
    </AuthRoute>
  );
};
