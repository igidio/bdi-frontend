<template>
	<div class="flex flex-row">
		<div class="w-fit">
			<AppSidebarMobile/>
			<AppSidebarDesktop/>
		</div>
		<div class="w-1 flex-1 p-4">
			<AppHeader/>
			<div class="py-4">
				<slot/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>