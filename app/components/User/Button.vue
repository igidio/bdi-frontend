<template>
	<div class="hs-dropdown relative inline-flex">
		<button
			aria-expanded="false"
			aria-label="Menu"
			id="hs-dropdown-unstyled"
		>
			<Icon name="tabler:user-square" size="20"/>
		</button>
		
		<div
			class="hs-dropdown-menu hs-dropdown-open:opacity-100 hidden dropdown"
			role="menu" aria-labelledby="hs-dropdown-unstyled">
			
				<button
					v-for="e in options"
					class="menu-item"
					@click="e.to"
				>
					<Icon :name="e.icon" :class="e.color" size="16"/>
					{{ e.name }}
				</button>
		
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