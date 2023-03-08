import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Chatbot from './components/Chatbot';
import StartPage from './components/StartPage';
import Spoons from './images/spoons.jpg';

function App() {

  const [step, setStep] = useState(1);
  const [recipe, setRecipe] = useState(null);
  const [messages, setMessages] = useState([]);
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    if (recipe != null) {
      var body = {"recipe_url": recipe};
      body = JSON.stringify(body);
      fetch("http://127.0.0.1:5000/api/recipe", {method:'POST', headers: { 'Content-Type': 'application/json', 'Accept': '*/*' }, body: body})
        .then(res => res.json())
        .then(
            (result) => {
            setMessages([...messages, {"from": "BOT", "message": "Good choice! You've decided to make " + JSON.parse(result["recipe_data"])["title"] + "."}, {"from": "BOT", "message": result["message"]}]);
            setRecipeData(result["recipe_data"]);
            setStep(2);
          },
          (error) => {
            console.log(error);
          }
        )
    }
  }, [recipe])

  return (
    <div className={step == 1 ? "Background" : "Background2"}>
      {step == 1 ? 
        <div className="App">
          <div className="Step">
            <StartPage setRecipe={setRecipe}/>
          </div>
        </div>
      :
        <Chatbot recipe={recipe} messages={messages} setMessages={setMessages} recipeData={recipeData} setRecipeData={setRecipeData}/>
      }
    </div>
  );
}

export default App;
