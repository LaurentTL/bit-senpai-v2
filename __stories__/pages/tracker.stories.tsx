import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tracker from '../../pages/tracker';

export default {
  title: 'pages/Tracker',
  component: Tracker,
  argTypes: {},
} as ComponentMeta<typeof Tracker>;

const Template: ComponentStory<typeof Tracker> = (args) => (
  <Tracker {...args} />
);

export const Base = Template.bind({});
