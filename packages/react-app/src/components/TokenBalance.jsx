import React, { useState } from "react";
import { formatEther } from "@ethersproject/units";
import { useTokenBalance } from "eth-hooks";

export default function TokenBalance(props) {
  const [dollarMode, setDollarMode] = useState(true);

  const tokenContract = props.contracts && props.contracts[props.name];
  const balance = useTokenBalance(tokenContract, props.address, 1777);

  let floatBalance = parseFloat("0.00");

  let usingBalance = balance;

  if (typeof props.balance !== "undefined") {
    usingBalance = props.balance;
  }

  if (usingBalance) {
    const etherBalance = formatEther(usingBalance);
    parseFloat(etherBalance).toFixed(2);
    floatBalance = parseFloat(etherBalance);
  }

  let displayBalance = `${floatBalance.toFixed(4)} ETH`;

  if (props.dollarMultiplier && dollarMode) {
    displayBalance = "$" + (floatBalance * props.dollarMultiplier).toFixed(2);
  }

  return (
    <span
      style={{
        verticalAlign: "middle",
        fontSize: 24,
        padding: 8,
        cursor: "pointer",
      }}
      onClick={() => {
        setDollarMode(!dollarMode);
      }}
    >
      {props.img} {displayBalance}
    </span>
  );
}