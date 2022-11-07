require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const PROVIDER_URL = process.env.PROVIDER_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: PROVIDER_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};