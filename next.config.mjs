import path from 'node:path';
import {fileURLToPath} from 'node:url';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkXprops from './src/remark-xprops.mjs';

const postImages = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/component/X/Image/postImages.js');
const postImagesDev = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/component/X/Image/postImages.dev.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    trailingSlash: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    webpack: (config, {dev}) => {
        if (dev) {
            config.resolve.alias[postImages] = postImagesDev;
            config.resolve.alias[postImages.replace(/\.js$/, '')] = postImagesDev;
        }
        return config;
    },
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [remarkGfm, remarkMath, remarkXprops],
    },
});

export default withMDX(nextConfig);
