/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'res.cloudinary.com' ]
    },
    experimental: {
        serverComponentsExternalPackages: ['graphql-request']
    }
}

module.exports = nextConfig
