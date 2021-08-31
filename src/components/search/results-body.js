import React from "react";
import styled from "@emotion/styled";
import { Container, Section, Row, Col } from "../layout/index";
import colors from "../styles/colors";
import { css } from "@emotion/react";
import useFilter from "../hooks/useFilter";
import CardBody from "./card-body";


const ResultsBody = ({props, resources}) =>{

  const {
    resultsSearch
  } = props;

    const {
      SelectUI,
      selectedOption

    } = useFilter();

  const options = [

    { value: 'WpPage', label: 'Página' },
    { value: 'WpResource', label: 'Recurso' },
    { value: 'WpCareer', label: 'Carrera' },
    { value: 'WpPost', label: 'Publicación' },
    { value: 'WpFaculty', label: 'Facultad' },
    { value: 'WpProject', label: 'Investigación' },
    { value: 'WpProjectLine', label: 'Línea de investigación' },
    { value: 'WpGrade', label: 'Oferta académica' },
  ]


  // Filtrando valor del select 
  let hash = {};

  resultsSearch?.filter((current)=>  hash[current.type] = current.type);

  const optionsFilter = options.filter((item)=> hash[item.value] ? item:null);
  

  // Filtrando el Contenido a mostrar 
  const filtros =  resultsSearch?.filter((item)=> item.type.includes(selectedOption?.value));

  const results =  filtros?.length !== 0 ? filtros:resultsSearch;
    

  return resultsSearch?.length ? (
    <Section>
            <Container>
              <Row>
                <Col size={12}  css={css`text-align:center;`}>
                   <h1>Resultados</h1>
                </Col>
               <Col size={12}>
                 <h3>
                   Total: <span css={css`color:${colors.secondary.base};`} >{ results.length} Resultados</span>
                 </h3>
               </Col> 
               <Col size={12} sizeMD={5}>
                  <SelectUI options={optionsFilter} />
                </Col>
               </Row>
                <Row>           
                    { results?.map((item, index)=>{
                        const {
                            title,
                            type,
                            uri,
                            id
                        } = item

                        const objecTypes ={
                          WpPage: 'Página',
                          WpResource:'Recurso',
                          WpDepartament:'Departamento',
                          WpCareer:'Carrera',
                          WpPost:'Publicación',
                          WpFaculty:'Facultad',
                          WpProject:'Investigación',
                          WpProjectLine:'Línea de investigación',
                          WpGrade: 'Oferta académica'
                        }
                    
                        const translateTypes =  objecTypes[type] || title;

                        //Obtener los datos del  recurso
                        const resourceFilter = resources.filter((item)=> {
                                return item.uri === uri ? {item}:null
                             });

                        return(
                          <CardBody
                          key={index}
                          title={title}
                          type={type}
                          uri={uri}
                          id={id}
                          translateTypes={translateTypes}
                          item={resourceFilter} 
                          />                            
                    )
                    })
                  }
                </Row>
            </Container>
        </Section>
    ):(
        <> 
        <Title> Sin Resultados 😔 </Title>    
        </>
        
    )

}

export default ResultsBody;


const Title = styled.h1`
    margin: 5rem;
    text-align: center;
`;
