
const main = async () => {
    const coffeeContractFactory = await hre.ethers.getContractFactory('CoffeePortal')
    const coffeeContract = await coffeeContractFactory.deploy();


    await coffeeContract.deployed();

    console.log("Coffee contract delpoyed:", coffeeContract.address)


    let contractBalance = await hre.ethers.provider.getBalance(coffeeContract.address)
console.log("Contract balance:", hre.ethers.utils.formatEther(contractBalance))



const coffeeTxn = await coffeeContract.buyCoffee(
    "coffee #1",
    "Ermias",
    ethers.utils.parseEther("0.001")
);
await coffeeTxn.wait();


let allCoffee =  await coffeeContract.getAllCoffee();
console.log(allCoffee)
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