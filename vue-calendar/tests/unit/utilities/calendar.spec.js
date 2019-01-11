import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moment from 'moment-timezone'
import { generateDays, generateWeeks } from '@/utilities/calendar'

moment.tz.setDefault('UTC')
/** Create local vue instance */
const localVue = createLocalVue()
/** Use vuex */
localVue.use(Vuex)
/** Set moment in Vue instance */
localVue.prototype.moment = moment

/** TODO fix this test - fail to call moment */
describe('Calendar utilities function generateDays using moment.js', () => {
  let store
  let day = `${'2019'}-${'1'}-1`
  let currentDay = moment(day, 'YYYY-M-D')
  beforeEach(() => {
    /** Mocking store (one way)*/
    store = new Vuex.Store({
      state: {
        moment,
      },
    })
  })
  test('Check function generateDays return Array', () => {
    //let days = generateDays(localVue, currentDay, day)
    //console.log(days.length)
  })
})

describe('Calendar utilities function generateWeeks', () => {
  test('Check function generateWeeks return Array', () => {
    let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let weeks = generateWeeks(days)
    expect(weeks.length).toEqual(2)
    expect(weeks[0].length).toEqual(7)
    expect(weeks[1].length).toEqual(7)
  })
})
