<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'outlined';
		label: string;
	}

	export let variant: 'primary' | 'secondary' | 'outlined' = 'primary';
	export let label: string = '';

	const backgroundClasses = {
		primary: 'bg-[#28353C] hover:bg-gray-50 hover:text-gray-900',
		secondary: 'bg-[#FFDD00] !text-black',
		outlined: 'border border-[#28353C] hover:border-gray-50 !text-gray-900 hover:bg-gray-50'
	};

	$: backgroundColor = backgroundClasses[variant];

	$: defaultClasses = `flex justify-center text-sm items-center space-x-2 text-white text-base rounded-md px-5 transition ease-in-out duration-300 h-[40px]`;
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
</style>
