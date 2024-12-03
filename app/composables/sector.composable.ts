import type {HeadInterface} from "~/interfaces";
import unique_data_from_array from "~/helpers/unique_data_from_array";

const current_head:Ref<HeadInterface|undefined> = ref(undefined)

export function useHeadComposable() {
	const heads:Ref<HeadInterface[]> = ref([])


	const set_head = (val:HeadInterface) => {
		current_head.value = val
	}


  return { heads, current_head, set_head };
}