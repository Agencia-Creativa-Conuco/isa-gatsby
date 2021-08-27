import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "./layout/index";
import HubspotForm from "react-hubspot-form";
import Loading from "./loading";
import $ from "jquery";

const Form = ({ 
    formId, 
    loadingHeight="100%", 
    cardStyle=true, 
    submitedTitle= "¡Gracias por enviar el formulario!",
    submitedText = "En Universidad ISA tomamos muy en serio las solicitudes de nuestros usuarios. Nos pondremos en contacto pronto.",
    ...props
}) => {

    const [submited, setSubmited] = useState(false);

    return formId?(
        <FormContainer {...{cardStyle, ...props}}>
            {
                !submited?(
                    <FormCut>
                        <HubspotForm 
                            portalId={20627890}
                            formId={formId}
                            onReady={() => {
                                const script = document.createElement('script');
                                script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
                                let jqueryScript = document.getElementsByTagName('script');
                                let src = Array.from(jqueryScript).filter(item => item.src === script.src)
                                if(src.length === 0) {
                                  document.body.appendChild(script)
                                }
                            }}
                            onFormSubmitted={()=>{ setSubmited(true) }}
                            loading={<Loading height={loadingHeight} />}
                        />
                    </FormCut>
                ):(
                    <Message>
                        <h3>{submitedTitle}</h3>
                        <p>{submitedText}</p>
                    </Message>
                )
            }
        </FormContainer>
    ):null;
};

export default Form;

const FormContainer = styled.div`
    ${({cardStyle})=>css`
        ${cardStyle?css`
            background-color: white;
            padding: 3rem 1.5rem;
            max-width: 60rem;
            margin: 0 auto;
            box-shadow: 0 0 .5rem rgba(0,0,0,.15);
            border-radius: 2rem;
            ${mq.sm}{
                border-radius: 4rem;
                padding: 3rem;
            }
            ${mq.md}{
                padding: 4rem;
            }
        `:css`
        `}
    `}
`;

const FormCut = styled.div`
    padding: 0 .1rem;
    overflow: hidden;
    iframe{
        width: 100%;
        display: block;
        margin-bottom: -8.5rem;
    }
`;

const Message = styled.div`
`;