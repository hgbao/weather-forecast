import { Layout as AntdLayout } from 'antd';

import PageTitle from '@/components/PageTitle';

import styles from './styles.module.less';

const MainLayout = ({ children, pageTitle }) => {
  return (
    <AntdLayout>
      <PageTitle title={pageTitle} />

      <AntdLayout className={styles.container}>
        <main>{children}</main>
      </AntdLayout>
    </AntdLayout>
  );
};

export default MainLayout;
