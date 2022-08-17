const main = async () => {
    const [deployer] =await hexStripZeros.ethers.getSigners();
    const accountBalance = await deployer.getBalance();


    console.log("Deploying contract with account:", deployer.address
    )
    console.log("Account balance", accountBalance.toString());



    const Token  = await hre.etheres.getcontractFactory('CoffeePortal')
    const portal = await Token.deploy()
    await portal.deployed();


