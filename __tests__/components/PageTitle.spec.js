import { shallow } from 'enzyme';
import Head from 'next/head';

import PageTitle from '@/components/PageTitle';

describe('PageTitle', () => {
  it('should render with correct page title', () => {
    shallow(<PageTitle title="Foo" />)
      .find(Head)
      .find('title')
      .text()
      .should.equal('WeatherForecast - Foo');
  });
});
