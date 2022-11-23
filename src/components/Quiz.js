import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { QuizResult } from './QuizResult';

export function Quiz() {
    // const navigate = useNavigate();

    // const navigateToQuestion = () => {
    //     navigate('./QuizResult.js');
    // }

    return (
            <div className="quiz-body">
                <div className="body-container">

                    <section id="quiz-start">
                        <header className="quiz-header">
                            <div className="quiz-container">
                                <h1>Discover the plant that will fit you!</h1>
                            </div>
                        </header>

                        <div className="quiz-contain">
                            <button className="btn btn-light" aria-label="start quiz" as={Link} to='/QuizResult.js'>
                                <a className="big-start">Start Quiz</a>
                            </button>

                            <Routes>
                                <Route as={Link} to='/QuizResult.js' element={<QuizResult />} />
                            </Routes>
                        </div>
                    </section>
                </div>
            </div>
    )
}