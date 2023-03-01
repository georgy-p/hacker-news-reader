import { Outlet } from 'react-router-dom';
import { Layout, Row, theme, Typography, Col } from 'antd';
import 'antd/dist/reset.css';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const headerStyle = {
  textAlign: 'left',
  color: '#fff',
  height: 64,
  paddingInline: 100,
  lineHeight: '64px',
  backgroundColor: '#FF6C00',
};

const brandTitleStyle = {
  textAlign: 'left',
  paddingTop: '1em',
};



const BaseLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header style={headerStyle}>
        <Title level={3} style={brandTitleStyle}>
          The Best Hacker News Reader
        </Title>
      </Header>
      <Content>
        <Row>
          <Col xs={2} sm={4} md={4} />
          <Col xs={20} sm={16} md={14} >
          <div 
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
            <Outlet />
            <div style={{ padding: '10px 0' }}>
            </div>
        </div>
          </Col>
          <Col xs={2} sm={4} md={4}  />
        </Row>
      </Content>
      <Footer>Georgy Pigar</Footer>
    </Layout>
  )
}

export default BaseLayout;
