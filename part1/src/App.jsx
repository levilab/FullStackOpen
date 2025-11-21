import { useState } from 'react'


// // const Display = (props) => {
// //   return (
// //     <div>
// //       {props.counter}
// //     </div>
// //   )
// // }

// const Display = ({counter}) => <div>{counter}</div>


// // const Button = (props) => {
// //   return (
// //     <button onClick={props.canBeAnything}>
// //       {props.text}
// //     </button>
// //   )
// // }

// const Button = ({canBeAnything, text}) => <button onClick={canBeAnything}> {text} </button>

// const App = () => {

// //   const [ counter, setCounter ] = useState(0)


// //   setTimeout(
// //     () => setCounter(counter + 1),
// //     1000
// //   )

// //   return (
// //     <div>{counter}</div>
// //   )
// // }

//   const [ counter, setCounter ] = useState(0)
//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {
//     console.log('increasing, value before', counter)
//     setCounter(counter+1)
//   }

//   const decreaseByOne = () => {
//     console.log('decreasing, value before', counter)
//     setCounter(counter-1)
//   }
//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter = {counter}/>
//       <Button canBeAnything={increaseByOne}
//         text = {"plus-" + counter}
//       />
//       <Button canBeAnything={setToZero}
//         text = "zero"
//       />
//       <Button canBeAnything={decreaseByOne}
//         text = {"minus-" + counter}
//       />
//     </div>
//   )  

// }
 


//---------------------- Complex State--------------------

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   // const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//     // const updatedLeft = left + 1
//     // setLeft(updatedLeft)
//     // setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//     // const updatedRight = right + 1
//     // setRight(updatedRight + 1)
//     // setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick = {handleLeftClick} text="left" />
//       <Button onClick = {handleRightClick} text="right" />
//       {right}
//       <p>{allClicks.join('')}</p>
//       {/* <p>total {total}</p>   */}
//       <History allClicks = {allClicks}/>
//     </div>
//   )

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })
//   console.log("current left: ", clicks.left)
//   console.log("current right: ", clicks.right)


//   const handleLeftClick = () => {
//     const newClicks = { 
//       left: clicks.left + 1, 
//       right: clicks.right 
//     }
//     setClicks(newClicks)
//     // setClicks({...clicks, clicks.left+1})
//   }

//   const handleRightClick = () => {
//     const newClicks = { 
//       left: clicks.left, 
//       right: clicks.right + 1 
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )



// Function inside function

const Button = (props) => <button onClick={props.onClick}>{props.text} </button>

const App = () => {
  const [value, setValue] = useState(10)
  
  // const setToValue = (newValue) => () => setValue(newValue)

  const setToValue = (newValue) => { 
    console.log("current value", newValue)
    setValue(newValue)
  }


  return (
    <div>
      {value}

      <Button onClick={() => setToValue(1000)} text ="thousand"/>
      <Button onClick={() => setToValue(0)} text ="reset"/>
      <Button onClick={() => setToValue(value+1)} text ="increment"/>
    </div>
  )
}
export default App