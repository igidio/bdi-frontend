<template>
	<button class="h-10 w-10 rounded-md bg-gray-200">
    <span class="font-bold text-sm">
      {{ value }}
    </span>
	</button>
</template>

<script setup lang="ts">
interface Props {
	value: string|number,
}

defineProps<Props>()
</script>
