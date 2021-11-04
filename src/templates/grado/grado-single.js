import React from 'react';
import GradeCover from './grado-cover';
import GradeOffer from './grado-offer';

const Grade = ({ grado }) => {

    return (
        <article>
            <GradeCover {...{grado}} />
            <GradeOffer {...{grado}} />
        </article>
    )
}

export default Grade;