// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract demo {
    //charCount must be taken care by shreeja(react)
    uint16 public count = 0;

    string blockHash;
    string prevHash;
    uint timeStamp;
    string ipfsHash;
    string account;

    event textCopied(
        string blockHash,
        string prevHash,
        uint timeStamp,
        string ipfsHash,
        string account
    );


    function textEdit(string memory inputBlockHash, string memory inputPrevHash, uint inputTimeStamp, string memory inputIpfsHash, string memory inputAccount) public{
        blockHash = inputBlockHash;
        prevHash = inputPrevHash;
        timeStamp = inputTimeStamp;
        ipfsHash = inputIpfsHash;
        account = inputAccount;
    }
    function returnValues() public view returns (string memory , string memory, uint , string memory , string memory){   
        return(
            blockHash,
            prevHash,
            timeStamp,
            ipfsHash,
            account
        );
    }
}