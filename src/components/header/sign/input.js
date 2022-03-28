import { React, useState } from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ id, placeholder, setValue }) {
  const [require, setrequire] = useState();
  const handleChange = e => {
    if (e.target.value === "") {
      setrequire("Field can't be empty");
    } else {
      setrequire(false);
    }
    setValue(id, e.target.value);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        size="small"
        label={placeholder}
        onChange={handleChange}
        variant="outlined"
      />
      <div className="required-field">{require}</div>
    </>
  );
}
