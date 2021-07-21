import {css} from "@emotion/react";
import { mq } from "../layout/index";

export const h1 = css`
    font-size: 2.2rem;
    ${mq.sm}{
        font-size: 2.4rem;
    }
    ${mq.md}{
        font-size: 3rem;
    }
    ${mq.lg}{
        font-size: 4rem;
    }
    ${mq.xl}{
        font-size: 5rem;
    }
`;

export const h2 = css`
    font-size: 2rem;
    ${mq.sm}{
        font-size: 2.2rem;
    }
    ${mq.md}{
        font-size: 2.5rem;
    }
    ${mq.lg}{
        font-size: 3rem;
    }
    ${mq.xl}{
        font-size: 3rem;
    }   
`;

export const h3 = css`
    font-size: 1.9rem;
    ${mq.sm}{
        font-size: 2rem;
    }
    ${mq.md}{
        font-size: 2.2rem;
    }
    ${mq.lg}{
        font-size: 2.5rem;
    }
    ${mq.xl}{
        font-size: 2.5rem;
    }
`;

export const h4 = css`
    font-size: 1.8rem;
    ${mq.sm}{
        font-size: 1.9rem;
    }
    ${mq.md}{
        font-size: 2rem;
    }
    ${mq.lg}{
        font-size: 2.2rem;
    }
    ${mq.xl}{
        font-size: 2.2rem;
    }
`;

export const h5 = css`
    font-size: 1.7rem;
    ${mq.sm}{
        font-size: 1.8rem;
    }
    ${mq.md}{
        font-size: 1.9rem;
    }
    ${mq.lg}{
        font-size: 2rem;
    }
    ${mq.xl}{
        font-size: 2rem;
    }
`;

export const h6 = css`
    font-size: 1.6rem;
    ${mq.sm}{
        font-size: 1.7rem;
    }
    ${mq.md}{
        font-size: 1.8rem;
    }
    ${mq.lg}{
        font-size: 1.8rem;
    }
    ${mq.xl}{
        font-size: 1.8rem;
    }
`;

const tipography = ({colors}) => css`
    h1,h2,h3,h4,h5,h6{
        margin-bottom: 1rem;
        margin-top: 2rem;
        color: ${colors.text_heading};
        font-family: Source Sans Pro, sans-serif;
        line-height: 1;
    }
    h1{
        ${h1}
        text-transform: uppercase;
        font-weight: 900;
    }
    h2{
        ${h2}
        text-transform: uppercase;
        font-weight: 600;
    }    
    h3{
        ${h3}
        font-weight: 600;
    }
    h4{
        ${h4}
    }
    h5{
        ${h5}
    }
    h6{
        ${h6}
    }
    p{
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`;

export default tipography;