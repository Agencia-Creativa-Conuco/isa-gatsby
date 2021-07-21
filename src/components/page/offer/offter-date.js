import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import Link from "../../link";


const OffterFacultiesDate = ({ state }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;

    const {
        meta_box,
        faculties
    } = page;

    const {
        offer_facultades_title
    } = meta_box;


    return data.isReady?(
            <Section>
                <Container>
                        <Row>
                            <Col>
                                <Title>{ offer_facultades_title }</Title>               
                            </Col>
                        </Row>
                        <Row>
                            <Col size="auto" mxAuto>
                                <EventList>
                                    <Row justifyContent="center">
                                    {
                                        faculties.filter((item)=>item.parent == 0)
                                        .map( (item, index) => {
                                            return (
                                                <Col size="auto" key={index} css={cardCol}>
                                                    <Card>
                                                        <CardLink  to={item.link} noDecoration>
                                                            <TitleCard color={colors.gray.base} >{  item.title.rendered } </TitleCard>
                                                        </CardLink>
                                                    </Card>
                                                </Col>
                                            ) 
                                        })
                                    } 
                                    </Row>
                                </EventList>
                            </Col>
                    </Row> 
                </Container>
        </Section>
    ) : null;
}


export default connect( OffterFacultiesDate );

const Title = styled.h2`
    text-align: center;
    margin-bottom: 5rem;
`;

const EventList = styled.div`
    ${mq.md}{
        border-radius: 10rem;
        padding: 1.5rem;
        overflow: hidden;
        box-shadow: 0 2rem 2rem  1rem rgba(0,0,0,0.2);
        background-color: white;
    }
`;

const cardCol = css`
    ${mq.md}{
        border-left: 0.2rem solid lightgray;      
    }
    &:first-of-type{
        border: initial;
    }
`;


const Card = styled.div`
    padding: .5rem 1.5rem;
    margin: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20rem;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.2);
    margin: 2rem;
    border-radius: 10rem;
    ${mq.md}{
        box-shadow: initial;
        margin: initial;
        border-radius: initial;
        max-width: 40rem;
        // padding: 2rem;
    }
    
`;

const TitleCard = styled.h2`
    text-align: center;
    color: ${props => props.color};
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
margin-top: 1.2rem;

    ${mq.md}{
        font-size: 11px;
    }
    ${mq.lg}{
        font-size: 2rem;
    }
`;

const CardLink = styled(Link)``;

