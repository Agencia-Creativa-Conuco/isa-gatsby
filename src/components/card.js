import React from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react';
import { Row, Col, Container } from "./layout/index";
import FeaturedMedia from "./featured-media"
import Cta from "./cta"


const CardInfo =( {item} )=>{
    const{
        title,
        featuredImage,
        resource:{
            description,
         file:{
             localFile: {
                 publicURL
             }
         }
        }
    
    }= item;
    
    return (
            <Container >
                <Row>
                    <Col 
                    order={2}
                    orderLG={1}>
                        <h2>{title}</h2>
                        <Copy>{description}</Copy>     
                              <StyledCTA href={publicURL} download> 
                                 <Cta>Descargar</Cta> 
                               </StyledCTA>       
                    </Col>
                    {featuredImage?(
                    <Col 
                        size={12} 
                        sizeLG={6} 
                        order={1}
                        orderLG={2}
                        noGutters
                        css={stylesCol}
                        >
                        
                        <FeaturedMedia
                            media={ featuredImage.node }
                            size="56.26%"
                            bgColor
                        />
                    </Col>
                    ):null
                  }
                </Row>
             </Container>
    )

}

export default CardInfo;


const Copy = styled.p`
        margin:  0 auto;
`;

const StyledCTA = styled.a`
    margin-top: 2rem;
    padding: 15px;
    display: block;
    text-decoration: none;
`;


const stylesCol = css`
    /* display: flex; */
    align-content: center;
    display: grid;

`