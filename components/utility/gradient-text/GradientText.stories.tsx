import { ComponentMeta, ComponentStory } from '@storybook/react';
import GradientText, { IGradientText } from './GradientText';
import { mockGradientTextProps } from './GradientText.mocks';

export default {
  title: 'utility/GradientText',
  component: GradientText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GradientText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GradientText> = (args) => (
  <GradientText {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGradientTextProps.base,
} as IGradientText;
