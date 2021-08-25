import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MainLayout from '@/components/MainLayout';
import Home from '@/pages';

describe('Home', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with correct page title', () => {
    const wrapper = shallow(<Home />);
    wrapper.find(MainLayout).prop('title').should.equal('Home');
  });
});
