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
                <div className = "form">
                    <div className = "form-input">
                        <label for="your-name">
                            Full Name:&nbsp;
                            <input id="your-name" onChange={nameInputHandler} placeholder="John Doe" />
                        </label>
                    </div>
                    <div className = "form-input">
                        <label for="email">
                            Email:&nbsp;
                            <input id="email" onChange={emailInputHandler} placeholder="example@gmail.com" />
                        </label>
                    </div>
                    <div className = "form-btn">
                        <button type="submit" className="btn btn-default" aria-label ="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
