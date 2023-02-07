// // import IPFS from "ipfs/dist/src/index";
// // import CID from 'cids'
// // import filecoin_storage_client from 'filecoin-storage-client'

// const IPFS = require("ipfs");

// async function main() {
//   // Initialize IPFS node
//   const node = await IPFS.create();

//   // Define the user's information
//   const userInfo = {
//     walletAddress: "0x1234567890123456789012345678901234567890",
//     fName: "PRANAV",
//     lName: "KUMAR",
//     email: "pranavsandilya786@gmail.com",
//     isAdmin: false,
//     hasAdminAccess: false,
//     department: "IT",
//     contractDetails:
//       "https://drive.google.com/file/d/abcdefghijklmnopqrstuvwxyz/view",
//   };

//   // Store the user's information on IPFS
//   const options = {
//     format: "dag-cbor",
//     hashAlg: "sha2-256",
//   };
//   const userInfoCID = (await node.dag.put(userInfo, options)).toString();

//   // // Connect to the Filecoin network
//   // const client = new filecoin_storage_client.StorageClient()

//   // // Store the IPFS CID of the user's information on Filecoin
//   // await client.store_data(Buffer.from(userInfoCID))

//   // // Retrieve the IPFS CID of the user's information from Filecoin
//   // const retrievedCID = await client.retrieve_data()

//   // // Convert the retrieved CID from buffer to string
//   // const retrievedCIDString = retrievedCID.toString()

//   // // Retrieve the user's information from IPFS
//   // const retrievedUserInfo = (await node.dag.get(new CID(retrievedCIDString))).value

//   // Verify that the data was successfully stored and retrieved
//   // console.assert(retrievedUserInfo.walletAddress === userInfo.walletAddress)
//   // console.assert(retrievedUserInfo.fName === userInfo.fName)
//   // console.assert(retrievedUserInfo.lName === userInfo.lName)
//   // console.assert(retrievedUserInfo.password === userInfo.password)
//   // console.assert(retrievedUserInfo.isAdmin === userInfo.isAdmin)
//   // console.assert(retrievedUserInfo.hasAdminAccess === userInfo.hasAdminAccess)
//   // console.assert(retrievedUserInfo.department === userInfo.department)
//   // console.assert(retrievedUserInfo.contractDetails === userInfo.contractDetails)

//   console.log(userInfoCID);
// }

// main();

// const fetch = require("node-fetch");
import fetch from "node-fetch";

const fetchData = async () => {
  fetch(
    "https://bafybeifvzmrqbr64fb5djfxli5rfaylkb2bj3dti3azr7mqr245lcg4sze.ipfs.w3s.link/new.json"
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  console.log("Data Stored and retrieved successfully");
};

fetchData();
