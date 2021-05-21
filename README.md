# Proyecto React JS 

### Instalación del proyecto

* El proyecto requiere de [Node.js](https://nodejs.org/).
* Clonar el repositorio 
* Instalar lar dependencias
    * Colocarse dentro de la carpeta del proyecto ``front-react``
    * Haciendo uso de la consola de Windows(CMD) ejecutar el comando:
```sh
$ npm i
```
* Levantar el proyecto
    * Haciendo uso de la consola ejecutar el comando:
```sh
$ npm start
```



### Estructura del proyecto

La aplicación reside dentro de la carpeta ``front-react/src`` . Dentro de ella nos encontraremos la siguiente estructura: 

 * src/components
    * Elementos 
        * Calendario.js
        * Cards.js
        * Tablas.js
    * Menu
        * Accesos.js
        * DataMenu.js
        * Enrutador.js
        * Header.js
        * index.js
        * MenuLateral.js
        * UserPanel.js


### Librerías

El proyecto cuenta con librerías con las cuales podrá comenzar a desarrollar sus componentes:

| Librería | Propósito |
| ------ | ------ |
| [React Router](https://reactrouter.com/web/guides/quick-start) | Permite la navegación entre Componentes de la aplicación |
| [React Redux ](https://es.redux.js.org/) | Redux es un contenedor predecible del estado de aplicaciones JavaScript. | 
| [Styled Components ](https://styled-components.com/) | Facilita el uso del CSS en los componentes de nuestra aplicación | 
| [ Ant Desing ](https://ant.design/) | Proporciona componentes visuales como tablas,cards,etc. |
| [ Axios ](https://www.npmjs.com/package/axios) | Utilizando Axios, es muy sencillo enviar peticiones a endpoints REST | 


#### Recomendaciones 

* Se recomienda no crear componentes demasiado complejos
* Separe los componentes complejos, en componentes más pequeños
* Se recomienda usar componentes de tipo Función, ya que estos presentan como mejora los **Hooks**


### Notas

* El menú se carga a partir de los datos en el archivo ``DataMenu.js``
* El proyecto ya incluye **Bootstrap 3**
