# NFT Minting Backend

This repository contains a backend service implemented in NestJS for minting NFTs. The service interacts with an NFT contract deployed on the Sepolia test network.

## Features

Provides functionality to mint NFTs by interfacing with a smart contract.

## Setup

1. Install Dependencies

```ssh
yarn install
```

2. Environment Configuration

```ssh
SEPOLIA_RPC_URL=<Your_Sepolia_RPC_Endpoint>
PRIVATE_KEY_TESTNET=<Your_Private_Key>
NFT_MINT_CONTRACT_ADDRESS=<Deployed_NFT_Contract_Address>
```

## Run the Service

```ssh
npm run start:dev
```
