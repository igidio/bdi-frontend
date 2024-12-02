import type {HeadInterface} from "~/interfaces";

export function useHeadComposable() {
	const heads:Ref<HeadInterface[]> = ref([])

	const current_head:Ref<HeadInterface|undefined> = ref(undefined)

	const set_head = (val:HeadInterface) => {
		current_head.value = val
	}

  return { heads, current_head, set_head };
}