import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import Link from "../../link";


const FcaultyAreasAcademic = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const faculty = state.source[data.type][data.id];
    
    const { 
        meta_box,
        children,
    } = faculty;
    
    const {  
        faculty_areas_title,
        faculty_color
    } = meta_box;
    
    const {colors} = state.theme;

    return data.isReady && children.length?(
        <SectionStyles spaceTopNone >
            <Container> 
                <Row>
                    <Col>
                        <Card>
                            <Row>      
                                <Col size={12} noGutters>
                                    <SectionTitle color={ faculty_color  } > { faculty_areas_title } </SectionTitle>
                                </Col>
                                <Col size={10} sizeMD={7} mxAuto   > 
                                    <List>
                                    {
                                        children.map((item, index)=>{
                                            return(
                                                <Item key={index}>
                                                    <SLink 
                                                        to={item.link}
                                                        color={ faculty_color  } 
                                                        color2={colors.text.base}
                                                    >
                                                        {item.title.rendered}
                                                    </SLink>
                                                </Item>
                                            )
                                        })
                                    }
                                    </List>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>        
            </ Container>
        </SectionStyles>
    ):null;

}

export default connect( FcaultyAreasAcademic );

const SectionStyles =styled(Section)`
    margin-top: -10rem !important;
`;

const Card = styled.div`
    box-shadow: 0 0.7rem 2rem  rgba(0,0,0,0.15);
    border-radius: 15px;
    padding-bottom: 4rem;
    position: relative;
    margin-bottom: 50px;
    background: white;
`;

const SectionTitle = styled.h2`
    margin-top: 4rem;
    margin-bottom: 2rem;
    text-align: center;
    color: ${props => props.color};
`;


const SLink = styled( Link )`
    text-decoration: none;
    color: ${props => props.color2};
    position:relative;
    display: block;
    
    &:hover{
        cursor: pointer;
        color:${props => props.color} 
    }

    &:before {
        content: "•";
        transform-origin: 50% 50%;
        transform: scale(2);
        display: inline-block;
        margin-right: 1rem;
        margin-left: -1.5rem;
    }
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
`;

const Item = styled.li`
    list-style: none;
    line-height: 1;
`;
