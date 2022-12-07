import React from 'react';
import { useState } from 'react';

export function Question() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    let questions = [
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
        }
    ];

    const handleAnswerButtonClick = (answerOption) => {
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			alert('you reached the end of the quiz');
		}
    };

    return (
        // <>
        <div className="quiz-question-container">
                <div className="question">
                    <div className="questionText">
                        {questions[currentQuestion].questionText}
                    </div>
                </div>
                <div className="answers">
                    {questions[currentQuestion].ansOptions.map((ansOption, index) => (
                        <button className="btn btn-default" onClick={() => handleAnswerButtonClick()}>{ansOption.text}</button>
                    ))}
                </div>
        </div>
        // </>
    );
}