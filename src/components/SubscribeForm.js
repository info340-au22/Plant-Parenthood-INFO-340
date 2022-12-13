import React, { useState } from 'react';
import { getDatabase, ref, push as firebasePush } from 'firebase/database'

export function RegistrationForm() {
    const [emailInput, setEmailInput] = useState("");
    const [nameInput, setNameInput] = useState("");

    const nameInputHandler = (e) => {
        setNameInput(e.target.value);
    };

    const emailInputHandler = (e) => {
        setEmailInput(e.target.value);
    };

    const addSubscriber = (title, start, end) => {
        const newEventDB = {
            "name": emailInput,
            "email": nameInput,
        }

        const db = getDatabase(); 
        const subscriberRef = ref(db, 'subscribers');
        firebasePush(subscriberRef, newEventDB);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addSubscriber();
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label for="your-name">
                    Full Name:
                    <input id="your-name" onChange={nameInputHandler} placeholder="John Doe" />
                </label>
                <label for="email">
                    Email:
                    <input id="email" onChange={emailInputHandler} placeholder="example@gmail.com" />
                </label>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    )
}
