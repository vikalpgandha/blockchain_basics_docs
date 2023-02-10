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

- Along with documentation, There is also one demo project inside this github repo. This project will give indepth understanding on how to get started with truffle as demo project is created using `truffle init` command.

- To setup project in your local machine, clone this repository, open terminal inside root of project and then run following command to install all dependencies `npm i`.

- Addtiionally Truffle needs tobe installed saperately by following [this guide](#setup-truffle) to make demo project fully functional.

# Route to follow for Complete Beginners

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

11. [Basic Overview of Truffle Project](#understanding-truffle-project-structure)

12. [Use Truffle](#how-to-use-truffle) in Local Machine

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

### Prepare VSCode for Truffle and Solidity

- Solidity Language is not supported in VSCode by default. So you won't get any suggestion while coding and code will be displayed as plain white text. To make solidity recognizable and supported in VSCode, we need to install extension in VSCode named Solidity by Juan Blanco.

- To install solidity extention, goto Extensions Tab from right bar and then search for following keyword `JuanBlanco.solidity` which will bring matching result for that ID. Install first result named 'solidity' by 'Juan Blanco'

- In modern Windows (which comes with Powershell) truffle may not run using VSCode's default Windows Terminal due to enforced Restriction Policy to execute .ps1 files. In that case running truffle may result in PSSecurityException error. Switching default terminal from Powershell to either Command Prompt or git bash will help here.

# Understanding Truffle Project Structure

- After executing `truffle init` inside newly created folder, You will get following important directories and files

1. `contracts` (Directory)
2. `migrations` (Directory)
3. `tests` (Directory)
4. `truffle-config.js`

- You will understand use of each directory or file inshort one by one.

### contracts

`contracts` folder is folder which will contain all contracts writtent in solidity language (`.sol`).
Truffle will compile all solidity files which is placed inside this folder when we instruct truffle to compile.

### migrations

`migrations` is folder where we provide instruction to truffle on how to deploy contract and what to deploy from all our compiled contracts.

All files inside this will let us customize deployment of contracts from all our compiled contracts and what to do after deploying contracts.

Apparently you can do anything with our contract as you can get access to contract instance inside migration file and after that you can perform transactions and calls.

All files inside this folder will be written in JavaScript Language.

[How to write migration file?](#truffle-migration-files)

### test

`test` folder will contain all the test files which can perform several tests on contracts.

### truffle-config.js

This file is very important file. which will contain all the configuration we can change or add.

This will be writtent in JavaScript and using this file, we can configure various networks, change solidity compiler version etc.

[How to use truffle-config.js?](#use-truffle-configjs)

# How to Use Truffle?

- This section will give extremely basic overview on How to deploy and interact with contract using truffle inside Local Machine

### Truffle Migration Files

- These files are located inside migrations folder.

- These files will get executed if we run `truffle migrate` and it makes possible to interect with contract using JavaScript.

- We can divide code of migration files into 2 parts.

1. Part which deploys contracts into Netqork
2. Another part which will come after deployment and that part will interect with cotracts by executing transaction and other calls.

```
const MyContract = artifacts.require("SimpleStorage");
module.exports = function(deployer) {
  deployer.deploy(MyContract);

  < -- Code which interects with contract below -- >

  const instance = await MyContract.deployed();
  await instance.addPerson('Vikalp', 85)
  await instance.store(95)
  const data = await instance.retrieve();
  console.log('data',data.words[0]);
};
```

#### Cotract Deployment Part

- Here is basic code of migration file which deploys contract named SimpleStorage inside specified network.

  ```
  const MyContract = artifacts.require("SimpleStorage");

  module.exports = function(deployer) {
    deployer.deploy(MyContract);

    < -- Contract Interaction code -- >
  };
  ```

- Here we are creating variable named `MyContract` which will be of type contract and then we will assign `artifacts.require('SimpleStorage')` to that variable.

- `artifacts` will be generated after truffle compiles all solidty files and that will contain all the contracts.

- We can instruct truffle to deploy only specific contract using `artifacts.require(<NameOfContract>)`

- `artifacts.require('SimpleStorage')` will grab contract named `SimpleStorage` from generated artifacts and then it will return that contract. which will be stored inside variable we assigned.

- Next part of code is function we are exporting and that will be executed by truffle.

- truffle will provide `deployer` method as argument and using that we can deploy contract stored inside variable `deployer.deploy(MyContract)`

#### Contract Interaction Part

- Here is part of code which is interating with deployed contract stored inside `MyContract` variable.

  ```
  let MyContract;

  < -- Contract Deployment Instrouctions -- >

  module.exports = async function(deployer) {
    deployer.deploy(MyContract);  --> Deploys the contract

    const instance = await MyContract.deployed();
    await instance.addPerson('Vikalp', 85)
    await instance.store(95)
    const data = await instance.retrieve();
    console.log('data',data.words[0]);
  };
  ```

- Line `const instance = await MyContract.deployed()` is creating and storing instance of deployed `MyContract` inside specified network. This line will give you the access of contract inside blockchain network.

- Now you can use this instance to interect with contract. for example, line `await instance.addPerson('Vikalp', 85)` is executing `addPerson` function with 2 arguments ('Vikalp', 85). explore `SimpleStorage.sol` file inside this repo to get information on what this function is doing.

- Next line is also doing same task as above but instead of executing `addPerson` it executes `store` function.

- We can also get access to returned data by using assignement as done in line `const data = await instance.retrieve()`

- One thing to remember is that regradless of nature of function (Transaction or Normal Function) you will not find any difference in execution of any type of function.

  That's basic explenation on how we can write and use migration file.

- Naming Convention of truffle migration file must be followed in order to make migration work.

  `1_SimpleStorage.js` -> `<index>_<identifier>.js`

- Name must start with number and number of all migration files should be unique. except that we can choose any identifier and that's completely upto you.

- Explore `SimpleStorage.sol` inside contracts folder to see all available interecations with contract.

### Use truffle-config.js

```
module.exports = {
    <All configs here>
}
```

- Major Use cases of this config file

1. Setup Solidity compiler

```
compilers: {
    solc: {
      version: "0.8.13",      // Fetch exact version from solc-bin
    }
  }
```

- Here you can configure Solidity compiler like defining version, which will be used by truffle to compile solidty files.
- All mentioned versions of compiler will be downloaded and used by truffle automatically.

2. Setup Network

- This configuration object is used to define various network configuration.

- In all network configs `development` name is special - truffle uses it by default if it's defined here and no other network is specified at the command line.

- You should run a client (like ganache, geth, or parity) in a separate terminal tab if you use this network and you must also set the `host`, `port` and `network_id`.

- Another network configuration we are gonna use here is `dashboard` configuration.

- Truffle provides us way to make interection possible inside Test networks or real networks using Truffle Dashboard and to use truffle dashboard, dashboard config is necessary to setup here.

- Explore `truffle-config.js` file of this repo to get more info.

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
    }
  ```

- For more and indepht information on how to use this config file, [go here](https://trufflesuite.com/docs/truffle/reference/configuration/)

### Compile all Solidity files

Truffle will compile all solidity files from contracts folder if you run `truffle migrate`

### Deploy Contract in Specific Network

After defining network inside `truffle-config.js` you can deploy that contract inside that network like this
`truffle migrate --network <name of network>`

Only executing `truffle migrate` will deploy contract inside development network.

### Interect with Deployed Contract

- As explained in [Truffle Migration File Section](#truffle-migration-files) you can write code to execute transactions and execute calls inside migration files.

- But As transaction requires signature generation of transaction creator and also access to specific EVM Network to insert contracts in, we may need to perform additional steps depending on which network config you used to deploy contract.

#### Using Truffle's Fake Ganache Network (`truffle migrate` || `truffle migrate --network development`)

- If We execute `truffle migrate` without specifiying network config, truffle will deploy contract using `development` configs.

- In this network config we don't need any additional setup as truffle itself is generating fake blockchain network locally and thus truffle will fake signature generation for all trasactions.

- You can use this way to debug your code and that's why mainly you will end up using ganache network during your debugging phase.

- Although we can use truffle's another product to monitor each and every transaction of ganache network, that is Ganache.

- Follow [this section](#setup-truffle-ganache) to setup Ganache app inside your local machine.

#### Using Test Network (Like Goerli) or Real Etherium Network

- For interecting with real ETH or Test Network, We are gonna use Truffle dashboard.

- Goto [Setup Truffle Dashboard](#setup-truffle-dashboard) Section to setup and get started with Truffle Dashboard.

- After setting up Dashboard. Keep dashboard running in Terminal and from other terminal run following.

  `truffle migrate --network dashboard`

- Above command will run all migration files and if you are performing transaction inside migrations file then truffle will prompt you to authorize transaction via truffle dashboard GUI and authorizing transaction will create signature and then you will receive final confirmation from metamask wallet with transaction info.

- Confirming transaction from wallet will complete the transaction.

### Setup Truffle Ganache

- [What is Ganache?](https://trufflesuite.com/docs/ganache/#what-is-ganache)

- To setup Ganache app, first download Ganache for your local machine from [here](https://trufflesuite.com/ganache).

- After installing app, open the app and then you will be greeted with 2 options.

1. Quickstart
2. New Workspace

- On the same screen you will also get suggestion for workspace if you have created workspace previously. So below steps are only needed one time per truffle project. (i.e. Each truffle project will get its own workspace)

- But for the first time, you have to go with option `New Workspace`.

- After clicking on `New Workspace`, you will need to set name of workspace, name of workspace is completely upto you.

- But for Tuffle Projects, you will have to add `truffle-config.js` file of your truffle projects.

- You can add multiple `truffle-config.js` files in same workspace i.e. You can link your multiple projects with same workspace.

- After linking truffle projects and naming workspace. click on `Save Workspace`.

- This will create local blockchain network with 10 fake accounts and various debugging tools.

- Now you can deploy your linked truffle project inside this network by simply doing `truffle migrate`.

- Explore [Ganache Documentation](https://trufflesuite.com/docs/ganache/) for more information.

### Setup Truffle Dashboard

- [What is Truffle Dashboard?](https://trufflesuite.com/docs/truffle/how-to/use-the-truffle-dashboard/)
- One way to interact with contract deployed inside real ETH Network or Testnet (like Goerli) is using truffle dashboard.
- To setup truffle dashboard, first we need to specify network config for dahsboard and to do that, we have to add `dashboard` config inside networks array like this.

  ```
  dashboard: {
        port: 24012
      },
  ```

- Now run following command to start Dashboard GUI into localhost.

  `truffle dashboard`

- Above command will start dashboard server in localhost with port 24012 and after that you can access Dashboard GUI using url link given below.

  `http://127.0.0.1:24012/rpcs`

- Inside Dashboard GUI on bottom left corner you will get button with `click to connect` written on it. by clicking on that button, dashboard will recognize metamask wallet you are using and inside metamask you will get confirmation. confirming all dialogues in metamask wallet will grant access of your secret code to dashboard and that secret will be then used by dashboard itself to create valid signature to attach with transactions.

- Your defined newtork config will be used if you use `dashboard` name and due to that you can simply migrate using config name `dashboard` without specifying port number or any other network properties like this.

  `truffle migrate --network dashboard`

- Above command will migrate your contract inside newtork you have connected your dashboard in.

# Useful Docs

1. [Truffle Suite](https://trufflesuite.com/docs/)
2. [openZeppelin](https://docs.openzeppelin.com/contracts/4.x/) for smart contract management.
3. [OpenSea](https://docs.opensea.io/) for NFT marketplace management.
