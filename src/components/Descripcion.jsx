import { useState } from "react";

const Descripcion = ({item})=>{
    const [estado, setEstado] = useState(false)
    const [display, setDisplay] = useState('dnone')
    const [info, setInfo] = useState('Mostrar detalles')
    // console.log(item);
    // const mostrar=() =>{
    //     console.log(item.des);
    // }
    const cambiarEstado=() =>{
        setEstado(!estado)
        mostrar()
    }
    // let display
    console.log(estado);
    const mostrar =()=>{
        if (estado) {
            // console.log('d');
            setInfo('Mostrar detalles')
            setDisplay('dnone')
        }else{
            setInfo('Guardar detalles')
            setDisplay('d')
           
        }
        
    }
    return(
        <div>
            <p className={display}>{item.des}</p>
            <button className="" onClick={cambiarEstado}>{info}</button>
        </div>
    )
}

export default Descripcion