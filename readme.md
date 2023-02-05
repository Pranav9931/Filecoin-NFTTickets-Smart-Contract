# NodeJS + IPFS + Filecoin Storage Application

This is a NodeJS application that leverages the power of IPFS and Filecoin to store data in a decentralized and secure manner. IPFS (InterPlanetary File System) is a peer-to-peer network for storing and sharing files in a distributed manner. Filecoin is a decentralized storage network that incentivizes storage providers to store data securely and durably.

## Requirements

To run this application, you'll need the following installed on your machine:

- NodeJS v12.0.0 or later
- npm v6.0.0 or later
- An IPFS node
- A Filecoin node

## Installation

To install the dependencies, run the following command in your terminal:

```bash
npm install
```

## Usage

To start the application, run the following command in your terminal:

```bash
npm start
```

## Storage with IPFS and Filecoin

In this application, data is first stored in IPFS, and then the IPFS hash of the data is stored in the Filecoin network. The data can be retrieved at any time using the IPFS hash. This combination of IPFS and Filecoin provides a decentralized and incentivized solution for storing data.

## Contributions

Contributions are welcome! If you find any bugs or have a feature request, please open an issue.

## License

This project is licensed under the [MIT License].
