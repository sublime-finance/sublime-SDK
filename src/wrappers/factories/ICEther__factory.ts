/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { ICEther } from '../ICEther';

export class ICEther__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): ICEther {
    return new Contract(address, _abi, signerOrProvider) as ICEther;
  }
}

const _abi = [
  {
    inputs: [],
    name: 'getCash',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'redeemTokens',
        type: 'uint256',
      },
    ],
    name: 'redeem',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'supplyRatePerBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
