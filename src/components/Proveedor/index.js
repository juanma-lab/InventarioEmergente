import React, { useState, useEffect } from 'react';
import { Calendar, Spin, Form, Card, Table, Button, Tooltip } from 'antd';
import ConstruirFormularios from '../Elementos/ConstruirFormularios'
import { path } from '../../config';
import Axios from 'axios';

let editar = 0
function Proveedor() {
    const [form] = Form.useForm();


    const [state, setState] = useState({})
    const [Empleados, setEmpleados] = useState([])

    useEffect(() => {
        empleados()
    }
        , [])

    const empleados = async () => {

        const URL = `${path}/Proveedor/ObtenerProveedor`

        const nominacion = await Axios.get(URL)
        console.log("resultado de proveedores", nominacion.data);
        setEmpleados(nominacion.data.data)

    }
    const campos = [
        { label: 'Codigo de Provedor', placeholder: 'ID Producto', required: true, name: 'idProveedor', type: 'text', classname: 'col-md-4', disabled:true },
        { label: 'Nombre del Proveedor', placeholder: 'Ingrese el Nombre del proveedor', required: true, name: 'NombreProveedor', type: 'text', classname: 'col-md-4' },
        // { label: 'Numero Telefono', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'Telefono', type: 'text', classname: 'col-md-4' },
        // { label: 'Numero de DUI', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'DUI', type: 'number', classname: 'col-md-4' },
        // { label: 'Fecha nacimiento', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'fecha_nacimiento', type: 'datepicker', classname: 'col-md-4' },
        //   { label: 'Nombre empleado', placeholder: 'Ingrese el nombre del empleado', required: true, name: '', DS_Option: '', type: '', classname: '', options: '' },

        //  { label: 'Nombre empleado', placeholder: 'Ingrese el nombre del empleado', required: true, name: '', DS_Option: '', type: '', classname: '', options: '' }

    ]
    const columns = [
        {
            title: 'Codugo del Proveedor',
            dataIndex: 'idProveedor',
            key: 'idProveedor',

        },
        {
            title: 'Nombre del Proveedor',
            dataIndex: 'NombreProveedor',
            key: 'NombreProveedor',

        }, 
        {
            title: 'Acciones',
            dataIndex: 'Accion',
            key: 'Accion',
            render: (row, e) => (
                <div>
                    <Tooltip title="Editar registro" >
                        <Button type="primary" onClick={() => clickEdit(e)} key={e.IdProducto}  >Editar</Button>
                    </Tooltip>
                </div>
            )
        },
    ]

    const clickEdit = (e) => {
        console.log(e)
        editar = 1
        setState(e)

    }
    const Guardar = async () => {
        if (editar == 1) {
            console.log('editar', state)
            editar = 0
        }
        else {
            if (state.NombreProducto ) {
                console.log('guardar correcto', state)
            }
            else {
                console.log('revise los datos', state)
            }

            editar = 0

        }


        // setState(e)

    }
    const Cancelar = () => {
        editar = 0
        setState({})
        // setState(e)

    }
    return (
        <div className="padding-container">
            <Card>
                <div className='row'>
                    <div className='col-md-8'>
                        <Card title='Data Maestra Empleados'>


                            <div className='row'>
                                <Table columns={columns}
                                    dataSource={Empleados}
                                >

                                </Table>
                            </div>

                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            {/* <div className='row'> */}
                            <ConstruirFormularios state={state} campos={campos} setState={setState} form={form} />
                            {/* </div> */}
                            <div className='row'>
                                <div className='col-md-3'>
                                    <Button type='primary' onClick={Guardar}>Guardar</Button>
                                </div>
                                <div className='col-md-3'>
                                    <Button onClick={Cancelar}>Cancelar</Button>
                                </div>


                            </div>

                        </Card>
                    </div>

                </div>


            </Card>



        </div>
    );
}

export default Proveedor;