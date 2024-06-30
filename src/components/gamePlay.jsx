import styled from "styled-components";
import NumberSelector from "./numberSelector";
import TotalScore from "./totalScore";
import RollDice from "./rollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/button";
import Rules from "./rules";


const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [rules, setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const resetScore = () => {
        setScore(0);
    }
    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return error;
        }
        setError("");
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        
        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    };

    return (
        <MainContainer>
          <div className="top_section">
            <TotalScore score={score} />
            <NumberSelector
              error={error}
              setError={setError}
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
          </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
            <Button onClick={()=>setShowRules((prev) => !prev)}> {
            rules?"hide ":"show "
            }
            Rules</Button>
            {rules && <Rules/>}
          </div>
        </MainContainer>
      );
}
export default GamePlay;


const MainContainer = styled.div`
    padding-top: 30px;

    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 30px;
    }
`