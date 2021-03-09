import { getNetworkByChainId } from "./network-config";

export function getNetwork(chainId = -1) {
  return getNetworkByChainId(chainId ?? global.web3?.currentProvider.chainId);
}
