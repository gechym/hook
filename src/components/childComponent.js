import React, {useEffect}  from 'react'

function ChildComponent(){
    useEffect(() => { // same same componentdidmount
        console.log('oh yeard i am render')
    })


    return(
        <>
            <h1>Hello world, i am child-Component</h1>
        </>
    )
    
    
}
    // react.memo nó sẽ so sánh 
    // nông(shallow comparision) 
    // các props được truyền vào nếu khác nhau thì 
    // component được re-reder lại
export default React.memo(ChildComponent)


// ngoài ra nếu chúng ta không thích so sánh 
//kiểu react thì chúng ta có thể truyền vào một 
//function và so sánh theo cách của mình và trả về true nếu muốn render và ngược lại