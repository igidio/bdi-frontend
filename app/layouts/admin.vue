<template>
	<div class="flex flex-row">
		<div class="w-fit">
			<AppSidebarMobile/>
			<AppSidebarDesktop/>
		</div>
		<div class="w-1 flex-1 p-4">
			<AppHeader/>
			<div class="py-4">
				<slot/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type {UserInterface} from "~/interfaces";

const {set_user, get_token, logout_user, user} = useUserStore()
const {token} = storeToRefs(useUserStore())

get_token()

if (!user) {
	const {data, error} = await useAsyncData<UserInterface>('user', async () => await $fetch('/api/auth/user', {
		headers: {'Authorization': `Bearer ${token.value}`}
	}))
	
	if (error.value) {
		logout_user()
	}
	set_user(data.value as UserInterface)
}
</script>