
const main = async () => {
    const coffeeContractFactory = await hre.ethers.getContractFactory('CoffeePortal')
    const coffeeContract = await coffeeContractFactory.deploy();


    await coffeeContract.deployed();

    console.log("Coffee contract delpoyed:", coffeeContract.address)
};

const runMain = async () => {
    try {
        await main();
        
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

runMain();