import { useState} from 'react'


function getLevel(counter) {
  if (counter >= 10) return "High";
  if (counter >= 5) return "Medium";
  return "Low";
}

function getTextColor(counter) {
  if (counter === 0) return "gray";
  if (counter <= 4) return "green";
  if (counter <= 9) return "orange";
  return "red";
}

function getBackgroundColor(counter){
    if(counter>10)return "#2c2c2c";
    return "white";
  }

function getTitle(counter,level){
    if(counter>10)return"Modo power";
    return `Contador:${counter}(${level})`;

  }

function getReadableTextColor(backgroundColor){
  if(backgroundColor === "white") return "black";
  return "white"
}

//Inicio de aplicación  
function App() {
  const[counter, setCounter] = useState(0)
  const[history, setHistory] = useState([])
  const level = getLevel(counter);
  const color = getTextColor(counter);
  const backColor = getBackgroundColor(counter);
  const title = getTitle(counter, level);
  const backColorReadable = getReadableTextColor(backColor)
  
  //Suma
  function suma(){
    //setCounter(counter + 1)
    setCounter((prev)=>prev + 1)    
  }
  //Resta
  function resta(){
    if(counter > 0){
      //setCounter(counter - 1)
      setCounter((prev)=>prev-1);
    }
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

    <div style={{fontFamily: "Arial", padding: 16, backgroundColor:backColor}}>
      <h1 style={{color}}>{title}</h1>
      <div>
        <button onClick={suma}> sumar </button>
        <button onClick={resta} disabled={counter===0}> Restar </button>
        <button onClick={reset}> Reset </button>
        <button onClick={saveHistory}>Save history</button>
        <button onClick={cleanHistory} disabled={history.length===0}> Clean history</button>
        <button onClick={removeLastone} disabled={history.length===0}> remove</button>
      </div>
      <h3 style={{color:backColorReadable}}>Historial:</h3>
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
