import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Row, Col, Container } from "./layout/index";
import FeaturedMedia from "./featured-media";
import Cta from "./cta";

const CardInfo = ({ item }) => {
        const {
            title,
            featuredImage,
            resource: {
                description,
                file: {
                    localFile: { publicURL },
                },
            },
        } = item;

            return (
                <Container>
                <Row>
                    <Col order={2} orderLG={1}>
                        <Title>{title}</Title>
                        <Copy>{description}</Copy>
                        <Cta to={publicURL} download>
                            Descargar
                        </Cta>
                    </Col>
                    {featuredImage ? (
                    <Col
                        size={12}
                        sizeLG={6}
                        order={1}
                        orderLG={2}
                        noGutters
                        css={stylesCol}
                    >
                        <FeaturedMedia 
                            media={featuredImage.node} size="56.26%"
                            bgColor />
                    </Col>
                    ) : null}
                </Row>
                </Container>
            );
            };

export default CardInfo;

const Title = styled.h2`
    margin-bottom: 3rem;
`;

const Copy = styled.p`
  margin: 0 auto;
  margin-bottom: 4rem;
`;

const stylesCol = css`
  min-width: 25rem;
  align-content: center;
  display: grid;
`;
