import React , {useState, useEffect} from 'react'

function ChildComponent({ getData }){
    const [comments , setComments] = useState([])

    useEffect(() => {
        console.log('component child re-render')


        getData('comments')
            .then(res => res.json())
            .then(res => {
                let comments = res.data
                setComments(comments)
            })
    },[getData])
    return(
        <>
            <h1>all comment</h1>
            <p>{JSON.stringify(comments)}</p>
        </>
    )
    
    
}

export default ChildComponent