import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "./layout/index";
import HubspotForm from "react-hubspot-form";
import Loading from "./loading";
import colors from "./styles/colors";

const Form = ({
  formId,
  formIds = [],
  loadingHeight = "100%",
  cardStyle = true,
  submitedTitle = "¡Gracias por enviar el formulario!",
  submitedText = "En Universidad ISA tomamos muy en serio las solicitudes de nuestros usuarios. Nos pondremos en contacto pronto.",
  ...props
}) => {
  const [submited, setSubmited] = useState(false);
  const [active, setActive] = useState(0);
  const [ displayedForms, setDisplayedForms ] = useState([]);

  const forms = formIds.length ? formIds : [formId];

  const manageFormSubmit = () => {
    const element = document.getElementById("form");
    
    if (active < forms.length - 1) {
        setActive(active + 1);
    } else {
      setSubmited(true);
    }

    window.scrollTo({ top: element.offsetTop -100, left: 0, behavior: "smooth" });
  };


  return forms.length && !submited? (
    <FormSwitcher id="form">
      <FormDots>
        {
          forms.map( ( form, index ) => {

            const isVisible = displayedForms.includes(index) && displayedForms.length > 1;
            const isCurrent = index === active;

            return (
              <Dot 
                key={index}
                onClick={ ()=>{ setActive(index)}}
                hidden={!isVisible}
                bgColor={colors.primary.base}
                current={ isCurrent }
              >{index + 1}</Dot>
            )
          })
        }
      </FormDots>
      {forms.map((form, index) => {
        
        const isVisible = active === index;

        return isVisible?(
          <FormContainer
            key={index}
            id={index}
            {...{ cardStyle, ...props }}
            hidden={!isVisible}
          >
            <FormCut>
              <HubspotForm
                portalId={20627890}
                formId={form}
                onReady={() => {
                  const script = document.createElement("script");
                  script.src =
                    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
                  let jqueryScript = document.getElementsByTagName("script");
                  let src = Array.from(jqueryScript).filter(
                    (item) => item.src === script.src
                  );
                  if (src.length === 0) {
                    document.body.appendChild(script);
                  }

                  setDisplayedForms( displayedForms.concat( active));

                }}
                onFormSubmitted={() => {
                  manageFormSubmit();
                }}
                loading={<Loading height={loadingHeight} />}
              />
            </FormCut>
          </FormContainer>
        ):null;
      })}
    </FormSwitcher>
  ) : (
    <Message>
      <h3>{submitedTitle}</h3>
      <p>{submitedText}</p>
    </Message>
  );
};

export default Form;

const FormSwitcher = styled.div``;

const FormDots = styled.ul`
  display: flex;
  margin: 0;
  margin-bottom: 2rem;
`;

const Dot = styled.li`
  ${({bgColor="lightblue", current})=>css`
    list-style: none;
    padding: 1rem;
    border-radius: 1rem;
    line-height: 1.5rem;
    margin: 0.25rem;
    cursor: pointer;
    transition: 0.25s all ease-in-out;
    ${current? css`
      background-color: ${bgColor};
      color: white;
    `: css`
      background-color: #F0F0F0;
      color: inherit;
    `}
    &:first-of-type{
      margin-left: 0;
    }
    &:last-of-type{
      margin-right: 0;
    }
  `}
`;

const FormContainer = styled.div`
  ${({ cardStyle }) => css`
    ${cardStyle
      ? css`
          background-color: white;
          padding: 3rem 1.5rem;
          max-width: 60rem;
          margin: 0 auto;
          box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
          border-radius: 2rem;
          ${mq.sm} {
            border-radius: 4rem;
            padding: 3rem;
          }
          ${mq.md} {
            padding: 4rem;
          }
        `
      : css``}
  `}
`;

const FormCut = styled.div`
  padding: 0 0.1rem;
  overflow: hidden;
  iframe {
    width: 100%;
    display: block;
    margin-bottom: -8.5rem;
  }
`;

const Message = styled.div``;
