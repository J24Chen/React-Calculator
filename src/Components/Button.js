import React, {useContext} from 'react'
import { CalcContext } from '../Context/CalcContext'


//Assigning names to certain buttons of the calculator
//Works by creating a map that associates our original buttons with changedName codes, then reutrning the changedName codes  

const getStyleName = (btn) => {

  const changedName = {
    '=': 'equals',
    'x': 'opt',
    '/': 'opt',
    '-': 'opt',
    '+': 'opt',
  } 
  return changedName[btn]
  }

const Button = ({value}) => {
  const {calc, setCalc} = useContext(CalcContext);

  // User clicks decimal '.'

  const decimalClick = () => {
    setCalc({
      ...calc, //Grabs all calc values
         num: !calc.num.toString().includes('.') ? calc.num + value : calc.num // Either adds a decimal (in value variable) or leaves num alone
    })
  }

  // User clicks 'C'
  const resetClick = () => {
    setCalc({
      sign: "", 
      num:0, 
      res:0
    })
  }

  //User clicks a number
  const handleClickNum = () =>{
    const numStr = value.toString()
    let numValue; 
    
    if (numStr === "0" && !calc.num.toString().includes(".") && calc.num == 0   ){ //Stops user from adding 0 to 0
      numValue = "0"
    } else if (calc.num === 0) { //If user adding a new number, gets rid of the placeholder 0 in the beginning
      numValue = numStr   
    } else {
      numValue = calc.num + numStr // Adds strings of numbers together, parsed later during signClick and equalsClick
    }


    setCalc({
      ...calc,
      num: numValue
     })
  }

  //User clicks an operation
  const signClick = () => {
    calc.num = Number(calc.num) 
    
      setCalc({
        sign:value,
        res: !calc.res && calc.num ? calc.num : calc.res, //checks if res = 0 and num != 0, sets to num else sets to res
        num:0 

      })
  }

  //User clicks equal sign
  const equalsClick = () => {
    calc.num = Number(calc.num)
    const math = (a,b,sign) => { //Creates math function that makes the operators do their respective task and returns the result
        const result = {
          '+': (a,b) => a + b,
          '-': (a,b) => a - b,
          'x': (a,b) => a * b,
          '/': (a,b) => a / b,
        }
        return result[sign](a,b);
      }

      setCalc({
        //If number is NaN or infinity, user most likely divided by 0
      res: isFinite(math(calc.res,calc.num,calc.sign))  ? math(calc.res,calc.num,calc.sign) : "Why did you divide by 0", 
      sign: '',
      num:0
    })
  }

  //User clicks percentage
  const percentClick = ()  => {
    setCalc({
      num: (calc.num/100),
      res: (calc.res/100),
      sign: ''
    })
  }

  //User clicks +- button
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num *-1 : 0,
      res: calc.res ? calc.res *-1 : 0,
      sign: ''
    })
  }



  //btnHandler
  const handleClick = () => {

    const results = {
      '.': decimalClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '+': signClick,
      '-': signClick,
      '=': equalsClick,
      '%': percentClick,
      '+-': invertClick
    } 
    
    console.log( " inputted " + value);
    if (results[value]) {
      return results[value]() //returns a nested function using same logic as const changedName | e.g inputting '.' returns decimalClick() 
    } else {
      handleClickNum()
    }
    
  }


  return (
    //className has two classes as they are separated with a space
    <button onClick={handleClick} className={`${getStyleName(value)} button`}>{value}</button>
    
  ) 
}

export default Button