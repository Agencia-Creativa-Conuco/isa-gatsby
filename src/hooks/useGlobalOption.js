import { graphql, useStaticQuery } from 'gatsby';

const useGlobalOption = () => {

    const resultado = useStaticQuery(
        graphql `
         {
            allWp {
              nodes {
                acfOptionsServiciosOpcionales {
                  serviciosOpcionales {
                    servicios {
                      id
                      link
                    }
                  }
                }
                acfOptionsRedesSociales {
                  redesSociales {
                    redes {
                      id
                      url
                    }
                  }
                }


              }
            }
          }          
        `
    );
    
    return resultado.allWp.nodes.map( option => ({
        servicios:  option.acfOptionsServiciosOpcionales?.serviciosOpcionales.servicios || [],
        redesSociales: option.acfOptionsRedesSociales?.redesSociales.redes || [],
    }));
}
 
export default useGlobalOption;