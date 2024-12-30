export default defineAppConfig({
	ui: {
		primary: 'waikawa',
		gray: 'stone',
		card: {
			base: 'surface border border-gray-200 dark:border-gray-500',
			rounded: 'rounded-xl',
			shadow: 'shadow-sm',
			ring: '',
			divide: '',
			body: {
				base: 'flex flex-col gap-4',
				padding: 'p-4'
			},
			background: '',
			header: {
				base: 'text-xl font-bold text',
				padding: 'pt-4 px-4'
			},
			footer: {
				base: '',
				background: '',
				padding: 'pb-4 py-4'
			}
		},
		alert: {
			description: "text-sm"
		},
		button: {
			rounded: 'rounded-lg',
			padding: {
				md: 'py-3 px-2'
			},
			default: {
				size: 'md',
			},
			icon: {
				size: {
					md: 'h-4 w-4'
			}
}
		},
		notifications: {
			position: 'bottom-0 start-0',
			width: 'w-96',
		},
		skeleton: {
			background: 'bg-gray-200 dark:bg-gray-300/30',
		},
		table: {
			wrapper: 'overflow-x-auto',

			default: {
				loadingState: {
					label: 'Cargando...',
					icon: 'tabler:circle-dashed'
				},
				emptyState: {
					label: 'No hay registros',
				}
			}
		}
	}
})