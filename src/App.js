import './App.css';
import React, { useState, useMemo } from 'react'
import Example from './components/Example'


let expensiveFunction = (number) => { // hàm này mô phỏng một hàm xử lý phức tạp 
  console.log('bất đầu')
  let start = new Date()

  while(new Date() - start < 3000);

  console.log('kết thúc', + new Date() - start ,'ms')

  return number * number

  // khi component re-render
  //thì phải gọi lại hàm đấy 
  //như giá trị truyền vào 
  //vẫn không thay đổi 
}

function App(){
  const [count , setCount] = useState(0)
  const [num , setNum] = useState(20)

  // useMemo sử dụng kỷ thuật lưu case khi khá trị đó truyền vào không đổi thì nó sẻ trả về nhanh hơn 
  let number = useMemo(()=> {
    return expensiveFunction(num)
  },[num]) // hàm này nhận 2 tham số 1 fn vs một array nếu để [] thì nó chỉ render lại một lần duy nhất
  
  return(
    <>
      <h1>useMemo </h1>
      <p>you click {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
      <button onClick={() => {setNum(num + 1)}}>Click me to change value num</button>

      <p>Number {number}</p>
    </>
  )
}


export default App;
