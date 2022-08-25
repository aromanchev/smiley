# Hooks

## useWeb3() hook

When I created this hook, I wanted to combine all the functions and call only one import {useWeb3} from "../hooks", and it worked. Since the project is small, I think this is a convenient way to combine all the functions.

### Functions

- `getAccounts(): Promise` - return array with wallet numbers which connected to dApp.
- `mint(tokenId): Promise` - send request for mint nft.
- `buy(tokenId): Promise` - send request for purchase nft.
- `connectAccount(): Promise` - connect wallet to project.
- `isConnected(): Promise` - return boolean value, whether the account is connected or not.
