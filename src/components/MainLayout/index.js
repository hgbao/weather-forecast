import { Layout as AntdLayout } from 'antd';
import PropTypes from 'prop-types';

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

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainLayout;
