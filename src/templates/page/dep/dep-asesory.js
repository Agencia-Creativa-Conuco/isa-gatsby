import { connect, styled } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";


const DEPAsesory = ({ state }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;


    const { meta_box } = page;
    const { projects_asesory_group } = meta_box;

    return data.isReady?(
        <BGSection spaceNone bg={colors.blue.dark}  decoBg={colors.blue.base}>
            <Container>
                <Row alignCenter size={12}>
                { projects_asesory_group.map((item, index) =>{
                            
                            return(
                                    <Col size={12} sizeMD={6}  key={index} mxAuto>
                                    <DivTitle bg={colors.white}>
                                        <Deco decoBg={colors.blue.base}/>
                                        <Title color={colors.blue.dark}>{ item.group_title }</Title>
                                        <Copy> { item.group_copy} </Copy>
                                    </DivTitle > 
                                    </Col>                      
                                     )
                                })}           
                </Row>
            </Container>
        </BGSection>
    ):null;

}

export default connect(DEPAsesory);


const BGSection = styled(Section)`
    background: ${props => props.bg};
    &::before{
        content: "";
        position: absolute;
        width:95%;
        padding-bottom:8%;
        top:0;
        background: ${props => props.decoBg};
    }
    &::after{
        content: "";
        position: absolute;
        width:8%;
        padding-bottom:7%;
        bottom:0;
        right:0;
        background: ${props => props.decoBg};

    }
`;

const DivTitle = styled.div`
    background: ${props => props.bg};
    margin:  -7rem auto 7em auto;
    padding: 4% 10%;
    border-radius: 10px;
`;

const Title = styled.h6`
    font-weight: bold;
    display: inline-block;
    padding-left: 16%;

`;
const Deco = styled.p`
position: relative;
&::before{
    content: "";
    position: absolute;
    padding:6.2%;
    left:-5%;
    top:2.5rem;
    background: ${props => props.decoBg};
    opacity: 0.5;
    clip-path: circle(50% at 50% 50%);
    ${mq.lg}{
        left:-5%; 
        top:1rem;
    }
} 

`;
 
const Copy = styled.p`
margin-top:2rem;
`

