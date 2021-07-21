import React, {useEffect} from "react";
import { connect, styled, css } from "frontity";
import { Container,Row, Col, Section, mq, mqVal} from "../../layout/index";
import Carousel from "react-slick";
import FeaturedMedia from "../../featured-media";
import {LeftArrowIcon, RightArrowIcon} from "../../icons";

const Arrows = (props => {
  
    const Arrow = styled.div`
      ${({bgColor="blue"})=>css`
        padding: 1rem;
        border-radius: 50%;
        background-color: ${bgColor};
        color: white;
        width: 5rem;
        height: 5rem;
        margin: 0 3rem;
        z-index: 2;
        position: absolute;
        top: 15rem;
        &:focus{
          background-color: ${bgColor};
          color: white;
        }
        &:hover{
          background-color: ${bgColor};
          color: white;
        }
        &:before{
          content: initial;
        }
      `}
    `;
  
    return(
      <Arrow {...props}/>
    )
  
})

const AboutHistory = ({ state, libraries, actions }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    const {
        meta_box
    } = page;

    const {
        about_history_title,
        about_history_items = [],
    } = meta_box;

    const mediaIds = about_history_items.map((item)=>{
        const {
            image
        } = item;

        return image;
    })

    const {colors} = state.theme;

    useEffect( async ()=>{
        const response = await libraries.source.api.get({
            endpoint: `media`,
            params: {
                _embed: true,
                include: mediaIds
            }
        });

        await libraries.source.populate({
            response,
            state
        });

    },[]);

    return data.isReady?(
        <BgSection spaceNone bg={colors.gray.light}>
            <Container fluid>
                <Row>
                    <Col>
                        <SectionTitle>{about_history_title}</SectionTitle>   
                    </Col>
                </Row>
                <Row>
                    <Col noGutters>
                        <Carousel
                            centerMode
                            infinite={false}
                            variableWidth
                            prevArrow={<Arrows bgColor={colors.primary.base}><LeftArrowIcon/></Arrows>}
                            nextArrow={<Arrows bgColor={colors.primary.base}><RightArrowIcon/></Arrows>}
                            responsive={[
                                {
                                    breakpoint:mqVal.sm,
                                    settings:{
                                        slidesToShow:1,
                                        centerMode: false,
                                        variableWidth: false
                                    }
                                }
                            ]}
                        >
                        {
                            about_history_items.map((item,index)=>{

                                const {
                                    title,
                                    year,
                                    image,
                                    description
                                } = item;

                                return(
                                    <Item key={index}>
                                        <CardYear 
                                            color={colors.blue.dark} 
                                            bg={colors.secondary.base}
                                            bgLine={colors.text_main}
                                        >
                                            {year}
                                        </CardYear>

                                        <Card bg={colors.white}>
                                            {
                                                state.source.attachment[image] && (
                                                    <CardMedia>
                                                        <FeaturedMedia
                                                            media={image}
                                                            size="100%"
                                                            bgColor={colors.gray.light}
                                                        />
                                                    </CardMedia> 
                                                )
                                            }
                                            <CardTitle color={colors.blue.dark}>{title}</CardTitle>
                                            <CardDescription>{description}</CardDescription>
                                        </Card>
                                    </Item>                        
                                )
                            })
                        }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </BgSection>
    ):null;

}

export default connect(AboutHistory);

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 4rem;
`;

const Item = styled.div`
    padding: 5rem 0;
    position: relative;
    ${mq.sm}{
        padding: 5rem;
    }

`;

const CardYear = styled.span`
    ${({color="darkblue", bgDecoRounded = "green", bgDecoLine = "gray"})=>css`
        display: block;
        text-align: center;
        margin-bottom: 10rem;
        font-size: 3rem;
        font-weight: 900;
        color: ${color};
        position: relative;
        &:before{
            content: '';
            width: 1rem;
            height: 1rem;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 1rem);
            background-color: ${bgDecoRounded};
            border-radius: 50%;
            z-index: 1;
        }
        &:after{
            content: '';
            width: 200%;
            height: .2rem;
            position: absolute;
            bottom: -1rem;
            left: 50%;
            transform: translate(-50%, -.5rem);
            background-color: ${bgDecoLine};
            border-radius: 50%;
            z-index: 0;
        }
    `}
`;

const Card = styled.div`
    background: ${props => props.bg};
    width: 100rem;
    max-width: 29rem;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: silver 0 10px 30px;
    margin: 0 auto;
`;


const CardTitle = styled.h3`
    text-align: center;
    font-size: 2rem;
    color: ${props => props.color};
    font-weight: bold;
`;

const CardDescription = styled.p`
    text-align: justify;
    display: none;
`;

const CardMedia = styled.div`
    border-radius: 50%;
    max-width: 22rem;
    margin: 0 auto;
    margin-top: -7.5rem;
    overflow: hidden;
`;

const BgSection = styled(Section)`
    background: ${props => props.bg};
    padding-top: 4em;
    padding-bottom: 4em;

    .slick-current{
        ${CardDescription}{
            display: block;
        }
    }
`;