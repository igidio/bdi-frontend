<template>
	<dialog id="my_modal_1" class="modal" ref="myModal">
		<div class="modal-box">
			<h3 class="text-lg font-bold mb-4" v-if="modal_title">{{ modal_title }}</h3>
			<div class="w-full flex flex-col gap-4">
				<component v-if="modal_component" :is="modal_component"/>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button>Close</button>
		</form>
	</dialog>
</template>

<script setup lang="ts">

const uiStore = useUiStore();
//const {modal_component} = uiStore;
const {myModal, modal_component, modal_title} = storeToRefs(uiStore)

//modal_component.value = shallowRef(modal_component.value);
</script>