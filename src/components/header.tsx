import { useState } from "react";
import { Nav, Navbar, Offcanvas, Container, Image, Col, Row } from "react-bootstrap";

import { FiMenu } from "react-icons/fi";
import {
  HeaderMain,
  HeaderWrapper,
  TitleLogo,
  TitleUnderLogo,
  MenuToggle,
  HeaderMobile,
  StyleOffcanvas,
  NavLinkStyled,
} from "./Styled";

const Logo = "/LogoUTC.jpg";

const data = [
  { label: 'Trang chủ', url: '/'},
  { label: 'Khảo sát', url: '/survey'},
  { label: 'Phản ánh', url: '/reflect'},
  { label: 'Giới thiệu', url: '/aboutUs'},
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  //
  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index: number) => {
    setActiveIndex(index); // Cập nhật trạng thái của mục được chọn khi click vào mục
  };

  return (
    <HeaderMain>
      <HeaderWrapper>
        <Navbar bg="transparent">
          <Container>
            <Navbar.Brand href="/">
              <Row>
                <Col><Image src={Logo} style={{height: 35}} roundedCircle /></Col>
                <Col className="ps-0">
                  <TitleLogo>TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</TitleLogo>
                  <TitleUnderLogo>Trung tâm tư vấn Phát triển GTVT</TitleUnderLogo>
                </Col>
              </Row>
            </Navbar.Brand>
            <Nav className="navStyle">
              { data.map((item, index) => (
                <NavLinkStyled
                  key={index}
                  href={item.url}
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => handleItemClick(index)}
                  passHref
                >
                  {item.label}
                </NavLinkStyled>
              ))}
            </Nav>
          </Container>
        </Navbar>
      </HeaderWrapper>

      <HeaderMobile>
        <Navbar.Brand href="/">
          <Row>
            <Col><Image src={Logo} style={{height: 35}} roundedCircle /></Col>
            <Col className="ps-0">
              <TitleLogo>TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</TitleLogo>
              <TitleUnderLogo>Trung tâm tư vấn Phát triển GTVT</TitleUnderLogo>
            </Col>
          </Row>
        </Navbar.Brand>
        <MenuToggle onClick={handleMobileMenuOpen}>
          <FiMenu size={24} />
        </MenuToggle>

        <StyleOffcanvas
          show={mobileMenuOpen}
          onHide={() => setMobileMenuOpen(false)}
          style={{
            width: "100%",
          }}
        >
          <Offcanvas.Header closeButton className="custom-close-button">
            <Navbar.Brand href="/">
              <Image src={Logo} style={{height: 35}} roundedCircle />
            </Navbar.Brand>
          </Offcanvas.Header>

          <Offcanvas.Body>
            { data.map((item, index) => (
              <NavLinkStyled
                key={index}
                href={item.url}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => handleItemClick(index)}
                passHref
              >
                {item.label}
              </NavLinkStyled>
            ))}
          </Offcanvas.Body>
        </StyleOffcanvas>
      </HeaderMobile>
    </HeaderMain>
  );
}

export default Header;
