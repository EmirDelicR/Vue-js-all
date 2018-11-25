import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Card from '@/components/Card.vue'
import StoreFactory from '../../testUtils/factory'

/** Create local vue instance */
const localVue = createLocalVue()
/** Use vuex */
localVue.use(Vuex)

/** Mock incrementTotal function */
const actions = {
  incrementTotal: jest.fn(),
}

describe('Card-Module-Mock-Store-in-Test', () => {
  let store
  beforeEach(() => {
    /** Mocking store (one way)*/
    store = new Vuex.Store({
      modules: {
        Card: {
          namespaced: true,
          actions,
          getters: {
            projectId: () => 4,
            currentTotal: () => 789,
          },
        },
      },
    })
  })
  test('card should show correct total', () => {
    const wrapper = mount(Card, { store, localVue })
    expect(wrapper.vm.currentTotal).toEqual(789)
  })
})

describe('Card-Module-Mock-Store-From-Utils', () => {
  let store
  beforeEach(() => {
    store = StoreFactory(
      {
        Card: {
          projectId: 3,
          currentTotal: 567,
        },
      },
      actions,
    )
  })

  /** Make a snapshot for component to match */
  test('should render content correctly', () => {
    const wrapper = mount(Card, { store, localVue })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })

  /** Testing some method from Card component */
  test('addNumbers should add numbers together', () => {
    const wrapper = mount(Card, { store, localVue })
    expect(wrapper.vm.addNumbers(1, 2)).toEqual(3)
  })

  /** Testing computed property from Card Module */
  test('getText should evaluate foo correctly', () => {
    const wrapper = mount(Card, { store, localVue })
    wrapper.setData({
      foo: 'This',
    })
    expect(wrapper.vm.getText).toEqual('This is Sparta')
  })

  test('card should show correct total', () => {
    const wrapper = mount(Card, { store, localVue })
    expect(wrapper.vm.currentTotal).toEqual(567)
  })

  test('card should show correct project id', () => {
    const wrapper = mount(Card, { store, localVue })
    expect(wrapper.vm.projectId).toEqual(3)
  })
})
