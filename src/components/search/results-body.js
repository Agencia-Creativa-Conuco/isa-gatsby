import React  from "react";
import styled from "@emotion/styled";
import { Container, Section, Row, Col } from "../layout/index";
import colors from '../styles/colors';
import { css } from '@emotion/react';
import Link from "../link"
import { h4 } from "../styles/posts-tipography";

import ModalCard from "../modal";


const ResultsBody = ({props, resources}) =>{
  
  
  const {
    resultsSearch
  } = props

  const count =  resultsSearch?.length;

  return resultsSearch?.length ? (
    <Section>
            <Container>
              <Row>
                <Col size={12}  css={css`text-align:center;`}>
                <h1>Resultados</h1>
                </Col>
               <Col>
                 <h3>
                   Total: <span css={css`color:${colors.secondary.base};`} >{count} Resultados</span>
                 </h3>
               </Col> 
               </Row>
                <Row>
                    
                    {resultsSearch.map((item, index)=>{
                        const {
                            title,
                            type,
                            uri,
                            id
                        } = item

                        //Obtener los datos del  recurso
                        const resultsModal = resources.filter((item)=> item.id === id)
                      
                        return(
                            <Col
                            key={index}
                            size={12}
                            sizeMD={6}
                            sizeXL={6}
                            >
                              <Article>  
                                <Card types={type} decoColor={ colors.primary.base}> 
                                    {type !== "WpResource" ?(     
                                      <StyledLink  to={uri}> 
                                          <Title color={ colors.primary.base }> {title}</Title>
                                              <RouterCard colorRouter={colors.secondary.base}>
                                                {uri}
                                              </RouterCard>
                                          </StyledLink>
                                      ):(
                                        <>
                                        <Title color={ colors.primary.base } > {title}</Title>
                                        <ModalCard 
                                        props={resultsModal}/>
    
                                        </>
                                      )
                                    }            
                                    </Card>
                              </Article>
                            </Col>
                    )
                    })
                }
                </Row>
            </Container>
        </Section>
    ):(
      <>
        <H1> Sin Resultados :( </H1>                
        </>
        
    )

}

export default ResultsBody;


const H1 = styled.h1`
    margin: 5rem;
    text-align: center;
`;

const Article = styled.article``;


const Card = styled.div`
${({ decoColor="#00A4E5", types="Types" })=>css`
  position: relative;
  background: white;
  box-shadow: silver 0px 6px 10px;
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
    z-index: 1;

    `;