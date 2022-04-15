import { useState } from "react"

const Form = ()=>{
    const [producto, setProducto] = useState({
        nombre:'',
        id:'',
        img:'',
        stock:'',
        des:'',
        categoria:'',
        precio:''
    })

    const agregarDato =(e)=>{
        // console.log(e.target.name)
        // console.log(e.target.value)
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }
    const enviarDatos =(e)=>{
        e.preventDefault()
        // console.log(e.target);
        console.log(producto);

    }
    return<>
        <form className="form" onSubmit={enviarDatos} >
            <input type="text" placeholder="Nombre" onChange={agregarDato} name="nombre"/>
            <input type="text" placeholder="Descripcion" onChange={agregarDato} name="des" />
            <select  onChange={agregarDato} name="categoria" >
                <option>Seleccionar categoria</option>
                <option value="Maus">Maus</option>
                <option value="Teclado">Teclado</option>
                <option value="Auricular">Auricular</option>
            </select>
            <input type="number" placeholder="precio" onChange={agregarDato} name="precio"/>
            <input type="number" placeholder="Stock" onChange={agregarDato} name="stock"/>
            <input type="text" placeholder="Imagen" onChange={agregarDato} name="img"/>
            <input type="submit" value="Agregar" />
        </form>
    </>    
}

export default Form

