import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";
import {useState} from "react";



const DEPServicesMenu = ({ state, libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;

    const { 
        meta_box,
        navigation = []
    } = page;

    const { 
        projects_services_professional_group
     } = meta_box;

    const Html2React = libraries.html2react.Component; 
    
    const [view, setView] = useState(0);

    const {
        stringify,
        parse
    } = libraries.source;

    return data.isReady?(
        <SSection spaceTopNone>
            <Container>
                <Row justifyContent="center">
                    <Col noGutters>
                        <Menu>
                            <Row justifyContent="center">
                            {
                                navigation.map((item, index)=>{
                                    
                                    const {
                                        title,
                                        icon
                                    } = item;
                                    
                                    return(
                                        <Col size={6} sizeMD='auto' key={index} > 
                                            <Link link={stringify({path:parse(state.router.link).path, hash:"#contenido"})} noDecoration>
                                                <Option 
                                                    decoBG={colors.blue.base}    
                                                    onClick={ (e) => setView( view == index ? view : index ) }
                                                    active={view === index} 
                                                    color={view === index ? colors.blue.base : colors.white}                                        
                                                >
                                                    <OptionIcon
                                                        bgColor={view === index ? colors.blue.base : colors.white}                                      
                                                    >
                                                        <FeaturedMedia media={icon} />
                                                    </OptionIcon>
                                                    <OptionName>{title}</OptionName>
                                                </Option> 
                                            </Link>
                                        </Col>
                                    )
                                })
                            }
                            </Row>
                        </Menu>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Content  bg={colors.gray.light} id="contenido">
                            { navigation.map((item,index)=>{

                                const {
                                    content
                                } = item;

                                return(
                                    <Copy  
                                        key={index} 
                                        noGutters
                                        active={view === index} 
                                        hidden={index!=view}>

                                        <Html2React html={ content } />

                                    </Copy>
                                )  
                                
                            })}
                        </Content>
                    </Col>
                </Row>
            </Container>
        </SSection>
    ):null;
}

export default connect(DEPServicesMenu);

const SSection = styled(Section)`
    margin-top: -2.5rem !important;
`;

const Menu = styled.ul`
    position:relative;
    top:0;   
    background: #0A214F;
    margin: 0;
    padding: 0 10%;
    padding-top: 4rem;
    padding-bottom: 6rem;
    border-radius: 0 0 5rem 5rem;
`;

const Option = styled.li`
    ${({ active, color="white"})=>css`
        margin: 0 auto;
        padding: 0;
        list-style: none;
        position:relative;
        /* font-size:1.4rem; */
        font-weight: 600;
        text-align:center;
        transition: all 0.45s ease-in-out;
        color: ${color};
        cursor: pointer;    
        max-width: 20rem;
        margin-bottom: 2rem;
    `}
`;

const OptionName = styled.p`
    color: inherit;
    margin: 0;
`;

const OptionIcon = styled.div`
    ${({bgColor="white"})=>css`
        width: 5rem;
        height: 5rem;
        padding: 1.2rem;
        border-radius: 50%;
        background-color: ${bgColor};
        margin: 0 auto;
        margin-bottom: 1rem;
    `}
`;

const Content = styled.div`
    position:relative;
    width: 80%;
    margin: 0 auto;
    margin-top: -4rem;
    z-index:1;
    padding: 4rem 0;
    &:before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 110%;
        height: 100%;
        background: ${props => props.bg};
        border-radius: 2rem;
        z-index: -1;
    }
`

const Copy = styled.div``

