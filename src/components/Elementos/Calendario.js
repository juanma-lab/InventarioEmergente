import React, { useState, useEffect } from 'react';
import { Calendar, Spin } from 'antd';


function Calendario() {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    }
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }
        , [])

    return (
        <div className="padding-container">
            {
                loading ?
                    <>
                        <div className="mySpinner">
                            <Spin></Spin>
                        </div>
                    </>
                    :
                    <>
                        <h1>Componente de Calendario</h1>
                        <div className="site-card-wrapper">

                            <Calendar onPanelChange={onPanelChange} />
                        </div>
                    </>

            }


        </div>
    );
}

export default Calendario;