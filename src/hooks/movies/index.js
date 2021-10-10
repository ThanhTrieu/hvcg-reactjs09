import React, { useState, useEffect } from 'react';
import ListMovies from './components/ListMovies';
import PaginationMovies from './components/Pagination';
import { Row, Col, Skeleton } from 'antd';
import { apiMovies } from './services/api';
import { helper } from './helpers/common';

const AppMovies = () => {
    const [loading, setLoading] = useState(false); // bao hieu viec lay data ntn ?
    const [movies, setDataMovies] = useState([]); // luu tru du lieu tu api
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    // su dung componentDidMount de call api - su dung useEffect
    useEffect(() => {
        // viet ham call api ve
        const getData = async () => {
            await setLoading(true); // bat dau call data 
            const data = await apiMovies.getDataMoviesByPage(page);
            if(!helper.isEmptyObject(data)){
                if(data.hasOwnProperty('results')){
                    // cap nhat state
                    setDataMovies(data['results'])
                }
                if(data.hasOwnProperty('total_results')){
                    setTotalResults(data['total_results']);
                }
                if(data.hasOwnProperty('total_pages')){
                    setTotalPages(data['total_pages']);
                }
            }
            await setLoading(false);
        }
        getData();
    }, [page]);

    const changePageMovies = (p) => {
        if(p >= 1 && p <= totalPages){
            // cap nhat lai page
            setPage(p);
        }
    }



    if(loading){
        return (
            <Row>
                <Col span={24}>
                    <Skeleton active/>
                </Col>
            </Row>
        )
    }

    return (
        <Row>
            <Col span={24}>
                <ListMovies movies={movies}/>
                <PaginationMovies
                    totalItems={totalResults}
                    current={page}
                    changePage={changePageMovies}
                />
            </Col>
        </Row>
    )
}
export default React.memo(AppMovies);