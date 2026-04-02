module.exports = {
  apps: [
    {
      name: "portfolio-server",
      script: "./server/server.js",
      env: {
        NODE_ENV: "production",
      }
    }
  ]
};
