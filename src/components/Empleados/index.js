
import React, { useState, useEffect } from 'react';
import { Calendar, Spin, Form, Card, Table } from 'antd';
import ConstruirFormularios from '../Elementos/ConstruirFormularios'


function Empleado() {
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
        { label: 'Numero Telefono', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'NombreEmpleado', type: 'text', classname: 'col-md-4' },
        { label: 'Numero de DUI', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'NombreEmpleado', type: 'text', classname: 'col-md-4' },
        { label: 'Fecha nacimiento', placeholder: 'Ingrese el nombre del empleado', required: true, name: 'NombreEmpleado', type: 'text', classname: 'col-md-4' },
        //   { label: 'Nombre empleado', placeholder: 'Ingrese el nombre del empleado', required: true, name: '', DS_Option: '', type: '', classname: '', options: '' },

        //  { label: 'Nombre empleado', placeholder: 'Ingrese el nombre del empleado', required: true, name: '', DS_Option: '', type: '', classname: '', options: '' }

    ]
    const columns = [
        {
            title: 'Inicio',
            dataIndex: 'Hora_Inicio',
            key: 'Hora_Inicio',

        },
        {
            title: 'Fin',
            dataIndex: 'Hora_Final',
            key: 'Hora_Final',

        },
        {
            title: 'Descripción',
            dataIndex: 'BD_Turno',
            key: 'BD_Turno',

        },
        {
            title: 'Acciones',
            dataIndex: 'ID_turno',
            key: 'ID_turno',
            // render: (row, e) => (
            //     <div>
            //         <Tooltip title="Editar registro" >
            //             <Button type="primary" onClick={() => clickEdit(e)} key={e.ID_turno} shape="circle" icon={<EditOutlined />} style={{ marginRight: '10px' }} />
            //         </Tooltip>
            //     </div>
            // )
        },
    ]
    return (
        <div className="padding-container">
            <Card>
                <div className='row'>
                    <div className='col-md-8'>
                        <Card title='Data Maestra Empleados'>


                            <div className='row'>
                                <Table columns={columns}>

                                </Table>
                            </div>

                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            {/* <div className='row'> */}
                            <ConstruirFormularios state={state} campos={campos} setState={setState} form={form} />
                            {/* </div> */}
                        </Card>
                    </div>

                </div>


            </Card>



        </div>
    );
}

export default Empleado;