import { ComponentMeta, ComponentStory } from '@storybook/react';
import InfinitecoinList, { IInfinitecoinList } from './InfinitecoinList';
import { mockInfinitecoinListProps } from './InfinitecoinList.mocks';

export default {
    title: 'templates/InfinitecoinList',
    component: InfinitecoinList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof InfinitecoinList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InfinitecoinList> = (args) => (
    <InfinitecoinList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockInfinitecoinListProps.base,
} as IInfinitecoinList;
