import { Button, Layout, Space, Typography, theme } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const { colorBgContainer } = theme;

const headerStyle = {
  textAlign: 'left',
  color: '#fff',
  height: 64,
  paddingInline: 40,
  lineHeight: '64px',
  backgroundColor: '#FF6C00',
};

const brandTitleStyle = {
  textAlign: 'left',
  paddingTop: '1em',
};


const App = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout className="layout">
    <Header style={headerStyle}>
      <Title level={3} style={brandTitleStyle}>
        The Best Hacker News Reader
      </Title>
      </Header>
      <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content" style={{ background: colorBgContainer }}>
          Content
          <Button type="primary">Button</Button>
        </div>
    </Content>
  <Footer>Georgy Pigar</Footer>
  </Layout>
  </Space>
)

export default App;
