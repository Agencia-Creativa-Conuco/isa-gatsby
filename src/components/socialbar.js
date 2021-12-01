import React,{useState, useEffect} from 'react';
import useGlobalOption from "../hooks/useGlobalOption";
import { Container, Row } from "./layout/index";
import styled from '@emotion/styled';
import {
    InstagramIcon,
    Facebook2Icon,
    TwitterIcon,
    YoutubeIcon,
    LinkedInIcon,
  } from "./icons";

const SocialBar = () => {

  const [{ redesSociales }] = useGlobalOption();
  const [isVisible, setIsVisible] = useState(true);


  const listenToScroll = () => {

    let heightToHideFrom = 100;
    const winScroll = document.body.scrollTop || 
    document.documentElement.scrollTop;
    if( winScroll > heightToHideFrom){
      isVisible &&
      setIsVisible(false);
    }else{
      setIsVisible(true)
    }

  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return (()=>{
      window.removeEventListener("scroll", listenToScroll);
    })
  })


  const icons = {
    facebook: Facebook2Icon,
    twitter: TwitterIcon,
    youtube: YoutubeIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
  }


  const redes = redesSociales.map((red) => {
    return {
      ...red,
      icon: icons[red.tipoRed]
    }
  });
    return (
        isVisible && (
          <Container sizeXL="150rem">
          <Row>  
                {redes.map((red, index) => {
                  const Icon = red.icon;
                  return (
                    <div  key={index}>
                      <LinkIcon href={red.url} target="_blank" rel="noreferrer" aria-label={red.tipoRed}>
                        <Icon />
                      </LinkIcon>
                    </div>
                  )
                })
                }
          </Row>
        </Container>

        )
      

    )
}

export default SocialBar

const LinkIcon = styled.a`
max-width: 3.5rem;
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  display: inline-block;
  background-color: white;
  margin:0.3rem  0.2rem;
  padding: 4px;
  box-shadow: 0.1rem .1rem .5rem rgba(0,0,0,.15);
  transition: cubic-bezier(.86,0,.07,1);
  color: white;
  &:hover {
    opacity: 0.5;
  }
  svg {
    fill:#00A4E5 ;
  }
`;
