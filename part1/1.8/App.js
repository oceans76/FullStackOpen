import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
const Statistics = (props) => {
  return (
  <div><p>{props.text}{props.math}{props.percent}
  </p>

  </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

 

  return (
    <div>
      <h1>Course Feedback</h1>
      <Button handleClick={() => {
      setAverage(average+1)
      setTotal(total+1)
    setGood(good + 1)}} text="Good"/>
      <Button handleClick={() => {setTotal(total+1)
    setNeutral(neutral+1)}} text="Neutral" />
      <Button handleClick={() =>  {setAverage(average-1)
    setTotal(total+1)
    setBad(bad+1)}} text="Bad" />
      <h2>Statistics</h2>
      <Statistics math={good} text="Good:" />
      <Statistics math={neutral} text="Neutral:" />
      <Statistics math={bad} text="Bad:" />
      <Statistics math={total} text="Total:" />
      <Statistics math={average/total} text="Average:" />
      <Statistics math={good/total*100}text="Positive:" percent="%" />
    
    </div>
  )
}

export default App
