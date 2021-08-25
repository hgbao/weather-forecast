import AntdLayout from 'antd/lib/layout/layout';
import { shallow } from 'enzyme';

import MainLayout from '@/components/MainLayout';
import PageTitle from '@/components/PageTitle';

describe('LoadingView', () => {
  it('should render with page title', () => {
    shallow(<MainLayout />)
      .find(PageTitle)
      .exists()
      .should.be.true();

    shallow(<MainLayout title="Foo" />)
      .find(PageTitle)
      .prop('title')
      .should.equal('Foo');
  });

  it('should render with children wrapped in AntdLayout', () => {
    shallow(<MainLayout />)
      .find(AntdLayout)
      .exists()
      .should.be.true();
  });
});
