"use client";
import React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react';
import store from "./store";
import { ReactNode } from "react";

interface PrviderProps {
  children: ReactNode;
}

const Prvider: React.FC<PrviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Prvider;
