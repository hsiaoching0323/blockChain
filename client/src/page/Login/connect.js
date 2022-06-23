import React, { useState, useEffect } from "react";
import Web3 from "web3";
import MetaMaskOnboarding from "metamask-onboarding";

function Connect() {
  const [{ metaMaskPresent, metaMaskConnected }, setMetaMaskObject] = useState({
    metaMaskPresent: false,
    metaMaskConnected: false
  });
  const [publicKey, setPublicKey] = useState("metamask not connected");
  const web3 = new Web3(Web3.givenProvider || "http://localhost/7545");

  const connectMetaMask = async () => {
    let accounts;
    try {
      await web3?.givenProvider?.request({ method: "eth_requestAccounts" });
      setMetaMaskObject({ metaMaskConnected: true, metaMaskPresent });
      accounts = await web3.eth.getAccounts();
      setPublicKey(() => accounts[0]);
    } catch (error) {
      console.error("metmask error", error);
    }
  };

  useEffect(() => {
    const isMetaMaskPresent = () => {
      return web3?.givenProvider?.isMetaMask ? true : false;
    };
    setMetaMaskObject(() =>
      isMetaMaskPresent()
        ? { metaMaskPresent: true, metaMaskConnected }
        : { metaMaskPresent: false, metaMaskConnected }
    );
  }, [web3?.givenProvider?.isMetaMask, metaMaskConnected]);

  return (
    <div>
      {metaMaskPresent && !metaMaskConnected && (
        <button
          onClick={() => {
            connectMetaMask();
          }}
        >
          connect MetaMask
        </button>
      )}
      <h2 >address: {publicKey}</h2>
    </div>
  );
}

export default Connect;