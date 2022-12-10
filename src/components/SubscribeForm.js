import React, {useState} from 'react';
import { getDatabase } from 'firebase/database';
import firebase from 'firebase/app';

export default function RegistrationForm() {
    const db = getDatabase();
    const [input, setInput] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (input) {
            console.log(input);
            //add to firebase
            db.collection("emails").add({
                email: input,
                // time: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="email" onChange={inputHandler} placeholder="Enter Email..."/>
                <button type="submit" className = "btn btn-default">Submit</button>
            </form>
        </div>
    )       
}
