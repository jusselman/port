import createMDX from '@next/mdx'
import { NextConfig } from 'next'

const withMDX = createMDX({
  extension: /\.mdx?$/
})

const nextConfig: NextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
