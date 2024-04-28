//this button is to send the transaction
async function sendTransaction() {
    // Ensure window.ethereum is available
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Create a new instance of the ethers provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            // Define transaction parameters
            const tx = {
                to: "0xYourRecipientAddressHere",
                value: ethers.utils.parseEther("0.01"), // Example: Sending 0.01 ETH
                // Add other transaction parameters as needed (gas limit, gas price, data, etc.)
            };

            // Send the transaction
            const transactionResponse = await signer.sendTransaction(tx);
            console.log('Transaction Response:', transactionResponse);

            // Optionally, wait for the transaction to be mined
            await transactionResponse.wait();
            console.log('Transaction Mined:', transactionResponse.hash);

            // Transaction success logic here
        } catch (error) {
            console.error('Transaction Failed:', error);
            // Transaction failure logic here
        }
    } else {
        console.log('Ethereum wallet is not available');
        // Wallet not available logic here
    }
}

// Export sendTransaction if using modules, or attach it to window for global access
window.sendTransaction = sendTransaction;