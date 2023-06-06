import Section from "../section/session";
import { indexSection } from "../../utils/types";
import style from "./tertiary.module.css";
import useEtherConnect from "@/hooks/ethersConnect";
import Loading from "../loading";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";

const Tertiary = ({ id }: indexSection) => {
  const ether = useEtherConnect();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const init = useCallback(async () => {
    return ether.init();
  }, [ether]);

  const loadData = useCallback(async () => {
    const provider = await init();
    if (!provider) return;
    await ether.getWavesList(provider.wavePortalContract, provider.provider);
  }, []);

  const wave = async () => {
    try {
      setLoading(true);
      const provider = await init();
      if (!provider) return;
      if (!message) return;
      await ether.wave(provider?.wavePortalContract, message);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [ether.currentAccount]);

  useEffect(() => {
    let contract: ethers.Contract | undefined;
    ether.handleNewWave().then((contractsrg) => {
      contract = contractsrg;
    });

    return () => {
      if (contract) {
        contract.off("NewWave", ether.onNewWave);
      }
    };
  }, [ether]);

  return (
    <Section name="Learning" id={id}>
      <div className={style.container}>
        <div>
          <h1>Hey There!</h1>
          <p>
            Go to ethereum sepolia network reload fake money, connect metamask
            and leave me a comment.
          </p>
          <textarea
            className={style.input}
            onChange={({ target }) => {
              setMessage(target.value);
            }}
          />

          <motion.button
            className={style.listItem}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.6 }}
            disabled={loading}
            onClick={wave}
          >
            Send
          </motion.button>
          {!ether?.currentAccount && (
            <motion.button
              className={style.listItem}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.6 }}
              onClick={async () => await ether.init()}
            >
              Connect Wallet
            </motion.button>
          )}
          <Loading isVisible={loading} setIsVisible={setLoading} />
        </div>
        <div className={style.message}>
          <p>{`Count Message: ${ether.count}/ Balance: ${ether.balance}`}</p>
          {ether.allWaves.map((wave, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "OldLace",
                  marginTop: "16px",
                  padding: "8px",
                }}
              >
                <div>Address: {wave.address}</div>
                <div>Time: {wave.timestamp.toString()}</div>
                <div>Message: {wave.message}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Tertiary;
