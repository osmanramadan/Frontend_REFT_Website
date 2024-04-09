import baseUrl from '../api/baseURL';

const useGetData = async (url, parmas) => {
  const res = await baseUrl.get(url, parmas);
  return res.data;
};

const useGetDataToken = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };

  console.log(config);

  const res = await baseUrl.get(url, config);
  return res.data;
};

export { useGetData, useGetDataToken };
