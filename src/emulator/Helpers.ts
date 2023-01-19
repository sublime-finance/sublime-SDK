import BigNumber from 'bignumber.js';

export class EmulatorHelper {
  constructor() {}

  protected now(): BigNumber {
    return new BigNumber(new Date().valueOf()).div(1000);
  }

  protected min(a: BigNumber, b: BigNumber): BigNumber {
    if (a.gt(b)) {
      return b;
    } else {
      return a;
    }
  }
}
