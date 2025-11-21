import { useState } from "react";

const Header = ({text}) => <h1>{text}</h1>
const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>

const Statistic = (props) => {
  if (props.good===0 && props.neutral === 0 && props.bad === 0) {
    return "No feedback given"
  }

  const total = props.good + props.neutral + props.bad
  const averageScore = props.score/total
  const positiveRate = (props.good/total)*100
  return (
    <table>
      <tbody>
      <StatisticLine text = "good" value = {props.good}/>
      <StatisticLine text = "neutral" value ={props.neutral}/>
      <StatisticLine text = "bad" value = {props.bad}/>
      <StatisticLine text = "total" value ={total}/>
      <StatisticLine text = "average" value = {averageScore}/>
      <StatisticLine text = "positiveRate" value = {positiveRate + "%"}/>
      </tbody>
    </table>
  ) 
}

const StatisticLine = (props) =>
    <tr> 
      <td>{props.text}</td>
      <td>{props.value}</td>      
    </tr>
  


const App = () => {
  // save clicks on each button
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)

  const setToGood = () => {
    return (
    setGood(good + 1),
    setScore(score + 1)
    )
  }

  const setToNeutral = () => {
    return(
      setNeutral(neutral + 1),
      setScore(score)
    )
  }

  const setToBad = () => {
    return (
      setBad(bad + 1),
      setScore(score-1)
    )
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick = {setToGood} text="good"/>
      <Button onClick = {setToNeutral} text="neutral"/>
      <Button onClick = {setToBad} text="bad"/>
      <Header text="statistics" />
      <Statistic score = {score} good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App