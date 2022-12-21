const main = async () =>{
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    
    console.log("Deploying contract with account", deployer.address);
    console.log("Account balance", accountBalance.toString());

    const Token = await hre.ethers.getContractFactory("NewsFeed");
    const portal = await Token.deploy();
    await portal.deployed();

    console.log("NewsFeed address: ", portal.address);
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch(error){
        console.error(error);
        process.exit(1);
    }
}

runMain();