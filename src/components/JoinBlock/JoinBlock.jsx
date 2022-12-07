import React, { useState } from "react";
import { Button, Typography, Form, Input } from "antd";
import styles from "./Login.module.css";
import axios from 'axios';
import socket from '../../socket'


const JoinBlock = ({
  onLogin
}) => {
  const [roomId, setRoomId] = React.useState('')
  const [userName, setUserName] = React.useState('')

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const { Title } = Typography;
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const obj = {
      roomId,
      userName,
  }
  const onEnter = () => {
    axios.post('./rooms', obj)
    onLogin(obj)
  }
  return (
    <div className={styles.container}>
      <Title 
      className={styles.title}
      level={3}>Войти</Title>
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
          label="Room ID"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input value={roomId}
          onChange={(e) => setRoomId(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Username"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input value={userName}
          onChange={(e) => setUserName(e.target.value)} />
        </Form.Item>
        <Form.Item
          className={styles.submit}
          wrapperCol={{
            offset: 8,
            span: 50,
          }}
        >
          <Button onClick={onEnter} className={styles.btn} type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default JoinBlock;
