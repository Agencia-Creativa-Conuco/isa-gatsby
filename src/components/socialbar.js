import React, { useState, useEffect } from "react";
import useGlobalOption from "../hooks/useGlobalOption";
import styled from "@emotion/styled";
import colors from "./styles/colors";
import {
  InstagramIcon,
  Facebook2Icon,
  TwitterIcon,
  YoutubeIcon,
  LinkedInIcon,
  RightArrowIcon
} from "./icons";
import { mq } from "./layout/index";
import { slideUp} from "./styles/animations";


const SocialBar = () => {

  const [{ redesSociales }] = useGlobalOption();
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  });

  const icons = {
    facebook: {
      Icon: Facebook2Icon,
      color: "#3b5998",
    },

    twitter: {
      Icon: TwitterIcon,
      color: "#00abf0",
    },
    youtube: {
      Icon: YoutubeIcon,
      color: "#bb0000",
    },
    linkedin: {
      Icon: LinkedInIcon,
      color: "#007bb5",
    },
    instagram: {
      Icon: InstagramIcon,
      color:
        "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    },
  };

  const redes = redesSociales.map((red) => {
    return {
      ...red,
      icon: icons[red.tipoRed],
    };
  });

  return (
    isVisible ? (
      <Container>
        {redes.map((red, index) => {
          const {
            icon: { Icon, color },
          } = red;

          return (
            <div key={index}>
              <LinkIcon
                bgColor={color}
                href={red.url}
                target="_blank"
                rel="noreferrer"
                aria-label={red.tipoRed}
              >
                <Icon />
              </LinkIcon>
            </div>
          );
        })}
      </Container>
    ) : (
      <ContainerArrow onClick={() => setIsVisible(true)}>
        <RightArrowIcon bgColor={"white"}  />
      </ContainerArrow>
    )
  );
};

export default SocialBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0;
  animation: ${slideUp} 0.4s ease-out;
  

  position: absolute;
  top: -15rem;

  ${mq.lg} {
    top: 0;
  }
`;

const LinkIcon = styled.a`
  width: 3.6rem;
  display: inline-block;
  background-color: white;
  padding: 0.4rem;
  transition: cubic-bezier(0.86, 0, 0.07, 1);
  background: ${(props) => props.bgColor};
  color: white;
  &:hover {
    ${mq.lg} {
      min-width: 4.5rem;
    }
    svg {
      fill: ${colors.primary.dark};
    }
  }
  svg {
    fill: white;
  }
`;
const ContainerArrow = styled.div`
  background: ${colors.primary.base};
  border-radius: 20%;
  color: white;
  width: 2rem;

  :hover {
    cursor: pointer;
  }
`;
