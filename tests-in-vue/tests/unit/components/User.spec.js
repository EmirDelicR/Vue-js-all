import { shallowMount } from '@vue/test-utils'
import User from '@/components/User.vue'

describe('User.vue', () => {
  it('reveals a notification when submitted', () => {
    const wrapper = shallowMount(User)

    wrapper.find('[data-username]').setValue('alice')
    wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.message').text()).toBe(
      'Thank you for your submission, alice.',
    )
  })

  it('test and trigger button', () => {
    const wrapper = shallowMount(User)

    expect(wrapper.vm.$data.name).toBe('Emir')
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.name).toBe('rimE')
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.name).toBe('Emir')
  })
})
