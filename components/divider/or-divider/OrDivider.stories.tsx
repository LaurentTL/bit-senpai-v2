import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrDivider, { IOrDivider } from './OrDivider';
import { mockOrDividerProps } from './OrDivider.mocks';

export default {
    title: 'Dividers/OrDivider',
    component: OrDivider,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof OrDivider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrDivider> = (args) => (
    <OrDivider {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockOrDividerProps.base,
} as IOrDivider;
