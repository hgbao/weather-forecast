import dayjs from 'dayjs';

import { weatherAPI } from '@/services';

/**
 * @queryParam {string} cityId - The woeid of the city
 * @queryParam {string} date - The date to get weather (format YYYY-MM-DD)
 */
const handler = async (req, res) => {
  const {
    query: { cityId, date },
  } = req;

  const dateInstance = dayjs(date);
  const response = await weatherAPI.get(
    `location/${cityId}/${dateInstance.year()}/${dateInstance.month()}/${dateInstance.date()}`
  );
  return res.status(response.status).json(response.data);
};

export default handler;
