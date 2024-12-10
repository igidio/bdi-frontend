<template>
	<ClientOnly>
	<button v-if="!color_mode.unknown">
		
		<Icon
			:name="color_mode.preference == 'dark' ? 'tabler:moon' : 'tabler:sun'"
			size="20"
			@click="change_mode"
		/>
	</button>
	</ClientOnly>
</template>

<script setup lang="ts">
const color_mode = useColorMode()

const change_mode = () => {
	if (color_mode.preference === 'dark') {
		color_mode.preference = 'light'
		//document.documentElement.classList.remove('dark')
	} else {
		color_mode.preference = 'dark'
		//document.documentElement.classList.add('dark')
	}
}
</script>