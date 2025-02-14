import { useReducer } from 'react'

type StateType = {
  count: number
}


type ActionType = 
| { type: 'INC'; payload: number }
| { type: 'DEC'; payload: number }

const initialState:StateType = {
  count: 0
}
 
const reducer = (state:StateType, action:ActionType): StateType =>{
  switch (action.type) {
    case 'INC':
      return {count: state.count + action.payload}
    case "DEC":
      return {count: state.count - action.payload}
    default:
      return state
  }

}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = (): void => {
    dispatch({type: 'INC', payload: 1});
  };

  const decrement = (): void => {
    dispatch({type: 'DEC', payload: 1});
  }
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App