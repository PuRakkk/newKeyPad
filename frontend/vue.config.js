// vue.config.js
module.exports = {
  devServer: {
    allowedHosts: "all", // Allow all hosts (including ngrok)
    host: "0.0.0.0",
    port: 8080, // Ensure this matches your Vue port
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws', // Fix HMR issues
    },
  },
};
