export default defineAppConfig({
	ui: {
		primary: 'waikawa',
		card: {
			base: 'white',
			rounded: 'rounded-xl',
			shadow: 'shadow-sm',
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
		}
	}
})