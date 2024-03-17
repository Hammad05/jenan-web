/** @type {import('next').NextConfig} */
const nextConfig = {
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
