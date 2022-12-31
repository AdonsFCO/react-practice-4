import { useState } from 'react';
import InputCard from './components/InputCard/InputCard'
import Table from "./components/Table/Table"
import "./style.css";
function App() {
  
/*C = cantidad cuota
V = monto prestamo
N = numero cuotas
i = interes mensual (interesanual/12)/100
  */
    const [state, setState] = useState({C:0, V:"", N: "", i:''});

  return (
    <div className="App">
      <InputCard state={state} setState={setState} />
      <Table />
    </div>
  )
}

export default App
