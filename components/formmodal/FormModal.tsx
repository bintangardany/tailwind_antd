import React from 'react';
import { Modal, Form, Input, Row, Col, Select, DatePicker } from 'antd';
import moment from 'moment'; // Untuk format tanggal
import TextArea from 'antd/es/input/TextArea';

interface FormModalProps {
    visible: boolean;
    onCancel: () => void;
    onOk: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ visible, onCancel, onOk }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                console.log('Form Values:', values);
                onOk(); 
                form.resetFields(); 
            }) 
            .catch((info: unknown) => { 
                console.log('Validation Failed:', info);
            });
    };

    return (
        <Modal
            title="Create Service Request" 
            visible={visible}
            onOk={handleOk}
            onCancel={onCancel}
            okText="Submit"
            cancelText="Cancel"
            okButtonProps={{ className: '' }}
            cancelButtonProps={{ className: 'bg-red-500 text-white' }} 
            centered
            width={600}
        >
            <Form
                form={form}
                layout="vertical"
                name="userForm"
                className="space-y-4"
                style={{ padding: '20px' }}
            >

                <Form.Item
                    name="service"
                    label="Service"
                    rules={[{ required: true, message: 'Please select a service type!' }]}
                >
                    <Select placeholder="Select a service type">
                        <Select.Option value="service1">Service 1</Select.Option>
                        <Select.Option value="service2">Service 2</Select.Option>
                        <Select.Option value="service3">Service 3</Select.Option>
                    </Select>
                </Form.Item>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="Date"
                            label="Date"
                            rules={[
                                { required: true, message: 'Please select your Date2!' }
                            ]}
                        >
                            <DatePicker placeholder="Date" format="YYYY-MM-DD" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="Start"
                            label="Start"
                            rules={[
                                { required: true, message: 'Please select your Date!' }
                            ]}
                        >
                            <DatePicker placeholder="Start" format="YYYY-MM-DD" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="End"
                            label="End"
                            rules={[
                                { required: true, message: 'Please select your Date3!' }
                            ]}
                        >
                            <DatePicker placeholder="End" format="YYYY-MM-DD" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    name="Location"
                    label="Location"
                    rules={[{ required: true, message: 'Please input your location' }, { max: 100, message: 'Location cannot exceed 100 characters' }]}
                >
                    <TextArea placeholder="Enter location" maxLength={100} />
                </Form.Item>

                <Form.Item
                    name="Notes"
                    label="Notes"
                    rules={[{ required: true, message: 'Please input your Notes' }, { max: 100, message: 'Notes cannot exceed 100 characters' }]}
                >
                    <TextArea placeholder="Notes for translator" maxLength={100} />
                </Form.Item>

                <Form.Item
                    name="Select coupon"
                    label="Select coupon"
                    rules={[{ required: true, message: 'Please select a coupon!' }]}
                >
                    <Select placeholder="Select a Coupon">
                        <Select.Option value="coupon1">Coupon 1</Select.Option>
                        <Select.Option value="coupon2">Coupon 2</Select.Option>
                        <Select.Option value="coupon3">Coupon 3</Select.Option>
                    </Select>
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default FormModal;
