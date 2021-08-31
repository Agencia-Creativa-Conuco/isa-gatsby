import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {  Col } from "../layout/index";
import colors from "../styles/colors";
import useModal from "../hooks/useModal";
import CardInfo from "../card";
import { h4 } from "../styles/posts-tipography";
import Link from "../link";


const CardBody = ({
  title,
  uri,
  type,
  translateTypes,
  item,
 
}) => {
  const { openModal, ModalUI } = useModal();

  return (
    <>
      <Col size={12} sizeMD={6} sizeXL={6}>
        <Article>
          {type !== "WpResource" ? (
            <StyledLink to={uri}>
              <Card types={translateTypes} decoColor={colors.primary.base}>
                <Title color={colors.primary.base}> {title}</Title>
                <RouterCard colorRouter={colors.secondary.base}>
                  {uri}
                </RouterCard>
              </Card>
            </StyledLink>
          ) : (
            <>
              <OptionModal onClick={openModal}>
                <Card types={translateTypes} decoColor={colors.primary.base}>
                  <Title color={colors.primary.base}>
                    {title}
                  </Title>
                </Card>
              </OptionModal>
            </>
          )}
        </Article>
      </Col>
      <ModalUI>{
        item.map((item)=>{
            return(
              <CardInfo item = {item} /> 
            )
        })
        }
      </ModalUI>
    </>
  );
};

export default CardBody;

const Article = styled.article``;


const Card = styled.div`
${({ decoColor="#00A4E5", types="Types" })=>css`
  position: relative;
  background: white;
  box-shadow: 0rem 2.5rem 4rem rgb(0 0 0 / 6%);
  border-radius: 1rem;
  padding: 3rem 3rem;
  margin: 2rem;
    &::before{
      content:'${ types }';
      position: absolute;
      background-color: ${ decoColor };
      top:-1rem;
      left: 2rem;
      border-radius: 2rem;
      padding: 0px  1rem 2px;
      color: white;
    }
  `}
`;

const RouterCard = styled.div`

${({ colorRouter="#00A4E5" })=>css`
  font-size: 1.4rem;
  position: relative;
  padding: 6px 0;
  color: ${colorRouter};

  `}

  `;


const Title = styled.h2`
  color: ${ props => props.color };
  ${h4}
`;



const StyledLink = styled(Link)`
    text-decoration: none;
    position: relative;
    display: block;
    `;


const OptionModal = styled.div`
    &:hover{
      cursor: pointer;
    }
`;