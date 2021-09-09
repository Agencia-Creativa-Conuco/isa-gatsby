import React from 'react';
import Link from './link';
import styled from '@emotion/styled';
import ctaStyles from './styles/cta';

const Cta = ({ 
    to, children, 
    color, bgColor, bgActiveColor, shadowColor, paddingX,
    download,
    ...other 
}) => {
    return !download? ( 
        <Link to={to} {...{download}}>
            <Span {...{color, bgColor, bgActiveColor, shadowColor, paddingX,}} {...other}>
                {children}
            </Span>
        </Link>
     ) : (
        <Anchor href={to} {...{download}}>
            <Span {...{color, bgColor, bgActiveColor, shadowColor, paddingX,}} {...other}>
                {children}
            </Span>
        </Anchor>
     );
}
 
export default Cta;

const Span = styled.span`
    ${ctaStyles}
`;

const Anchor = styled.a`
    text-decoration: none;
`;