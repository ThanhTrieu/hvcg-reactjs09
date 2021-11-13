import React from 'react';
import { Row, Col } from 'antd';
import LayoutMovies from '../../components/Layout';

const SearchMovies = () => {
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h2> This is search movies page.</h2>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(SearchMovies);