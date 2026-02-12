/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bu satır Next.js'in statik HTML çıktı vermesini sağlar
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Statik exportta Next.js'in görsel optimizasyon motoru çalışmaz, bunu eklemelisin
  },
}

export default nextConfig