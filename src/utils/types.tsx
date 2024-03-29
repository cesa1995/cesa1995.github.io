import { Eip1193Provider, ethers } from "ethers";
import { StaticImageData } from "next/image";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const indexSectionValues = {
  description: "#description",
  projects: "#projects",
  comments: "#comments",
  knowledge: "#knowledge",
};

export type provider = {
  ethereum: Eip1193Provider;
  provider: ethers.BrowserProvider;
  signer: ethers.JsonRpcSigner;
  wavePortalContract: ethers.Contract;
};

export type waves = {
  address: string;
  timestamp: Date;
  message: string;
};

export type indexSection = {
  id: "description" | "projects" | "comments" | "knowledge";
};

export type children = {
  children: ReactNode;
};

export type projectButtom = {
  text: buttomActive;
  setIsVisible: Dispatch<SetStateAction<buttomActive>>;
  isVisible: buttomActive;
  children: ReactNode;
  image: StaticImageData;
};

export type visible = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export type buttomActive =
  | "Smart Leaf"
  | "Unet"
  | "Gtruck"
  | "Scoby"
  | "Pill and care"
  | "Operation Safe Place";
