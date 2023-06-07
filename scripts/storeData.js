const { ethers } = require("hardhat");

const SimpleStorageAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

const main = async () => {
  const signers = await ethers.getSigners();
  console.log(
    "Using",
    signers[0].address,
    "for script execution!"
  );
  const minter = signers[0];

  const SimpleStorage = await ethers.getContractAt("SimpleStorage", SimpleStorageAddress);
  const tx = await SimpleStorage.connect(minter).addPerson('Vikalp', 85);
  await tx.wait(1);
  const tx2 = await SimpleStorage.connect(minter).store(95)
  await tx2.wait(1);
  const data = await SimpleStorage.retrieve();
  console.log("Data is", data)
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
