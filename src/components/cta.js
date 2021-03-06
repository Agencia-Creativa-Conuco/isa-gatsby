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

    const isExternal = true;

    return !isExternal? ( 
        <Link to={to} {...{download}} {...other}>
            <Span {...{color, bgColor, bgActiveColor, shadowColor, paddingX,}} >
                {children}
            </Span>
        </Link>
     ) : (
        <Anchor href={to} {...{download}} {...other}>
            <Span {...{color, bgColor, bgActiveColor, shadowColor, paddingX,}} >
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