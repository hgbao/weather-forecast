import { shallow } from 'enzyme';
import Head from 'next/head';

import PageTitle from '@/components/PageTitle';

describe('LoadingView', () => {
  it('should render with correct page title', () => {
    const wrapper = shallow(<PageTitle title="Foo" />);
    wrapper.find(Head).find('title').text().should.equal('WeatherForecast - Foo');
  });
});
