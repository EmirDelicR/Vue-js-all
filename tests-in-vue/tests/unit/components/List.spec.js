import { shallowMount } from '@vue/test-utils'
import List from '@/components/List.vue'

describe('List.vue', () => {
  let data
  const items = ['item 1', 'item 2']
  beforeEach(() => {
    data = {
      propsData: { items },
    }
  })

  it('testing component name', () => {
    const wrapper = shallowMount(List, data)
    expect(wrapper.name()).toMatch('list')
  })

  it('renders li for each item in props.items', () => {
    const wrapper = shallowMount(List, data)
    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(List, data)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('testing if wrapper have div, ul, li elements', () => {
    const wrapper = shallowMount(List, data)
    expect(wrapper.contains('div')).toBe(true)
    expect(wrapper.contains('ul')).toBe(true)
    expect(wrapper.contains('li')).toBe(true)
  })

  it('testing wrapper props', () => {
    const wrapper = shallowMount(List, data)
    expect(wrapper.props().items.length).toBe(2)
    expect(wrapper.props().items[0]).toMatch('item 1')
    expect(wrapper.props().items[1]).toMatch('item 2')
  })
})
