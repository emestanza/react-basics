import React, {Fragment} from 'react';
import PrimerComponente from './components/PrimerComponente';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import ListaProductos from './components/ListaProductos';

function App() {

    const year = new Date().getFullYear();

    return ( 
        ///Fragment se usa para cubrir los elementos que formen parte del return, 
        //estos no pueden estar sueltos como tal, entonces en vez de cubrirlos con un <div>
        //se usa Fragment para ese proposito
        <Fragment>
            <PrimerComponente />
            <Header titulo="header titulo" />
            <ListaProductos></ListaProductos>
            <Footer year={year} />
        </Fragment>

        /**
         * Puedes pasar atributos dentro de un componente como se hace regularmente en un tag HTML, estos
         * se llaman PROPS, para que en el function componente o class comp function puedan acceder a este
         * pasar como parametro un objeto, y asi podras tratarlo como tal
         * */
    );
}

export default App;