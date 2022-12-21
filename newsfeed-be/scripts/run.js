const main = async () =>{
    const newsFeedContractFactory = await hre.ethers.getContractFactory("NewsFeed");
    const newsFeedContract = await newsFeedContractFactory.deploy();
    await newsFeedContract.deployed();
    // we will wait our contract being deploy to our local blockchain

    console.log("NewsFeed contract deployed to: ", newsFeedContract.address);
};

const runMain = async () =>{
    try{
        await main();
        process.exit(0);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

runMain();