import React, { useState, useEffect } from 'react';
import { Col, Card, Row } from 'antd';
import { Skeleton } from 'antd';


function Cards(props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    })

    return (
        <div className="padding-container">
            {
                // Skeleton se ocultará cuando el timeout(1500ms) hayan transcurrido
                loading ? <Skeleton active />
                    :
                    <>
                    <h1>Componente de Cards</h1>
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                        </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                        </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                        </Card>
                            </Col>
                        </Row>
                    </div>
                </>
            }
        </div>
    );
}

export default Cards;