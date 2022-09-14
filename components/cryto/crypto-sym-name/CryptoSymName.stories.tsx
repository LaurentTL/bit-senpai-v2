import { ComponentMeta, ComponentStory } from '@storybook/react';
import CryptoSymName, { ICryptoSymName } from './CryptoSymName';
import { mockCryptoSymNameProps } from './CryptoSymName.mocks';

export default {
  title: 'crypto/CryptoSymName',
  component: CryptoSymName,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CryptoSymName>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CryptoSymName> = (args) => (
  <CryptoSymName {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCryptoSymNameProps.base,
} as ICryptoSymName;
