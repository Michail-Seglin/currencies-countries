import React, { useEffect, useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

function App() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [data, setData] = useState([]);

  async function sendRequest() {
    const response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies');
    setData(response.data);
    console.log(response.data);
  }

  useEffect(() => { sendRequest() }, [])



  return (
    <div className="App">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {data.map((el, index) => <MenuItem value={index} key={index}>{el.Cur_Name}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
