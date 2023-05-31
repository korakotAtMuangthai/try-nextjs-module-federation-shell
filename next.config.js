const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack(config, options) {
    if (!options.isServer) {
      const federationConfig = {
        name: "shell",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          core: "core@http://localhost:3011/_next/static/chunks/remoteEntry.js",
        },
        exposes: {},
        shared: {},
      };
      config.plugins.push(
        new NextFederationPlugin(federationConfig),
        new FederatedTypesPlugin({
          federationConfig,
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
