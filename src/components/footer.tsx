import { Container } from "react-bootstrap";
import { TitleTextMin } from "./Styled";

const Footer = () => {
  return (
    <Container className="py-2 text-right">
      <TitleTextMin>© 1997-2024. Toàn bộ bản quyền thuộc Đại Học GTVT</TitleTextMin>
    </Container>
  );
}

export default Footer;
