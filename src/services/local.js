import { localAPI } from '.';

export const fetchGetSearchLocation = (params) => localAPI.get('weather/location/search', params);

export const fetchGetDaySummary = (params) => localAPI.get('weather/day/list', params);
