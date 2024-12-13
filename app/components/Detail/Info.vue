<template>
	<AppCard>
		<div class="flex flex-row">
			<button class="button secondary block" @click="delete_selected_detail()">Cerrar</button>
		</div>
		
		<table v-if="show_sale_info" class="text-sm">
			<tbody>
			<tr>
				<td>Coordenada</td>
				<td class="font-semibold">{{ selected_detail?.row }}- {{ selected_detail?.column }}</td>
			</tr>
			<tr>
				<td>Cliente</td>
				<!-- TODO: Nombre cliente -->
				<td>Nombre Apellido</td>
			</tr>
			<tr>
				<td>Contrato:</td>
				<!-- TODO: Contrato -->
				<td>{{ '000000000' }}</td>
			</tr>
			<tr>
				<td>Fecha del contrato:</td>
				<!-- TODO: Fecha contrato -->
				<td>{{ new Date() }}</td>
			</tr>
			</tbody>
		</table>
		<table v-else class="text-sm">
			<tbody>
			<tr>
				<td>Coordenada</td>
				<td>{{ selected_detail?.row }}- {{ selected_detail?.column }}</td>
			</tr>
			<tr>
				<td>Sector</td>
				<td>{{ selected_detail?.head.sector }}</td>
			</tr>
			<tr>
				<td>Disposición</td>
				<td>{{ selected_detail?.type}}</td>
			</tr>
			<tr>
				<td>Disponibilidad</td>
				<td>{{ selected_detail?.status }}</td>
			</tr>
			</tbody>
		</table>
		<button
			v-if="!show_sale_info"
			class="button primary block"
			@click="make_reservation()"
		>
			<Icon name="tabler:address-book" size="16"/>
			Reservar
		</button>
		<span v-if="error_message" class="text-sm text-red-600 dark:text-red-200">{{ error_message}}</span>
		
	</AppCard>
</template>


<script setup lang="ts">
import {computed} from "vue";
import {DetailStatusEnum, UserRoleEnum} from "~/enums";
import Button from "~/components/User/Button.vue";
import authFetch from "~/plugins/auth-fetch";

const error_message: Ref<undefined | string> = ref()
const {$auth_fetch} = useNuxtApp()

const {
	delete_selected_detail,
	selected_detail
} = useSectorComposable()

const {user, user_role} = useUserStore()
console.log(user?.role)

const show_sale_info = computed(() => {
	return ( [UserRoleEnum.admin, UserRoleEnum.superuser].includes(user?.role as UserRoleEnum) )
})

const make_reservation = async () => {
	const a = await $auth_fetch('/api/reservation', {
		method: 'POST',
		body: {
			id_detail: selected_detail.value?.id
		}
	}).then((data) => {
		console.log(data)
	}).catch((error) => {
		console.error(error.data)
		error_message.value = error.data.message
	})
	
}
</script>