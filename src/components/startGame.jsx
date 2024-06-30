import styled from "styled-components";
import { Button } from "../styled/button";

const Container = styled.div`
    max-width: 1190px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;
    gap:200px;
    overflow: hidden;   


    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

    .image {
        height: 600px;
        width: 500px;
    }
    img {
        height: 100%;
        width: 100%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        // make the image fit the container
        object-fit: contain;

    }
`


const StartGame = ({toggle}) => {
    return (
      <Container>
        <div className="image">
            <img src="/images/dices_img.png" alt="startGame"/>
        </div>
        <div className="content">
            <h1>
                DICE GAME
            </h1>
            <Button onClick={toggle}>
            Play Now</Button>
        </div>
      </Container>
    );
  };
export default StartGame;