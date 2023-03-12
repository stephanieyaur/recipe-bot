import { useState } from "react";

const StartPage = ({setRecipe}) => {

    const keyPressHandler = ({key}) => {
        console.log(key);
        if (key == "Enter"){
            setRecipe(inputValue);
        }
    }

    const [inputValue, setInputValue] = useState("recipe url here")


    return (
        <div>
            <h1>
                What recipe would you like to ask questions about?
            </h1>
            <div className="inputSearch">
                <input type="text" id="recipeSearch" name="recipeSearch" className="recipeSearch" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) =>  keyPressHandler(e)} onClick={() => setInputValue("")}/>
                <button className="Go" onClick={() => setRecipe(inputValue)}>Go</button>
            </div>
        </div>
    )
}

export default StartPage;