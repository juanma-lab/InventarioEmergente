import React,{ useState } from 'react';
import { Table } from "ant-table-extensions";

const size = 500
let dataSource = []

for (let index = 0; index < size; index++) {
    dataSource.push({
        key: index,
        name: `Nombre - ${index+1}`,
        age: index,
        address: `Downing Street ${index+1}`,
    }) 
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];


function Tablas() {
    const [editingKey, setEditingKey] = useState('');
    return (
        <div className="padding-container">
            <h1>Table</h1>
            <Table
                dataSource={dataSource}
                columns={columns}
                exportable 
                size="small"
                
            />
        </div>
    );
}

export default Tablas;