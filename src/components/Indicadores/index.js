
import React, { useState, useEffect } from 'react';
import { Calendar, Spin, Form, Card,Table } from 'antd';
import ConstruirFormularios from '../Elementos/ConstruirFormularios'


function Indicadores() {
    const [form] = Form.useForm();


    const [state, setState] = useState({})

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 1500)
    // }
    //     , [])

    const campos = [
        { label: 'Nombre empleado', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'NombreEmpleado', type: 'text', classname: 'col-md-4' },
        { label: 'Apellido empleado', placeholder: 'Ingrese el Apellido del empleado', required: true, name: 'NombreEmpleado', type: 'text', classname: 'col-md-4' },
        { label: 'Telefono', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'NombreEmpleado', type: 'text', classname: 'col-md-4' },
        { label: 'DUI', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'NombreEmpleado', type: 'text', classname: 'col-md-4' },
        { label: 'Fecha de nacimiento', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'NombreEmpleado', type: 'text', classname: 'col-md-4' },
        //   { label: 'Nombre empleado', placeholder: 'Ingrese el nombre del empleado', required: true, name: '', DS_Option: '', type: '', classname: '', options: '' },

        //  { label: 'Nombre empleado', placeholder: 'Ingrese el nombre del empleado', required: true, name: '', DS_Option: '', type: '', classname: '', options: '' }

    ]

    return (
        <div className="padding-container">

            <Card title='Data Maestra Empleados'>
                <div className='row'>
                    <ConstruirFormularios state={state} campos={campos} setState={setState} form={form} />
                </div>

                <div>
                    <Table>

                    </Table>
                </div>

            </Card>



        </div>
    );
}

export default Indicadores;