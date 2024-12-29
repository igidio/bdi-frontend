<template>
	<UModal v-model="modal_is_open">
		<UCard>
			<template #header>
				<slot name="header"/>
			</template>
			<slot/>
			<template #footer>
				<slot name="footer"/>

			</template>
		</UCard>
	</UModal>
</template>

<script setup lang="ts">
import type {ModelRef} from "vue";

const modal_is_open: ModelRef<boolean> = defineModel('modal_is_open', {default: false});
</script>