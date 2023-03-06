import { useState } from 'react';
import Message from './Message';

const Chatbot = ({recipe, messages, setMessages}) => {

    console.log(messages);

    const [inputValue, setInputValue] = useState("");

    const keyPressHandler = ({key}) => {
        console.log(key);
        console.log(inputValue);
        if (key == "Enter"){
            addMessage(inputValue);
        }
    }

    const addMessage = (newm) => {
        setMessages([...messages, {"from": "YOU", "message": newm}]);
        setInputValue("");
    }

    return (
        <div className="ChatbotContainer">
            <h1>
                Hello, I'm Chef Bot!
            </h1>
            <p>Ask me questions about your recipe. The recipe is: <a target="_blank" href={recipe}>{recipe}</a></p>
            <br/>
            <div className="MessagesContainer">
                {messages.map((m,i) => (
                    <Message from={m["from"]} message={m["message"]} />
                ))}
            </div>
            <div className="inputSearch">
                <input type="text" id="userInput" name="userInput" className="recipeSearch" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) =>  keyPressHandler(e)}/>
                <button className="Go" onClick={() => addMessage(inputValue)}>Go</button>
            </div>
        </div>
    )
}

export default Chatbot;