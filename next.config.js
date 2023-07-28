/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['graphql-request']
    }
}

module.exports = nextConfig
