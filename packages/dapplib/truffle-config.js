require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note punch evil heavy kitten olympic gaze'; 
let testAccounts = [
"0xdddcc35723b1741762bc726947011b500e32ef5f7ce1bcbfb89b8d450cc19ba1",
"0xd473e130fed81a4290950a602be20f98bfe7442596dd010d070ca86f3ec47fb0",
"0x73ae3e9b9fb54ab0006ba2de6179c6d03b1c9abb8505be4e9b868c37cefa996b",
"0x1aa7634be52837aa7c61afad91a161f6351a0a180c38a1cea3911dfc9e419688",
"0xfffbb7d886f122c6e736bf4d08c3bc63782343cfed6f057ba92b66ae53cda1c6",
"0xd9f366ac481c89991e00fdf3d977ce7e4a69ed6639d5d5cd8e7947af5b73c3d1",
"0xf0d3537f7c347251c0613dfaf2bd406ccb7ec0912d25272d2a8e3b885fdb0131",
"0xaa40ba55bf8504593a5187ac3b5f2e7b595b8ea6169f3c625b337ca9c1a20dd2",
"0x5c83ff3262b475b725e5df607401f4865ae5f13682775142a2f935c49c6279e0",
"0xad2dfb525c99ff3a0ae75cf999e2fc1b0303b62450b7e4e73d2a84a604172187"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

