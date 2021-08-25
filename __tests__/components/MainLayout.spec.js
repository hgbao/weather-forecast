import AntdLayout from 'antd/lib/layout/layout';
import { shallow } from 'enzyme';

import MainLayout from '@/components/MainLayout';
import PageTitle from '@/components/PageTitle';

describe('LoadingView', () => {
  it('should render with page title', () => {
    const wrapper = shallow(<MainLayout />);
    wrapper.find(PageTitle).exists().should.be.true();
  });

  it('should render with children wrapped in AntdLayout', () => {
    const wrapper = shallow(<MainLayout />);
    wrapper.find(AntdLayout).exists().should.be.true();
  });
});
