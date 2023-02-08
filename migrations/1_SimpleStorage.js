const MyContract = artifacts.require("SimpleStorage");

module.exports = async function(deployer) {
  // deployment steps
  await deployer.deploy(MyContract);
  const instance = await MyContract.deployed();
  // console.log(instance);
  await instance.addPerson('Vikalp', 85)
  await instance.store(95)
  const data = await instance.retrieve();
  console.log('data',data.words);
};
