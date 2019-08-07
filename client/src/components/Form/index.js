import React from "react";

// Function for searching for books form

const Form = ({ title, handleInputChange, handleFormSubmit }) => (
    <form>
        <div className="form-group">
            <label htmlFor="Query">
                <strong>Book</strong>
            </label>
            <input 
                className="form-control"
                id="Title"
                type="text"
                value={title}
                placeholder="Search books here"
                name="title"
                onChange={handleInputChange}
                required
                />
        </div>
        <div className="pull-right">
            <button 
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-lg btn-danger float-right">Search</button>
        </div>
    </form>
)

export default Form;