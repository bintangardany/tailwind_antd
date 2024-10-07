"use client";
import  Navbar  from '../../../components/navbar/Navbar' 
import Footer from '../../../components/footer/Footer'


import React, {useState} from "react";
import {useRouter} from 'next/navigation'; // Mengubah import useRouter
// import {observer} from 'mobx-react-lite';
import {Button, Card, Checkbox, Col, Form, Input, Row, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
// import ParticlesLayout from "../components/Layout/ParticlesLayout";






const Login2 = () => {


    const router = useRouter(); 
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm(); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(""); 

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
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col md:flex-row ">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-sm">
            <h1 className="text-4xl font-bold mb-4">Sign in</h1>
            <p className="text-gray-600 mb-8">
              Please enter your email and password below to connect with your
              LinguaHub account.
            </p>
            <Form form={form} onFinish={onFinish}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </Form.Item>
              
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item>
                <button
                  className="w-full p-4 bg-blue-600 text-white rounded-lg mt-4"
                  type="submit"
                >
                  Sign in
                </button>
              </Form.Item>

              {error && <p>{error}</p>}
            </Form>
            <p className="mt-4 text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <a className="text-blue-600" href="#">
                Create account
              </a>
            </p>
            {/* <p className="mt-4 text-center text-gray-600">
              <a className="text-blue-600" href="#">
                Forgot Password?
              </a>
            </p> */}
          </div>
        </div>

        <div className="hidden md:flex w-full md:w-1/2 lg:w-1/2 relative" >
          <img
            alt="Person working on a laptop in a modern blue room"
            className="w-full h-full object-cover rounded-l-lg"
            height="800"
            src="/images/1.png"
            width="600"
          />

          

          <div className="absolute bottom-8 left-8 text-white md:left-16 md:bottom-16">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
              Connect with Trusted Translators, Start Your Global Journey
            </h2>
            <button className="px-4 md:px-6 py-2 md:py-3 bg-blue-600 rounded-lg">
              Explore more
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full mt-20">
      <Footer />
      </div>

    </>
  );
};

export default Login2;
