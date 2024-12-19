<template>
	<header class="flex flex-row justify-between top-0 sticky header">
		
		<div>
			<h1 class="text-2xl font-bold">{{ route.meta.title }}</h1>
		</div>
		
		<div class="flex flex-row gap-2">
			
			<AppDarkLightToggle/>
			<NotificationsDropdownButton/>
			<UserDropdownButton/>
		
		
		</div>
	
	</header>

</template>
<script setup lang="ts">
const route = useRoute();

</script>