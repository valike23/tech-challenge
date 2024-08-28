<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'outlined' | 'neutral' | 'danger' | 'go-back';
		label: string;
	}

	export let variant: 'primary' | 'secondary' | 'outlined' | 'neutral' | 'danger' | 'go-back' = 'primary';
	export let label: string = '';

	// Mapping variants to corresponding Tailwind classes
	const backgroundClasses = {
		primary: 'bg-[#AD1FEA] hover:bg-[#9A14E0] text-white',
		secondary: 'bg-[#4661E6] hover:bg-[#3C55D1] text-white',
		outlined: 'border border-[#28353C] text-[#28353C] hover:border-gray-50 hover:bg-gray-50',
		neutral: 'bg-[#3A4374] hover:bg-[#333366] text-white',
		danger: 'bg-[#F49F85] hover:bg-[#E78A6C] text-white',
		'go-back': 'bg-[#F2F4FF] hover:bg-[#E6E7FA] text-[#3A4374]'
	};

	$: backgroundColor = backgroundClasses[variant];

	$: defaultClasses = `flex justify-center text-sm items-center space-x-2 rounded-md px-5 transition ease-in-out duration-300 h-[40px]`;
</script>

<button class="{defaultClasses} {backgroundColor}" {...$$restProps}>
	{#if $$slots.left}
		<div>
			<slot name="left" />
		</div>
	{/if}
	<span> {label}</span>
	{#if $$slots.right}
		<div>
			<slot name="right" />
		</div>
	{/if}
</button>

<style lang="postcss">
/* Additional styles can go here if needed */
</style>
