import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import {   ClockIcon  } from "../../icons";


const LibraryHorary = ({ state,libraries,icon }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    
    const { meta_box } = page;
    const {  
            library_horary_title,
            library_horary_group
    } = meta_box;

    return data.isReady?(
        <SectionStyles color={colors.blue.dark}>
            <Row>
                <Icon bgColor={colors.cta.base} >
                        <ClockIcon />
                </Icon>   
            </Row>
            <StylesContainer>         
                <Row >
                    <Col size={12}  noGutters>
                      <SectionTitle>{ library_horary_title }</SectionTitle>
                    </Col>
                </Row>
                    <Row>      
                        {library_horary_group.map((item, index)=>{
                            return(
                                <Col size={12} sizeMD={4} key={index} > 
                                    <Html2React 
                                            html= { item.group_copy }
                                        />
                                </Col>
                        )})
                        }
                        
                    </Row>
            </ StylesContainer>
        </SectionStyles>
    ):null;

}


export default connect(LibraryHorary);

const SectionStyles =styled(Section)`
&::before{
    content: '';
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
}
`;

const StylesContainer = styled(Container)`
    box-shadow: 0 .7rem  0.7rem  rgba(0,0,0,0.15);
    border-radius: 15px;
    padding-bottom: 4rem;
    position: relative;
    margin-bottom: 50px;
    background: white;
`;


const SectionTitle = styled.h2`
    margin-top: 7rem;
    margin-bottom: 2rem;
    text-align: center;
`;
const Icon = styled.div`
    ${({bgColor="#00A4E5"})=>css`
        position: relative;
        display: block;
        margin: 0 auto;
        bottom: -5rem;
        width: 100px;
        background-color: ${bgColor};
        padding-bottom: 100px;
        border-radius: 50%;
        z-index: 2;
        svg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.5);
            fill: white;
        }
    `}
`;