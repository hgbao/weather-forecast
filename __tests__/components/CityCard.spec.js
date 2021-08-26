import {
  Alert as AntdAlert,
  Card as AntdCard,
  Skeleton as AntdSkeleton,
  Typography as AntdTypography,
} from 'antd';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { spy, stub } from 'sinon';

import CityCard from '@/components/CityCard';

describe('CityCard', () => {
  it('should show day of week and date', () => {
    const onFetchData = spy();
    const wrapper = shallow(
      <CityCard cityId="1" date={new Date('2021-08-26')} onFetchData={onFetchData} />
    );

    wrapper
      .find(AntdCard)
      .prop('title')
      .should.eql(
        <>
          Thursday
          <br />
          2021-08-26
        </>
      );
  });

  it('should fetch data after rendering', async () => {
    const onFetchData = spy();
    const wrapper = mount(<CityCard cityId="1" date={new Date()} onFetchData={onFetchData} />);
    wrapper.find(AntdSkeleton).exists().should.be.true();
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      wrapper.update();
    });

    onFetchData.should.be.calledOnce();
    wrapper.find(AntdSkeleton).exists().should.be.false();
  });

  it('should show error message if failed to fetch data', async () => {
    const onFetchData = stub();
    onFetchData.returns(null);

    const wrapper = mount(<CityCard cityId="1" date={new Date()} onFetchData={onFetchData} />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      wrapper.update();
    });

    onFetchData.should.be.calledOnce();
    const alert = wrapper.find(AntdAlert);
    alert.prop('message').should.equal('Failed to fetch data');
  });

  it('should show weather summary', async () => {
    const onFetchData = stub();
    onFetchData.returns({ min: '26.16', max: '31.23' });

    const wrapper = mount(<CityCard cityId="1" date={new Date()} onFetchData={onFetchData} />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      wrapper.update();
    });

    onFetchData.should.be.calledOnce();
    const text = wrapper.find(AntdTypography.Text);
    text.childAt(0).text().should.eql('Min: 26.16Max: 31.23');
  });
});
