import './App.css';
import React, { useState, useMemo, useCallback } from 'react'
import ChildComponent from './components/childComponent';


function App(){
  const [user , setUser] = useState([])

  let getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`)
  },[])

  let handleOnClick = (type) => {
    getData('users')
      .then((res) => res.json())
      .then((res) => {
        let user = res.data
        setUser(user)
      })
  }

  
  return(
    <>
      <h1>useCallBack </h1>
      <p>all users {JSON.stringify(user)} </p>
      <button onClick={() => {handleOnClick()}}>Click me</button>
      <ChildComponent getData={getData}/>

    </>
  )
}


export default App;
