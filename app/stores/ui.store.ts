import {defineStore} from "pinia";
import {ref} from "vue";

export const useUiStore = defineStore('ui', () => {

	const is_open = ref(false)
	const modal_component: Ref<Component | undefined> = shallowRef(undefined)
	const modal_title:Ref<string|undefined> = ref(undefined)

	const myModal = ref<HTMLDialogElement | null>(null)

	const show_modal = () => {
		is_open.value = true
	}

	const close_modal = () => {
		is_open.value = false
	}

	const assign_title = (title: string) => {
		modal_title.value = title
	}

	const assign_component = (component: Component) => {
		modal_component.value = component
	}

	const modal_generate = (
		{
			title = '',
			component = undefined
		}: {
			title?: string,
			component?: Component|undefined
		}
	) => {
		assign_title(title);
		(component) && assign_component(component);
		show_modal();
	}

	return {myModal, modal_component, modal_title, is_open, show_modal, assign_component, close_modal, modal_generate}
})