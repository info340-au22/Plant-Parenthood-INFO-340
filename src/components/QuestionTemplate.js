import React from 'react';
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';


export function QuestionPage() {
    const [currQuestion, setCurrQuestion] = useState(0);
    const [quizResult, setQuizResult] = useState("Click to see your results!");

    let questions = [
        {
            questionText: "What plant fits you best?",
            ansOptions: [
                { text: "Start", type: "start" },
            ],
        },
        {
            questionText: "Have you owned a plant before?",
            ansOptions: [
                { text: "No, never", type: "low" },
                { text: "Yes, a long time ago", type: "medium" },
                { text: "Yes, recently", type: "high" },
            ],
        },
        {
            questionText: "How much do you know about plant maintenance?",
            ansOptions: [
                { text: "Nothing…", type: "low" },
                { text: "I know the basics", type: "medium" },
                { text: "I know all about plants!", type: "high" },
            ],
        },
        {
            questionText: "How much time are you willing to put into caring for your plant each week?",
            ansOptions: [
                { text: "< 30 min", type: "low" },
                { text: "~45 min", type: "medium" },
                { text: "1+ hours", type: "high" },
            ],
        },
        {
            questionText: "How large would you like your plant to be?",
            ansOptions: [
                { text: "Small (< 5 in tall)", type: "low" },
                { text: "Medium (6-11 in tall)", type: "medium" },
                { text: "Large (1+ ft tall)", type: "high" },
            ],
        },
        {
            questionText: "Would you like your plant to have flowers?",
            ansOptions: [
                { text: "No, I like my plants green", type: "low" },
                { text: "Maybe, surprise me…", type: "medium" },
                { text: "Yes, I’d love flowers!", type: "high" },
            ],
        },
        {
            questionText: "How much direct sunlight does your house get per day?",
            ansOptions: [
                { text: "< 1 hour", type: "low" },
                { text: "2 to 5 hours", type: "medium" },
                { text: "6+ hours", type: "high" },
            ],
        },
        {
            questionText: "What is the average temperature of your household?",
            ansOptions: [
                { text: "< 65 degrees", type: "low" },
                { text: "68 degrees", type: "medium" },
                { text: "70 degrees +", type: "high" },
            ],
        },
        {
            questionText: "What is your budget for purchasing the plant?",
            ansOptions: [
                { text: "< $20", type: "low" },
                { text: "$25-$50", type: "medium" },
                { text: "$50+", type: "high" },
            ],
        },
        {
            questionText: "What is your budget for plant care?",
            ansOptions: [
                { text: "< $15, I just want to water it", type: "low" },
                { text: "$20-$40", type: "medium" },
                { text: "$50+", type: "high" },
            ],
        },
        {
            questionText: "You've reached the end of the quiz!",
            ansOptions: [
                { text: quizResult },
            ],
        },
    ];

    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [scoreC, setScoreC] = useState(0);
    const nextQuestion = currQuestion + 1;
    let max = 0;

    const handleAnswerButtonClick = (answerOption) => {
        if (nextQuestion < questions.length) {
            setCurrQuestion(nextQuestion);
            if (answerOption.type === "low") {
                setScoreA(scoreA + 1);
            } else if (answerOption.type === "medium") {
                setScoreB(scoreB + 1);
            } else if (answerOption.type === "high") {
                setScoreC(scoreC + 1);
            } else {
                setScoreA(scoreA + 0);
            }
        // else if last question then calculate max score and based on max score return info from QuizResult file after
        // they click on button
        } else {
            max = Math.max(scoreA, scoreB, scoreC);

            if (scoreA === max) {
                setQuizResult(<Navigate to="/QuizResultA"></Navigate>)
            } else if (scoreB === max) {
                setQuizResult(<Navigate to="/QuizResultB"></Navigate>)
            } else {
                setQuizResult(<Navigate to="/QuizResultC"></Navigate>)
            }
        }
    };

    let questionBank = questions[currQuestion].ansOptions.map((ansOption, index) => (
        <button key={index} className="btn btn-default" aria-label = "answer option" onClick={() => handleAnswerButtonClick(ansOption)}>{ansOption.text}</button>
    ))


    return (
        // add prev/next button if time
        <div className="quiz-question-container">
            <div className='question-count'>
                Question {currQuestion + 1}/{questions.length}
            </div>
            <div className="question">
                <div className="questionText">
                    {questions[currQuestion].questionText}
                </div>
            </div>
            <div className="answers">
                {questionBank}
                <Outlet />
            </div>
        </div>
    );
}