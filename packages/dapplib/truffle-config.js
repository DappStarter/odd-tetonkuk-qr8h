require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area trip firm dash rifle huge hen light army genre'; 
let testAccounts = [
"0x0de5f2fdb84ba4a9e1264537b4749253727c2e6e173726d0a3526b95d13cb9af",
"0xe491fa5879b5023186c0c15dcb479c063a6cac54a10783bb9c4ddd91bf4d1c31",
"0x9900197aec2b5c19e4a157684e4780a568555f3aa6eeceb9c4bb27f6b08daa13",
"0xdd3b15bbd265c479780c21ce780f9be2ba37bb6bc362d44cc167982c898f0d7f",
"0x88138007c8e24a13e871486c3057005ace61293e4e4f60423afc8d6bd0b48fe1",
"0x1e6a203541b05b5567d9c9b774d4d3c8bd4309f7334685ddf44b1ca09cb05270",
"0x0153664b30fccd08f5a4e9e662394b584842e91c18bb6c262814b8a3c1d82c74",
"0xa5cf86456fd035fdc60a5575370e2dee26177925f673c32ecafb6a1888bc94ee",
"0x806c5e7dc094d2771779ff1efb7717721e70d98724771d3e44af5f2fd93f7630",
"0x818ef5c6b3c5668d7a95d7e5e0a617fdfb5fc363a3e1d50c73a79f73689c3bd0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

