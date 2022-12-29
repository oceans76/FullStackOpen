import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setAverage(average+1)
    setTotal(total+1)
    setGood(good + 1)
  }
  const handleNeutral = () => {

    setTotal(total+1)
    setNeutral(neutral+1)
  }
  const handleBad= () => {
    setAverage(average-1)
    setTotal(total+1)
    setBad(bad+1)
  }
 

  return (
    <div>
      <h1>Course Feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <h2>Results</h2>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Average:{average/total}</p>
      <p>Positive:{good/total*100}</p>
    
    </div>
  )
}

export default App
