/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_API_KEY, METAMASK_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "Mainnet",
  networks: {
    hardhat: {},
    maninet: {
      url: ALCHEMY_API_KEY,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
};
