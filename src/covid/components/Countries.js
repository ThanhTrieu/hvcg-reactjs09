import React from 'react';
import { Row, Col, Table } from 'antd';

// tao cot cho bang
const columns = [
    {
        title: 'Quoc gia',
        dataIndex: "Country",
        key: "Country"
    },
    {
        title: 'Ma QG',
        dataIndex: "CountryCode",
        key: "CountryCode"
    },
    {
        title: 'Moi nhiem benh',
        dataIndex: "NewConfirmed",
        key: "NewConfirmed"
    },
    {
        title: 'Tong ca nhiem benh',
        dataIndex: "TotalConfirmed",
        key: "TotalConfirmed"
    },
    {
        title: 'Moi tu vong',
        dataIndex: "NewDeaths",
        key: "NewDeaths"
    },
    {
        title: 'Tong ca tu vong',
        dataIndex: "TotalDeaths",
        key: "TotalDeaths"
    },
    {
        title: 'Moi khoi benh',
        dataIndex: "NewRecovered",
        key: "NewRecovered"
    },
    {
        title: 'Tong ca chua khoi',
        dataIndex: "TotalRecovered",
        key: "TotalRecovered"
    }
];

const data = [];

class CountriesVirus extends React.PureComponent {
    render() {
        return (
            <Row style={{ margin: '20px 0px' }}>
                <Col span={24}>
                    <h2 style={{textAlign: 'center'}}>Thong tin virus corona cac nuoc tren the gioi</h2>
                    <Table columns={columns} dataSource={data} />
                </Col>
            </Row>
        )
    }
}
export default CountriesVirus;