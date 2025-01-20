/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			aspectRatio: {
				'3/4': '3 / 4',
				'9/16': '9 / 16',
			},
			keyframes: {
				grow: {
					'0%, 100%': { transform: 'scale(1)' },
					'10%': { transform: 'scale(0.99)' },
					'40%': { transform: 'scale(1.02)' },
				},
				jump: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-16px)' },
				},
			},
			animation: {
				grow: 'grow 0.8s ease-in-out  infinite',
				jump: 'jump 1s ease-in-out infinite',
			},
		},
	},
};
