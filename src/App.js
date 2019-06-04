import React, {Fragment} from 'react';
import PrimerComponente from './components/PrimerComponente';
import './App.css';

function App() {

    const empleado = {
        nombre: 'Pedro Perez',
        ocupacion: 'Herrero'
    }

    return ( 
        ///Fragment se usa para cubrir los elementos que formen parte del return, 
        //estos no pueden estar sueltos como tal, entonces en vez de cubrirlos con un <div>
        //se usa Fragment para ese proposito
        <Fragment>
            <PrimerComponente />
            <PrimerComponente />
            <PrimerComponente />
            <PrimerComponente />
        </Fragment>
    );
}

export default App;