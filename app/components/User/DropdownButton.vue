<template>
	<div class="inline-flex">

		<div class="dropdown dropdown-end">
			<button
				tabindex="0"
			>
				<Icon name="tabler:user-square" size="20"/>
			</button>

			<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
				<li v-for="e in options" @click="e.to"><a class="text-sm">
					<Icon :name="e.icon" :class="e.color" size="16"/>
					{{ e.name }}</a></li>
			</ul>
		</div>

	</div>
</template>

<script setup lang="ts">
const router = useRouter()
const options = [
	{
		name: "Opciones de usuario",
		icon: "tabler:user",
		to: () => navigateTo('user'),
		color: "bg-blue-500"
	},
	{
		name: "Cerrar sesión",
		icon: "tabler:logout",
		to: () => {
			useUserStore().logout_user()
			return navigateTo('login')
		},
		color: "bg-red-500"
	}
]
</script>