import React, {useState} from 'react';

export function RegistrationForm() {
    const [input, setInput] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (input) {
            console.log(input);
            //add to firebase
        }
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="email" onChange={inputHandler}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )       
}
