import { HTTP } from './setup'

async function getApiData(value) {
  let result
  try {
    result = await HTTP.get('gallery/search/?q=' + value)
  } catch (error) {
    result = error
  }
  return result
}

export { getApiData }
