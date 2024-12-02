<template>
	<div class="flex flex-row" v-if="matrix">
		<div class="flex flex-col gap-0.5 mt-[1px] mx-0.5">
<!--			<div class="h-10 w-10"/>-->
<!--			<div v-for="(_, index_row) in matrix" :key="index_row">-->
<!--&lt;!&ndash;				<HeaderItem :value="sector!.rows[index_row]"></HeaderItem>&ndash;&gt;-->
<!--			</div>-->
<!--		</div>-->
<!--		-->
<!--		<div class="flex flex-row overflow-x-auto">-->
			<table>
				<tbody>
				<tr>
					<td v-for="(_, index) in matrix[0]" :key="index">
						<HeaderItem :value="index + 1"/>
					</td>
				</tr>
				
				<tr v-for="(row, index_row) in matrix" :key="index_row">
					<td v-for="(col, index_col) in row" :key="col?.id" v-if="row.length > 0">
						<ElementItem :data="{ type: col?.type, value: col?.value, status: col?.status }"></ElementItem>
<!--							{{ col.status }}-->
<!--						{{ col.type }}-->
					</td>
				</tr>
				
<!--				<tr v-for="(row, index_row) in matrix" :key="index_row">-->
<!--					<td v-for="(col, index_col) in row" :key="`${index_col} + ${sector.sector}`">-->
<!--&lt;!&ndash;						<ElementItem&ndash;&gt;-->
<!--&lt;!&ndash;							:data="{&ndash;&gt;-->
<!--&lt;!&ndash;                  section: col?.section,&ndash;&gt;-->
<!--&lt;!&ndash;                  status: col?.status,&ndash;&gt;-->
<!--&lt;!&ndash;                  val: `${col.val}`,&ndash;&gt;-->
<!--&lt;!&ndash;                }"&ndash;&gt;-->
<!--&lt;!&ndash;							v-if="col&ndash;&gt;-->
<!--&lt;!&ndash;						/>&ndash;&gt;-->
<!--&lt;!&ndash;						<div class="h-10 w-10" v-else/>&ndash;&gt;-->
<!--					</td>-->
<!--				</tr>-->
				
				</tbody>
			</table>
		</div>
	</div>

</template>

<script setup lang="ts">
import unique_data_from_array from "~/helpers/unique_data_from_array";
import create_matrix from "~/helpers/create_matrix";
import HeaderItem from "~/components/Detail/HeaderItem.vue";
import ElementItem from "~/components/Detail/ElementItem.vue";

const { current_head } = useHeadComposable()
const {data} = await useAsyncData('detail', () => $fetch(`api/detail/sector/${current_head.value?.id}`), {
	watch: [() => current_head.value?.id]
})

const current_head_rows = computed(() => {
	return unique_data_from_array(data.value as any, 'row')
})

const matrix = computed(() => create_matrix( data.value as any ));
</script>