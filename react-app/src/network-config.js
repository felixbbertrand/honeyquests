const networkConfigs = {
  main: {
    addresses: {
      ensRegistry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    nodes: {
      defaultEth: "wss://mainnet.eth.aragon.network/ws",
    },
    settings: {
      chainId: 1,
      name: "Mainnet",
      shortName: "Mainnet",
      type: "main", // as returned by web3.eth.net.getNetworkType()
      live: true,
    },
  },
  rinkeby: {
    addresses: {
      ensRegistry: "0x98df287b6c145399aaa709692c8d308357bc085d",
    },
    nodes: {
      defaultEth: "wss://rinkeby.eth.aragon.network/ws",
    },
    settings: {
      chainId: 4,
      name: "Rinkeby testnet",
      shortName: "Rinkeby",
      type: "rinkeby", // as returned by web3.eth.net.getNetworkType()
      live: true,
    },
  },
  ropsten: {
    addresses: {
      ensRegistry: "0x6afe2cacee211ea9179992f89dc61ff25c61e923",
    },
    nodes: {
      defaultEth: "wss://ropsten.eth.aragon.network/ws",
    },
    settings: {
      chainId: 3,
      name: "Ropsten testnet",
      shortName: "Ropsten",
      type: "ropsten", // as returned by web3.eth.net.getNetworkType()
      live: true,
    },
  },
  local: {
    addresses: {},
    nodes: {
      defaultEth: "ws://localhost:8545",
    },
    settings: {
      // Local development environments by convention use
      // a chainId of value 1337, but for the sake of configuration
      // we expose a way to change this value.
      chainId: "1337",
      name: "local testnet",
      shortName: "Local",
      type: "private",
      live: false,
    },
  },
  // xDai is an experimental chain in the Aragon Client. It's possible
  // and expected that a few things will break.
  xdai: {
    addresses: {
      ensRegistry: "0xaafca6b0c89521752e559650206d7c925fd0e530",
    },
    nodes: {
      defaultEth: "wss://xdai.poanetwork.dev/wss",
    },
    settings: {
      chainId: 100,
      name: "xDai",
      shortName: "xdai",
      type: "private",
      live: true,
    },
  },
  unknown: {
    addresses: {},
    nodes: {
      defaultEth: "ws://localhost:8545",
    },
    settings: {
      name: `Unknown network`,
      shortName: "Unknown",
      type: "unknown",
      live: false,
    },
  },
};

export function getNetworkConfig(type) {
  return (
    networkConfigs[type] || {
      ...networkConfigs.unknown,
      settings: {
        ...networkConfigs.unknown.settings,
        name: `Unsupported network (${type})`,
      },
    }
  );
}

export function getNetworkByChainId(chainId = -1) {
  chainId = Number(chainId);
  return Object.values(networkConfigs).find(network => network.settings.chainId === chainId) || networkConfigs.unknown;
}

export function getNetworkType(chainId = -1) {
  return Object.values(networkConfigs).find(x => x[1].network.settings.chainId === chainId).settings.type;
}
