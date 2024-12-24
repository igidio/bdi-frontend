<template>

			<table class="w-full text-black gap-2">
				<thead class="text-xs">
				<tr class="sticky top-0 bg-white z-[2]">
					<th class="sticky top-0 left-0 z-50 bg-white">
					</th>
					<th v-for="(_, index) in matrix[0]" :key="index">
						<DetailHeaderItem :value="index + 1"></DetailHeaderItem>
					</th>
				</tr>
				</thead>

				<tbody>
				<tr v-for="(row, index_row) in matrix" :key="index_row">
					<td class="sticky left-0 bg-white z-[1]">
						<DetailHeaderItem :value="rows[index_row]"></DetailHeaderItem>
					</td>
					<td v-for="(col) in row" :key="col?.id" v-if="row.length > 0">
						<DetailElementItem
							:data="{
															type: col?.type,
															value: col?.value,
															status: col?.status,
															active: col.value === selected_detail?.detail.value
														}"
							@click="get_detail(col.id)"
							v-if="col"
						/>
					</td>
				</tr>
				</tbody>


			</table>

</template>

<script setup lang="ts">
import type {DetailInterface} from "~/interfaces";
import create_matrix from "~/helpers/create_matrix";
import unique_data_from_array from "~/helpers/unique_data_from_array";

const {selected_detail, get_detail} = useSectorComposable()

const {current_details} = useSectorComposable()
const matrix: ComputedRef<DetailInterface[][]> = computed(() => {
	if (current_details.value === undefined) return []
	return create_matrix(current_details.value!)
});

const rows = computed(() => unique_data_from_array(current_details.value as any, 'row'))
</script>