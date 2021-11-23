import { graphql, useStaticQuery } from 'gatsby';

const useGlobalOption = () => {

    const resultado = useStaticQuery(
        graphql `
        {
        allWp {
          nodes {
            acfOptionsIdCuentaHubspot {
              pageTitle
              idCuentaHubspot {
                idCuenta
              }
            }
            acfOptionsRedesSociales {
              redesSociales {
                redes {
                  tipoRed
                  urlFacebook
                  urlLinkedin
                  urlInstagram
                  urlTwitter
                  urlYoutube
                }
              }
            }
            acfOptionsServiciosOpcionales {
              serviciosOpcionales {
                servicios {
                  tipoServicio
                  alojamiento
                  alimentacion
                }
              }
            }
          }
        }  
      }
        `
    );
    
    return resultado.allWp.nodes.map( option => ({
        idCuentaHubspot:  option.acfOptionsIdCuentaHubspot?.idCuentaHubspot.idCuenta,
        redesSociales: option.acfOptionsRedesSociales?.redesSociales.redes || [],
        serviciosOpcionales: option.acfOptionsServiciosOpcionales?.serviciosOpcionales.servicios
    }));
}
 
export default useGlobalOption;