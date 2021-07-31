module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://cdndemo-api.co-vin.in/api/:path*',
			},
		];
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};
