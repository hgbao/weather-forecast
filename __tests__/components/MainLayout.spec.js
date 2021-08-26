import AntdLayout from 'antd/lib/layout/layout';
import { shallow } from 'enzyme';

import MainLayout from '@/components/MainLayout';
import PageTitle from '@/components/PageTitle';

describe('MainLayout', () => {
  it('should render with page title', () => {
    const wrapper = shallow(<MainLayout title="Foo">Bar</MainLayout>);
    wrapper.find(PageTitle).exists().should.be.true();
    wrapper.find(PageTitle).prop('title').should.equal('Foo');
  });

  it('should render with children wrapped in AntdLayout', () => {
    shallow(<MainLayout title="Foo">Bar</MainLayout>)
      .find(AntdLayout)
      .exists()
      .should.be.true();
  });
});
