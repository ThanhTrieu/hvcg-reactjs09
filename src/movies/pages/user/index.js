import React from 'react';
import { Row, Col } from 'antd';
import LayoutMovies from '../../components/Layout';
import { helper } from '../../helpers/common';

const ProfileUser = () => {
    const infoUser = helper.decryptionToken();
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    {helper.isEmptyObject(infoUser) ? (
                        <h2> Not found data user !</h2>
                    ) : (
                        <>
                            <p>Username: {infoUser.user}</p>
                            <p>Email: {infoUser.email}</p>
                            <p>Phone: {infoUser.phone}</p>
                            <p>Add: {infoUser.address}</p>
                        </>
                    )}
                    
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(ProfileUser);