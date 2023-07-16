import { shallowMount } from '@vue/test-utils';
import MyComponent from './MyComponent.vue';


test('renders correctly', () => {
    const wrapper = shallowMount(MyComponent);
    expect(wrapper.exists()).toBe(true);
  });