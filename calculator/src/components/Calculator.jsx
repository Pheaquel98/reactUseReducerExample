import React, { useReducer } from "react"
import "./Calculator.css"

function reducer(state, action) {
  switch (action.type) {
    case "SET_NUMBER1":
      return { ...state, number1: action.payload }
    case "SET_NUMBER2":
      return { ...state, number2: action.payload }
    case "SET_RESULT":
      return { ...state, result: action.payload }
    default:
      throw new Error("Invalid action type!")
  }
}

const initialState = {
  number1: 0,
  number2: 0,
  result: 0,
}

//! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNumber1Change = (e) => {
    dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) })
  }

  const handleNumber2Change = (e) => {
    dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) })
  }

  const handleCalculate = (e) => {
    switch (e.target.value) {
      case "+":
        dispatch({ type: "SET_RESULT", payload: state.number1 + state.number2 })
        state.number1 = 0
        state.number2 = 0
        break
      case "-":
        dispatch({ type: "SET_RESULT", payload: state.number1 - state.number2 })
        state.number1 = 0
        state.number2 = 0
        break
      case "/":
        dispatch({ type: "SET_RESULT", payload: state.number1 / state.number2 })
        state.number1 = 0
        state.number2 = 0
        break
      case "*":
        dispatch({ type: "SET_RESULT", payload: state.number1 * state.number2 })
        state.number1 = 0
        state.number2 = 0
        break
      default:
        break
    }
  }
  return (
    <div className="calculator-container">
      <h1>Calculator - useReducer</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            onChange={handleNumber1Change}
            type="number"
            id="number1"
            value={state.number1}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input
            className="form-input"
            onChange={handleNumber2Change}
            type="number"
            id="number2"
            value={state.number2}
          />
        </div>
        <div className="button-group">
          <button onClick={handleCalculate} value={"/"} className="form-button">
            /
          </button>
          <button onClick={handleCalculate} value={"*"} className="form-button">
            *
          </button>
          <button onClick={handleCalculate} value={"+"} className="form-button">
            +
          </button>
          <button onClick={handleCalculate} value={"-"} className="form-button">
            -
          </button>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input
            className="form-input"
            value={state.result}
            type="number"
            id="result"
            readOnly
          />
        </div>
      </div>
    </div>
  )
}

export default Calculator
