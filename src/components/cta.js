import React from 'react';
import Link from './link';
import styled from '@emotion/styled';
import ctaStyles from './styles/cta';

const CTA = ({ 
    to, children, 
    color, bgColor, bgActiveColor, shadowColor, paddingX,
    ...other 
}) => {
    return ( 
        <Link to={to}>
            <Span {...{color, bgColor, bgActiveColor, shadowColor, paddingX,}} {...other}>
                {children}
            </Span>
        </Link>
     );
}
 
export default CTA;

const Span = styled.span`
    ${ctaStyles}
`;