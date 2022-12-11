import { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';
import {CONTRACT_ABI, CONTRACT_ADDRESS} from './consts'
const uploadToIPFS = require("./utils");

const web3 = new Web3(window.web3.currentProvider);
/* var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); */
/* const web3 = new Web3("http://127.0.0.1:7545"); */

function App() {

	// Enable metamask shit
	window.ethereum.enable();

	const [text, settext] = useState(" ")
	const captureText = (event) => {
		event.preventDefault();
		const uploadtext = text;


		/* window.ethereum.request({ method: 'eth_requestAccounts' }).then(acc => { */
		web3.eth.getAccounts().then(acc => {
			console.log(acc);
		if(!acc) {
				window.alert("failed to get account");
				return;
			}
			const contract = new web3.eth.Contract(CONTRACT_ABI['abi'], CONTRACT_ADDRESS);

			contract.deploy({data: CONTRACT_ABI['bytecode']})
				.send({from: acc[0]})
				.on('receipt', (receipt) => {
		            console.log("Contract Address:", receipt.contractAddress);
				})
				.then((initialContract) => {

					let text = "asdf";
					uploadToIPFS(text);

					initialContract.methods.textEdit("inputhash", "prevHash", 5005, "ipfshash", acc[0]).call((err, data) => {
						                console.log("Initial Data:", data);
					});

			});
		});




	};

	return (
		<div className="App">
			<nav className='sticky-section'>
				<h1>Blockchain Pastebin</h1>
				<button className="btn" onClick={captureText}>Login</button>
			</nav>
			<div class="container">
				<textarea id="page_form_content" placeholder="Paste Here!" rows="4 " cols="50" onChange ={(event)=>{setText(event.target.value)}} > </textarea>
			</div>
		</div>
	);
}

export default App;
