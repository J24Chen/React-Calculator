import { createContext, useState } from "react"
//CalcProvider and calcContext to manage the state of displaying calculator screen
//(React.Context API is another way of passing props without having to apss it down each different children )
export const CalcContext = createContext()

const CalcProvider = ({children}) => {
    const [calc,setCalc] = useState({
        sign: "", //The sign of the operation
        num:0, // The current number displayed on the calculator screen
        res:0  //A reserved number, meant for holding the number when doing operations
    })

    const providerValue = {
        calc,setCalc
    }
  return (

    <CalcContext.Provider value = {providerValue}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider