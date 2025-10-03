import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_SUPABASE_URL?.split("//")[1]],
    formats: ["image/webp", "image/avif"],
  },
  poweredByHeader: false,
  compress: true,
  async rewrites() {
    return [
      {
        source: "/o-mnie",
        destination: "/about",
      },
      {
        source: "/coaching",
        destination: "/coaching",
      },
      {
        source: "/warsztaty",
        destination: "/workshops",
      },
      {
        source: "/warsztaty/:path*",
        destination: "/workshops/:path*",
      },
      {
        source: "/spotkania",
        destination: "/sessions",
      },
      {
        source: "/spotkania/:path*",
        destination: "/sessions/:path*",
      },
      {
        source: "/kontakt",
        destination: "/contact",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://clarorozwoj.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
