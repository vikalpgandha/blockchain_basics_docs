# Blockchain Documentation

This Documentation lists all steps to learn about basic blockchain techonology and its related application.

This documentation has two possible routes to follow.

1. For one Who doesn't know anything about blockchain
2. For one who knows basics about how blockchain works but doesn't know about any other stuff like Solidity, Smart Contracts etc.

# Resources and Information

- This documentation will explain path to follow for learning basics about blockchain and related application and This documentation will mainly use youtube video from [FreeCodeCamp](https://www.youtube.com/watch?v=gyMwXuJrbJQ).

- Find more resources used by above youtube video creator at his [Github Repo](https://github.com/smartcontractkit/full-blockchain-solidity-course-js).

- Above video and its creator's github repo covers alot more then we need to get started so ***Do not try to follow whole video to get started*** . 

- It is recommanded to go through this documentation first to get started with blockchain and after gaining experience with basic blockchain applications, feel free to explore more on your own or follow above video according to your need.

- Initially Use [Remix WebIDE](https://remix.ethereum.org/) to get started with Solidity Programming as it requires addtional steps to setup everything inside local machine.

- This documentation will assume that you are using [VSCode](https://code.visualstudio.com/) as IDE in local machine. If you are using other IDE, several part of this documentation may not work properly and may require your additional research.

- This documentation will mainly follow Etherium Blockchain Network.

# Route 1 for complete Beginners

1. Information on How to follow along [video](https://www.youtube.com/watch?v=gyMwXuJrbJQ) I linked above using creator's [Github Repo](https://github.com/smartcontractkit/full-blockchain-solidity-course-js) : [4:40](https://youtu.be/gyMwXuJrbJQ?t=280) - [8:42](https://youtu.be/gyMwXuJrbJQ?t=520)

2. What is blockchain and smart contracts? : [9:09](https://youtu.be/gyMwXuJrbJQ?t=549) - [18:12](https://youtu.be/gyMwXuJrbJQ?t=1090)

3. Why do we need Smart contract?: [18:26](https://youtu.be/gyMwXuJrbJQ?t=1106) - [30:35](https://youtu.be/gyMwXuJrbJQ?t=1835)

4. Setup Metamask wallet: [39:51](https://youtu.be/gyMwXuJrbJQ?t=2391) - [49:51](https://youtu.be/gyMwXuJrbJQ?t=2990)

5. First Transaction in Testnet using metamask: [49:52](https://youtu.be/gyMwXuJrbJQ?t=2991) - [59:00](https://youtu.be/gyMwXuJrbJQ?t=3540)

6. What is Gas in Transaction?: [59:01](https://youtu.be/gyMwXuJrbJQ?t=3541) - [1:04:49](https://youtu.be/gyMwXuJrbJQ?t=3889)

7. How do Blockchain works?: [1:05:33](https://youtu.be/gyMwXuJrbJQ?t=3932) - [1:30:16](https://youtu.be/gyMwXuJrbJQ?t=5416)

8. Introduction to Remix IDE: [2:01:17](https://youtu.be/gyMwXuJrbJQ?t=7277) - [2:05:22](https://youtu.be/gyMwXuJrbJQ?t=7522)

9. Solidity Basics: [2:05:24](https://youtu.be/gyMwXuJrbJQ?t=7524) - [5:30:39](https://youtu.be/gyMwXuJrbJQ?t=19838). In this section you don't have to learn about Oracle Problem and Oracle Network as it is not import part and less used part here.

10. [Setup Truffle](#setup-truffle) in Local Machine

# Route 2 for Those who knows basics about blockchain

1. Information on How to follow along [video](https://www.youtube.com/watch?v=gyMwXuJrbJQ) I linked above using creator's [Github Repo](https://github.com/smartcontractkit/full-blockchain-solidity-course-js) : [4:40](https://youtu.be/gyMwXuJrbJQ?t=280) - [8:42](https://youtu.be/gyMwXuJrbJQ?t=520)

2. Setup Metamask wallet: [39:51](https://youtu.be/gyMwXuJrbJQ?t=2391) - [49:51](https://youtu.be/gyMwXuJrbJQ?t=2990)

3. First Transaction in Testnet using metamask: [49:52](https://youtu.be/gyMwXuJrbJQ?t=2991) - [59:00](https://youtu.be/gyMwXuJrbJQ?t=3540)

4. What is Gas in Transaction?: [59:01](https://youtu.be/gyMwXuJrbJQ?t=3541) - [1:04:49](https://youtu.be/gyMwXuJrbJQ?t=3889)

5. Introduction to Remix IDE: [2:01:17](https://youtu.be/gyMwXuJrbJQ?t=7277) - [2:05:22](https://youtu.be/gyMwXuJrbJQ?t=7522)

6. Solidity Basics: [2:05:24](https://youtu.be/gyMwXuJrbJQ?t=7524) - [5:30:39](https://youtu.be/gyMwXuJrbJQ?t=19838). In this section you don't have to learn about Oracle Problem and Oracle Network as it is not import part and less used part here.

7. [Setup Truffle](#setup-truffle) in Local Machine

# Setup Truffle

- [What is Truffle?](https://trufflesuite.com/docs/truffle/)

### Prerequisite

- VSCode IDE as all steps mentioned below specifically writtent assuming VSCode as IDE.

- [Git Bash](https://git-scm.com/download/win)

- [Node.js v14 - v18](https://nodejs.org/en/)

### Installation

- Open Command Prompt / Powershell with Administration Previllages.

- Install Truffle using NPM by typing code `npm install -g truffle`

- Verify truffle version `truffle version`

### Prepare VSCode for truffle and Solidity

- Solidity Language is not supported in VSCode by default. So you won't get any suggestion while coding and code will be displayed as plain white text. To make solidity recognizable and supported in VSCode, we need to install extension in VSCode named Solidity by Juan Blanco.

- To install solidity extention, goto Extensions Tab from right bar and then search for following keyword `JuanBlanco.solidity` which will bring matching result for that ID. Install first one named 'solidity' by 'Juan Blanco'

- In modern Windows (which comes with Powershell) truffle may not run using VSCode's default Windows Terminal due to enforced Restriction Policy to execute .ps1 files. In that case running truffle may result in PSSecurityException error. Switching default terminal from Powershell to either Command Prompt or git bash will help here.

# How to Use truffle?

- This section wll give extremely basic overview on How to deploy and interact with contract using truffle inside Local Machine

### Understanding Truffle Project Structure

- After executing `truffle init` inside newly created folder, we will get following important directories and files

1. `contracts` (Directory)
2. `migrations` (Directory)
3. `tests` (Directory)
4. `truffle-config.js`

- We will understand use of each directory or file inshort one by one.

#### contracts

`contracts` folder is folder which will contain all contracts writtent in solidity language (`.sol`).

Truffle will compile all solidity files which is placed inside this folder when we instruct truffle to compile

#### migrations

`migrations` folder is folder where we provide instruction to truffle on how to deploy contract and what to deploy from all our compiled contracts.

All files inside this will let us customize deployment of contracts from all our compiled contracts.

All files inside this folder will be written in JavaScript Language.

[How to write migration file?](#truffle-migration-file)

#### test

`test` folder will contain all the test files which can perform several tests on contracts.

#### truffle-config.js

This file is very important file. which will contain all the configuration we can change or add.

This will be also writtent in JavaScript and using this file, we can configure various networks, change solidity compiler version etc.

[How to use truffle-config.js?](#use-truffle-configjs)

### Truffle Migration File

- Here is basic code of migration file which deploys contract named SimpleStorage inside specified network.
```
var MyContract = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};
```
- Here we are creating variable named `MyContract` which will be of type contract and then we will assign `artifacts.require('SimpleStorage')` to that variable.

- `artifacts` will be generated after truffle compiles all solidty files and that will contain all the contracts.

- We can instruct truffle to deploy only specific contract using `artifacts.require(<NameOfContract>)`

- `artifacts.require('SimpleStorage')` will grab contract named `SimpleStorage` from generated artifacts and then it will return that contract. which will be stored inside variable we assigned.

- Next part of code is function we are exporting and that will be executed by truffle.

- truffle will provide `deployer` method as argument and using that we can deploy contract stored inside variable `deployer.deploy(MyContract)`

- Naming Convention of truffle file must be followed in order to make migration work.

`1_SimpleStorage.js` -> `<index>_<identifier>.js`

- Name must start with number and number of all migration files should be unique. except that we can choose any identifier and that's completely upto you.

That's basic info on how to configure migration file.

### Use truffle-config.js

```
module.exports = {
    <All configs here>
}
```

- Setup Solidity compiler

```
compilers: {
    solc: {
      version: "0.8.13",      // Fetch exact version from solc-bin
    }
  }
```

- Setup Network

Useful for testing. 

The `development` name is special - truffle uses it by default. 

if it's defined here and no other network is specified at the command line. You should run a client (like ganache, geth, or parity) in a separate terminal tab if you use this network and you must also set the `host`, `port` and `network_id`

```
networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777
    },
    
    dashboard: {
      port: 24012
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, infuraProjectId),
      network_id: 5,       // Goerli's id
      chain_id: 5
    }
  }
```
### Compile all solidity files

Truffle will compile all solidity files inside contract if we run either `truffle dev` or `truffle migrate`

### Deploy Contract in specific Network

After defining network inside `truffle-config.js` we can deploy that contract inside that network like this. `truffle migrate --network <name of network>`

Only executing `truffle migrate` will deploy contract inside development network.

### Interect with deployed contract

After migrating contract to specific network we can interact contract

# Useful Docs

1. [Truffle](https://trufflesuite.com/docs/truffle/)
2. [openZeppelin](https://docs.openzeppelin.com/contracts/4.x/) for smart contract management.
3. [OpenSea](https://docs.opensea.io/) for NFT marketplace management.
