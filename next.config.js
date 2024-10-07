/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.nafisexpress.com",
        port: "",
        pathname: "/nafisexpress/**"
      }
      , {
        protocol: "https",
        hostname: "**.enamad.ir",
      }
    ]
  }
};

module.exports = nextConfig;
