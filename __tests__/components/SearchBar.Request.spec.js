import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { stub, useFakeTimers } from 'sinon';

import SearchBar from '@/components/SearchBar';

describe('SearchBar.Request', () => {
  it('should request options based on query', async () => {
    const clock = useFakeTimers();

    const options = [{ value: '1', label: 'FooBar' }];
    const onOptionsRequest = stub();
    onOptionsRequest.withArgs('Foo').returns(options);

    const wrapper = mount(<SearchBar.Request onOptionsRequest={onOptionsRequest} />);

    wrapper.find('input').simulate('change', { target: { value: 'Foo' } });
    await act(async () => {
      clock.tick(300);
      wrapper.update();
    });

    wrapper.update();
    onOptionsRequest.should.be.calledOnce();
    wrapper.find(SearchBar).prop('options').should.eql(options);

    clock.restore();
  });
});
