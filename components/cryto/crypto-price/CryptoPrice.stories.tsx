import { ComponentMeta, ComponentStory } from '@storybook/react';
import CryptoPrice, { ICryptoPrice } from './CryptoPrice';
import { mockCryptoPriceProps } from './CryptoPrice.mocks';

export default {
  title: 'crypto/CryptoPrice',
  component: CryptoPrice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CryptoPrice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CryptoPrice> = (args) => (
  <CryptoPrice {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCryptoPriceProps.base,
} as ICryptoPrice;
