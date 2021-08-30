import './App.css';
import React, { useState, useMemo, useCallback } from 'react'
import ChildComponent from './components/childComponent';
// kỷ thuật hạn chế sử dụng Memo để hạn chế bộ nhớ tối đa
// cách 1 tác component ra riêng

//note : bỏ memo trong childComponent đi để test

function ChildComponentNew(){
    const [count , setcount] = useState(0)

    return (
      <>
        <h1>React.memo()</h1>
        <p>you click {count} time</p>
        <button onClick={() => {setcount(count + 1)}} >Click me</button>
      </>
    )
}





function App(){
  const [count , setcount] = useState(0)
  const [name , setName] = useState('bao')

  let getData = useCallback(() => {
    fetch('http://reqres.in/api/users')
  },[])
  
  
  return(
    <>
      <ChildComponentNew/>
      <ChildComponent name={name} getData={getData}/>
    </>
  )
}


export default App;
