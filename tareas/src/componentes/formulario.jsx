import { useState } from "react"
import "../estilos/formulario.css"
import { v4 as uuidv4 } from "uuid";


function Formulario(props){

    const[input,setInput]=useState("")
    const leer=e=>{
        setInput(e.target.value)
    }
    const quitar=(e)=>{
        e.preventDefault()
        const nuevatarea={
            id: uuidv4(),
            texto:input,
        }
        props.onSubmit(nuevatarea)
    }

    return(
        <div>
            <form action="" onSubmit={quitar}>
                <input autoFocus required onChange={leer} type="text" placeholder="Ingresa tu Tarea"/>
                <button>Enviar</button>
            </form>
        </div>
    );

}
export default Formulario