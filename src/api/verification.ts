import { Signer, BytesLike, ContractTransaction, ethers } from 'ethers';

import { SublimeConfig } from '../types/sublimeConfig';

import { Verification } from '../wrappers/Verification';
import { Verification__factory } from '../wrappers/factories/Verification__factory';

import { TwitterVerifier } from '../wrappers/TwitterVerifier';
import { TwitterVerifier__factory } from '../wrappers/factories/TwitterVerifier__factory';

import { AdminVerifier } from '../wrappers';
import { AdminVerifier__factory } from '../wrappers/factories/AdminVerifier__factory';

import { BigNumberish } from '@ethersproject/bignumber';
import { Options as Overrides, VerifierType, Verifier as VerifierDetails, TwitterVerifierSignatureData } from '../types/Types';
import { keccak256 } from 'ethers/lib/utils';
import BigNumber from 'bignumber.js';

const AdminVerifierDisplayName = 'Admin Verifier';
const TwitterVerifierDisplayName = 'Twitter Verifier';
const PersonaVerifierDisplayName = 'Persona Verifier';

/**
 * @class VerificationAPI
 */
export class VerificationAPI {
  /**
   * @description Signer Object
   */
  private signer: Signer;

  /**
   * @description verification contract instance
   */
  private verification: Verification;

  /**
   * @description Twitter Verifier contract instance
   */
  private twitterVerifier: TwitterVerifier;

  /**
   * @description Admin Verifier contract instance
   */
  private adminVerifier: AdminVerifier;
  private personaVerifier: AdminVerifier;

  /**
   * @description Internal store for all sublime contracts addresses
   */
  private config: SublimeConfig;

  /**
   * @param signer Signer
   * @param config SublimeConfig
   */
  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.verification = new Verification__factory(this.signer).attach(config.verificationContractAddress);
    this.twitterVerifier = new TwitterVerifier__factory(this.signer).attach(config.twitterVerifierContractAddress);
    this.adminVerifier = new AdminVerifier__factory(this.signer).attach(config.adminVerifierContractAddress);
    this.personaVerifier = new AdminVerifier__factory(this.signer).attach(config.personaVerifierContractAddress);
    this.config = config;
  }

  /**
   * @param user Address of the user to be verifier
   * @param verifierType Type of Verifier
   * @returns true if the address is verified by a given verifier
   */
  public async isUser(user: string, verifierType: VerifierType): Promise<boolean> {
    const verifierAddress = this.getVerifierAddress(verifierType);
    return this.verification.isUser(user, verifierAddress);
  }

  /**
   *
   * @param verifier Address of the verifier contract
   * @returns true if the given address is a verifier
   */
  public async isVerifier(verifier: string): Promise<boolean> {
    return this.verification.verifiers(verifier);
  }

  /**
   * @param verifier Address of the verifier contract. Only Admin can call
   * @returns
   */
  public async addVerifier(verifier: string, options?: Overrides): Promise<ContractTransaction> {
    return this.verification.addVerifier(verifier, { ...options });
  }
  /**
   *
   * @param _masterAddress Master Address
   * @param _isMasterLinked True if the master address is linked
   * @returns
   */
  public async registerMasterAddress(_masterAddress: string, _isMasterLinked: boolean, options?: Overrides): Promise<ContractTransaction> {
    return this.verification.registerMasterAddress(_masterAddress, _isMasterLinked, { ...options });
  }

  /**
   * @param _isMasterLinked True if the master address is linked
   * @param _v V component of the signature
   * @param _r R component of the signature
   * @param _s S component of the signature
   * @param _twitterId Twitter ID of the user
   * @param _deadline Deadline for the registration
   * @returns
   */
  public registerSelfUsingTwitterVerifier(
    _isMasterLinked: boolean,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    _twitterId: string,
    _tweetId: string,
    _deadline: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransaction> {
    return this.twitterVerifier.registerSelf(_isMasterLinked, _v, _r, _s, _twitterId, _tweetId, _deadline, { ...options });
  }

  public unregisterSelfUsingTwitterVerifier(options?: Overrides): Promise<ContractTransaction> {
    return this.twitterVerifier.unregisterSelf({ ...options });
  }

  /**
   *
   * @param _isMasterLinked True if master address is linked
   * @param _v V component of the signature
   * @param _r R component of the signature
   * @param _s S component of the signature
   * @param _userData Any use metadata that is associated with the address
   * @param _deadline deadline for the transaction to be mined
   * @param options
   * @returns
   */
  public registerUsingAdminVerifier(
    _isMasterLinked: boolean,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    _userData: string,
    _deadline: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransaction> {
    return this.adminVerifier.registerSelf(_isMasterLinked, _v, _r, _s, _userData, _deadline, { ...options });
  }

  public registerUsingPersonaVerifier(
    _isMasterLinked: boolean,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    _userData: string,
    _deadline: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransaction> {
    return this.personaVerifier.registerSelf(_isMasterLinked, _v, _r, _s, _userData, _deadline, { ...options });
  }

  public unregisterSelfUsingPersonaVerifier(options?: Overrides): Promise<ContractTransaction> {
    return this.personaVerifier.unregisterSelf({ ...options });
  }

  public unregisterSelfUsingAdminVerifier(options?: Overrides): Promise<ContractTransaction> {
    return this.adminVerifier.unregisterSelf({ ...options });
  }

  /**
   *
   * @param _signerAddress Address of the signer
   * @returns
   */
  public updateSignerAddress(_signerAddress: string, options?: Overrides): Promise<ContractTransaction> {
    return this.twitterVerifier.updateSignerAddress(_signerAddress, { ...options });
  }

  /**
   *
   * @param hash Hash to blacklist
   * @param options
   */
  public blacklistDigest(hash: BytesLike, options?: Overrides): Promise<ContractTransaction> {
    return this.twitterVerifier.blackListDigest(hash, { ...options });
  }

  /**
   * @param type Type of verifier
   * @returns Contract address of the given verifier
   */
  public getVerifierAddress(type: VerifierType): string {
    if (type == VerifierType.AdminVerifier) {
      return this.config.adminVerifierContractAddress;
    } else if (type == VerifierType.TwitterVerifier) {
      return this.config.twitterVerifierContractAddress;
    } else if (type == VerifierType.PersonaVerifier) {
      return this.config.personaVerifierContractAddress;
    } else {
      return undefined;
    }
  }

  /**
   *
   * @param address Contract address of the verifier
   * @returns Type of verifier
   */
  public getVerifierType(address: string): VerifierType {
    if (!address) {
      return undefined;
    }
    if (address.toLowerCase() == this.config.adminVerifierContractAddress.toLowerCase()) {
      return VerifierType.AdminVerifier;
    } else if (address.toLowerCase() == this.config.twitterVerifierContractAddress.toLowerCase()) {
      return VerifierType.TwitterVerifier;
    } else if (address.toLowerCase() == this.config.personaVerifierContractAddress.toLowerCase()) {
      return VerifierType.PersonaVerifier;
    } else {
      return undefined;
    }
  }

  public getVerifierDisplayName(address: string): string {
    if (!address) {
      return undefined;
    }
    if (address.toLowerCase() == this.config.adminVerifierContractAddress.toLowerCase()) {
      return AdminVerifierDisplayName;
    } else if (address.toLowerCase() == this.config.twitterVerifierContractAddress.toLowerCase()) {
      return TwitterVerifierDisplayName;
    } else if (address.toLowerCase() == this.config.personaVerifierContractAddress.toLowerCase()) {
      return PersonaVerifierDisplayName;
    } else {
      return undefined;
    }
  }

  public getVerifierDetails(address: string): VerifierDetails {
    return { address, type: this.getVerifierType(address), displayName: this.getVerifierDisplayName(address) };
  }

  public getSupportedVerifiers(): VerifierDetails[] {
    return [VerifierType.AdminVerifier, VerifierType.TwitterVerifier, VerifierType.PersonaVerifier].map((a) => {
      return { type: a, address: this.getVerifierAddress(a), displayName: this.getVerifierDisplayName(a) };
    });
  }

  public async generateSignatureForTwitterVerifier(
    verifierName: string,
    verifierVersion: string,
    twitterId: string,
    tweetId: string,
    msgSender: string,
    timestamp: string,
    signerPrivate: string
  ): Promise<TwitterVerifierSignatureData> {
    const digest = this.calculateDigestForTwitterVerifier(twitterId, tweetId, msgSender, timestamp);
    const chainId = await (await this.signer.getChainId()).toString();
    const hash = this._hashTypedDataV4_withContractAddress(digest, VerifierType.TwitterVerifier, verifierName, verifierVersion, chainId);
    const signer = new ethers.utils.SigningKey(signerPrivate);

    const signature = signer.signDigest('0x' + hash);

    return {
      twitterId,
      tweetId,
      timestamp,
      v: signature.v,
      r: signature.r,
      s: signature.s,
      user: msgSender,
    };
  }

  private _hashTypedDataV4_withContractAddress(
    structHash: string,
    verifier: VerifierType,
    name: string,
    version: string,
    chainId: string
  ): string {
    const allBytesString = '1901' + this._domainSeparatorV4_withContractAddress(verifier, name, version, chainId) + structHash;
    return keccak256('0x' + allBytesString.trim()).split('x')[1];
  }

  private _domainSeparatorV4_withContractAddress(verifier: VerifierType, name: string, version: string, chainId: string): string {
    const verifierAddress = this.getVerifierAddress(verifier);
    const _TYPE_HASH = this.keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)');
    const _EIP712NameHash = this.keccak256(name);
    const _EIP712VersionHash = this.keccak256(version);

    const domainSeperator = this._buildDomainSeparator_withContractAddress(
      _TYPE_HASH,
      _EIP712NameHash,
      _EIP712VersionHash,
      verifierAddress,
      chainId
    );
    return domainSeperator;
  }

  private _buildDomainSeparator_withContractAddress(
    typeHash: string,
    nameHash: string,
    versionHash: string,
    contractAddress: string,
    chainId: string
  ): string {
    const allBytesString = typeHash + nameHash + versionHash + this.timestampPaddedHex(chainId) + this.addressToPaddedHex(contractAddress);
    return keccak256('0x' + allBytesString.trim()).split('x')[1];
  }

  private calculateDigestForTwitterVerifier(_twitterId: string, _tweetId: string, _user: string, _timestamp: string): string {
    const allBytesString =
      this.keccak256('set(string twitterId,string tweetId,address userAddr,uint256 timestamp)') +
      this.keccak256(_twitterId) +
      this.keccak256(_tweetId) +
      this.addressToPaddedHex(_user) +
      this.timestampPaddedHex(_timestamp);
    return keccak256('0x' + allBytesString.trim()).split('x')[1];
  }

  private keccak256(data: string): string {
    return keccak256(Buffer.from(data)).split('x')[1];
  }

  private addressToPaddedHex(data: string): string {
    data = data.toLowerCase();
    const address = new BigNumber(data).toString(16);
    return this.padLeft(address);
  }

  private timestampPaddedHex(data: string): string {
    const address = new BigNumber(data).toString(16);
    return this.padLeft(address);
  }

  private padLeft(data: string, size: number = 64): string {
    const remaining = size - data.length;
    if (remaining < 0) {
      throw new Error("padded result can' be more than 32 bytes");
    }
    const pad = '0'.repeat(remaining);
    return pad + data;
  }
}
