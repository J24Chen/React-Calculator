import Wrapper from "./Components/Wrapper";
import Screen from "./Components/Screen";
import ButtonBox from "./Components/ButtonBox";
import Button from "./Components/Button";
import CalcProvider from "./Context/CalcContext";

//Creating an array of button values on the calculator
const btnValues = [
  ['C','+-','%','/'],
  [7, 8, 9,'x'],
  [4, 5, 6,'-'],
  [1, 2, 3,'+'],
  [0, '.', '='],
];


function App () {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn,i) => (  /*Returns array which all the nested arrays are being read through individually, 
          This essentially allows us to read through a 2D array 1 by 1, which is needed for map to function properly */ 

            <Button  //Creating a new button class for every btnValue
              value ={btn}
              key = {i}
            />
          ))}

        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App