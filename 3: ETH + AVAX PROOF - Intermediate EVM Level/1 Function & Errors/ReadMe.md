# Age Verification Smart Contract

## Introduction

This repository contains the source code for an Age Verification Smart Contract implemented in Solidity. The contract provides three different methods for verifying if a person is legally an adult, based on a given age.

## Requirements

The Age Verification Smart Contract satisfies the following requirements:

1. Includes a variable to store the age.
2. Implements methods for age verification using different techniques: `AssertIndian`, `RequireIndian`, and `RevertIndian`.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/subhamrexpaul/age-verification-smart-contract.git
```

## Navigate to the project folder:

``cd age-verification-smart-contract``
1. Install required dependencies (if any).

2. Deploy the contract to an Ethereum development environment (e.g., Remix, Hardhat, etc.).

3. Interact with the contract using a web3 provider or Ethereum development tools.

## Usage

Ensure you have the necessary environment set up and the contract deployed before proceeding.

## Assert Method (Age Verification)
Use the AssertIndian function to verify if the age is 18 or older using an assertion. If the age is verified, a message stating "You are legally an adult in India." will be logged.

## Require Method (Age Verification)
Use the RequireIndian function to verify if the age is 18 or older using a require statement. If the age is verified, a message stating "You are legally an adult in India." will be logged. If the age is not verified, an error message will be displayed.

## Revert Method (Age Verification)
Use the RevertIndian function to verify if the age is 18 or older. If the age is verified, a message stating "You are legally an adult in India." will be logged. If the age is not verified, the transaction will revert with an error message.

## Contributing

🛡️ This repository treasures personal assignments; contributions are reserved. Yet, share ideas through issues - your voice matters! 🌟

## Author

SUBHAM PAUL

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the MIT License. You are free to modify and distribute the code for personal and educational purposes.
