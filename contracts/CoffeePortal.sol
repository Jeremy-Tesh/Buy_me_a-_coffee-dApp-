// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CoffeePortal {

uint256 totalCoffee;

address payable public owner;


event NewCoffee(
    address indexed from,
    uint256 timestamp,
    string message,
    string name

);


    constructor() payable {
        console.log("Yo! Smart Contract");
        owner = payable(msg.sender);
    }


    struct Coffee {
        address giver;
        string message;
        string name;
        uint256 timestamp;
    }

    Coffee[] coffee;


    function getAllCoffee() public view returns (Coffee[] memory) {
        return coffee;
    }


    function getTotalCoffee() public view returns (uint256){
        console.log("Total coffee recieved",totalCoffee);
        return totalCoffee
    }

}
