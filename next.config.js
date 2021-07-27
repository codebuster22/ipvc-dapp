module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://cdndemo-api.co-vin.in/api/:path*',
			},
		];
	},
};
