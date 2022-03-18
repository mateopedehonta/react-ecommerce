import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";
const Contador =({stock})=>{
    const [count,setCount] = useState(0)
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

    return(<>
        <div className="contador">
            <button className="button" onClick={restarCount}>-</button>
            <p className="count">{count}</p>
            <button className="button" onClick={sumarCount}>+</button>
        </div>
        <Link to={'/cart'}><button> Agregar al carrito</button></Link>
        </>
        
    )
}

export default Contador