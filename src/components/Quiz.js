import React from 'react';

export function Quiz() {
    return (
        <div>
            <body className="quiz-body">
                <div className="body-container">
                    
                    <section id="quiz-start"> 
                        <header className="quiz-header">
                            <div className="quiz-container">
                                <h1>Discover the plant that will fit you!</h1>
                            </div>
                        </header>

                        <div className="quiz-contain">
                            <button className="btn btn-light" aria-label="start quiz"><a href="./questionTemplate.html">Start Quiz</a></button>
                        </div>
                    <div className="quiz-contain">
                    <button className="btn btn-light" aria-label="start quiz">
                        <a href="./questionTemplate.html" className="big-start">Start Quiz</a>
                    </button>
                    </div>
                    </section>
                </div>
            </body>
        </div>
    )
}