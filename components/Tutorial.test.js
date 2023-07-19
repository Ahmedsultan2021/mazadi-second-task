import { shallowMount } from '@vue/test-utils';
import MyComponent from './MyComponent.vue';

describe('MyComponent', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(MyComponent);
    expect(wrapper.exists()).toBe(true);
  });

  test('displays the correct default text', () => {
    const wrapper = shallowMount(MyComponent);
    const input = wrapper.find('input');
    expect(input.element.value).toBe('');
  });

  test('updates the input value when typed into', async () => {
    const wrapper = shallowMount(MyComponent);
    const input = wrapper.find('input');
    await input.setValue('test input');
    expect(input.element.value).toBe('test input');
  });
});
