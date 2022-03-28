import React, { useState } from "react";
import formComponent from "./index.js";
import Components from "./sign";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Form() {
  const [required, setRequired] = useState(false);
  const [resData, setResData] = useState(formComponent);
  const setValue = (id, value) => {
    // console.log("form", id, value);
    resData.forEach(item => {
      if (item.id === id) {
        item.value = value;
      }
    });
    setResData([...resData]);
  };
  console.log(resData);
  const clickHandler = e => {
    e.preventDefault();
    let newArr = [];
    resData.forEach(item => {
      newArr.push({ id: item.id, value: item.value });
    });
    if (
      newArr[0].value &&
      newArr[1].value &&
      newArr[2].value &&
      newArr[3].value &&
      newArr[4].value &&
      newArr[5].value &&
      newArr[6].value !== undefined
    ) {
      alert("Data Store In Console");
      console.log(newArr);
      setRequired(false);
    } else {
      setRequired(true);
    }

    // for (let i = 0; i < resData.length; i++) {
    //   newArr.push({ id: resData[i].id, value: resData[i].value });
    // }

    // let dd = resData.map(item => {
    //   return { id: item.id, value: item.value };
    // });
    // console.log(dd);
  };
  return (
    <div className="formContainer">
      {required ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            Please Fill Out All Require Field — check it out!
          </Alert>
        </Stack>
      ) : null}

      {resData.map((data, index) => (
        <div className="fullform" key={index}>
          <Components data={data} setValue={setValue} handler={clickHandler} />
        </div>
      ))}
      <Button variant="contained" onClick={clickHandler}>
        Submit
      </Button>
    </div>
  );
}
export default Form;
