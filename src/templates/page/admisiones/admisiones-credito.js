import React from 'react'
import styled from '@emotion/styled'
import FeaturedMedia from '../../../components/featured-media'
import useFiles from '../../../hooks/useFiles'
import Link from '../../../components/link'
import { container, mq } from "../../../components/layout/new/";


const AdmisionesCredito = () => {
  const images = useFiles()

  const data = [
    {
      url: 'https://bancoadopem.com.do/',
      title: 'Banco Adopem',
      image: images.admisiones.banco_adopem,
    },
    {
      url: 'https://banfondesa.com.do/',
      title: 'Banfondesa',
      image: images.admisiones.banfondesa,
    },
    {
      url: 'https://www.fundapec.edu.do/',
      title: 'Fundapec',
      image: images.admisiones.fundapec,
    },
  ]

  // const contacto = {
  //   content: `
  //  <p>
  //   <span><strong>CONTACTOS</strong></span><br/>
  //   <span>Correo: </span> <a href="mailto: asistenciaeconomica@isa.edu.do">asistenciaeconomica@isa.edu.do</a>  <br/>
  //   <span>Teléfono:</span> <a href="tel:+18092472000">809-247-2000. Ext.: 235, 236 y 237.</a>
  //  <p>   
  //  `}


  return (
    <Section id="section_4">

            <Title>Asistencia para la gestión del crédito educativo</Title>
            <Copy>Financiamiento disponible a través de:</Copy>
            <Container>
              {data.map((item, key) => {
                return (
                  <ItemCol key={key}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.title}
                    >
                      <Institution>
                        <Media>
                          <FeaturedMedia media={item.image} />
                        </Media>
                      </Institution>
                    </a>
                  </ItemCol>
                )
              })}
              </Container>
              <ContainerContact>


              <h5>CONTACTOS</h5>
             <BoxContact>
               <span>Email: </span>
                  <Link to={"mailto:asistenciaeconomica@isa.edu.do"} target="_blank">
                  asistenciaeconomica@isa.edu.do
                  </Link>
             </BoxContact>
             <BoxContact>
                  <span>Teléfono: </span>
                  <Link to={"tel:8092472000"} target="_blank">
                  809-247-2000. Ext.: 235, 236 y 237
                  </Link>
                </BoxContact>
              </ContainerContact>
    </Section>
  )
}

export default AdmisionesCredito



const Section = styled.section`
  ${container}
  margin: 9.6rem auto;
`;


const Container = styled.div`

${mq.md}{
  display:grid;
  grid-template-columns:repeat(3, 1fr);;
}
`;

const ItemCol = styled.div`
padding: 0 1.5rem 0 0;
align-self: center;

`;

const ContainerContact = styled.div`
margin-top: 4rem;


`;
const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`

const Copy = styled.p``

const Institution = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: flex;
  position: relative;
`

const Media = styled.div`
  flex: 1;
`

const BoxContact =  styled.div`

& > a {
  text-decoration: none;
  color: black;
}
& > span {
  font-weight: bold;
  color: #001F56;
}

`;
