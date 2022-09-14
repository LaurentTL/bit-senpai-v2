import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chart, { IChart } from './Chart';
import { mockChartProps } from './Chart.mocks';

export default {
  title: 'crypto/Chart',
  component: Chart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Chart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChartProps.base,
} as IChart;
