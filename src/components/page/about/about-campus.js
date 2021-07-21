import { connect, css, styled } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";
import Carousel from "react-slick";
import {LeftArrowIcon, RightArrowIcon} from "../../icons";

const Arrows = (props => {
  
    const Arrow = styled.div`
      ${({bgColor="blue", color="white"})=>css`
        padding: 1rem;
        border-radius: 50%;
        background-color: ${bgColor};
        color: ${color};
        width: 5rem;
        height: 5rem;
        margin: 0 3rem;
        z-index: 2;
        position: absolute;
        top: 50%;
        display: none !important;
        ${mq.lg}{
            display: block !important;
        }
        &:focus{
          background-color: ${bgColor};
          color: ${color};
        }
        &:hover{
          background-color: ${bgColor};
          color: ${color};
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

const AboutCampus = ({ state }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    const {
        meta_box
    } = page;

    const {
        about_campus_title = "Nuestro Campus",
        about_campus_image
    } = meta_box;

    const {
        colors
    } = state.theme;
    
    return data.isReady && about_campus_image.length?(
        <Section spaceNone>
            <Container
                fluid 
                noGutters
            >
                <Row>
                    <Col 
                        sizeLG={6}
                        mlAuto
                    >
                        <SectionTitle>{ about_campus_title }</SectionTitle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel
                            prevArrow={<Arrows bgColor={"white"} color={colors.primary.dark}><LeftArrowIcon/></Arrows>}
                            nextArrow={<Arrows bgColor={"white"} color={colors.primary.dark}><RightArrowIcon/></Arrows>}
                        >
                        {
                            about_campus_image.map((item,index) => {
                                return (
                                    <FeaturedMedia 
                                        key={item.ID}
                                        media={item}
                                        size="56.25%"
                                        sizeXL="40%"
                                        bgColor={colors.gray.light}
                                    />
                                )
                        })}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(AboutCampus);

const colStyles = css`
    padding: 1.5rem;
    margin-top: -1.5rem;
`;

const SectionTitle = styled.h2`
    text-align: center;
    ${mq.lg}{
        margin-top: -5rem;
        margin-bottom: 0;
    }
`;