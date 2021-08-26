import dayjs from 'dayjs';

import { stringJoin } from './common';

export const getDateByOffset = (offset) => {
  return dayjs().add(offset, 'day');
};

export const formatDate = (date, delimiter = '-') => {
  return dayjs(date).format(stringJoin(['YYYY', 'MM', 'DD'], delimiter));
};

export const getDayOfWeek = (date) => {
  return dayjs(date).format('dddd');
};
