import React, { useState, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import LayoutMovies from '../../components/Layout';
import { apiMovie } from '../../services/movie';
import { helper } from '../../helpers/common';

const DetailMovie = () => {
    const { id } = useParams();
    const [loadingDetail, setLoadingDetail] = useState(false);
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const getData = async () => {
            if(!isNaN(id)){
                setLoadingDetail(true);
                const data = await apiMovie.getDataMovieById(id);
                if(!helper.isEmptyObject(data)){
                    setDetailData(data);
                }
                setLoadingDetail(false);
            }
        }
        getData();
    }, [id])

    if(loadingDetail){
        return (
            <LayoutMovies>
                <Skeleton active />
            </LayoutMovies>
        )
    }

    if(helper.isEmptyObject(detailData)){
        return (
            <LayoutMovies>
                <h2>Not found data</h2>
            </LayoutMovies>
        )
    }

    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h1> chi tiet phim : {detailData.original_title}</h1>
                    <p> Tom tat ND: {detailData.overview}</p>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(DetailMovie);