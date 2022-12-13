// next.config.js

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  child-src 'self';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;  
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

module.exports = {
  async redirects() {
    return [
      {
        source: "/t/:tournamentId",
        destination: "/t/:tournamentId/temp/team-standings",
        permanent: true,
      },
      {
        source: "/t/:tournamentId/:slug",
        destination: "/t/:tournamentId/:slug/team-standings",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
