import { graphql, useStaticQuery } from 'gatsby';

const useGlobalOption = () => {

    const resultado = useStaticQuery(
        graphql `
        {
        allWp {
          nodes {
            acfOptionsConfiguracionesDeHubspot {
              idCuentaHubspot {
                idHs
              }
            }
            acfOptionsRedesSociales {
              redesSociales {
                redes {
                  tipoRed
                  url
                }
              }
            }
            acfOptionsServiciosOpcionales {
              serviciosOpcionales {
                servicios {
                  tipoServicio
                  url
                }
              }
            }
            acfOptionsVideoInstitucional {
              videoInstitucional {
                urlVideo
              }
            }


          }
        }  
      }
        `
    );
    
    return resultado.allWp.nodes.map( option => ({
        idCuentaHubspot:  option?.acfOptionsConfiguracionesDeHubspot?.idCuentaHubspot?.idHs,
        redesSociales: option?.acfOptionsRedesSociales?.redesSociales?.redes || [],
        serviciosOpcionales: option?.acfOptionsServiciosOpcionales?.serviciosOpcionales?.servicios,
        videoInstitucional: option.acfOptionsVideoInstitucional?.videoInstitucional?.urlVideo
    }));
}
 
export default useGlobalOption;