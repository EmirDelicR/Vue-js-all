import CalendarModule from '@/store/modules/Calendar'

describe('Calendar mutations test', () => {
  it('setCurrentMonth in Calendar mutations', () => {
    let setCurrentMonth = CalendarModule.mutations.setCurrentMonth
    // mock state
    const state = {
      month: 0,
    }
    expect(state.month).toBe(0)
    setCurrentMonth(state, 3)
    expect(state.month).toBe(3)
    setCurrentMonth(state, 11)
    setCurrentMonth(state, 10)
    expect(state.month).toBe(10)
  })

  it('setCurrentYear in Calendar mutations', () => {
    let setCurrentYear = CalendarModule.mutations.setCurrentYear
    // mock state
    const state = {
      year: 0,
    }

    expect(state.year).toBe(0)
    setCurrentYear(state, 1234)
    expect(state.year).toBe(1234)
    setCurrentYear(state, 2016)
    setCurrentYear(state, 2017)
    expect(state.year).toBe(2017)
  })
})

describe('Calendar getters test', () => {
  let state = {
    month: 12,
  }

  it('getMonth in Calendar getters', () => {
    const getMonth = CalendarModule.getters.getMonth
    const month = getMonth(state)
    expect(month).toBe(12)
  })
})
