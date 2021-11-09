import React from 'react';
import GradoCover from './grado-cover';
import GradoOffer from './grado-offer';

const GradoSingle = ({ grado }) => {

    return (
        <article>
            <GradoCover {...{grado}} />
            <GradoOffer {...{grado}} />
        </article>
    )
}

export default GradoSingle;