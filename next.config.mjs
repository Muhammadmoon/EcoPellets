/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals.push({
          punycode: 'punycode', // Handle the deprecated punycode module
        });
      }
      return config;
    },
    output: 'export',
    // unoptimized:true,

    reactStrictMode: true,
  };
  
  process.env.NODE_DISABLE_COLORS = '1'; // Suppress deprecation warning
  
  export default nextConfig;