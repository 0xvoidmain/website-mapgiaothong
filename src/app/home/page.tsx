/* eslint-disable jsx-a11y/alt-text */
'use client';

import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Progress } from '@mantine/core';
import { TitleTextMain, TitleTextBig, TitleUnderLogo, TitleTextMedium, BoxRowBgColor } from "@/components/Styled";
import { Col, Container, Row, Image } from "react-bootstrap";

const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Container>
        <Row className="mt-5 align-items-center">
          <Col lg={3} className='mb-3 mb-md-0'>
            <TitleTextMain>TÊN DỰ ÁN</TitleTextMain>
            <TitleUnderLogo>Dữ liệu hiện đang được cập nhật!</TitleUnderLogo>
          </Col>
          <Col>
            <Carousel
              dragFree
              slideSize="25%"
              slideGap="md"
              height={200}
              getEmblaApi={setEmbla}
              initialSlide={5}
            >
              <Carousel.Slide className='mx-2'><Image src={'/images/1ava.jpg'} style={{height: 200}} /></Carousel.Slide>
              <Carousel.Slide className='mx-2'><Image src={'/images/2ava.jpg'} style={{height: 200}} /></Carousel.Slide>
              <Carousel.Slide className='mx-2'><Image src={'/images/3ava.jpg'} style={{height: 200}} /></Carousel.Slide>
              <Carousel.Slide className='mx-2'><Image src={'/images/4ava.jpg'} style={{height: 200}} /></Carousel.Slide>
              <Carousel.Slide className='mx-2'><Image src={'/images/5ava.jpg'} style={{height: 200}} /></Carousel.Slide>
              <Carousel.Slide className='mx-2'><Image src={'/images/6ava.jpg'} style={{height: 200}} /></Carousel.Slide>
              <Carousel.Slide className='mx-2'><Image src={'/images/2ava.jpg'} style={{height: 200}} /></Carousel.Slide>
              <Carousel.Slide className='mx-2'><Image src={'/images/3ava.jpg'} style={{height: 200}} /></Carousel.Slide>
              <Carousel.Slide className='mx-2'><Image src={'/images/4ava.jpg'} style={{height: 200}} /></Carousel.Slide>
              <Carousel.Slide className='mx-2'><Image src={'/images/5ava.jpg'} style={{height: 200}} /></Carousel.Slide>
            </Carousel>
            <Progress
              value={scrollProgress}
              maw={320}
              size="sm"
              mt="xl"
              mx="auto"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5 align-items-center flex-row-reverse">
          <Col lg={3} className="mb-3 mb-md-0 text-center">
            <TitleTextMain>TÌNH TRẠNG GIAO THÔNG</TitleTextMain>
            <TitleUnderLogo>Dữ liệu hiện đang được cập nhật!</TitleUnderLogo>
          </Col>
          <Col>
            <iframe src="https://www.google.com/maps/d/embed?mid=1j-8WUA4keQDaeJOuyD0zwJsRa3A&hl=en&ehbc=2E312F" width="100%" height="480"></iframe>
          </Col>
        </Row>
      </Container>
      <BoxRowBgColor className='py-4 mt-5'>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={2}>
              <TitleTextMedium>Lượt truy cập</TitleTextMedium>
              <TitleTextBig>1,995,364</TitleTextBig>
            </Col>
            <Col lg={2}>
              <TitleTextMedium>Lượt truy cập tháng</TitleTextMedium>
              <TitleTextBig className='blue'>14,110</TitleTextBig>
            </Col>
            <Col lg={2}>
              <TitleTextMedium>Online</TitleTextMedium>
              <TitleTextBig className='green'>432</TitleTextBig>
            </Col>
          </Row>
        </Container>
      </BoxRowBgColor>
    </>
  );
}

export default HomePage;
