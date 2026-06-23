import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkXprops from './src/remark-xprops.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    images: {unoptimized: true},
    trailingSlash: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [remarkGfm, remarkMath, remarkXprops],
    },
});

export default withMDX(nextConfig);
