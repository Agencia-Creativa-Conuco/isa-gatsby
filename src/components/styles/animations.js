import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;

export const slideDown = keyframes`
    from{
        transform: translateY(-100px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;


export const slideUp = keyframes`
    from{
        transform: translateY(50px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;