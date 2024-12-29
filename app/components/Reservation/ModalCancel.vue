<template>
	<AppModal v-model="modal_is_open">
		<template v-slot:header>Cancelar reserva</template>
		<p>Al cancelar la reserva...</p>
		<template v-slot:footer>
			<div class="flex flex-row gap-4 justify-end w-full">
				<UButton @click="modal_is_open = false" color="gray">Cerrar</UButton>
				<UButton @click="cancel_reservation">Cancelar reserva</UButton>
			</div>
		</template>
	</AppModal>
</template>

<script setup lang="ts">
import type {ModelRef} from "vue";

defineProps<{ cancel_reservation: () => {} }>()

const modal_is_open: ModelRef<boolean> = defineModel('modal_is_open', {default: false});
const modal_data: ModelRef<any> = defineModel('modal_data')
</script>