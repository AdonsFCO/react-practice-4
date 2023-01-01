import { useState } from "react";
import InputCard from "./components/InputCard/InputCard";
import TableComponent from "./components/Table/TableComponent";
import { Alert } from "@mui/material";
import "./style.css";

function App() {
  /*C = cantidad cuota
V = monto prestamo
N = numero cuotas
i = interes mensual (interesanual/12)/100
  */
  const [state, setState] = useState({ C: "", V: "", N: "", i: "", rows: [] });

  return (
    
    <div className="App">
    
      <div className="inputBox">
      <InputCard state={state} setState={setState} />
        <div>
          <Alert severity="info">
            Los resultados de esta simulación son aproximados.
          </Alert>
          <Alert severity="info">
            Se consideran meses de 30 días y años de 360 días.
          </Alert>
          <Alert severity="info">
            No se contempló período de gracia y el primer vencimiento es a 30
            días.
          </Alert>
          <Alert severity="info">
            En caso de préstamos hipotecarios, la cuota mensual aumentaría
            producto del seguro de vida y de propiedad, no incluidos en el
            cálculo.
          </Alert>
        </div>
      </div>
      {state.rows.length != 0 && <TableComponent rows={state.rows} />}
    </div>
  );
}

export default App;
