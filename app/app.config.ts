export default defineAppConfig({
	ui: {
		primary: 'waikawa',
		gray: 'slate',
		card: {
			base: 'surface border border-gray-200 dark:border-gray-500',
			rounded: 'rounded-xl',
			shadow: 'shadow-sm',
			ring: '',
			divide: '',
			body: {
				base: 'flex flex-col p-4 gap-4'
			},
			background: '',
			header: {
				base: 'text-xl font-bold text',
				padding: 'py-2'
			}
		},
		alert: {
			description: "text-sm"
		},
		button: {
			// color: {
			// 	custom: {
			// 		subtle: '...'
			// 	}
			// }
		},
		notifications: {
			position: 'bottom-0 start-0',
			width: 'w-96',
		},
		skeleton: {
			background: 'bg-gray-200 dark:bg-gray-300/30',
		}
	}
})