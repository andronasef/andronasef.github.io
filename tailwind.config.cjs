const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	}, daisyui: { theme: ["dark"] },

	plugins: [require("daisyui")],
};

module.exports = config;
