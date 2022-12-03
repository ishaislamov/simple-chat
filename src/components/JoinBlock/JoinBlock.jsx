import React from "react";
import { Button, Typography, Form, Input } from "antd";
import styles from "./Login.module.css";

import socket from '../../socket'


const JoinBlock = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const { Title } = Typography;
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.container}>
      <Title 
      className={styles.title}
      level={2}>Войти</Title>
      <Form
        className={styles.inputsBlock}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 50,
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
              message: "Please input your username!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          className={styles.submit}
          wrapperCol={{
            offset: 8,
            span: 50,
          }}
        >
          <Button className={styles.btn} type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default JoinBlock;
