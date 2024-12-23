<template>
	<button
		class="h-10 w-10 rounded-md flex items-center justify-center transition-colors"
		:class="{
			'border-4 border-black/50 dark:border-slate-100': data.active,
      'bg-orange-400 hover:opacity-80': data.type == DetailTypeEnum.borde && data.status === DetailStatusEnum.disponible,
      'bg-emerald-400 hover:opacity-80': data.type == DetailTypeEnum.camino && data.status === DetailStatusEnum.disponible,
      'bg-yellow-400 hover:opacity-80': data.type == DetailTypeEnum.centro && data.status === DetailStatusEnum.disponible,
      'bg-emerald-100': data.status === DetailStatusEnum.vendido,
      'bg-yellow-100': data.status === DetailStatusEnum.reservado,
      'bg-fuchsia-200': data.status === DetailStatusEnum.no_disponible,
    }"
	>
    <span class="font-bold text-sm">
      {{ (data.status == DetailStatusEnum.vendido) ? 'V' : data.value }}
    </span>


	</button>

</template>


<script setup lang="ts">
import {DetailStatusEnum, DetailTypeEnum} from '~/enums'

interface Props {
	value: number,
	status?: DetailStatusEnum,
	type?: DetailTypeEnum,
	active?: boolean
}

const props = defineProps<{ data: Props }>()
const {data} =  toRefs(props)


</script>
