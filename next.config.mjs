/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    redirects() {
        return [
            {
                source: '/',
                destination: '/services',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
