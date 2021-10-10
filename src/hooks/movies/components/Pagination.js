import React from 'react';
import { Row, Col, Pagination } from 'antd';

const PaginationMovies = (props) => {
    return (
        <>
            <Row style={{margin: '30px 0px' }}>
                <Col span={20} offset={2}>
                    <Pagination
                        current={props.current}
                        total={props.totalItems}
                        pageSize={20}
                        showSizeChanger={false}
                        onChange={p => props.changePage(p)}
                    />
                </Col>
            </Row>
        </>
    )
}
export default React.memo(PaginationMovies);