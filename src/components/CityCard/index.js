import { ReloadOutlined } from '@ant-design/icons';
import {
  Alert as AntdAlert,
  Button as AntdButton,
  Card as AntdCard,
  Skeleton as AntdSkeleton,
  Typography as AntdTypography,
} from 'antd';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

import { formatDate, getDayOfWeek } from '@/utils/date';

const CardContent = ({ data, isLoading }) => {
  if (isLoading) {
    return <AntdSkeleton title={false} paragraph={{ rows: 2 }} active />;
  }

  if (!data) {
    return <AntdAlert message="Failed to fetch data" type="error" />;
  }

  return (
    <AntdTypography.Text>
      Min: {data.min}
      <br />
      Max: {data.max}
    </AntdTypography.Text>
  );
};

const CityCard = ({ cityId, date, onFetchData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  // Handlers
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await onFetchData(cityId, formatDate(date));

    setIsLoading(false);
    if (!response) {
      setData(null);
      return;
    }

    setData(response);
  }, [cityId, date, onFetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Render
  return (
    <AntdCard
      title={
        <>
          {getDayOfWeek(date)}
          <br />
          {formatDate(date)}
        </>
      }
      extra={<AntdButton type="link" icon={<ReloadOutlined />} onClick={fetchData} title="Retry" />}
    >
      <CardContent data={data} isLoading={isLoading} />
    </AntdCard>
  );
};

CityCard.propTypes = {
  cityId: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  onFetchData: PropTypes.func.isRequired,
};

export default CityCard;
