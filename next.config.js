// next.config.js

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
};
