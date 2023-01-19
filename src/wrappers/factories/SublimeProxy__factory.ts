/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike, Contract, ContractFactory, PayableOverrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { SublimeProxy } from '../SublimeProxy';

export class SublimeProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    logic: string,
    admin: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<SublimeProxy> {
    return super.deploy(logic, admin, data, overrides || {}) as Promise<SublimeProxy>;
  }
  getDeployTransaction(
    logic: string,
    admin: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(logic, admin, data, overrides || {});
  }
  attach(address: string): SublimeProxy {
    return super.attach(address) as SublimeProxy;
  }
  connect(signer: Signer): SublimeProxy__factory {
    return super.connect(signer) as SublimeProxy__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SublimeProxy {
    return new Contract(address, _abi, signerOrProvider) as SublimeProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'logic',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: 'implementation_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x608060405260405162000c8238038062000c82833981810160405260608110156200002957600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200005557600080fd5b9083019060208201858111156200006b57600080fd5b82516401000000008111828201881017156200008657600080fd5b82525081516020918201929091019080838360005b83811015620000b55781810151838201526020016200009b565b50505050905090810190601f168015620000e35780820380516001836020036101000a031916815260200191505b5060405250849150839050828281620000fc826200013d565b8051156200011d576200011b8282620001b460201b620003841760201c565b505b50620001269050565b6200013182620001e3565b505050505050620003c4565b62000153816200020760201b620003b01760201c565b620001905760405162461bcd60e51b815260040180806020018281038252603681526020018062000c266036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6060620001dc838360405180606001604052806027815260200162000bff602791396200020d565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b3b151590565b60606200021a8462000207565b620002575760405162461bcd60e51b815260040180806020018281038252602681526020018062000c5c6026913960400191505060405180910390fd5b600080856001600160a01b0316856040518082805190602001908083835b60208310620002965780518252601f19909201916020918201910162000275565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114620002f8576040519150601f19603f3d011682016040523d82523d6000602084013e620002fd565b606091505b509092509050620003108282866200031a565b9695505050505050565b606083156200032b575081620001dc565b8251156200033c5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620003885781810151838201526020016200036e565b50505050905090810190601f168015620003b65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b61082b80620003d46000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100985780635c60da1b146101185780638f28397014610149578063f851a4401461017c5761005d565b3661005d5761005b610191565b005b61005b610191565b34801561007157600080fd5b5061005b6004803603602081101561008857600080fd5b50356001600160a01b03166101ab565b61005b600480360360408110156100ae57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100d957600080fd5b8201836020820111156100eb57600080fd5b8035906020019184600183028401116401000000008311171561010d57600080fd5b5090925090506101e5565b34801561012457600080fd5b5061012d610262565b604080516001600160a01b039092168252519081900360200190f35b34801561015557600080fd5b5061005b6004803603602081101561016c57600080fd5b50356001600160a01b031661029f565b34801561018857600080fd5b5061012d610359565b6101996103b6565b6101a96101a4610416565b61043b565b565b6101b361045f565b6001600160a01b0316336001600160a01b031614156101da576101d581610484565b6101e2565b6101e2610191565b50565b6101ed61045f565b6001600160a01b0316336001600160a01b031614156102555761020f83610484565b61024f8383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061038492505050565b5061025d565b61025d610191565b505050565b600061026c61045f565b6001600160a01b0316336001600160a01b031614156102945761028d610416565b905061029c565b61029c610191565b90565b6102a761045f565b6001600160a01b0316336001600160a01b031614156101da576001600160a01b0381166103055760405162461bcd60e51b815260040180806020018281038252603a8152602001806106f7603a913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61032e61045f565b604080516001600160a01b03928316815291841660208301528051918290030190a16101d5816104c4565b600061036361045f565b6001600160a01b0316336001600160a01b031614156102945761028d61045f565b60606103a98383604051806060016040528060278152602001610731602791396104e8565b9392505050565b3b151590565b6103be61045f565b6001600160a01b0316336001600160a01b0316141561040e5760405162461bcd60e51b81526004018080602001828103825260428152602001806107b46042913960600191505060405180910390fd5b6101a96101a9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e80801561045a573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b61048d816105ea565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b60606104f3846103b0565b61052e5760405162461bcd60e51b815260040180806020018281038252602681526020018061078e6026913960400191505060405180910390fd5b600080856001600160a01b0316856040518082805190602001908083835b6020831061056b5780518252601f19909201916020918201910161054c565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146105cb576040519150601f19603f3d011682016040523d82523d6000602084013e6105d0565b606091505b50915091506105e0828286610652565b9695505050505050565b6105f3816103b0565b61062e5760405162461bcd60e51b81526004018080602001828103825260368152602001806107586036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b606083156106615750816103a9565b8251156106715782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106bb5781810151838201526020016106a3565b50505050905090810190601f1680156106e85780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5472616e73706172656e745570677261646561626c6550726f78793a206e65772061646d696e20697320746865207a65726f2061646472657373416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65645570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e74726163745472616e73706172656e745570677261646561626c6550726f78793a2061646d696e2063616e6e6f742066616c6c6261636b20746f2070726f787920746172676574a2646970667358221220f313f760a58963c9f7b2e7614db52766bd7063138d9d1813a3af522bc980322a64736f6c63430007060033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65645570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374';
