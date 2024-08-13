import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Buttons/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: 'primary',
		label: 'Sign up'
	}
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		label: 'Generate'
	}
};

export const Outlined: Story = {
	args: {
		label: 'Login',
		variant: 'outlined'
	}
};
