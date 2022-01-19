import React, { useState } from 'react';
import './App.css';
import Name from './components/Name';
import { getAge } from './actions'
import { connect } from "react-redux";

function App(props) {

const [values, setValues] = useState('')

const handleChanges = (e) => {
  setValues(e.target.value)
}
const handleClick = () => {
  props.dispatch(getAge(values))
}
  return (
    <div className="App">
      <h1>Predict your age</h1>
      <input placeholder='Type your first name!' onChange={handleChanges} ></input>
      <button onClick={handleClick}>Predict!</button>
      <Name />
    </div>
  );
}

export default connect(null) (App);