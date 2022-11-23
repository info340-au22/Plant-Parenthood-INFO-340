import React from 'react';

export function Question() {
    return (
        <>
            <div className="quiz-question-container">
                <section id="question" className="questions-part">
                    <div className="question">
                        <h2 className="question">Have you owned a plant before?</h2>
                    </div>
                    <div className="quiz-options">
                        <button className="btn btn-default" aria-label="yes option">Yes</button>
                        <button className="btn btn-default" aria-label="no option">No</button>
                    </div>
                </section>
            </div>
        </>
    );
}