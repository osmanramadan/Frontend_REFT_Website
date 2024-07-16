import baseUrl from '../api/baseURL';

const useGetData = async (url, params, timeout = 10000) => { // Default timeout of 5000ms
  const config = {
    params,
    timeout,
  };
  
  const res = await baseUrl.get(url, config);
  return res.data;
};

const useGetDataToken = async (url, timeout = 10000) => { // Default timeout of 5000ms
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    timeout,
  };

  const res = await baseUrl.get(url, config);
  return res.data;
};

export { useGetData, useGetDataToken };
