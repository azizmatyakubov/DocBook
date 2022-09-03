import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";

const BlogsSection = () => {
  return (
    <div className="blog-section-wrapper">
      <div className="blog-section-title">Blog</div>
      <div className="blog-sections-cards-wrapper">
        <Container fluid>
          <Row>
            <Col xs="12" sm="6" md="4">
              <BlogCard
                cover={
                  "https://template.doccure.io/html/template/assets/img/blog/blog-01.jpg"
                }
                title={"Cystic Fibrosis Program Offers New Hope to Patients"}
              />
            </Col>
            <Col xs="12" sm="6" md="4">
              <BlogCard
                cover={
                  "https://template.doccure.io/html/template2/assets/img/blog/blog-02.jpg"
                }
                title={"A Little TLC Goes a Long Way to Help Older Patients"}
              />
            </Col>
            <Col xs="12" sm="6" md="4">
              <BlogCard
                cover={
                  "https://template.doccure.io/html/template/assets/img/blog/blog-03.jpg"
                }
                title={
                  "Feeding Your Baby When Milk Supply Is Limited and how to do it"
                }
              />
            </Col>
          </Row>
        </Container>
        <div className="blog-section-btn">See more</div>
      </div>
    </div>
  );
};

export default BlogsSection;
