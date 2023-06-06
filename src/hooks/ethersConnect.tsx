import abi from "@/utils/WavePortal.json";
import { useEffect, useState } from "react";
import { Eip1193Provider, ethers } from "ethers";
import { provider, waves } from "@/utils/types";

const useEtherConnect = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [allWaves, setAllWaves] = useState<waves[]>([]);
  const [count, setCount] = useState(0);
  const [balance, setBalance] = useState("0");
  const contractAddress = "0xA9B95D26F047C7701f58AEC2b93A7E8E570E3f72";
  const contractABI = abi.abi;

  const init = async () => {
    try {
      const getEthereumObject = () => globalThis?.window?.ethereum;
      const ethereum = getEthereumObject();
      if (!ethereum) {
        return;
      }

      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      if (!currentAccount) {
        connectWallet(ethereum);
      }

      return {
        ethereum,
        provider,
        signer,
        wavePortalContract,
      };
    } catch (e) {
      return null;
    }
  };

  const getWavesList = async (
    wavePortalContract: ethers.Contract,
    provider: ethers.BrowserProvider
  ) => {
    try {
      const balance = ethers.formatEther(
        await provider.getBalance(contractAddress)
      );
      setBalance(balance);
      const waves = await wavePortalContract.getAllWaves();
      const countWave = await wavePortalContract.getTotalWaves();
      setCount(ethers.toNumber(countWave));

      let wavesCleaned: waves[] = [];
      waves.forEach((wave: any) => {
        wavesCleaned.push({
          address: wave.waver,
          timestamp: new Date(ethers.toNumber(wave.timestamp) * 1000),
          message: wave.message,
        });
      });
      setAllWaves(wavesCleaned);
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const wave = async (wavePortalContract: ethers.Contract, message: string) => {
    const waveTxn = await wavePortalContract.wave(message, {
      gasLimit: 300000,
    });
    console.log("Mining...", waveTxn.hash);

    await waveTxn.wait();
    console.log("Mined -- ", waveTxn.hash);
  };

  const connectWallet = async (ethereum: Eip1193Provider) => {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      return error;
    }
  };

  const handleNewWave = async () => {
    const provider = await init();
    if (!provider) return;
    const contract = provider.wavePortalContract.on("NewWave", onNewWave);
    return contract;
  };

  const onNewWave = (from: any, timestamp: any, message: any) => {
    console.log("NewWave", from, timestamp, message);
    setCount((prevState) => prevState + 1);
    setAllWaves((prevState) => [
      ...prevState,
      {
        address: from,
        timestamp: new Date(ethers.toNumber(timestamp) * 1000),
        message: message,
      },
    ]);
  };

  return {
    init,
    getWavesList,
    wave,
    handleNewWave,
    onNewWave,
    currentAccount,
    allWaves,
    count,
    balance,
  };
};

export default useEtherConnect;
