import React from 'react';
import logo from '@assets/img/logo.svg';
import { ethers } from 'ethers';

export default function Popup(): JSX.Element {
  const wei = "1000000000000000000";
  const eth = ethers.utils.formatEther(wei);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
      {wei} wei is {eth} eth
    </div>
  );
}
