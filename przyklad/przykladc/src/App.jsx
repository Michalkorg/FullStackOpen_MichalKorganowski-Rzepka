import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import App from './App'

let counter = 1
const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
  setInterval(() => {
    refresh()
    counter += 1
  }, 1000)
}
const Hello =  ({name, age}) => {
  const bornYear = () => newDate().getFullYear() - age


  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
  }

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

