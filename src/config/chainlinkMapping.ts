import { ChainlinkInternalMap } from '../types/Types';

const rinkebyMapping: ChainlinkInternalMap[] = [];
const kovanMapping: ChainlinkInternalMap[] = [];
const mainnetMapping: ChainlinkInternalMap[] = [];

const goerliMapping: ChainlinkInternalMap[] = [
  {
    tokenAddress: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', // weth
    feedAddress: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
  },
  {
    tokenAddress: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F', // usdc
    feedAddress: '0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7',
  },
  {
    tokenAddress: '0x2899a03ffDab5C90BADc5920b4f53B0884EB13cC', // dai
    feedAddress: '0x0d79df66BE487753B02D015Fb622DED7f0E9798d',
  },
];

export const feedData: ChainlinkInternalMap[] = [...rinkebyMapping, ...kovanMapping, ...mainnetMapping, ...goerliMapping].map((a) => {
  return {
    tokenAddress: a.tokenAddress.toLowerCase(),
    feedAddress: a.feedAddress.toLowerCase(),
  };
});
