import React, { useState } from 'react';
import { getDatabase, ref, push as firebasePush } from 'firebase/database'

export default function RegistrationForm() {
    const db = getDatabase();
    const [input, setInput] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        e.target.reset();
        
        const db = getDatabase(); 
        const subscribeRef = ref(db, "subscribers");
        const saveSubscriber = firebasePush(subscribeRef, input);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="email" onChange={inputHandler} placeholder="Enter Email..." />
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    )
}
