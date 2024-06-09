import './App.css';
import { useState } from 'react'

function App() {

  const array =["one", "two", "three"];

  let [state,setState] = useState(array);

  const handleUp = (e) => {
    const temp = state[0];
    state[0] = state[1]
    state[1] = state[2]
    state[2] = temp
    const array1 = [state[0],state[1],state[2]]
    setState(array1)
  }
  const handleDown = () => {
    const temp1 = state[0];
    const temp2 = state[1];
    state[0] = state[2]
    state[1] = temp1
    state[2] = temp2
    const array1 = [state[0],state[1],state[2]]
    setState(array1)
  }

  return (
    <div className="App">
      <h2>State Change</h2>
      <div className='container'>
        <input className='input-field' value={state[0]} readOnly/>
        <div className='button-container'>
          <button onClick={handleUp}>+</button>
          <button onClick={handleDown}>-</button>
        </div>
      </div>
      <div className='container'>
        <input className='input-field' value={state[1]} readOnly/>
        <div className='button-container'>
          <button onClick={handleUp}>+</button>
          <button onClick={handleDown}>-</button>
        </div>
      </div>
      <div className='container'>
        <input className='input-field' value={state[2]} readOnly/>
        <div className='button-container'>
          <button onClick={handleUp}>+</button>
          <button onClick={handleDown}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
