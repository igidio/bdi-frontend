<template>
	<div class="flex flex-row gap-4">
		<div class="w-[20%]">
			<AppSidebar/>
		</div>
		<div class="w-1 flex-1 p-4">
			<AppHeader/>
			<slot/>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>