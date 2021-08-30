import React , { useState , useEffect } from 'react'

function Example(){
    const [count, setCount] = useState(0)
    const [action, setAction] = useState('')
    const [scrollPosition , setScrollPosition] = useState(0)

    useEffect(()=>{
        // useEffect này đóng vai trò như một componetdidMount & componentDidUpdate 

        document.title = `you click ${count} times`
        console.log('component re-render')
    }, [count]) // tham số thứ 2 của useEffect khi truyền vào một array có các phần tử là cái biến của state 
        // khi đó nó componet sẽ được render lại nến biến state của nó thay đổi ... 




    useEffect(()=>{
        fetch(`https://reqres.in/api/${action}`)
            .then((res) => {console.log(res)})
            .catch((err) => {console.log(err)})
    }, [action]) 

    let handleScroll = () => {
        setScrollPosition(window.scrollY)
    }

    useEffect(()=>{
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []) 

    
    
    
    console.log('component mount')
    return(
        <div style={{height: '3000px'}}>
            <h4>useEffect</h4>
            <p>you click {count} times</p>
            <p style={{position: 'fixed', top : '50%' }}> value y : {scrollPosition}</p>
            <button onClick={()=>{setCount(count + 1)}}>Click me</button>
            <button onClick={()=>{setAction('users')}}>get users</button>
            <button onClick={()=>{setAction('comments')}}>get comments</button>
        </div>
    )
}

export default Example