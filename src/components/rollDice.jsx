import React, { useState } from 'react';
import styled from "styled-components";

const RollDice = ({rollDice, currentDice}) => {
  const [rolling, setRolling] = useState(false);

  const handleRollDice = () => {
    setRolling(true);
    rollDice();
    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  return (
      <DiceContainer>
        <div className={`dice ${rolling ? 'rolling' : ''}`} onClick={handleRollDice}>
          <img src={`/images/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
        </div>
        <p>Click on Dice to roll</p>
      </DiceContainer>
    );
};


export default RollDice;


const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    transition: transform 1s;
  }

  .dice.rolling {
    transform: rotate(360deg);
  }

  p {
    margin-top: 16px;
    font-size: 20px;
    color: #333;
  }
`;