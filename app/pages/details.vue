<template>
	<select v-model="current_head">
		<option selected disabled :value="undefined">Selecciona un sector</option>
		<option v-for="head in heads" :key="head.id" :value="head">{{ head.name }}</option>
		
		
	</select>
	
	
	<DetailGrid v-if="current_head"></DetailGrid>
</template>

<script setup lang="ts">
import {useHeadComposable} from "~/composables/head.composable";

const {data, error, refresh, clear} = await useAsyncData('sector', () => $fetch('http://localhost:3000/head'))
const {heads, current_head} = useHeadComposable()

heads.value = data.value as any
</script>