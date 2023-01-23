import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);

    function handleClick(e) {
        e.preventDefault()
        let arr = movies.filter((element) => {
            return element.title.includes(inputValue)
        })
        setResult(arr)
        console.log(arr)
        setInputValue("")
    }

    function handleChange(e) {
        setInputValue(e.target.value)
        
    }

    return (
        <div id="main">
            <form id="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"
                ></input>
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results &&

                    results.map((movie,index) => (

                        <div className="movie" key={index}>{movie.title} </div>

                    ))}
            </div>
        </div>
    );
};

export default App;
