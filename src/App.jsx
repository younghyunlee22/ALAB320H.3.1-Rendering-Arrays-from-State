import { useState } from 'react'
import './App.css'
import { data } from "./data"
import Learner from "./components/learner"

function App() {
  const [learner, setLearner] = useState(data)

  return (
    <>
    <div>
      {learner.map((learner, index) => (
        <div><Learner key={index} learner={learner} /></div>
      ))}
    </div>
    </>
  )
}

export default App
