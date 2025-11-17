const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  // const name = "Peter"
  // const age = 10
  // return (
  //   <div>
  //     <h1>Greeting</h1>
  //     <Hello name="Henry" age = {26+10}/>
  //     <Hello name={name} age = {age}/>
  //     <Footer/>
  //   </div >
  // )

  // const friends = [
  //   {name: "Peter", age: 29},
  //   {name: "Melissa", age: 44}
  // ]

  const friends = [
    "Peter", "Melissa"
  ]

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App