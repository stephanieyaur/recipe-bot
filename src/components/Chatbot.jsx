import { useState } from 'react';
import Message from './Message';

const Chatbot = ({recipe, messages, setMessages, recipeData, setRecipeData}) => {

    console.log(messages);

    const [inputValue, setInputValue] = useState("");

    const keyPressHandler = ({key}) => {
        console.log(key);
        console.log(inputValue);
        if (key == "Enter"){
            addMessage(inputValue);
        }
    }

    // adds your typed question and retrieves bots answer
    const addMessage = (newm) => {
        setInputValue("");
        var body = {"question": newm, "recipe_data": recipeData};
        body = JSON.stringify(body);
        console.log(body);
        fetch('http://127.0.0.1:5000/api/chat', {method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': '*/*' }, body: body})
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                setMessages([...messages, {"from": "YOU", "message": newm}, {"from": "BOT", "message": result["message"]["text"]}]);
                setRecipeData(result["recipe_data"]);
            }, 
            (error) => {
                setMessages([...messages, {"from": "YOU", "message": newm}, {"from": "BOT", "message": "Sorry I had trouble processing that. Please ask a different question."}]);
            }
        )
    }

    return (
        <div className="ChatbotContainer">
            <div className="ChatbotHeader">
                <h1>
                    Hello, I'm Chef Bot! 🤖🍳
                </h1>
                <p>Ask me questions about your recipe, <b><a target="_blank" href={recipe}>{JSON.parse(recipeData)["title"]}</a></b></p>
            </div>
            <br/>
            <div className="MessagesContainer">
                {messages.map((m,i) => (
                    <Message from={m["from"]} message={m["message"]} />
                ))}
            </div>
            <div className="inputSearch inputSearchShadow">
                <input type="text" id="userInput" name="userInput" className="recipeSearch" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) =>  keyPressHandler(e)}/>
                <button className="Go" onClick={() => addMessage(inputValue)}>Go</button>
            </div>
        </div>
    )
}

export default Chatbot;