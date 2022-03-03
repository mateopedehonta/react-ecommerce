import React from "react";
import {useState} from 'react'
const Catalogo =()=>{
    const [count,setCount] = useState(0)

    const restarCount =()=>{
        setCount(count-1)
    }
    const sumarCount =()=>{
        setCount(count+1)
    }

    return(
        <div className="catalogo">
            <button className="button" onClick={restarCount}>-</button>
            <p className="count">{count}</p>
            <button className="button" onClick={sumarCount}>+</button>
        </div>
    )
}

export default Catalogo