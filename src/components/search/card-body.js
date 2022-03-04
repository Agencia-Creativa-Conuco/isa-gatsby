import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import colors from "../styles/colors";
import useModal from "../hooks/useModal";
import CardInfo from "../card";
import { h4 } from "../styles/posts-tipography";
import Link from "../link";

const CardBody = ({ title, uri, type, translateTypes, item }) => {
  const { openModal, ModalUI } = useModal();

  return (
    <>
      <Article>
        {type !== "WpRecurso" ? (
          <StyledLink to={uri}>
            <Card types={translateTypes}>
              <Title> {title}</Title>
              <RouterCard>{uri}</RouterCard>
            </Card>
          </StyledLink>
        ) : (
          <>
            <OptionModal onClick={openModal}>
              <Card types={translateTypes}>
                <Title>{title}</Title>
              </Card>
            </OptionModal>
          </>
        )}
      </Article>
      <ModalUI>
        <CardInfo item={item} />
      </ModalUI>
    </>
  );
};

export default CardBody;

const Article = styled.article`
  width: 100%;
  padding:0 1.5rem ;
`;

const Card = styled.div`
  ${({ types = "Types" }) => css`
    position: relative;
    background: white;
    box-shadow: 0rem 2.5rem 4rem rgb(0 0 0 / 6%);
    border-radius: 1rem;
    padding: 3rem 3rem;
    margin: 2rem;
    &::before {
      content: "${types}";
      position: absolute;
      background-color: ${colors.primary.base};
      top: -1rem;
      left: 2rem;
      border-radius: 2rem;
      padding: 0px 1rem 2px;
      color: white;
    }
  `}
`;

const RouterCard = styled.div`
  font-size: 1.4rem;
  position: relative;
  padding: 6px 0;
  color: ${colors.secondary.base};
`;

const Title = styled.h2`
  color: ${colors.primary.base};
  ${h4}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  display: block;
`;

const OptionModal = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
