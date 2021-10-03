import React from 'react';
import { Row, Col, Card } from 'antd';

class GlobalVirus extends React.PureComponent {
    render(){
        return (
            <Row style={{ margin: '20px 0px' }}>
                <Col span={24}>
                    <h2 style={{textAlign: 'center'}}>Thong tin virus corona tren toan cau</h2>
                    <Row>
                        <Col span={8}>
                            <Card title="Nhiem benh" bordered={true}>
                                <p>So ca moi nhiem: 2123223</p>
                                <p>Tong so ca nhiem: 4353444</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Tu vong" bordered={true}>
                                <p>So ca moi tu vong: 2123223</p>
                                <p>Tong so ca tu vong: 4353444</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Khoi benh" bordered={true}>
                                <p>So ca moi khoi benh: 2123223</p>
                                <p>Tong so ca khoi benh: 4353444</p>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default GlobalVirus;