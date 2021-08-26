import { Col as AntdCol, Row as AntdRow } from 'antd';
import { useCallback, useState } from 'react';

import MainLayout from '@/components/MainLayout';
import SearchBar from '@/components/SearchBar';
import { fetchGetSearchLocation } from '@/services/local';
import { notifyResponseError } from '@/utils/error';

const Home = () => {
  const [currentCityId, setCurrentCityId] = useState();

  // Handlers
  const handleOptionsRequest = useCallback(async (query) => {
    if (!query) {
      return;
    }

    const response = await fetchGetSearchLocation({ query });
    if (!response.ok) {
      notifyResponseError(response);
      return;
    }
    return response.data.map((city) => ({ value: city.woeid.toString(), label: city.title })); // Format return value to match options format
  }, []);

  const handleSelect = useCallback((value) => setCurrentCityId(value), []);

  return (
    <MainLayout title="Home">
      <AntdRow gutter={[16, 16]}>
        <AntdCol span={24}>
          <SearchBar.Request onOptionsRequest={handleOptionsRequest} onSelect={handleSelect} />
        </AntdCol>
        <AntdCol span={24}>{currentCityId}</AntdCol>
      </AntdRow>
    </MainLayout>
  );
};

export default Home;
