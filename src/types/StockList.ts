export interface Stock {
  itmsNm: string;
  mrktCtg: string;
  srtnCd: string;
}

export interface Portfolio {
  itmsNm: string;
  mrktCtg: string;
  srtnCd: string;
  clpr: string;
  vs: string;
  basDt?: string;
  fltRt?: string;
  hipr?: string;
  isinCd?: string;
  lopr?: string;
  lstgStCnt?: string;
  mkp?: string;
  mrktTotAmt?: string;
  trPrc?: string;
  trqu?: string;
}
