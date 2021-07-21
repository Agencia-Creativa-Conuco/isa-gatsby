
import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import Link from "../../link";

const CareerForm = ({ state, facultyColor, career }) =>{
    
    const {
        meta_box,
    } = career;
    
    const { 
        career_form_show,
        career_form_title,
        career_form_image,
    } = meta_box;
    
    const {colors} = state.theme;

    return (
        <BGSection spaceNone bg={career_form_image?career_form_image.full_url:null}>
            <Container>
                <Row >
                    <Col size="auto" css={css`background-color: ${facultyColor};`}> 
                        <Form method="POST" action="/">
                            <SectionTitle color={colors.white}>{career_form_title}</SectionTitle>
                            <Input type="text" placeholder="Nombre"/>
                            <Input type="email" placeholder="Correo Electronico"/>
                            <Input type="tel" placeholder="Numero de telefono"/>
                            <Input type="text" placeholder="Cuidad de reciencia"/>
                            <Input type="textarea" placeholder="Programa de interes"/>
                            <StyledLink to="#" cta>ENVIAR</StyledLink>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </BGSection>
    );

}

export default connect(CareerForm);

const BGSection = styled(Section)`
    background: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

`;

const Form = styled.form`
    padding: 5rem;
    text-align: left;
`;


const SectionTitle = styled.h2`
    color: ${props => props.color};
    margin-bottom: 6rem;
    text-align: left;
    font-weight: 1000;
    ${mq.md}{
        max-width: 26rem;
    }
`;

const Input = styled.input`
    border-radius: 1.2rem;
    display: block;
    border: none;
    margin: 1.5rem auto;
    max-width: 100%;


    // ${mq.lg}{
        padding: 2rem 6rem;
    // }
`;


const StyledLink = styled(Link)`
    ${mq.md}{
        margin-top: 3rem;
    }
`;
