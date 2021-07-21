import React, {useState, useEffect} from "react";
import { connect, styled,css } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";
import Carousel from "react-slick";

const ServiceSport = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    const { meta_box } = page;
    const { 
         service_sport_title, 
         service_sport_copy,
         service_sport_sports = [],
         service_sport_sports_images = [],
    } = meta_box;

    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    let slider1 = [];
    let slider2 = [];

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])

    return data.isReady?(
        <Section spaceNone>
            <Container>
                <Row>
                    <Col 
                        size={12} 
                        sizeMD={7} 
                        zIndex={2} 
                        noGutters
                        orderMD={2}
                    >
                        <Carousel
                            asNavFor={nav2}
                            pauseOnHover
                            ref={slider => (slider1 = slider)}
                        >
                        {
                            service_sport_sports_images.map((item,index)=>{
                                return(
                                    <Logo
                                        key={index}
                                        media={item}
                                        size="56.25%"
                                        bgColor
                                    />
                                )
                            })
                        }
                        </Carousel>
                        <Carousel
                            autoplay
                            asNavFor={nav1}
                            ref={slider => (slider2 = slider)}
                            slidesToShow={3}
                            pauseOnHover
                            centerMode={true}
                        >
                        {
                            service_sport_sports_images.map((item,index)=>{
                                return(
                                    <Dot key={index} onClick={e => nav2.slickGoTo(index)} >
                                        <Logo
                                            media={item}
                                            size="56.25%"
                                            bgColor
                                        />
                                    </Dot>
                                )
                            })
                        }
                        </Carousel>
                    </Col>
                    <ContentCol 
                        bgColor={colors.primary.light}
                        orderMD={1}
                    >
                        <DivTitle color={colors.primary.dark}>
                            <SectionTitle>{service_sport_title}</SectionTitle>
                            <Html2React 
                                html={service_sport_copy}
                            />
                            <Container>
                                <Row>
                                {
                                    service_sport_sports.map((item, index)=>{
                                        return(
                                            <Col size={12} sizeSM={6} key={index}>
                                                <Sport>{item}</Sport>
                                            </Col>
                                        )
                                    })   
                                }
                                </Row>
                            </Container>
                        </DivTitle>
                    </ContentCol>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(ServiceSport);

const ContentCol = styled(Col)`
    ${({bgColor="lightblue"})=>css`
        z-index: 1;
        position: relative;
        padding-bottom: 4rem;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${bgColor};
            opacity: 0.3;
            z-index: -1;
            transform-origin: 50% 100%;
            ${mq.md}{
                transform: scale(1.2, 1.7);
            }
        }
    `}
`;

const Dot = styled.div`
    padding: .5rem;
`;

const Logo = styled(FeaturedMedia)``;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;
const DivTitle = styled.div``;

const CardMin = styled.div`
    margin-top: 4rem;
`;

const MinLogo = styled(FeaturedMedia)`
`;

const Sport = styled.p`
    font-weight: bold;
    margin-bottom: .2rem;
`;