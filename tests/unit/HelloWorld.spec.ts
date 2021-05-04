import { mount } from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld.vue'
import store from '../../src/store/index'

describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld, {
    props: { msg: 'Unit Test Page' },
    global: {
      plugins: [store],
    },
  })

  test('props.msg test', () => {
    expect(wrapper.html()).toContain('Unit Test Page')
  })

  test('button trigger test', async () => {
    expect(wrapper.html()).toContain('count is: 0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('count is: 1')
  })
})
