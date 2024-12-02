<template>
	
	<select
		class=" "
	>
		<option>Select option</option>
		<option v-for="head in heads" :key="head.id">{{ head.name }}</option>
	</select>
	
	{{ data }}
</template>

<script setup lang="ts">
import type {HeadInterface} from "~/interfaces";

const { data, error, refresh, clear } = await useAsyncData('sector', () => $fetch('http://localhost:3000/head'))

const heads: Ref<HeadInterface[]> = ref(data as any)
</script>