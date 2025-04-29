import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
		return [
			{
				source: "/:path*{/}?",
				headers: [
					{
						key: "X-Accel-Buffering",
						value: "no",
					},
				],
			},
		];
	},

	reactStrictMode: true,

	experimental: {
		reactCompiler: true,
	},

	webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.IgnorePlugin({
				resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
			})
		);

		return config;
	},
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
