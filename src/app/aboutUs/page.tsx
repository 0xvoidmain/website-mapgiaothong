'use client';

import { TitleTextMain, TitleUnderLogo } from "@/components/Styled";
import { Col, Container, Row } from "react-bootstrap";

const AboutUsPage = () => {
  return (
    <Container className="mt-5">
      <TitleTextMain>AboutUsPage</TitleTextMain>
      <TitleUnderLogo>Dữ liệu hiện đang được cập nhật!</TitleUnderLogo>
    </Container>
  );
}

export default AboutUsPage;
