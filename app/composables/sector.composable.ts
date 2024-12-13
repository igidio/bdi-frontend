import type {DetailInterface, HeadInterface} from "~/interfaces";
import unique_data_from_array from "~/helpers/unique_data_from_array";

const current_head: Ref<HeadInterface | undefined> = ref(undefined)

const current_details: Ref<DetailInterface[] | undefined> = ref(undefined)

const selected_detail: Ref<DetailInterface|undefined> = ref(undefined)
const heads: Ref<HeadInterface[]> = ref([])

export function useSectorComposable() {


	const set_head = (val: HeadInterface) => {
		current_head.value = val
	}

	const get_details = async () => {
		if (current_head.value === undefined) return
		const data = await $fetch(`api/detail/sector/${current_head.value?.id}`)
		current_details.value = data as any
		selected_detail.value = undefined
	}

	const set_selected_detail = async (detail:DetailInterface) => {
		selected_detail.value = detail
	}

	const delete_selected_detail = async () => {
		selected_detail.value = undefined
	}

	return {heads, current_head, set_head, current_details,
		get_details,
		set_selected_detail,
		delete_selected_detail,
		selected_detail
	};
}