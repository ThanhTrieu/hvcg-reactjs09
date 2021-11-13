import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const { Header } = Layout;

const HeaderMovie = () => {
    let location = useLocation(); // hooks cua react routes
    let { pathname } = location;
    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                <Menu.Item key="/popular-movie">
                    <NavLink to="/popular-movie">Popular movie</NavLink>
                </Menu.Item>
                <Menu.Item key="/upcoming-movie">
                    <NavLink to="/upcoming-movie">Upcoming movie</NavLink>
                </Menu.Item>
                <Menu.Item key="/search-movie">
                    <NavLink to="/search-movie">Search movie</NavLink>
                </Menu.Item>
                <Menu.Item key="/favorites-movie">Favorites</Menu.Item>
            </Menu>
        </Header>
    )
}
export default React.memo(HeaderMovie);