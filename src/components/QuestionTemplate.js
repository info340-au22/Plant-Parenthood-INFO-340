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
    // console.log("A = " + scoreA);
    // console.log("B = " + scoreB);
    // console.log("C = " + scoreC);

    // console.log(quizResult);

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
                // setQuizResult("A low maintenance plant would fit you best. You're interested in a plant that will require low effort. Maybe you're a newbie who doesn't have much experience, or maybe you've had your fair share of plant care experience but you like a plant that doesn't require too much of a fuss. These are our recommendations for you: Aglaonema, Baby Rubber Plant and Cacti!");
            } else if (scoreB === max) {
                // setQuizResult(<Navigate to="/QuizResultB.js"></Navigate>)
                // setQuizResult("A medium maintenance plant would fit you best. You like a plant that can present a bit of a challenge, but nothing too crazy. You're willing to put in some work, frequent watering and the occassional need for fertilizer doesn't scare you. We respect that. These are our recommendations for you: African Violet, Angel Wing Begonia, and Cyclamen!");
            } else {
                // setQuizResult(<Navigate to="/QuizResultC.js"></Navigate>)
                // setQuizResult("A high maintenance plant would fit you best. Looks like we got a plant care expert in the house! You don't mind plants that require the perfect amount of lighting, watering, and temperature to thrive. You're ready to take on a challenge - we love to see it. These are our recommendations for you: Bonsai, Calathea, and Croton!");
            }
        }
    };

    let questionBank = questions[currQuestion].ansOptions.map((ansOption, index) => (
        <button key={index} className="btn btn-default" aria-label = "Click an Option" onClick={() => handleAnswerButtonClick(ansOption)}>{ansOption.text}</button>
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
            {/* <div>
                answer description
            </div> */}
        </div>
    );
}