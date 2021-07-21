import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";
import {h2} from "../../styles/tipography";

const DIPProcess = ({ state }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;

    const { 
        meta_box,
        projects = []
    } = page;

    const { 
        research_process_title = "Investigaciónes en curso"
    } = meta_box;

    const projectList = projects.filter((item)=>{

        const {
            parent,
            meta_box,
        } = item;

        const {
            project_type
        } = meta_box;

        return parent > 0 && project_type === "project";
    })
    .filter((item, index)=> index <= 3 );

    return data.isReady && projectList.length?(
        <Section>
            <Container>
                <Row>
                    <Col>
                        <SectionTitle> { research_process_title } </SectionTitle>
                    </Col>
                </Row>
               <Row>
                {
                    projectList.map((item,index) =>{

                        const {
                            title,
                            featured_media,
                            meta_box,
                            link
                        } = item;

                        const {
                            project_cover_copy
                        } = meta_box;

                        const isPrincipal = index > 0? false: true;
                        
                        return (
                            <Col 
                                key={index}
                                size={12}
                                sizeMD={isPrincipal?12:4}
                            >
                                <Link to={link} noDecoration>
                                    <Project>
                                        <Row>
                                            <Col size={12} sizeMD={isPrincipal? 6: 12} >
                                                <Media  
                                                    isPrincipal = {isPrincipal}
                                                    decoBg={colors.blue.dark}   
                                                    decoBgA={colors.cta.base}
                                                >
                                                    <FeaturedMedia  
                                                        media={featured_media}
                                                        size={isPrincipal?"70%":"56.25%"}
                                                        bgColor
                                                        zIndex={2}    
                                                    />
                                                    {
                                                        isPrincipal?(
                                                            <Deco
                                                                decoBg={colors.blue.dark}    
                                                                decoBgA={colors.cta.base}
                                                            />
                                                        ):null
                                                    }
                                                </Media>
                                            </Col>
                                            <Col size={12} sizeMD={isPrincipal?6: 12}>
                                                <DivTitle>
                                                    <Title 
                                                        css={css`${isPrincipal? h2:css``}`}
                                                        color={colors.blue.dark} 
                                                        size="2.5rem"
                                                    >
                                                            { title.rendered }
                                                    </Title>
                                                    <Copy {...{isPrincipal}}>{ project_cover_copy }</Copy>
                                                </DivTitle>
                                            </Col>
                                        </Row>
                                    </Project>
                                </Link>
                            </Col>
                        )
                    })
                }
                </Row>
            </Container>
        </Section> 
    ):null;

}

export default connect(DIPProcess);


const DivTitle = styled.div`
    margin-top: 2rem;
`;

const Project = styled.article`
    margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 5rem;
    text-align: center;
`;

const Title = styled.h3`
    font-weight: 900;
    text-transform: uppercase;
    margin-top: 0;
`;

const Copy = styled.p`
    ${({isPrincipal})=>css`
        ${isPrincipal?css`
            word-break: break-word;
            white-space: break-spaces;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 16px; /* fallback */
            max-height: 160px; /* fallback */
            -webkit-line-clamp: 10; /* number of lines to show */
            -webkit-box-orient: vertical;
        `:css`
            display: none;
        `}
    `}
`;
const Media = styled.div`
    ${({
        isPrincipal,
        decoBg="blue",
        decoBgA="green"
    })=>css`
        position: relative;
        ${isPrincipal?css`
            &:before{
                content: "";
                position: absolute;
                left:-3%;
                bottom:0;
                background: ${decoBgA};
                width: 10%;
                height: 65%;
                z-index: 0;
            }
            &:after{
                content: "";
                position: absolute;
                left:-3%;
                bottom:-4%;
                background: ${decoBg};
                width: 10%;
                height: 25%;
                z-index: 0;
            }
        `:css``}
    `}
`

const Deco = styled.div`
    ${({decoBg="blue", decoBgA="green"})=>css`
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        height: 3rem;
        background-color: ${decoBgA};
        transform: translate(0,-50%);
        z-index: 0;
        &::before{
            content: "";
            position: absolute;
            right:0;
            top:0;
            background: ${decoBg};
            width: 50%;
            height: 100%;
            z-index: 0;
        }
    `}
`