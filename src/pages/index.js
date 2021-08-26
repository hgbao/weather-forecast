import { Col as AntdCol, Empty as AntdEmpty, Row as AntdRow } from 'antd';
import { useCallback, useState } from 'react';

import CityCard from '@/components/CityCard';
import MainLayout from '@/components/MainLayout';
import SearchBar from '@/components/SearchBar';
import { fetchGetDaySummary, fetchGetSearchLocation } from '@/services/local';
import { getDateByOffset } from '@/utils/date';
import { notifyResponseError } from '@/utils/error';
import { getWeatherTemperatureSummary } from '@/utils/response';

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

  const handleFetchCityData = useCallback(async (cityId, date) => {
    const response = await fetchGetDaySummary({ cityId, date });
    if (!response.ok) {
      notifyResponseError(response);
      return;
    }
    return getWeatherTemperatureSummary(response.data);
  }, []);

  return (
    <MainLayout title="Home">
      <AntdRow gutter={[16, 16]}>
        <AntdCol span={24}>
          <SearchBar.Request onOptionsRequest={handleOptionsRequest} onSelect={handleSelect} />
        </AntdCol>
        <AntdCol span={24}>
          {currentCityId ? (
            <AntdRow gutter={[8, 8]} justify="space-between">
              {[...Array(5).keys()].map((index) => {
                return (
                  <AntdCol key={index} xs={{ span: 24 }} lg={{ span: 4 }}>
                    <CityCard
                      cityId={currentCityId}
                      date={getDateByOffset(index)}
                      onFetchData={handleFetchCityData}
                    />
                  </AntdCol>
                );
              })}
            </AntdRow>
          ) : (
            <AntdEmpty />
          )}
        </AntdCol>
      </AntdRow>
    </MainLayout>
  );
};

export default Home;
