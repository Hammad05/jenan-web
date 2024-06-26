/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // comment it out when developing, only use it for build
    trailingSlash: true,
    images: {
        loader: "custom",
    },
};

export default nextConfig;
