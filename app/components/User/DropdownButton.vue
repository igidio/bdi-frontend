<template>
	<div class="inline-flex">

		<UDropdown :items="options" :popper="{ placement: 'bottom-start' }">
			<UIcon name="tabler:user-square" size="20" />
		</UDropdown>

<!--		<div class="dropdown dropdown-end">-->
<!--			<button-->
<!--				tabindex="0"-->
<!--			>-->
<!--				<Icon name="tabler:user-square" size="20"/>-->
<!--			</button>-->

<!--			<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">-->
<!--				<li v-for="e in options" @click="e.to"><a class="text-sm">-->
<!--					<Icon :name="e.icon" :class="e.color" size="16"/>-->
<!--					{{ e.name }}</a></li>-->
<!--			</ul>-->
<!--		</div>-->

	</div>
</template>

<script setup lang="ts">
import type {DropdownItem} from "#ui/types";

const router = useRouter()
const options:DropdownItem[][] = [
	[{
		label: "Opciones de usuario",
		icon: "tabler:user",
		click: () => navigateTo('user'),
	},
		{
			label: "Cerrar sesión",
			icon: "tabler:logout",
			click: () => {
				useUserStore().logout_user()
				return navigateTo('login')
			},
		}]
]
</script>