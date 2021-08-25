import { BookOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

export default function Home() {
  return (
    <div>
      <Typography.Title>
        <BookOutlined />
        Weather Forecast
      </Typography.Title>
      <Typography.Paragraph>Hello world</Typography.Paragraph>
    </div>
  );
}
