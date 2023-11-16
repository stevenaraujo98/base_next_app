/** @type {import('next').NextConfig} */
const nextConfig = {
	skipMiddlewareUrlNormalize: true,
	images: {
		domains: [
			"upload.wikimedia.org",
			"tailwindui.com",
			"images.unsplash.com",
			"www.presuntoinocente.com",
			"cdn.pixabay.com",
			"res.cloudinary.com",
		],
	},
};

module.exports = nextConfig;
