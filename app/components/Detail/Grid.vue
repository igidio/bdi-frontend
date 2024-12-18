<template>
	<div class="flex flex-row text-black">
		<div class="flex flex-col gap-0.5 mt-[1px] mx-0.5">
			<div class="h-10 w-10"/>
			<div v-for="(_, index_row) in matrix" :key="index_row">
				<DetailHeaderItem :value="rows[index_row]"></DetailHeaderItem>
			</div>
		</div>
		
		<div class="flex flex-row overflow-x-auto">
			
			<table>
				<tbody>
				<tr>
					<td v-for="(_, index) in matrix[0]" :key="index">
						<DetailHeaderItem :value="index + 1"/>
					</td>
				</tr>
				<tr v-for="(row, index_row) in matrix" :key="index_row">
					<td v-for="(col) in row" :key="col?.id" v-if="row.length > 0">
						<DetailElementItem
							:data="{
								type: col?.type,
								value: col?.value,
								status: col?.status
							}"
							@click="get_detail(col.id)"
							v-if="col"
						/>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>

</template>

<script setup lang="ts">
import type {DetailInterface} from "~/interfaces";
import create_matrix from "~/helpers/create_matrix";
import unique_data_from_array from "~/helpers/unique_data_from_array";
const {$auth_fetch} = useNuxtApp()
const { set_selected_detail, selected_detail } = useSectorComposable()

const {current_details} = useSectorComposable()
const matrix: ComputedRef<DetailInterface[][]> = computed(() => {
	if (current_details.value === undefined) return []
	return create_matrix(current_details.value!)
});

const rows = computed(() => unique_data_from_array(current_details.value as any, 'row'))

const get_detail = async (id: number) => {
	//await $fetch<DetailInterface>(`/api/detail/${id}`).then((data) => {
	await $auth_fetch<DetailInterface>(`/api/detail/select/${id}`).then((data) => {
		set_selected_detail(data)
	})
	await useRouter().push({ hash: '#info' })
	console.log(selected_detail.value)
}
</script>