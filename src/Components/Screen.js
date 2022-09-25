//Using react-textfit API to adjust text size to fit in an element easily
import { useContext } from "react"
import { CalcContext } from "../Context/CalcContext"
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);
  return (
    //Ternary operators state if calc.num is accessable it takes calc.num, else calc.res
    <Textfit className='screen' max ={70} mode="single"> {calc.num ? calc.num : calc.res}</Textfit>
    
  )
}

export default Screen