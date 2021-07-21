import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mqVal, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";
import Carousel from "react-slick";
import {LeftArrowIcon, RightArrowIcon} from "../../icons";


const DIPTeam = ({ state }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    const {
        meta_box,
        persons = []
    } = page;

    const { 
        search_team_title = "Equipo de investigación"
    } = meta_box;

    const {colors} = state.theme;

    const Arrows = (props => {
  
        const Arrow = styled.div`
          ${({bgColor="blue"})=>css`
            padding: 1rem;
            border-radius: 50%;
            background-color: ${bgColor};
            color: white;
            width: 5rem;
            height: 5rem;
            margin: 2rem;
            z-index: 2;
            ${mq.md}{
              transform: translate(0, -100%);
            }
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

    return data.isReady && persons.length?(
        <BGSection spaceNone bg={ colors.gray.light } >
            <Container fluid notFluidLG>
                <Row>
                    <Col size={12}>
                        <SectionTitle> { search_team_title } </SectionTitle>
                    </Col>
                    <Col size={12}>
                        <Carousel
                            className= "center"
                            infinite
                            fade
                            rows={2}
                            slidesPerRow={4}
                            prevArrow={<Arrows bgColor={colors.primary.base}><LeftArrowIcon/></Arrows>}
                            nextArrow={<Arrows bgColor={colors.primary.base}><RightArrowIcon/></Arrows>}
                            responsive={[
                                {
                                    breakpoint:mqVal.lg,
                                    settings:{
                                        rows:2,
                                        slidesPerRow:3,
                                    }
                                },
                                {
                                    breakpoint:mqVal.md,
                                    settings:{
                                        rows:2,
                                        slidesPerRow:2,
                                    }
                                },
                                {
                                    breakpoint:mqVal.sm,
                                    settings:{
                                        rows:2,
                                        slidesPerRow:1,
                                    }
                                }
                            ]}
                        >
                            { 
                                persons.map((item, index) =>{
                                    const {
                                        title,
                                        featured_media,
                                        degree_title,
                                        job_title,
                                        link
                                    } = item;

                                    return(
                                        <Card key={index}>
                                            <Media>
                                                <FeaturedMedia 
                                                    media={featured_media}
                                                    size="100%"
                                                    bgColor={colors.gray.base}
                                                />
                                            </Media>
                                            <DivTitle>
                                                <Name>{degree_title + " "}{title.rendered}</Name>
                                                <JobTitle>{ job_title }</JobTitle>
                                            </DivTitle>
                                        </Card>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </BGSection>      
    ):null ;
}



export default connect(DIPTeam);


const BGSection = styled(Section)`
    background: ${props => props.bg};
    padding: 4rem 0;
`;

const Card = styled.article`
    margin-bottom: 4rem;
    vertical-align: top;
`;

const Media = styled.div`
    border-radius: 50%;
    overflow: hidden;
    max-width: 18rem;
    margin: 0 auto;
`;


const DivTitle = styled.div`
    text-align: center;
`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 4rem;
`;

const Name = styled.h3`
    font-weight: bold;
    margin-bottom: 0;
    font-size: 2rem;
`;

const JobTitle = styled.p`
    color: black;
`;