const mockData = {
  url: "",
  body: null
};

module.exports = {
  get: jest.fn(url => {
    return mockData;
  }),
  post: jest.fn((_url, _body) => {
    (mockData.url = _url), (mockData.body = _body);
    return new Promise(resolve => {
      resolve(true);
    });
  }),
  create: jest.fn(function() {
    return this;
  })
};
