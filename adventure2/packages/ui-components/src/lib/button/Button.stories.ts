import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';

const meta = {
	title: 'Buttons/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'outlined', 'neutral', 'danger', 'go-back'],
		},
		label: { control: 'text' },
	},
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		label: 'Primary Button',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		label: 'Secondary Button',
	},
};

export const Outlined: Story = {
	args: {
		variant: 'outlined',
		label: 'Outlined Button',
	},
};

export const Neutral: Story = {
	args: {
		variant: 'neutral',
		label: 'Neutral Button',
	},
};

export const Danger: Story = {
	args: {
		variant: 'danger',
		label: 'Danger Button',
	},
};

export const GoBack: Story = {
	args: {
		variant: 'go-back',
		label: 'Go Back',
	},
};
