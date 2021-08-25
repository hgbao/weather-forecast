import { BookOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import MainLayout from '@/components/MainLayout';

const Home = () => {
  return (
    <MainLayout title="Home">
      <Typography.Title level={3}>
        <BookOutlined />
        Weather Forecast
      </Typography.Title>
      <Typography.Paragraph>Hello world</Typography.Paragraph>
    </MainLayout>
  );
};

export default Home;
