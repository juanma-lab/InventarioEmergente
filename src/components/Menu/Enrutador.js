import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import Tables from './../Elementos/Tablas'
import Cards from './../Elementos/Cards'
import Calendario from './../Elementos/Calendario'
import Dashboard from './../Elementos/index'
import Empleado from './../Empleados/index'
import Cliente from './../Clientes/index'
import Producto from './../Inventario/index'
import Indicadores from './../Indicadores/index'
import Productos from './../Productos/index'
import Proveedor from './../Proveedor/index'
function Enrutador(props) {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/Tables">
                <Tables/>
            </Route>
            <Route path="/Cards">
                <Cards/>
            </Route>
            <Route path="/Calendario">
                <Calendario/>
            </Route>
            <Route path="/Empleado">
                <Empleado/>
            </Route>
            <Route path="/Cliente">
                <Cliente/>
            </Route>
            <Route path="/Inventario">
                <Producto/>
            </Route>
            <Route path="/Indicadores">
                <Indicadores/>
            </Route>
            <Route path="/Productos">
                <Productos/>
            </Route>
            <Route path="/Proveedor">
                <Proveedor/>
            </Route>
            <Route path="/">
                <Dashboard/>
            </Route>
        </Switch>
    );
}

function About() {
    return <h1>Componente Ejemplo</h1>;
}

function Home() {
    return <h1>Dashboard</h1>;
}

export default Enrutador;