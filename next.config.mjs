import WithPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withPWA = WithPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default withPWA(nextConfig);
