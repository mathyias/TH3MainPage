# TH3Chain Exchange Listing Information

## Project

Name: TH3Chain  
Ticker: TH3  
Type: Native coin  
Chain: Independent Proof-of-Work blockchain  
Consensus: Proof of Work  
Algorithm: KAWPOW  
Address prefix: TH3  
Block reward: 2137 TH3  

## Official Links

Contact Email: contact@th3chain.cloud  
Listing Email: listing@th3chain.cloud  
Support Email: support@th3chain.cloud  


Website: https://th3chain.cloud  
Listing page: https://th3chain.cloud/listing.html  
Wallet: https://wallet.th3chain.cloud  
Explorer: https://explorer.th3chain.cloud  
Mining pool: https://pool.th3chain.cloud  
API: https://api.th3chain.cloud  
GitHub: https://github.com/mathyias/TH3Coin  

## Network

Mainnet genesis hash:

000003b6945e94235f0cc6e81af307a09f4b7354df86cd58b5afde06fb3c1012

Address format:

TH3...

Mining endpoint:

stratum+tcp://pool.th3chain.cloud:3333

Seed nodes:

seed.th3chain.cloud  
seed2.th3chain.cloud  

## Node Software

Repository:

https://github.com/mathyias/TH3Coin

Build commands:

    ./autogen.sh
    ./configure --disable-tests --disable-bench --without-gui --with-incompatible-bdb
    make -j$(nproc)

Daemon:

    src/th3d -daemon

CLI:

    src/th3-cli getblockcount
    src/th3-cli getnetworkinfo
    src/th3-cli getwalletinfo

Stop daemon:

    src/th3-cli stop

## Exchange Integration Notes

TH3Chain is a Bitcoin/Ravencoin-style UTXO chain.

Recommended integration flow:

1. Run a full TH3 node.
2. Enable wallet and RPC.
3. Generate deposit addresses through th3-cli.
4. Track deposits with block confirmations.
5. Process withdrawals with standard wallet RPC calls.
6. Use the public explorer/API for external verification.

Suggested minimum confirmations:

20 confirmations for normal deposits.  
More confirmations may be used at the exchange's discretion.

## API / Explorer

Network status:

https://api.th3chain.cloud/api/network

Explorer:

https://explorer.th3chain.cloud

Address lookup:

https://explorer.th3chain.cloud

## Brand Assets

Logo 512 PNG:

https://th3chain.cloud/brand/th3-logo-512.png

Logo 256 PNG:

https://th3chain.cloud/brand/th3-logo-256.png

Favicon:

https://th3chain.cloud/brand/favicon.png

## Short Description

TH3Chain is a live independent KAWPOW Proof-of-Work cryptocurrency with public mining, a browser wallet, explorer, API, and active mining pool payouts.
