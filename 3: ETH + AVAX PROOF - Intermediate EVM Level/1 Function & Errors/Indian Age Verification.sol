// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "hardhat/console.sol";

contract AgeVerifier 
{
    uint256 public age;

    function LockAge(uint256 _age) public 
    {
        age = _age;
    }

    function AssertIndian() public view 
    {
        assert(age >= 18);
        console.log("You are legally an adult in India.");
    }

    function RequireIndian() public view 
    {
        require(age >= 18, "Sorry, only adults are allowed in this Indian context.");
        console.log("You are legally an adult in India.");
    }

    function RevertIndian() public view 
    {
        if (age >= 18) 
            console.log("You are legally an adult in India."); 
        else
            revert("Sorry, only adults are allowed in this Indian context.");
    }
}
