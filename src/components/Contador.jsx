import React from "react";
import {useState} from 'react'
const Contador =({stock, onAdd})=>{
    const [count,setCount] = useState(1)
    const restarCount =()=>{
        if (count>0){
            setCount(count-1)
        }
    }
    const sumarCount =()=>{
        if (count <=stock ) {
            setCount(count+1)
        }
    }
    const agregar = ()=>{
        onAdd(count)
    }
    return(<>
        <div className="contador">
            <button className="button" onClick={restarCount}>-</button>
            <p className="count">{count}</p>
            <button className="button" onClick={sumarCount}>+</button>
            <button onClick={agregar}>Agregar al carrtio</button>
        </div>
        </>
        
    )
}

export default Contador