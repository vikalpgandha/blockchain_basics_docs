# Blockchain Documentation

This Documentation lists all steps to learn about basic blockchain techonology and its related application.

# Resources and Information

- This documentation will explain path to follow for learning basics about blockchain and related application and This documentation will mainly use youtube video from [FreeCodeCamp](https://www.youtube.com/watch?v=gyMwXuJrbJQ).

- Find more resources used by above youtube video creator at his [Github Repo](https://github.com/smartcontractkit/full-blockchain-solidity-course-js).

- Above video and its creator's github repo covers alot more then we need to get started so **_Do not try to follow whole video to get started_** .

- It is recommanded to go through this documentation first to get started with blockchain and after gaining experience with basic blockchain applications, feel free to explore more on your own or follow above video according to your need.

- Initially Use [Remix WebIDE](https://remix.ethereum.org/) to get started with Solidity Programming as it requires addtional steps to setup everything inside local machine.

- This documentation will assume that you are using [VSCode](https://code.visualstudio.com/) as IDE in local machine. If you are using other IDE, several part of this documentation may not work properly and may require your additional research.

- This documentation will mainly follow Etherium Blockchain Network.

- Along with documentation, There is also one demo project inside this github repo. This project will give basic understanding on how to get started with hardhat as demo project is created using `npx hardhat` command.

- To setup project in your local machine, clone this repository, open terminal inside root of project and then run following command to install all dependencies `npm i`.

- To Run above project, you will need to create .env file in your local machine. find .demo.env file in this project to find which variable needs in order to run this project. Get Alchemy API Key using [thid video](https://youtu.be/tfggWxfG9o0)

# Route to follow for Complete Beginners

1. Information on How to follow along [video](https://www.youtube.com/watch?v=gyMwXuJrbJQ) I linked above using creator's [Github Repo](https://github.com/smartcontractkit/full-blockchain-solidity-course-js) : [4:40](https://youtu.be/gyMwXuJrbJQ?t=280) - [8:42](https://youtu.be/gyMwXuJrbJQ?t=520)

2. What is blockchain and smart contracts? : [9:09](https://youtu.be/gyMwXuJrbJQ?t=549) - [18:12](https://youtu.be/gyMwXuJrbJQ?t=1090)

3. Why do we need Smart contract?: [18:26](https://youtu.be/gyMwXuJrbJQ?t=1106) - [30:35](https://youtu.be/gyMwXuJrbJQ?t=1835)

4. Setup Metamask wallet: [39:51](https://youtu.be/gyMwXuJrbJQ?t=2391) - [49:51](https://youtu.be/gyMwXuJrbJQ?t=2990)

5. First Transaction in Testnet using metamask: [49:52](https://youtu.be/gyMwXuJrbJQ?t=2991) - [59:00](https://youtu.be/gyMwXuJrbJQ?t=3540)

6. What is Gas in Transaction?: [59:01](https://youtu.be/gyMwXuJrbJQ?t=3541) - [1:04:49](https://youtu.be/gyMwXuJrbJQ?t=3889)

7. How do Blockchain works?: [1:05:33](https://youtu.be/gyMwXuJrbJQ?t=3932) - [1:30:16](https://youtu.be/gyMwXuJrbJQ?t=5416)

8. Introduction to Remix IDE: [2:01:17](https://youtu.be/gyMwXuJrbJQ?t=7277) - [2:05:22](https://youtu.be/gyMwXuJrbJQ?t=7522)

9. Solidity Basics: [2:05:24](https://youtu.be/gyMwXuJrbJQ?t=7524) - [3:42:30](https://youtu.be/gyMwXuJrbJQ?t=13355) and [4:09:10](https://youtu.be/gyMwXuJrbJQ?t=14950) - [5:30:00](https://youtu.be/gyMwXuJrbJQ?t=21180) In this section you don't have to learn about Oracle Problem and Oracle Network as it is less used concept in our projects so that part is excluded here. Though you can visit that section (Time Stamp 3:43 - 4.09) in future as it is not obsolete part afterall.

10. Introduction to [ERC/ERP](https://www.youtube.com/watch?v=-cknquI5LGA).

11. Introduction to [openzeppelin](https://www.youtube.com/watch?v=6jgRN9VM08A).

12. Introduction to [ERC721-NFT](https://www.youtube.com/watch?v=QFYU81zM_jA).

13. Deploy Your First [NFT](https://www.youtube.com/watch?v=veBu03A6ptw).

From Steps 14 and onwards, VSCode will be used to interact with contract using JavaScript inside Local machine.

14. Basics of ethers.js [5:30:47](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=93029s) - [8:17:00](https://youtu.be/gyMwXuJrbJQ?t=29820)

Normally you will use Hardhat to deploy contracts in various blockchain network and initial interaction with contracts.

15. Introduction to Hardhat (By SimpleStorage Project) [8:20:18](https://youtu.be/gyMwXuJrbJQ?t=30018) : [9:26:00](https://youtu.be/gyMwXuJrbJQ?t=33975)


### Prerequisite

- VSCode IDE as all steps mentioned below specifically writtent assuming VSCode as IDE.

- [Git Bash](https://git-scm.com/download/win)

- [Node.js v14 - v18](https://nodejs.org/en/)

### Installation

- Open Command Prompt / Powershell with Administration Previllages.

- Install Hardhat using NPM by typing code `npm i --save-dev hardhat`

- Verify hardhat Installation `npx hardhat`

### Prepare VSCode for Hardhat and Solidity

- Solidity Language is not supported in VSCode by default. So you won't get any suggestion while coding and code will be displayed as plain white text. To make solidity recognizable and supported in VSCode, you need to install extension in VSCode named Solidity by NomicFoundation.

- To install solidity extention, goto Extensions Tab from right bar and then search for following keyword `NomicFoundation.hardhat-solidity` which will bring matching result for that ID. Install first result named 'solidity' by 'NomicFoundation'

- For deployment there is script provided in deploy folder. That deploy scripts relies on other package. install it by using below command

  `npm i --save-dev hardhat-deploy`

- This project is using modified version of ethers for contract interaction scripts (files in scripts folder) you can install that package by below command.

  `npm i --save-dev @nomiclabs/hardhat-ethers`

- If you want to use this repo's hardhat.config.js as a base for all future projects, don't forget to install additional package which is used in that config files

  `npm i --save-dev hardhat-deploy hardhat-contract-sizer hardhat-gas-reporter @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-ethers`

### Compile all Solidity files

Hardhat will compile all solidity files from contracts folder if you run `npx hardhat compile`

### Deploy Contract in Specific Network

- First you have to write deploment scripts for specific contract. Refer to the script provided in this repo for rough idea on how to create deployment script.

- After creating script and defining network inside `hardhat.config.js` you can deploy that contract inside that network like this
 
  `npx hardhat deploy --network <name of network>`

- Above command will execute all scripts inside `deploy` folder. to deploy specific contract pass tag name in command like this
  
  `npx hardhat deploy --tags <TagName Of Script> --network <Name of Network>`

- As you can see in `SimpleStorage.js` script inside deploy folder. You can define tag name of your every deploy script as shown below.

  `module.exports.tags = ["all", "any-name-of-script"]`

  Put above line at the end of script.

- Explore this project's hardhat.config.js to get information on how to setup network.
<!-- Only executing `truffle migrate` will deploy contract inside development network. -->

### Interact with Deployed Contract

- you can write code to execute transactions and execute calls inside scripts folder.

- But As transaction requires signature generation of transaction creator and also access to specific EVM Network to insert contracts in, we may need to perform additional steps depending on which network config you used to deploy contract.

#### Using Test Network (Like Mumbai Matic) or Real Etherium Network

- For interacting with real ETH or Test Network, We need to define network configuration of network we want to interact contract in.

- Explore `hardhat.config.js` to find out how to setup network.

- After configuring `hardhat.config.js` run below command to run specific script in specific network

  `npx hardhat run scripts/<NameOfScriptFile>.js --network <NameOfNetwork>`

- For example if you want to run script `storeData.js` of this repo you can run below command to interact with already deployed contract in mumbai network like below

  `npx hardhat run scripts/storeData.js --network mumbai`

#### Using Hardhat Local Network

- Whenever you will start your new project. You initially want to test contracts extensively or you will need access to more debugging tool (Like console.log of hardhat) and more information about how your contract behaves in blockchain network. 

- You can test everything in Testnet like Sepolia or Mumbai MATIC, but you won't be able to debug contract extensively (you won't be able to use console.log in solidity and you won't be able to salvage more information also) and you will get very limited blockchain currency to use and it will be also slow to work with as it will take some time to execute functions and so on.

- In that case it is preffered to use local network of hardhat to debug contract. which gives us access to lots of debugging tools and information including console.log in solidity files.

- To use local network first you have to add configuration for localhost in `hardhat.config.js`. See `localhost` network config of this repo's `hardhat.config.js` to get config of localhost.

- After configuring localhost network you can start local network by below command

  `npx hardhat node` 

- Above command will run all deploy scripts and then gives us access to 20 fake hardhat accounts to play with

- For deployment and interaction you can use same command mentioned above and network name will be `localhost` for that command

  `npx hardhat deploy --network localhost`

# Useful Docs

1. [Hardhat Docs](https://hardhat.org/docs)
2. [openZeppelin](https://docs.openzeppelin.com/contracts/4.x/) for smart contract management.
3. [OpenSea](https://docs.opensea.io/) for NFT marketplace management.
