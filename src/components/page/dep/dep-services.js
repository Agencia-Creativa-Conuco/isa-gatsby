import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import link from "../../link";
import  DEPServicesMenu from "./dep-services-menu";

const DEPServices = ({ state, libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { 
        projects_services_professional_image,
        projects_services_professional_title,
        projects_services_professional_copy,
     } = meta_box;

     
    return data.isReady?(
        <BGSection spaceNone  img={ projects_services_professional_image.full_url  }  >
            <Container  >
                <Row>
                    <Col size={12} sizeMD={8} sizeLG={6} mlAuto>
                        <Content>
                                <Title>{  projects_services_professional_title } </Title>
                                <Copy>{ projects_services_professional_copy } </Copy> 
                         </Content>
                    </Col>
                </Row>
            </Container>
        </BGSection>
    ):null;

}

export default connect(DEPServices);



const BGSection = styled(Section)`
    background: url(${ props => props.img });
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    min-height: 45rem;
    padding-top: 5rem;
    padding-bottom: 10rem;
`;

const Content = styled.div`
    padding: 3rem 0;
    text-align: right;
    position: relative;
    
    *{
        color: white;
    }
`;

const Title = styled.h2`
        margin-bottom: 4rem;
`;

const Copy = styled.p`
        margin-bottom: 4rem;

`;


const ServiceLink = styled(link)`
        font-size: 2rem;
        text-decoration: none;
        color: ${props => props.color};   
        text-align: right;
`;




