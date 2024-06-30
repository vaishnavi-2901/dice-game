import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }

  .error {
    color: red;
    font-size: small;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (!props.isSelected ? "black" : "")};
    color: ${(props) => (!props.isSelected ? "white" : "")};
  }
`;

// Add hover effect to the Box styled component. When the user hovers over the Box component, the background color should change to black and the text color should change to white. The hover effect should only be applied when the Box component is not selected.
