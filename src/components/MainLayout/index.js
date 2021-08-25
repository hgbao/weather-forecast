import { Layout as AntdLayout } from 'antd';

import PageTitle from '@/components/PageTitle';

import styles from './styles.module.less';

const MainLayout = ({ children, title }) => {
  return (
    <AntdLayout>
      <PageTitle title={title} />

      <AntdLayout className={styles.container}>
        <main>{children}</main>
      </AntdLayout>
    </AntdLayout>
  );
};

export default MainLayout;
