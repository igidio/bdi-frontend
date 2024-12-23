<template>
	<div class="flex flex-col">
		<span class="mb-4">Esta es la vista del usuario, acá estarán las distintas opciones de usuario</span>

	<table>
		<thead>
		<tr>
			<th>Nombre de usuario</th>
			<td>{{user?.username}}</td>
		</tr>
		</thead>
		<tbody>
		<tr>
			<th>Correo electrónico</th>
			<td>{{user?.email}}</td>
		</tr>
		<tr>
			<th>Rol</th>
			<td>{{ user?.role }}</td>
		</tr>
		<tr>
			<th>Fecha de creación</th>
			<td>{{ new Date(user?.created_at!).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) }}</td>
		</tr>
<!--		<tr>-->
<!--			<th>Fecha de modificación</th>-->
<!--			<td>{{ new Date(user?.modified_at!).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) }}</td>-->
<!--		</tr>-->
		</tbody>
	</table>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	title: 'Opciones de usuario',
	layout: "admin",
})

const {user} = useUserStore()
</script>