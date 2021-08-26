import { notification as AntdNotification } from 'antd';

export const notifyResponseError = (response) => {
  AntdNotification.error({
    message: 'Error',
    description: response.data?.message || response.problem,
  });
};
