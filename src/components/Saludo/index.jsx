import { useState } from "react"


const Saludo = ({usuario, mensaje}) => {
    const [mostrarMensaje, setMostrarMensaje] = useState(false)
    return (
        <div>
            <h1>{usuario}</h1>
            <button onClick={() => setMostrarMensaje(mostrarMensaje => !mostrarMensaje)}>Mostrar saludo</button>
            {
                mostrarMensaje ? <span>{mensaje}</span> : "sin mensaje"
            }
        </div>
    )
}

export default Saludo