import React, { useState, useEffect } from 'react';
import { Calendar, Spin } from 'antd';


function Dashboard() {

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
                        <div className="site-card-wrapper">
                            <div className="padding-container">
                                <h1>Torre de control</h1>
                            </div>

                        </div>
                    </>

            }


        </div>
    );
}

export default Dashboard;