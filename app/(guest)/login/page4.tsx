"use client";

import React, {useState} from "react";
import {useRouter} from 'next/navigation'; // Mengubah import useRouter
// import {observer} from 'mobx-react-lite';
import {Button, Card, Checkbox, Col, Form, Input, Row, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
// import ParticlesLayout from "../components/Layout/ParticlesLayout";

const Login = () => {
    const router = useRouter(); 
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm(); 

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        console.log('Username:', values.email);
        console.log('Password:', values.password);
        
        if (values.email === "rizky@gmail.com" && values.password === "rizky") {
            alert("Login berhasil!");
            router.push('/home'); 
        } else {
            alert("Email atau password salah!");
        }
    };

    return (
    
    <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
        <Row justify={'center'}>
            <Col>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginTop: '5vh',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
                        <Typography.Paragraph
                            style={{
                                margin: 0,
                                padding: 0,
                                fontSize: 20,
                                marginLeft: 5,
                                fontWeight: 600,
                                color: "#413d3e",
                            }}
                        >
                            Boilerplate
                        </Typography.Paragraph>
                    </div>
                    <Card
                        style={{width: 320, textAlign: 'center'}}
                        headStyle={{fontSize: 13, fontWeight: 200}}
                        className={"shadow"}
                        bordered={true}
                        title={'Sign in to your account'}
                    >
                        <Form
                            form={form} // Menambahkan form ke Form
                            layout={'vertical'}
                            name="normal_login"
                            className="login-form"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{required: true, message: 'Please input your Email!'}]} // Mengubah required menjadi true
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon"/>}
                                    type="text"
                                    placeholder="Email"/>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginBottom: 0,
                                }}
                                label="Password"
                                name="password"
                                rules={[{required: true, message: 'Please input your Password!'}]} // Mengubah required menjadi true
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginBottom: 5,
                                    textAlign: 'left'
                                }}>
                                    
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginBottom: 0,
                                }}>
                                <Button type="primary"
                                        block
                                        loading={loading}
                                        htmlType="submit"
                                        size={'large'}
                                        className="login-form-button">
                                    Sign In
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </Col>
        </Row>

    </div>


);                      

};

export default Login;

