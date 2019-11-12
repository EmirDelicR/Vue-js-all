let store = {};

module.exports = {
  clear: jest.fn(() => {
    store = {};
  }),
  getItem: jest.fn(_key => {
    return store[_key] || null;
  }),
  setItem: jest.fn((_key, _value) => {
    store[_key] = _value.toString();
  }),
  removeItem: jest.fn(_key => {
    delete store[_key];
  }),
  getFullStorage: jest.fn(() => {
    return store;
  })
};
