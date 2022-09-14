import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignButton, { ISignButton } from './SignButton';
import { mockSignButtonProps } from './SignButton.mocks';

export default {
  title: 'buttons/SignButton',
  component: SignButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SignButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignButton> = (args) => (
  <SignButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSignButtonProps.base,
} as ISignButton;
