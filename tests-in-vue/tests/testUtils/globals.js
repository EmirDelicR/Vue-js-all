export function setGlobals() {
  global.window.localStorage = {
    setItem: (key, value) => null,
    getItem: key => [],
  }
}
