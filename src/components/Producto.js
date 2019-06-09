import React from "react";

const Producto = ({producto}) =>{

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <li>
                Precio: {producto.precio}
            </li>
        </div>
    )
    
}

export default Producto
