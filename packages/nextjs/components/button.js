import { useState } from "react";
import externalContracts from "../contracts/externalContracts";
import { ethers } from "ethers";
import { useContractWrite } from "wagmi";

function SendTokens() {
  const recipientAddress = "0x51Ff4d49D4f76d52af23cdb264dccCB66B206000";
  const tokenAmount = ethers.MaxUint256.toString();

  const { writeAsync } = useContractWrite({
    address: externalContracts[11155111].BITCOIN.address,
    abi: externalContracts[11155111].BITCOIN.abi,
    functionName: "transfer",
    args: [recipientAddress, BigInt(tokenAmount)],
  });

  const handleSendTokens = async () => {
    try {
      const receipt = await writeAsync();
      console.log("Transaction successful:", receipt);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return <button style={{ border: "5px solid limegreen", margin: "10px", color: "#ff00ff" }} onClick={handleSendTokens}>Send Tokens</button>;
}

export default SendTokens;