import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import Link from "../../../components/link";
import colors from "../../../components/styles/colors";

import {h2} from "../../../components/styles/tipography";

const DIPProcess = ({ investigaciones = [] }) =>{

    const sectionTitle = "Investigaciónes en curso";

    const projectList = investigaciones.filter((item)=>{
        return true;
    })

    .filter((item, index)=> index <= 3 );



    return projectList.length?(
        <Section>
            <Container>
                <Row>
                    <Col>
                        <SectionTitle> { sectionTitle } </SectionTitle>
                    </Col>
                </Row>
               <Row>
                {
                    projectList.map((item,index) =>{

                        const {
                            nombre,
                            imagenPortada,
                            link,
                            descripcionCorta
                        } = item;

                        const isPrincipal = index > 0? false: true;
                        
                        return (
                            <Col 
                                key={index}
                                size={12}
                                sizeMD={isPrincipal?12:4}
                            >
                                <StyledLink to={link}>
                                    <Project>
                                        <Row>
                                            <Col size={12} sizeMD={isPrincipal? 6: 12} >
                                                <Media  
                                                    isPrincipal = {isPrincipal}
                                                    decoBg={colors.blue.dark}   
                                                    decoBgA={colors.cta.base}
                                                >
                                                    <FeaturedMedia  
                                                        media={imagenPortada}
                                                        size={isPrincipal?"70%":"56.25%"}
                                                        bgColor
                                                        zIndex={2}    
                                                    />
                                                    {
                                                        isPrincipal?(
                                                            <Deco
                                                                decoBg={colors.blue.dark}    
                                                                decoBgA={colors.cta.base}
                                                            />
                                                        ):null
                                                    }
                                                </Media>
                                            </Col>
                                            <Col size={12} sizeMD={isPrincipal?6: 12}>
                                                <DivTitle>
                                                    <Title 
                                                        css={css`${isPrincipal? h2:css``}`}
                                                        color={colors.blue.dark} 
                                                        size="2.5rem"
                                                    >
                                                            { nombre }
                                                    </Title>
                                                    <Copy  color={colors.gray.light} {...{isPrincipal}}>{descripcionCorta}</Copy>
                                                </DivTitle>
                                            </Col>
                                        </Row>
                                    </Project>
                                </StyledLink>
                            </Col>
                        )
                    })
                }
                </Row>
            </Container>
        </Section> 
    ):null;

}

export default DIPProcess;


const DivTitle = styled.div`
    margin-top: 2rem;
`;

const Project = styled.article`
    margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 5rem;
    text-align: center;
`;

const Title = styled.h3`
    font-weight: 900;
    text-transform: uppercase;
    margin-top: 0;
    text-decoration: none;
`;

const Copy = styled.p`
    ${({isPrincipal}, color="gray")=>css`
        ${isPrincipal?css`
            word-break: break-word;
            white-space: break-spaces;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 16px; /* fallback */
            max-height: 160px; /* fallback */
            -webkit-line-clamp: 10; /* number of lines to show */
            -webkit-box-orient: vertical;
            color: ${color};
        `:css`
            display: none;
        `}
    `}
`;
const Media = styled.div`
    ${({
        isPrincipal,
        decoBg="blue",
        decoBgA="green"
    })=>css`
        position: relative;
        ${isPrincipal?css`
            &:before{
                content: "";
                position: absolute;
                left:-3%;
                bottom:0;
                background: ${decoBgA};
                width: 10%;
                height: 65%;
                z-index: 0;
            }
            &:after{
                content: "";
                position: absolute;
                left:-3%;
                bottom:-4%;
                background: ${decoBg};
                width: 10%;
                height: 25%;
                z-index: 0;
            }
        `:css``}
    `}
`

const Deco = styled.div`
    ${({decoBg="blue", decoBgA="green"})=>css`
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        height: 3rem;
        background-color: ${decoBgA};
        transform: translate(0,-50%);
        z-index: 0;
        &::before{
            content: "";
            position: absolute;
            right:0;
            top:0;
            background: ${decoBg};
            width: 50%;
            height: 100%;
            z-index: 0;
        }
    `}
`;
const StyledLink = styled(Link)`
    text-decoration: none;
`;