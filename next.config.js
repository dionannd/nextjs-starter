/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self' https://*.towedd.com/ 'unsafe-inline';
  style-src 'self' https://fonts.googleapis.com;
  font-src https://fonts.gstatic.com https://*.towedd.com/ 'unsafe-eval'; 
  img-src 'self' blob: data:;
`;

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Cache-Control',
    value: 'public, maxage=60, stale-while-revalidate'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Server',
    value: 'Towedd-Server'
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer'
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none'
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: 'https://*.towedd.com/'
  }
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  // }
];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  }
};

module.exports = nextConfig;
