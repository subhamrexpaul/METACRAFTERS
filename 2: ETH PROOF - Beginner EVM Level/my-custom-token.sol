// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MyToken {

    string public name = "My Custom Token";
    string public symbol = "MCT";
    uint256 public totalSupply = 0;

    mapping(address => uint256) public balances;

    function mintTokens(address _to, uint256 _amount) public {
        totalSupply += _amount;
        balances[_to] += _amount;
    }

    function burnTokens(address _from, uint256 _amount) public {
        require(balances[_from] >= _amount, "Insufficient balance");
        
        totalSupply -= _amount;
        balances[_from] -= _amount;
    }

}