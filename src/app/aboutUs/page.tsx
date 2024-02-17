'use client';

import { TitleText, TitleUnderLogo } from "@/components/Styled";
import { Col, Container, Row } from "react-bootstrap";

const AboutUsPage = () => {
  return (
    <Container className="mt-5">
      <TitleText>AboutUsPage</TitleText>
      <TitleUnderLogo>Dữ liệu hiện đang được cập nhật!</TitleUnderLogo>
    </Container>
  );
}

export default AboutUsPage;
