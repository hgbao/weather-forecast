import { LoadingOutlined } from '@ant-design/icons';
import { mount } from 'enzyme';
import { spy, useFakeTimers } from 'sinon';

import SearchBar from '@/components/SearchBar';

describe('SearchBar', () => {
  it('should search after 300ms after user stopped inputing', () => {
    const clock = useFakeTimers();

    const onSearch = spy();
    const wrapper = mount(<SearchBar onSearch={onSearch} />);
    wrapper.find('input').simulate('change', { target: { value: 'Foo' } });

    onSearch.should.not.be.called();
    clock.tick(300);
    onSearch.should.be.calledOnce();

    clock.restore();
  });

  it('should search with debounce by 300ms', () => {
    const clock = useFakeTimers();

    const onSearch = spy();
    const wrapper = mount(<SearchBar onSearch={onSearch} />);

    wrapper.find('input').simulate('change', { target: { value: 'Foo' } });
    clock.tick(200);
    wrapper.find('input').simulate('change', { target: { value: 'Bar' } });

    onSearch.should.not.be.called();
    clock.tick(300);
    onSearch.should.be.calledOnce();

    clock.restore();
  });

  it('should show loading icon if is loading', () => {
    mount(<SearchBar />)
      .find(LoadingOutlined)
      .exists()
      .should.be.false();

    mount(<SearchBar isLoading={true} />)
      .find(LoadingOutlined)
      .exists()
      .should.be.true();
  });
});
