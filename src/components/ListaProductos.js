import React, {Component, Fragment} from "react";
import Producto from "./Producto";

class ListaProductos extends Component{

    state = {
        productos: []
    }

    componentDidMount(){
        console.log("componentDidMount");

        //setState
        //se usa para cambiar valores del objeto state principal, este ultimo no es mutable y no debe
        // cambiarse de forma directa.
        this.setState({
                productos: [
                    {id:"1", nombre: "Camisa Nodejs", precio: 30},
                    {id:"2", nombre: "Camisa Nodejs", precio: 40},
                    {id:"3", nombre: "Camisa Nodejs", precio: 50},
                    {id:"4", nombre: "Camisa Nodejs", precio: 60},
                ]
            }
        )
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    render(){

        const {productos} = this.state;
        console.log(productos)

        return (
            <Fragment>
                <h3>Lista de Productos</h3>

                {productos.map(producto => (
                    <Producto 
                        key={producto.id}
                        producto={producto} 
                    />
                ))}

           </Fragment>
        );
    }
}
export default ListaProductos
