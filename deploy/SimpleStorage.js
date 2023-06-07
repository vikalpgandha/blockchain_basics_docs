module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("Using",deployer, "for deployment!");
  let args = [];
  const SimpleStorage = await deploy("SimpleStorage", {
    from: deployer,
    args,
    log: true,
    waitConfirmations: 1,
  });
  console.log(
    "SimpleStorage is Created and address is: ",
    SimpleStorage.address
  );
};

module.exports.tags = ["all", "SimpleStorage"];
