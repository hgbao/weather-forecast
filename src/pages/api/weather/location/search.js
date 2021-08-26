import { weatherAPI } from '@/services';

/**
 * @queryParam {string} query - Name of the city to search
 */
const handler = async (req, res) => {
  const {
    query: { query },
  } = req;

  const response = await weatherAPI.get('location/search/', { query });
  return res.status(response.status).json(response.data);
};

export default handler;
