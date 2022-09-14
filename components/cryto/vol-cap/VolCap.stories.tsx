import { ComponentMeta, ComponentStory } from '@storybook/react';
import VolCap, { IVolCap } from './VolCap';
import { mockVolCapProps } from './VolCap.mocks';

export default {
  title: 'crypto/VolCap',
  component: VolCap,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VolCap>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VolCap> = (args) => <VolCap {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVolCapProps.base,
} as IVolCap;
