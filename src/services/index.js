import apisauce from 'apisauce';

import { APIConfig } from '@/config';
import { pathJoin } from '@/utils/common';

const createAPI = (baseURL, pathName) => {
  const api = apisauce.create({
    baseURL: pathJoin(baseURL, pathName),
  });

  api.addRequestTransform((request) => {
    // Trim string
    if (request.data) {
      Object.entries(request.data).forEach(([key, value]) => {
        if (typeof request.data[key] === 'string') {
          request.data[key] = value.trim();
        }
      });
    }
  });

  return api;
};

// APIs
export const weatherAPI = createAPI(APIConfig.weatherEndpoint, APIConfig.weatherPath);
export const localAPI = createAPI(APIConfig.localEndpoint, APIConfig.localPath);
