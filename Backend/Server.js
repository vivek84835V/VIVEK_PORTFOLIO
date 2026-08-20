const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const express = require("express");
const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
