import { localAPI } from '.';

export const fetchGetSearchLocation = (params) => localAPI.get('weather/location/search', params);
