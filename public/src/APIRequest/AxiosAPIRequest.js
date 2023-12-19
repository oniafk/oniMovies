let API;

const APIPromise = fetch('/api-key')
  .then((res) => res.text())
  .then((key) => {
    API = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      params: {
        api_key: key,
      },
    });
    return API;
  });

export { APIPromise as API };
