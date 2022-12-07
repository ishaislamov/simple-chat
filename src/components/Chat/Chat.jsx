import React from "react";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Chat.module.css";
import {
  Layout,
  Menu,
  theme,
  Typography,
  Alert,
  Space,
  Input,
  Button,
  List,
  message,
} from "antd";
import socket from "../../socket";

console.log(socket);

const { Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

const Chat = ({ users, messages, userName, roomId, addMessage }) => {
  const [messageValue, setMessageValue] = React.useState("");
  const messageRef = React.useRef(null)

  const onSendMessage = () => {
    socket.emit("ROOM:NEW_MESSAGE", {
      userName,
      roomId,
      text: messageValue,
    });
    addMessage({userName, text: messageValue})
    setMessageValue()
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className={styles.layout}>
      <Sider className={styles.sidebar} breakpoint="lg" collapsedWidth="0">
        <Title
          style={{
            color: "white",
          }}
          className={styles.logo}
          level={3}
        >
          Simple Chat
        </Title>
        <Title
          className={styles.online}
          style={{
            color: "white",
          }}
          level={5}
        >
        Комната: {roomId}
        </Title>
        <Title
          className={styles.online}
          style={{
            color: "white",
          }}
          level={5}
        >
          Online:
        </Title>
          {/* {users.map((name) => (
              <div className={styles.usersBlock}>
              <UserOutlined className={styles.userBtn} />
            <li className={styles.li}>
              Hello</li>
              </div>
          ))} */}
      </Sider>
      <Layout className={styles.test}>
        <Content
          className={styles.content}
          style={{
            height: "100%",
            margin: "40px 40px 0px",
          }}
        >
          <div
            className={styles.messageZone}
            style={{
              padding: 50,
              minHeight: 660,
              background: colorBgContainer,
            }}
          >
            <Space
              direction="vertical"
              style={{
                width: "50%",
              }}
            >
              {messages.map((msg) => (
                <>
                <Alert message={msg.text} type="success" />
                <p className={styles.messageUser}>{msg.userName}</p>
                </>

              ))}
            </Space>
            <div className={styles.messageSend}>
              <TextArea
                style={{
                  width: "50%",
                }}
                className={styles.messageArea}
                rows={2}
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
              />
              <Button
                onClick={onSendMessage}
                className={styles.messageBtn}
                type="primary"
                htmlType="submit"
              >
                Send
              </Button>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Simple Chat with Socket.IO
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Chat;
