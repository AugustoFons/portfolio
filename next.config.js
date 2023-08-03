/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'res.cloudinary.com' ]
    },
    experimental: {
        serverComponentsExternalPackages: ['graphql-request']
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
        ignoreDuringBuilds: true
    }
}

module.exports = nextConfig
