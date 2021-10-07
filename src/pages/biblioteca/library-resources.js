import React from "react";
import styled from "@emotion/styled";
import { Container, Section, Row, Col } from "../../components/layout/index";
import colors from "../../components/styles/colors";

const LibraryResources = () => {
  const title = "Recursos",
    copy =
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sem eleifend, dictumst mauris velit aptent montes rutrum ultrices penatibus proin, euismod class hac pellentesque dui semper posuere fames. Faucibus tempus ut imperdiet pulvinar iaculis sagittis hendrerit duis auctor, odio aliquet montes porttitor metus mattis sem quam ac, dapibus quisque aliquam id ridiculus mollis platea interdum. Proin cubilia sociosqu et senectus varius faucibus curae cursus tellus inceptos pellentesque accumsan convallis volutpat fermentum, augue suspendisse est ut leo netus iaculis velit dignissim dictum class suscipit vitae.",
    titlecontent = "Title Content",
    content = [
      {
        cloneContent:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit sem eleifend, dictumst mauris velit aptent montes rutrum ultrices penatibus proin, euismod class hac pellentesque dui semper posuere fames. Faucibus tempus ut imperdiet pulvinar iaculis sagittis hendrerit duis auctor, odio aliquet montes porttitor metus mattis sem quam ac, dapibus quisque aliquam id ridiculus mollis platea interdum. Proin cubilia sociosqu et senectus varius faucibus curae cursus tellus inceptos pellentesque accumsan convallis volutpat fermentum, augue suspendisse est ut leo netus iaculis velit dignissim dictum class suscipit vitae.",
      },
      {
        cloneContent:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit sem eleifend, dictumst mauris velit aptent montes rutrum ultrices penatibus proin, euismod class hac pellentesque dui semper posuere fames. Faucibus tempus ut imperdiet pulvinar iaculis sagittis hendrerit duis auctor, odio aliquet montes porttitor metus mattis sem quam ac, dapibus quisque aliquam id ridiculus mollis platea interdum. Proin cubilia sociosqu et senectus varius faucibus curae cursus tellus inceptos pellentesque accumsan convallis volutpat fermentum, augue suspendisse est ut leo netus iaculis velit dignissim dictum class suscipit vitae.",
      },
    ];

  return (
    <Section>
      <Container>
        <Row>
          <Col size={12} mlAuto>
            <Title>{title}</Title>
          </Col>

          <ColStyles size={12} color={colors.blue.base}>
            <Copy>{copy}</Copy>
          </ColStyles>

          <ColStyles size={12} color={colors.blue.dark}>
            <SectionTitle>{titlecontent}</SectionTitle>
            <Row>
              {content.map((item, index) => {
                const { cloneContent } = item;
                return (
                  <Col size={12} sizeMD={6} key={index}>
                    <div dangerouslySetInnerHTML={{ __html: cloneContent }} />
                  </Col>
                );
              })}
            </Row>
          </ColStyles>
        </Row>
      </Container>
    </Section>
  );
};

export default LibraryResources;

const ColStyles = styled(Col)`
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 4rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background-color: ${(props) => props.color};
    z-index: -1;
  }
`;

const Title = styled.h2``;

const SectionTitle = styled.h3`
    color: white;
    margin-top: 0;
`;

const Copy = styled.div``;
