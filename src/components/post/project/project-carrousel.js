import {connect, styled, css} from "frontity";
import { mq,Row, Col, Section,mqVal } from "../../layout/index";
import FeaturedMedia from "../../featured-media";
import { React } from 'react';
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

const ProjectsCarrousel  = ({ state }) =>{
    const {colors} = state.theme;

    const data = state.source.get(state.router.link);
    const projects = state.source[data.type][data.id];

    const {

        meta_box

    } = projects;

    const { 
      project_images_group
    } = meta_box;

    return data.isReady?(

        <Section zIndex='2'>
              <SliderWrapper color={colors.gray.light} color2={colors.white}>
                    <Carousel
                    infinite={true}
                    slidesToShow={3}
                    slidesToScroll={1} 
                    centerMode
                    prevArrow={<Arrows color={"white"} bgColor={colors.primary.base}><LeftArrowIcon/></Arrows>}
                    nextArrow={<Arrows color={"white"} bgColor={colors.primary.base}><RightArrowIcon/></Arrows>}
                    responsive={[
                        {
                            breakpoint:mqVal.sm,
                            settings:{
                                slidesToShow:1,
                                centerMode: true,
                                variableWidth: false
                            }
                            
                        },
                        {
                          breakpoint:mqVal.md,
                          settings:{
                              slidesToShow:2,
                              centerMode: false,
                              variableWidth: false
                          }

                        },
                        {
                          breakpoint:mqVal.lg,
                          settings:{
                              slidesToShow:3,
                              centerMode: false,
                              variableWidth: false
                          }

                        }
                    ]}
                    
                    >

                    { project_images_group.map((item, index)=>{
                              return(
                            <SlideStyle key={ index }>
                                        <Row>
                                            <Col size={10}   noGutters mxAuto>
                                                <FeaturedMedia
                                                    media={ item }
                                                    size="70%"
                                                    />    
                                            </Col>
                                        </Row>
                            </SlideStyle>
                              )
                      } )}

                    </Carousel>
                  </SliderWrapper>

            </Section>
    ):null;
}


export default connect( ProjectsCarrousel );


const SliderWrapper = styled.div``;


const SlideStyle = styled.div``;
