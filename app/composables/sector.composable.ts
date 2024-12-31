import type {DetailInterface, HeadInterface} from "~/interfaces";
import unique_data_from_array from "~/helpers/unique_data_from_array";
import {DetailStatusEnum} from "~/enums";

const current_head: Ref<HeadInterface | undefined> = ref(undefined)

const current_details: Ref<DetailInterface[] | undefined> = ref(undefined)

const selected_detail: Ref<SelectedDetailInterface | undefined> = ref(undefined)
const heads: Ref<HeadInterface[]> = ref([])

const loading_detail = ref(false)
const loading_head = ref(false)

interface SelectedDetailInterface {
	detail: DetailInterface;
	reservation_info?: {
		is_available: boolean
	}
}

export function useSectorComposable() {
	const {$auth_fetch} = useNuxtApp()

	const set_head = (val: HeadInterface) => {
		current_head.value = val
	}

	const get_details = async () => {
		loading_head.value = true
		if (current_head.value === undefined) return
		selected_detail.value = undefined
		const data = await $fetch(`api/detail/sector/${current_head.value?.id}`)
		current_details.value = data as any
		loading_head.value = false
	}

	const set_selected_detail = async (detail: SelectedDetailInterface) => {
		selected_detail.value = detail
	}

	const delete_selected_detail = async () => {
		selected_detail.value = undefined
	}

	const get_detail = async (id: number) => {
		loading_detail.value = true
		await $auth_fetch<SelectedDetailInterface>(`/api/detail/select/${id}`).then((data: SelectedDetailInterface) => {
			set_selected_detail(data)
		})
		await useRouter().push({hash: '#info'})
		loading_detail.value = false
	}

	const change_status = (
		status: DetailStatusEnum
	) => {
		if (selected_detail.value === undefined) return
		current_details.value?.find((detail: DetailInterface) => {
			if (detail.id == selected_detail.value?.detail.id) {
				detail.status = status
			}
		})
	}

	return {
		heads, current_head, set_head, current_details,
		loading_detail,
		get_details,
		set_selected_detail,
		delete_selected_detail,
		get_detail,
		change_status,
		selected_detail,
		loading_head
	};
}