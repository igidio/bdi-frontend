<template>
	<div class="main">
			<NuxtLayout :name="layout">
				<NuxtPage/>
			</NuxtLayout>
		
	</div>
</template>

<script setup lang="ts">
const layout = "admin";
</script>