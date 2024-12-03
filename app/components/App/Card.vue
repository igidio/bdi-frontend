<template>
	<div class="card">
		<span class="title">{{ title }}</span>
			<slot/>
	</div>
</template>

<script setup lang="ts">
interface props {
	title: string
}
defineProps<props>()
</script>