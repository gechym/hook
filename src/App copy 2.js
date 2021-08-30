import './App.css';
import React, { useState, useMemo, useCallback } from 'react'
import ChildComponent from './components/childComponent';


function App(){
  const [count , setcount] = useState(0)
  const [name , setName] = useState('bao')

  let getData = useCallback(() => {
    fetch('http://reqres.in/api/users')
  },[])
  
  
  return(
    <>
      <h1>React.memo()</h1>
      <p>you click {count} time</p>
      <button onClick={() => {setcount(count + 1)}} >Click me</button>
      <ChildComponent name={name} getData={getData}/>
    </>
  )
}


export default App;
