
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

//  state
// let state = {
//   count: 0
// }

// component

function App() {
  // state in React
  const [count, setCount] = useState(0);  //[1,2]

  // function onClickHandler(){
  //   setCount(count + 1);
  // }

  return (
   
      // <div>
      //  <button onClick={onClickHandler}>Counter: {count}</button>
      // </div>

      <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>
      
   
  )
}

// component

function CustomButton(props){  // props => state

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App


