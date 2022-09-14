import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogButton, { ILogButton } from './LogButton';
import { mockLogButtonProps } from './LogButton.mocks';

export default {
  title: 'buttons/LogButton',
  component: LogButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LogButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LogButton> = (args) => (
  <LogButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLogButtonProps.base,
} as ILogButton;
