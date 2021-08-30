import react , { useState } from 'react'


function Example(){

    const initalValue = () => {
        let total = 0
        for (let i = 0; i < 1000000; i++) {
            total += i
        }
        console.log('render component ')
        return total
    }


    // để tránh render componet lại khi có một hàm xử lý phức tạp thì chúng ta sử arrow function để tránh re-render
    const [count, setcount] = useState(() => { initalValue() }) 

    let handleOnclick = () => {
        setcount((prevState)=>{
            return prevState + 1
        }) // để tránh đồng bộ ta sử dụng tham số thứ 1 là một function

        setcount((prevState)=>{
            return prevState + 1
        })
    }

    return(
        <>
            <h4>function componet</h4>
            <p>you clicked {count}</p>
            <button onClick={handleOnclick}>Click me</button>
        </>
    )
}



export default Example