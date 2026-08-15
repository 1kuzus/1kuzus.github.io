import {fileURLToPath} from 'node:url';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkXprops from './src/remark-xprops.mjs';
import rehypeMdxImportMedia from 'rehype-mdx-import-media';
import {rehypeImageQuery} from './src/x-image-import.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    images: {unoptimized: true},
    trailingSlash: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    webpack: (config) => {
        // for []: xxx
        config.module.rules.push({
            test: /[\\/]src[\\/]posts[\\/].+[\\/]index\.js$/,
            enforce: 'pre',
            use: [{loader: fileURLToPath(new URL('./src/x-image-import.mjs', import.meta.url))}],
        });
        return config;
    },
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [remarkGfm, remarkMath, remarkXprops],
        rehypePlugins: [rehypeImageQuery, rehypeMdxImportMedia], // for []: xxx
    },
});

export default withMDX(nextConfig);
