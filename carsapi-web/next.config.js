/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "xynovwsavc1tp5oz.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
