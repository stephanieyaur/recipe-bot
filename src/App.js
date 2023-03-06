import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Chatbot from './components/Chatbot';
import StartPage from './components/StartPage';
import Spoons from './images/spoons.jpg';

function App() {

  const [step, setStep] = useState(1);
  const [recipe, setRecipe] = useState(null);
  const [messages, setMessages] = useState([{"from": "BOT", "message": "Ask me questions about your recipe!"}]);

  useEffect(() => {
    if (recipe != null) {
      setStep(2);
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
        <Chatbot recipe={recipe} messages={messages} setMessages={setMessages}/>
      }
    </div>
  );
}

export default App;
