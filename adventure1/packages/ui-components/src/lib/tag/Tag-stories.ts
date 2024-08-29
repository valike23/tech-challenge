/* eslint-disable @typescript-eslint/no-explicit-any */
// Tag.stories.ts
import Tag from './Tag.svelte';



const Template = (args: any) => ({
    Component: Tag,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Tag Label',
    active: false,
    onClick: () => alert('Tag clicked!'),
};
