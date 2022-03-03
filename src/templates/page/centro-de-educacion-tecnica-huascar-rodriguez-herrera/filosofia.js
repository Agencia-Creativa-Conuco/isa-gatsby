import React from 'react';
import {useState} from "react";
import styled from "@emotion/styled";
import colors from '../../../components/styles/colors';
import {Spring, animated} from "@react-spring/web";
import { container,mq } from '../../../components/layout/new';

const Filosofia = () =>{

    const tabs = [
        {
            title: "Misión",
            content: `
                <p>Formar técnicos con una visión amplia, siendo la integridad y el pensamiento crítico la base fundamental de su liderazgo laboral y comunitario. Formarlos para que sean emprendedores, laboralmente competitivos, éticos y capaces de desempeñarse eficazmente e impulsar el bienestar de su familia y el desarrollo del país.</p>
            `
        },
        {
            title: "Visión",
            content: `
                <p>Ser un centro de educación técnica reconocido por la excelencia técnica y humana de sus egresados. Sostener su excelencia con liderazgo académico y tecnológico, aporte a la eficiencia de los sectores productivos y desarrollo económico-social de los más necesitados y del país dominicano.</p>
            `
        },
    ];
// Index 0 by default
const [view, setView] = useState(0);

const handlerView = (value) => setView(value);

return (
  <StyledSection fluid  id="section_3">
    <Container>
      <DecoContainer />
      <ColumnOne>
        {tabs.map((item, i) => {
          const { title, content } = item;

          const isActive = view === i;

          return (
            <Spring
              key={i}
              reset={isActive}
              from={{ opacity: 0 }}
              to={[{ opacity: 1 }]}
            >
              {(styles) => (
                <animated.div style={styles}>
                  <CardInfo key={i}  active={isActive}>
                    <CardTitle>{title}</CardTitle>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </CardInfo>
                </animated.div>
              )}
            </Spring>
          );
        })}
      </ColumnOne>
      <ColumnTwo>
        <List>
          {tabs.map((item, i) => {
            const { title } = item;

            const isActive = view === i;

            return (
              <Item
                key={i}
                onClick={() => handlerView(i)}
                active={isActive}
              >
                {title}
              </Item>
            );
          })}
        </List>
      </ColumnTwo>
    </Container>
  </StyledSection>
);
};

export default Filosofia;

const StyledSection = styled.section`
${container}
margin-top: 9.5rem;
&:before {
  content: "";
  background-color: ${colors.blue.dark};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  ${mq.lg} {
    width: 50%;
  }
}
&:after {
  content: "";
  position: absolute;
  background: ${colors.blue.base};
  width: 15%;
  padding-bottom: 15%;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  transform: translate(50%, 50%);
  opacity: 0.8;
}
`;
const Container = styled.div`
${container}
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas:
  "col_2 col_2"
  "col_1 col_1";

${mq.lg} {
  grid-template-areas: "col_1 col_2";
}
`;
const DecoContainer = styled.div`
position: relative;
z-index: -1;
background: ${colors.gray.light};
width: 100%;
padding-bottom: 13%;
position: absolute;
top: 0;
left: 0;
margin-top: -5rem;
display: none;
${mq.lg} {
  display: block;
}
`;

const ColumnOne = styled.div`
background-color: ${colors.blue.dark};
grid-area: col_1;
z-index: 3;
padding: 0 1.5rem;
`;

const ColumnTwo = styled.div`
z-index: 2;
grid-area: col_2;
`;

const CardInfo = styled.div`
  display: none;
  margin-top: 4rem;

  color: white;
  padding-bottom: 4rem;

  ${mq.lg} {
    margin-top: 6rem;
  }
  ${(props) =>
    props.active
      ? `
      display: block;
  `
      : ""};
`;

const CardTitle = styled.h2`
color: white;
text-transform: uppercase;
margin-bottom: 5rem;
`;

const List = styled.ul`
  padding: 1rem 0;
  max-width: 75rem;
  margin: 0 auto;
  text-align: center;
  background-color: ${colors.gray.light};
  margin-top: -4rem;
  position: relative;
  ${mq.lg} {
    text-align: left;
    background-color: initial;
    margin-top: initial;
    padding: 0;
    padding-left: 3rem;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    padding-bottom: 3rem;
    background-color: ${colors.blue.dark};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    ${mq.lg} {
      width: 6rem;
      padding-bottom: 6rem;
      transform: translate(0%, -120%);
    }
  }
`;

const Item = styled.li`
display: inline-block;
list-style: none;
font-size: 2rem;
text-transform: uppercase;
cursor: pointer;
padding: 1rem;
margin: 0;
${mq.lg} {
  display: block;
  font-size: 3rem;
}

${(props) =>
  props.active
    ? `
      font-weight: 600;
      text-decoration: underline;
      text-decoration-color: ${colors.secondary.base};
      text-decoration-thickness: 0.3rem;
      transition: padding 900ms  ease-out;
  `
    : ""};
`;
