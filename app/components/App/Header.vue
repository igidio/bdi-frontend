<template>
	<div class="flex flex-row my-4 justify-between">
		
		<div>
			<h1 class="text-2xl font-bold">{{ route.meta.title }}</h1>
		</div>
		
		<div class="flex flex-row gap-2">
			
			<AppDarkLightToggle/>
			<NotificationsButton/>
			<UserButton/>
		
		</div>
	
	</div>

</template>
<script setup lang="ts">
const route = useRoute();

</script>