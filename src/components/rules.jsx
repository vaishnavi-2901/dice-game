import styled from "styled-components";

const Rules = () => {
    return (
        <RuleContainer>
            <div className="rule_text">
                <h1>How to play dice game</h1>
                <p>Select any number</p>
                <p>Click on Dice Image</p>
                <p>After click on dice if selected number is equal to dice number you will get same point(s) as dice.</p>
                <p>If you wrong guess then 2 points will be deducted</p>
            </div>
        </RuleContainer>
    )
}

export default Rules;

const RuleContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
    border-radius: 10px;
    margin-top: 40px;
    background-color: #fbf1f1;
    padding: 20px;
    h1{
        font-size:24px;
    }
    .rule_text{
        margin-top: 24px;
    }
`