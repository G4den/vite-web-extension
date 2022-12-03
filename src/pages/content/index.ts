import { ethers } from 'ethers';

try {
  const wei = "1000000000000000000";
  const ether = ethers.utils.formatEther(wei);
  console.log(`${wei} wei = ${ether} ether`);
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}
