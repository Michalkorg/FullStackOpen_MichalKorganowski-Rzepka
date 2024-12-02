import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

export default App