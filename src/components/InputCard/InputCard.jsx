import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";
import { getAmortizationTable } from "../../util/calculator";
const InputCard = ({ state, setState }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
  };

  function handleClick() {
    setState({ ...state, rows: getAmortizationTable(state.V, state.N, state.i) });

    console.log(state.rows)
  }

  function handleChange(e, setter, currentState) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value == "" || regex.test(e.target.value)) {
      setter((prevState) => ({
        ...prevState,
        [currentState]: e.target.value,
      }));
    }
  }

  return (
    <Card>
      <CardContent style={style}>
        <Typography variant="h5">Calculadora de cuotas de prestamo</Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            variant="outlined"
            label="Monto"
            size="small"
            style={{ marginTop: "3px", marginBottom: "1em" }}
            InputProps={{
              endAdornment: <InputAdornment position="start">$</InputAdornment>,
  
            }}
            onChange={(e) => handleChange(e, setState, "V")}
            shrink
            value={state.V}
          ></TextField>
          <TextField
            variant="outlined"
            label="Cuotas"
            size="small"
            style={{ marginTop: "3px", marginBottom: "1em" }}
            onChange={(e) => handleChange(e, setState, "N")}
            shrink
            value={state.N}
          ></TextField>
          <TextField
            variant="outlined"
            label="Interes"
            size="small"
            style={{ marginTop: "3px", marginBottom: "1em" }}
            onChange={(e) => handleChange(e, setState, "i")}
            shrink
            value={state.i}
          ></TextField>
        </div>
        <Button variant={"contained"} color="primary" onClick={handleClick}>
          Calcular
        </Button>
      </CardContent>
    </Card>
  );
};

export default InputCard;
