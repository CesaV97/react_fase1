import { useState} from 'react'

function App() {
  const[counter, setCounter] = useState(0)

  function suma(){
    setCounter(counter + 1)
  }
  
  function resta(){
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <div>
      <h1>Contador: {counter} </h1>
      <button onClick={suma}>
        sumar
      </button>
      <button onClick={resta}
      disabled={counter===0}>
        Restar
      </button>
    </div>
  )
}

export default App
