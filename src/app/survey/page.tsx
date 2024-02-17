'use client';

import { TitleTextMain } from "@/components/Styled";
import { Tabs } from "@mantine/core";
import { Container } from "react-bootstrap";

const SurveyPage = () => {
  return (
    <Container className="mt-5">
      <Tabs defaultValue="content1" orientation="vertical">
        <Tabs.List>
          <TitleTextMain>- Các chỉ tiêu Mobility</TitleTextMain>
          <Tabs.Tab value="content1">+ Giao thông thông suốt</Tabs.Tab>
          <Tabs.Tab value="content2">+ An toàn</Tabs.Tab>
          <Tabs.Tab value="content3">+ Phát thải thấp</Tabs.Tab>
          <Tabs.Tab value="content4">+ Hiệu quả kinh tế</Tabs.Tab>

          <TitleTextMain>- Chính sách</TitleTextMain>
          <Tabs.Tab value="content5">+ Giao thông thông suốt</Tabs.Tab>
          <Tabs.Tab value="content6">+ An toàn</Tabs.Tab>

          <TitleTextMain>- Tổng hợp</TitleTextMain>
          <Tabs.Tab value="content7">+ Giao thông thông suốt</Tabs.Tab>
          <Tabs.Tab value="content8">+ An toàn</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className="ps-2 ps-md-5" value="content1">
          <TitleTextMain className="mb-3">Giao thông thông suốt</TitleTextMain>
          <p>Hà Nam có lợi thế nằm ở vị trí địa chiến lược là cửa ngõ của vùng Thủ đô Hà Nội; gần nguồn nhân lực chất lượng cao, các cảng hàng không và cảng biển trọng điểm của vùng Đồng bằng sông Hồng và cả nước. Điều kiện tự nhiên thuận lợi, vị trí đắc địa, cơ sở hạ tầng đầu tư đồng bộ, nguồn nhân lực đa dạng là các nhân tố thúc đẩy phát triển dịch vụ logistics tại Tỉnh Hà Nam.</p>
          <p>Giải pháp phát triển dịch vụ logistics tại Tỉnh Hà Nam là đề tài mang tính cấp thiết và có ý nghĩa vô cùng sâu sắc cho sự phát triển kinh tế - xã hội tại Tỉnh. Vươn mình ra biển lớn, khẳng định vị thế và hội nhập quốc tế, trong tương lai Hà Nam hướng tới trở thành thành phố trực thuộc Trung ương, phát triển bền vững.</p>
        </Tabs.Panel>
        <Tabs.Panel className="ps-2 ps-md-5" value="content2">Messages tab content</Tabs.Panel>
        <Tabs.Panel className="ps-2 ps-md-5" value="content3">Settings tab content</Tabs.Panel>
        <Tabs.Panel className="ps-2 ps-md-5" value="content4">Gallery tab content</Tabs.Panel>
        <Tabs.Panel className="ps-2 ps-md-5" value="content5">Messages tab content</Tabs.Panel>
        <Tabs.Panel className="ps-2 ps-md-5" value="content6">Settings tab content</Tabs.Panel>
        <Tabs.Panel className="ps-2 ps-md-5" value="content7">Gallery tab content</Tabs.Panel>
        <Tabs.Panel className="ps-2 ps-md-5" value="content8">Messages tab content</Tabs.Panel>
      </Tabs>
    </Container>
  );
}

export default SurveyPage;
