import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

test('Test.vue', async () => {
  const wrapper = await mount(HelloWorld, { props: { msg: 'Unit Test Page' } })
  expect(wrapper.html()).toContain('Unit Test Page')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})
