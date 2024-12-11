<template>
	<div class="sidebar sidebar-desktop" :class="(is_expanded) ? 'w-48' : 'min'">

		
		<button class="menu-item" @click="is_expanded = !is_expanded">
			<Icon name="tabler:menu-3" class="icon" size="16" />
			<span :class="(!is_expanded) ? 'opacity-0' : 'opacity-100'">Colapsar</span>
		</button>
		
		<AppLogo class="w-full place-self-center"></AppLogo>
		<hr/>
		<div class="flex flex-col gap-2">
			<NuxtLink
				v-for="(e, index) in options"
				:key="index"
				:class="(is_expanded) ? 'menu-item' : 'py-1'"
				class="menu-item"
				:to="{name: e.to}"
			>
				<Icon :name="e.icon" class="icon" size="16"/>
				<span :class="(!is_expanded) ? 'opacity-0' : 'opacity-100'">{{ e.name }}</span>
			
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import {sidebar_options as options} from "~/data/sidebar-options";
const is_expanded = ref(true)
</script>