const CardStatus = require('../../src/card/card_status');

const VALID_CARD_NUM = '4000000000000002';
const VALID_EXP_MNTH = '12';
const VALID_EXP_YR = '2020';
const VALID_CVN = '123';
const VALID_TOKEN_ID = '5d8c611f6f86303720b1f16f';
const VALID_TOKEN_RESPONSE = {
  id: VALID_TOKEN_ID,
  masked_card_number: '400000XXXXXX0002',
  status: CardStatus.VERIFIED,
};
const VALID_CHARGE_ID = '5d8d7fc86f86303720b1f30b';
const AMOUNT = 10000;
const EXT_ID = '123';
const VALID_CRE_CHARGE_RESPONSE = {
  id: VALID_CHARGE_ID,
  authorized_amount: AMOUNT,
  capture_amount: AMOUNT,
  external_id: EXT_ID,
};
const VALID_CAP_CHARGE_RESPONSE = {
  id: VALID_CHARGE_ID,
  capture_amount: AMOUNT,
};
const VALID_AUTH_ID = '5d8d7fa86f86303720b1f309';
const VALID_CRE_AUTH_RESPONSE = {
  id: VALID_CHARGE_ID,
  authorized_amount: AMOUNT,
  external_id: EXT_ID,
};
const VALID_REFUND_ID = '5d8d9479a4271a6c9bc5b2ec';
const VALID_REFUND_RESPONSE = {
  id: VALID_REFUND_ID,
  external_id: EXT_ID,
  credit_card_charge_id: VALID_CHARGE_ID,
  amount: AMOUNT,
};

module.exports = {
  VALID_CARD_NUM,
  VALID_EXP_MNTH,
  VALID_EXP_YR,
  VALID_CVN,
  VALID_TOKEN_ID,
  VALID_TOKEN_RESPONSE,
  VALID_CHARGE_ID,
  AMOUNT,
  EXT_ID,
  VALID_CRE_CHARGE_RESPONSE,
  VALID_CAP_CHARGE_RESPONSE,
  VALID_AUTH_ID,
  VALID_CRE_AUTH_RESPONSE,
  VALID_REFUND_RESPONSE,
  VALID_REFUND_ID,
};
