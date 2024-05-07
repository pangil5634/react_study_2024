import React from "react";
import "./Form.css";

function Week1ExerciseForm() {
    return (
        <div>
            <h1>Week1ExerciseForm</h1>
            <form className="form-container">
                <label className="form-label">Name :</label>
                <input className="form-input" type="text" name="name"></input>

                <label className="form-label">Email :</label>
                <input className="form-input" type="text" name="email"></input>

                <label className="form-label">Message :
                </label>
                <textarea className="form-textarea" name="message"></textarea>

                <button className="form-submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Week1ExerciseForm;