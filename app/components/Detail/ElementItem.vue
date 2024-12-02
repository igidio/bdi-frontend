<template>
	<button class="h-10 w-10 rounded-md flex items-center justify-center transition-colors" :class="{
    'bg-orange-400 hover:opacity-80': type == DetailTypeEnum.borde && status === DetailStatusEnum.disponible,
    'bg-emerald-400 hover:opacity-80': type == DetailTypeEnum.camino && status === DetailStatusEnum.disponible,
    'bg-yellow-400 hover:opacity-80': type == DetailTypeEnum.centro && status === DetailStatusEnum.disponible,
    'bg-slate-200': !type,
    'bg-emerald-100': status === DetailStatusEnum.vendido,
    'bg-yellow-100': status === DetailStatusEnum.reservado,
    'bg-fuchsia-200': status === DetailStatusEnum.no_disponible,
  }">

    <span class="font-bold text-sm">
      {{ (status == DetailStatusEnum.vendido) ? 'V' : value }}
    </span>
	
	
	</button>

</template>


<script setup lang="ts">
import { DetailStatusEnum, DetailTypeEnum } from '~/enums'

interface Props {
	value: number,
	status?: DetailStatusEnum,
	type?: DetailTypeEnum
}

const {data} = defineProps<{ data: Props }>()
const {value, status, type} = data
</script>
