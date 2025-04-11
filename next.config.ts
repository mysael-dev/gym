// import { withVanillaExtract } from '@vanilla-extract/next-plugin';
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
import type { NextConfig } from "next";


const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

// export default nextConfig;
export default withVanillaExtract(nextConfig);
