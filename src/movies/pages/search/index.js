import React, { useState } from 'react';
import { Row, Col, Input, Skeleton } from 'antd';
import LayoutMovies from '../../components/Layout';
import { apiMovie } from '../../services/movie';
import { helper } from '../../helpers/common';
import ListMovies from '../../components/ListMovies';
import PaginationMovies from '../../components/Pagination';

const { Search } = Input;

const SearchMovies = () => {
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [dataMovies, setDataMovies] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    // viet ham tim kiem du lieu
    const searchDataMovies = async (nameMovie, p = 1) => {
        if(nameMovie !== ''){
            setLoadingSearch(true);
            if(nameMovie !== keyword) {
                setKeyword(nameMovie);
                // khi nguoi dung bam tim kiem moi set lai keyword (vi keyword thay doi)
                // khi bam phan trang thi ko can set lai keyword (vi phan trang van dua tren dung keyword do)
            }
            const data = await apiMovie.searchMovieByKeyword(nameMovie, p);
            if(!helper.isEmptyObject(data)){
                // set du lieu cho state
                if(data.hasOwnProperty('results')){
                    setDataMovies(data['results'])
                }

                if(data.hasOwnProperty('total_results')){
                    setTotalItems(data['total_results'])
                }

                if(data.hasOwnProperty('total_pages')){
                    setTotalPage(data['total_pages'])
                }
            }
            setLoadingSearch(false);
        } 
    }

    // viet ham xu ly phan trang
    const changePage = (p) => {
        if(p >= 1 && p <= totalPage){
            searchDataMovies(keyword, p);
            setPage(p);
        }
    }

    return (
        <LayoutMovies>
            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="name of movies ..."
                        allowClear
                        enterButton="Search"
                        size="large"
                        loading={loadingSearch}
                        onSearch={val => searchDataMovies(val)}
                    />
                </Col>
            </Row>
            { loadingSearch ? <Skeleton active /> : <ListMovies movies={dataMovies} /> }
            { 
                dataMovies.length > 0 
                && 
                <PaginationMovies current={page} totalItems={totalItems} changePage={changePage} />
            }
        </LayoutMovies>
    )
}
export default React.memo(SearchMovies);