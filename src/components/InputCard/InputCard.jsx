import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const InputCard = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
  };
  const[amount, setAmount] = useState("");
  const[cuotes, setCuotes ] = useState("");
  const[interst, setInterest]= useState("");



  const handleChange = (e,setNum) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value == "" || regex.test(e.target.value)) {
      setNum(e.target.value);
    }
  };

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
            onChange={(e) => handleChange(e, setAmount)}
            value={amount}
            
          ></TextField>
          <TextField
            variant="outlined"
            label="Cuotas"
            size="small"
            style={{ marginTop: "3px", marginBottom: "1em" }}
            onChange={(e) => handleChange(e, setCuotes)}
            value={cuotes}
            
          ></TextField>
          <TextField
            variant="outlined"
            label="Interes"
            size="small"
            style={{ marginTop: "3px", marginBottom: "1em" }}
            onChange={(e) => handleChange(e, setInterest)}
            value={interst}
          ></TextField>
        </div>
        <Button variant={"contained"} color="primary">
          Calcular
        </Button>
      </CardContent>
    </Card>
  );
};

export default InputCard;
