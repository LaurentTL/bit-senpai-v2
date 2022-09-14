import { ComponentMeta, ComponentStory } from '@storybook/react';
import Banner, { IBanner } from './Banner';
import { mockBannerProps } from './Banner.mocks';

export default {
  title: 'sections/Banner',
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBannerProps.base,
} as IBanner;
