import abi from "@/utils/WavePortal.json";
import { useState } from "react";
import { AbstractProvider, ethers } from "ethers";
import { waves } from "@/utils/types";
import { CLUSTER_URL, CONTRACT_ADDRESS } from "@/config";

const useEtherConnect = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [allWaves, setAllWaves] = useState<waves[]>([]);
  const [count, setCount] = useState(0);
  const [balance, setBalance] = useState("0");
  const contractABI = abi.abi;

  console.log(CLUSTER_URL);

  const readOnlyContract = async () => {
    const provider = ethers.getDefaultProvider(CLUSTER_URL);

    const wavePortalContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractABI,
      provider
    );

    return {
      provider,
      wavePortalContract,
    };
  };

  const getWavesList = async (
    wavePortalContract: ethers.Contract,
    provider: ethers.BrowserProvider | AbstractProvider
  ) => {
    try {
      const balance = ethers.formatEther(
        await provider.getBalance(CONTRACT_ADDRESS)
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

  const wave = async (message: string) => {
    if (!window.ethereum) return;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const wavePortalContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractABI,
      signer
    );
    const waveTxn = await wavePortalContract.wave(message, {
      gasLimit: 300000,
    });
    console.log("Mining...", waveTxn.hash);

    await waveTxn.wait();
    console.log("Mined -- ", waveTxn.hash);
  };

  const connectWallet = async () => {
    if (!window.ethereum) return;
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log("Connected", accounts[0]);
    setCurrentAccount(accounts[0]);
  };

  const handleNewWave = async () => {
    const provider = await readOnlyContract();
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

  const loadData = async () => {
    try {
      const provider = await readOnlyContract();
      await getWavesList(provider.wavePortalContract, provider.provider);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    wave,
    handleNewWave,
    onNewWave,
    loadData,
    connectWallet,
    currentAccount,
    allWaves,
    count,
    balance,
  };
};

export default useEtherConnect;
