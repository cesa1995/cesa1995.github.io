import Section from "../section/session";
import { indexSection } from "../../utils/types";
import style from "./tertiary.module.css";
import useEtherConnect from "@/hooks/ethersConnect";
import Loading from "../loading";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { EmptyMessage } from "@/errors/message";
import Image from "next/image";
import HandIcon from "@/assets/handIcon.svg";
import WalletIcon from "@/assets/walletIcon.svg";
import SendIcon from "@/assets/sendIcon.svg";
import CommentIcon from "@/assets/commentIcon.svg";

const Comments = ({ id }: indexSection) => {
  const ether = useEtherConnect();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const wave = async () => {
    try {
      setError("");
      setLoading(true);
      if (!message) throw new EmptyMessage("The text field is empty!");
      await ether.wave(message);
    } catch (e: any) {
      if (e.name === "EmptyMessage") {
        setError(e.message);
        return;
      }
      if (e.message.includes("user rejected")) {
        setError("User Rejected!");
      }
    } finally {
      setLoading(false);
    }
  };

  const onConnectWallet = async () => {
    try {
      setError("");
      setLoading(true);
      await ether.connectWallet();
    } catch (e: any) {
      console.log(e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ether.loadData();
    let contract: ethers.Contract | undefined;
    ether.handleNewWave().then((contractsrg) => {
      contract = contractsrg;
    });

    return () => {
      if (contract) {
        contract.off("NewWave", ether.onNewWave);
      }
    };
  }, []);

  return (
    <Section name="Learning" id={id}>
      <div className={style.container}>
        <div>
          <Image src={HandIcon} alt="handIcon" />
          <h1 className={style.title}>Hey There!</h1>
          <p className={style.text}>
            Go to ethereum sepolia network reload fake money, connect metamask
            and leave me a comment.
          </p>
          <textarea
            className={style.input}
            onChange={({ target }) => {
              setMessage(target.value);
            }}
          />

          {ether.currentAccount && (
            <motion.button
              className={style.buttom}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.6 }}
              disabled={loading}
              onClick={wave}
            >
              <Image
                className={style.buttomsIcon}
                src={SendIcon}
                alt="sendIcon"
              />
              Send
            </motion.button>
          )}
          {!ether.currentAccount && (
            <motion.button
              className={style.buttom}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.6 }}
              onClick={onConnectWallet}
            >
              <Image
                className={style.buttomsIcon}
                src={WalletIcon}
                alt="walletIcon"
              />
              Connect Wallet
            </motion.button>
          )}
          {error && <p>{error}</p>}
          <Loading isVisible={loading} setIsVisible={setLoading} />
        </div>
        <div className={style.message}>
          <p className={style.text}>
            <Image
              className={style.buttomsIcon}
              src={CommentIcon}
              alt="commentIcon"
            />
            {`Count Message: ${ether.count}/ Balance: ${ether.balance}`}
          </p>
          {ether.allWaves.map((wave, index) => {
            return (
              <div key={index} className={style.chat}>
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

export default Comments;
