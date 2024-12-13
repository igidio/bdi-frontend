<template>
	<div class="card">
		<span class="title" v-if="title">{{ title }}</span>
		<div class="flex flex-col gap-2">
			<slot/>
		</div>
	</div>
</template>

<script setup lang="ts">
interface props {
	title?: string
}
defineProps<props>()
</script>