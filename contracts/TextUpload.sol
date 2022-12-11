// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract TextUpload {

    string account;

    mapping(string => string) public prevHashs;
    mapping(string => string) public ipfsHash;

    function textEdit(string memory currentBlockHash, string memory newBlockHash, string memory inputIpfsHash, string memory inputAccount) public{
        prevHashs[newBlockHash] = currentBlockHash;
        ipfsHash[newBlockHash] = inputIpfsHash;
        account = inputAccount;
    }

    function returnValues(string memory currBlockHash) public view returns (string memory, string memory, string memory, string memory) {   
        return(
            currBlockHash,
            prevHashs[currBlockHash],
            ipfsHash[currBlockHash],
            account
        );
    }
}
