import React from "react";

//stateless component
// al iniciar el function component con parametro, este recogera los props que vengan de la declaración 
// principal del o los componentes

const Header = (props) =>{
    return (
        <header>{props.titulo}</header>
    );
}

export default Header