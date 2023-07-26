# My Custom Token (MCT)

## Introduction

This repository contains the source code for My Custom Token (MCT), an ERC-20 compliant token implemented on the Ethereum blockchain using Solidity.

## Requirements

The MyToken contract satisfies the following requirements:

1. Stores the details about the token (Token Name, Token Symbol, Total Supply).
2. Uses a mapping to keep track of token balances for each address.
3. Includes a `mintTokens` function to mint new tokens, which can only be called by a designated minter address.
4. Implements a `burnTokens` function to burn tokens, reducing the total supply and the balance of the sender.
5. Provides a `transfer` function that allows token holders to transfer tokens to other addresses.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/subhamrexpaul/my-custom-token.git
```

## Navigate to the project folder:
``cd my-custom-token``
1. Install required dependencies (if any).

2. Deploy the MyToken contract to your preferred Ethereum development environment (e.g., Ganache, Remix, etc.).

3. Interact with the contract using a web3 provider or the Ethereum development tools of your choice.

## Usage

Ensure you have the necessary environment set up and the MyToken contract deployed before proceeding.

1. Set the minter address:

   Before minting tokens, the contract owner (deployer) should call the `mintTokens` function with the recipient's address and the amount of tokens to mint. Only the designated minter can execute this function.

   ```solidity
   function mintTokens(address _to, uint256 _amount) public {
       totalSupply += _amount;
       balances[_to] += _amount;
   }
   ```

2. Burn tokens:

   To burn tokens, call the `burnTokens` function with the sender's address and the amount of tokens to burn. This function will deduct the burned tokens from the total supply and the sender's balance. It also includes a `require` statement to ensure the sender has sufficient balance.

   ```solidity
   function burnTokens(address _from, uint256 _amount) public {
       require(balances[_from] >= _amount, "Insufficient balance");
       
       totalSupply -= _amount;
       balances[_from] -= _amount;
   }
   ```

## Contributing

🛡️ This repository treasures personal assignments; contributions are reserved. Yet, share ideas through issues - your voice matters! 🌟

## Author

SUBHAM PAUL

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the MIT License. You are free to modify and distribute the code for personal and educational purposes.

```

The README.md file now includes an overview of the provided Solidity code, showcasing the functions `mintTokens` and `burnTokens`, as well as instructions for getting started with the project.
