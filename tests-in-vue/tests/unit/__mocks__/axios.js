const mockData = {
  url: "",
  body: null
};

module.exports = {
  get: jest.fn(url => {
    if (url === "/something") {
      return Promise.resolve({
        data: "data"
      });
    }

    return mockData;
  }),
  post: jest.fn((_url, _body) => {
    if (_url === "/api/authenticate") {
      (mockData.url = _url), (mockData.body = _body);
      return new Promise(resolve => {
        resolve(true);
      });
    }
    if (_url === "/something2") {
      return Promise.resolve({
        data: "data2"
      });
    }
  }),
  create: jest.fn(function() {
    return this;
  })
};
