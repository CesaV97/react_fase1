import { useState} from 'react'

function App() {
  const[counter, setCounter] = useState(0)
  const[history, setHistory] = useState([])
  const[text,setText] = useState("")

  // 1) + 4 color dinamico (simple)
  let color = "black";
  if(counter === 0) color = "gray";
  else if(counter <=4)color = "green";
  else if (counter <= 9) color ="orange";
  else color = "red";

  // 2) Mensaje dinamico
  let level = "Low";
  if(counter >= 10) level = "High";
  else if (counter >= 5) level = "Medium"

  //Suma
  function suma(){
    setCounter(counter + 1)
    setText("hola mundo")
  }
  //Resta
  function resta(){
    if(counter > 0){
      setCounter(counter - 1)
    }
    setText("Hola mundo 2")
  }
  //Reset
  function reset(){
    setCounter(0)
  }
  //3) Historial (guardar valor actual)
  function saveHistory(){
    const newEntry = {
      value: counter,
      time: new Date().toLocaleTimeString()
    };
    setHistory((prev) => [...prev,newEntry])
  }
  // Clean history
  function cleanHistory(){
    setHistory([]);
  }
  // Remove last register
  function removeLastone(){
    setHistory((prev)=> prev.slice(0,-1))
  }

  return (

    <div style={{fontFamily: "Arial", padding: 16}}>
      <h1 style={{color}}>
        Contador: {counter} 
      </h1>
      <h3>Prueba: {text}</h3>
      <div>
        <button onClick={suma}> sumar </button>
        <button onClick={resta} disabled={counter===0}> Restar </button>
        <button onClick={reset}> Reset </button>
        <button onClick={saveHistory}>Save history</button>
        <button onClick={cleanHistory} disabled={history.length===0}> Clean history</button>
        <button onClick={removeLastone} disabled={history.length===0}> remove</button>
      </div>
      <h3>Historial:</h3>
      {history.length===0 ?(
        <p>No hay valores guardados.</p>
      ):(
        <ul>
          {history.map((item,index)=> (
            <li key={index}>
              #{index + 1} Valor:{item.value} | Hora:{item.time}
              </li>
            ))}
      </ul>
    )}
    </div>
  );
}

export default App
