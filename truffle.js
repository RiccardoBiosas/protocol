require("babel-register")
require("babel-polyfill")

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id
            gas: 6700000
        },
        ganacheDev: {
            host: "ganache-dev",
            port: 8545,
            network_id: "*",
            gas: 6700000
        },
        parityDev: {
            host: "parity-dev",
            port: 8545,
            network_id: 7777,
            gas: 6700000
        },
        gethDev: {
            host: "geth-dev",
            port: 8545,
            network_id: 7777,
            gas: 6700000
        },
        lpTestNet: {
            host: "localhost",
            port: 8545,
            network_id: 858585,
            gas: 6600000
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
}
