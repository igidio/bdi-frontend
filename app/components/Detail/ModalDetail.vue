<template>
	<button class="btn" @click="showModal">open modal</button>
	<dialog id="my_modal_1" class="modal" ref="myModal">
		<div class="modal-box">
			<h3 class="text-lg font-bold">Hello!</h3>
			<p class="py-4">Press ESC key or click the button below to close</p>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button>Close</button>
		</form>
	</dialog>

</template>

<script setup lang="ts">
import {ref} from 'vue';

const myModal = ref<HTMLDialogElement | null>(null);

const showModal = () => {
	myModal.value?.showModal();
};
</script>