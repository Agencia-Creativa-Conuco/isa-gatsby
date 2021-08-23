import React from 'react';
import GradeCover from './grade-cover';
import GradeOffer from './grade-offer';

const Grade = ({ grade }) => {

    return (
        <article>
            <GradeCover {...{grade}} />
            <GradeOffer {...{grade}} />
        </article>
    )
}

export default Grade;