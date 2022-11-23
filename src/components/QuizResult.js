import React from 'react';

export function QuizResult() {
    return (
        <>
            <div>
                <div className="quiz-question-container">
                    <section id="question" className="questions-part">
                        <div className="result-container">
                            <div className="question">
                                <h2 className="question">Aloe Vera Plants would fit you best!</h2>
                            </div>
                            <div className="plant-picture">
                                <img src="img/aloevera.png" alt="aloe vera" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
