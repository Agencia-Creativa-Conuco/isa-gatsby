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
                      link
                    }
                  }
                }
              }
            }
          }          
        `
    );
    
    return resultado.allWp.nodes.map( option => ({
        servicios:  option.acfOptionsServiciosOpcionales?.serviciosOpcionales.servicios,
    }));
}
 
export default useGlobalOption;