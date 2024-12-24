<template>

	<UCard>
		<template #header v-if="title">
			{{ title }}
		</template>

		<div class="flex flex-col gap-2">
			<slot/>
		</div>

		<!--		<template #footer>-->
		<!--			<Placeholder class="h-8" />-->
		<!--		</template>-->
	</UCard>

</template>

<script setup lang="ts">
interface props {
	title?: string
}

defineProps<props>()
</script>