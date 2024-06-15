import GamePlay from "./components/gamePlay";
import StartGame from "./components/startGame";
import { useState } from "react";

// startGame
const App = () =>{

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev);
  }
  return <>
      {
        isGameStarted ? <GamePlay/> : <StartGame
          toggle = {toggleGamePlay}
        />
      }
    </>
};


export default App;