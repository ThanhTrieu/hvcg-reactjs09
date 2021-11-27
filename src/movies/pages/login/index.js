import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Spin  } from 'antd';
import { apiUser } from '../../services/login';
import { helper } from '../../helpers/common';
import { useHistory } from "react-router-dom";

const LoginMovies = () => {
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [messErrLogin, setMessErrLogin] = useState(null);

    const history = useHistory();

    const onFinish = async (values) => {
        const user = values.username;
        const pass = values.password;
        if(user !== '' && pass !== ''){
            await setLoadingLogin(true);
            const data = await apiUser.loginUserFake(user, pass);
            if(data !== null){
                await setMessErrLogin(null);
                await setLoadingLogin(false);
                // login thanh cong
                // quay vao trang phim
                // luu data['token'] vao local storage
                helper.saveToken(data);
                // khi logout can xoa bo token da luu trong local storage
                history.push('/popular-movie');
            } else {
                // login ko dung
                helper.removeToken();
                await setLoadingLogin(false);
                await setMessErrLogin('account invalid');
            }
        }
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row>
            <Col span={12} offset={6}>
                { messErrLogin !== null && <p style={{color: 'red'}}> {messErrLogin} </p>}
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button disabled={loadingLogin} type="primary" htmlType="submit">
                            Login
                        </Button>
                        {loadingLogin && <Spin style={{marginLeft: '10px'}} />} 
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}
export default React.memo(LoginMovies);