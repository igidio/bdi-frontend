<template>
	<div class="sidebar-mobile">
		
		<div class="sidebar h-screen z-30 fixed transition-width shadow-md" :class="is_expanded === true ? 'w-44' : 'min' ">
			
			<button class="menu-item" @click="is_expanded = !is_expanded">
				<Icon name="tabler:menu-3" class="icon" size="16" />
				<span :class="(!is_expanded) ? 'opacity-0' : 'opacity-100'">Colapsar</span>
			</button>
			<hr/>
			<div class="flex flex-col gap-2">
				<NuxtLink
					v-for="(e, index) in options"
					:key="index"
					:class="(is_expanded) ? 'menu-item' : 'py-1'"
					class="menu-item"
					:to="{name: e.to}"
					@click="is_expanded = false"
				>
					<Icon :name="e.icon" class="icon" size="16"/>
					<span
						:class="(!is_expanded) ? 'opacity-0' : 'opacity-100'"
					>{{ e.name }}</span>
				
				</NuxtLink>
			</div>
			
		</div>
		
		<div v-if="is_expanded" class="w-screen h-screen bg-black bg-opacity-65 fixed z-20" @click="is_expanded = false"></div>
		
		<div class="sidebar min"/>
		
	</div>

</template>

<script setup lang="ts">
import {sidebar_options as options} from "~/data/sidebar-options";
const is_expanded = ref(false)
</script>