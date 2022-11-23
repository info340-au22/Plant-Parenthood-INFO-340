import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Question } from './QuestionTemplate.js';
import { Navigate } from 'react-router-dom';

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
                                <h1>Discover the plant that fits you best!</h1>
                            </div>
                        </header>

                        <div className="quiz-contain">

                    
                            {/* <Navigate replace to='./QuizResult.js'> */}
                                <button className="btn btn-light" aria-label="start quiz">
                                    <div className="big-start">Start Quiz</div>
                                </button>
                                {/* <Route path="/QuizResult.js" component={QuizResult}></Route> */}
                            {/* </Navigate> */}

                            {/* <Router>
                                <Route path="/QuizResult.js" component={QuizResult} />
                            </Router> */}

                            {/* <Routes>
                                <Route as={Link} to='/QuizResult.js' element={<QuizResult />} />
                            </Routes> */}
                        </div>
                    </section>
                </div>
            </div>
    )
}