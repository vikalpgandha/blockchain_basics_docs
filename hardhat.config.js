require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_APIKEY, PRIVATE_KEY } = process.env;

const MUMBAI_RPC_URL =
  process.env.MUMBAI_RPC_URL ||
  `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_APIKEY}`;

const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_APIKEY}`;

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_APIKEY}`;

const POLYGON_MAINNET_RPC_URL =
  process.env.POLYGON_MAINNET_RPC_URL ||
  `https://polygon-mainnet.alchemyapi.io/v2/${ALCHEMY_APIKEY}`;

// Your API key for Etherscan, obtain one at https://etherscan.io/
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "your-api-key";
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "your-api-key";
const REPORT_GAS = process.env.REPORT_GAS || false;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },

    /**
     * nameOfNetwork : { config }
     */
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY], // Array of private keys for this network (used by namedAccounts below)
      saveDeployments: true,
      chainId: 11155111,
      blockConfirmations: 6,
    },
    
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 80001,
      blockConfirmations: 6,
    },
    mainnet: {
      url: MAINNET_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 1,
      blockConfirmations: 6,
    },
    polygon: {
      url: POLYGON_MAINNET_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 137,
    },
  },
  etherscan: {
    // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY,
    },
  },
  /**
   * Specific hardhat-contract-sizer
   * This analyses size of all contract and displays on console for specific condition
   */
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false, // set true to print size of all contract after every compilation
  },
  // Specific to hardhat-deploy module
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      
      /* chainId: index of private key array of respective network */
    },
  },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.18", // set version here
        settings: {
          optimizer: {
            enabled: true,
            runs: 1, // Optimize for how many times you intend to run the code
          },
          viaIR: true, 
        },
      },
    ],
  },
};
