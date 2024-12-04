<template>
	<button>
		<Icon
			:name="mode === 'dark' ? 'tabler:moon' : 'tabler:sun'"
			size="20"
			@click="change_mode"
		/>
	</button>
	
</template>

<script setup lang="ts">
const mode = ref('')

const change_mode = () => {
	if (mode.value === 'dark') {
		mode.value = ''
		document.documentElement.classList.remove('dark')
	} else {
		mode.value = 'dark'
		document.documentElement.classList.add('dark')
	}
}
</script>