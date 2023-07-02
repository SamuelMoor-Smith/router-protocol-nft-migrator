const hre = require("hardhat");

async function main() {
	const Contract = await hre.ethers.getContractFactory("Test-contract");
	const contract = await Contract.deploy();

	await contract.deployed();

	console.log("Test-contract deployed to:", contract.address);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});