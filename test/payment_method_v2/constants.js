const CREATE_PAYMENT_RESPONSE = {
  id: "pm-77de3ae9-0795-4de4-a08f-b8a463ae8eb4",
  type: "QR_CODE",
  country: "ID",
  business_id: "58cd618ba0464eb64acdb246",
  customer_id: null,
  reference_id: "117e6382-d612-4d7c-94b0-21b76b136f64",
  reusability: "ONE_TIME_USE",
  status: "ACTIVE",
  actions: [],
  description: null,
  created: "2022-11-02T10:14:20.8306107Z",
  updated: "2022-11-02T10:14:20.8306107Z",
  metadata: null,
  billing_information: null,
  failure_code: null,
  ewallet: null,
  direct_bank_transfer: null,
  direct_debit: null,
  card: null,
  over_the_counter: null,
  qr_code: {
    amount: 10000,
    currency: "IDR",
    channel_code: "QRIS",
    channel_properties: {
      qr_string: "00020101021226660014ID.LINKAJA.WWW011893600911002414220002152003260414220010303UME51450015ID.OR.GPNQR.WWW02150000000000000000303UME520454995802ID5909Xendit QR6007Jakarta61051216062380115WxFFAGZrEbCqdch0715WxFFAGZrEbCqdch53033605405100006304716E"
    }
  },
  virtual_account: null
}

const CREATE_PAYMENT_MISSING_TYPE_RESPONSE = {
  error_code: "API_VALIDATION_ERROR",
  message: "Failed to validate the request, 1 error occurred.",
  errors: [
    {
      path: "body.type",
      message: "Property 'type' is missing"
    }
  ]
}

const LIST_PAYMENT_METHOD_RESPONSE = {
  data: [
    {
      id: "pm-77de3ae9-0795-4de4-a08f-b8a463ae8eb4",
      type: "QR_CODE",
      country: "ID",
      business_id: "58cd618ba0464eb64acdb246",
      customer_id: null,
      reference_id: "117e6382-d612-4d7c-94b0-21b76b136f64",
      reusability: "ONE_TIME_USE",
      status: "ACTIVE",
      actions: [],
      description: null,
      created: "2022-11-02T10:14:20.830611Z",
      updated: "2022-11-02T10:14:20.830611Z",
      metadata: null,
      billing_information: null,
      failure_code: null,
      ewallet: null,
      direct_bank_transfer: null,
      direct_debit: null,
      card: null,
      over_the_counter: null,
      qr_code: {
        amount: 10000,
        currency: "IDR",
        channel_code: "QRIS",
        channel_properties: {
          qr_string: "00020101021226660014ID.LINKAJA.WWW011893600911002414220002152003260414220010303UME51450015ID.OR.GPNQR.WWW02150000000000000000303UME520454995802ID5909Xendit QR6007Jakarta61051216062380115WxFFAGZrEbCqdch0715WxFFAGZrEbCqdch53033605405100006304716E"
        }
      },
      virtual_account: null
    }
  ],
  has_more: false
};

const PAYMENT_METHOD_AUTH_SUCCESS_RESPONSE = {
  id: "pm-6ff0b6f2-f5de-457f-b08f-bc98fbae485a",
  card: null,
  type: "DIRECT_DEBIT",
  status: "ACTIVE",
  actions: [],
  country: "ID",
  created: "2022-08-12T13:30:26.579048Z",
  ewallet: null,
  qr_code: null,
  updated: "2022-08-12T13:30:58.908220358Z",
  metadata: null,
  customer_id: "e2878b4c-d57e-4a2c-922d-c0313c2800a3",
  description: null,
  reusability: "MULTIPLE_USE",
  direct_debit: {
    type: "DEBIT_CARD",
    debit_card: {
      mobile_number: "+62818555988",
      card_last_four: "8888",
      card_expiry: "06/24",
      email: "email@email.com"
    },
    bank_account: null,
    channel_code: "BRI",
    channel_properties: {
      mobile_number: "+62818555988",
      card_last_four: "8888",
      card_expiry: "06/24",
      email: "test.email@xendit.co"
    }
  },
  failure_code: null,
  reference_id: "620b9df4-fe69-4bfd-b9d4-5cba6861db8a",
  virtual_account: null,
  over_the_counter: null,
  billing_information: null,
  direct_bank_transfer: null,
  business_id: "5f27a14a9bf05c73dd040bc8"
}

const GET_PAYMENT_METHOD_LIST_BY_ID_SUCCESS_RESPONSE = {
  id: "pm-6ff0b6f2-f5de-457f-b08f-bc98fbae485a",
  card: null,
  type: "DIRECT_DEBIT",
  status: "ACTIVE",
  actions: [],
  country: "ID",
  created: "2022-08-12T13:30:26.579048Z",
  ewallet: null,
  qr_code: null,
  updated: "2022-08-12T13:30:58.908220358Z",
  metadata: null,
  customer_id: "e2878b4c-d57e-4a2c-922d-c0313c2800a3",
  description: null,
  reusability: "MULTIPLE_USE",
  direct_debit: {
    type: "DEBIT_CARD",
    debit_card: {
      mobile_number: "+62818555988",
      card_last_four: "8888",
      card_expiry: "06/24",
      email: "email@email.com"
    },
    bank_account: null,
    channel_code: "BRI",
    channel_properties: {
      mobile_number: "+62818555988",
      card_last_four: "8888",
      card_expiry: "06/24",
      email: "test.email@xendit.co"
    }
  },
  failure_code: null,
  reference_id: "620b9df4-fe69-4bfd-b9d4-5cba6861db8a",
  virtual_account: null,
  over_the_counter: null,
  billing_information: null,
  direct_bank_transfer: null,
  business_id: "5f27a14a9bf05c73dd040bc8"
}

const UPDATE_PAYMENT_METHOD_SUCCESS_RESPONSE = {
  actions: [],
  billing_information: null,
  business_id: "5f27a14a9bf05c73dd040bc8",
  card: null,
  country: "ID",
  created: "2022-08-12T13:30:26.579048Z",
  customer_id: "e2878b4c-d57e-4a2c-922d-c0313c2800a3",
  description: null,
  direct_bank_transfer: null,
  direct_debit: {
    bank_account: null,
    channel_code: "BRI",
    channel_properties: {
      card_expiry: "06/24",
      card_last_four: "8888",
      email: "test.email@xendit.co",
      mobile_number: "+62818555988"
    },
    debit_card: {
      card_expiry: "06/24",
      card_last_four: "8888",
      email: "email@email.com",
      mobile_number: "+62818555988"
    },
    type: "DEBIT_CARD"
  },
  ewallet: null,
  failure_code: null,
  id: "pm-6ff0b6f2-f5de-457f-b08f-bc98fbae485a",
  metadata: null,
  over_the_counter: null,
  qr_code: null,
  reference_id: "620b9df4-fe69-4bfd-b9d4-5cba6861db8a",
  reusability: "MULTIPLE_USE",
  status: "ACTIVE",
  type: "DIRECT_DEBIT",
  updated: "2022-08-12T13:30:58.908220358Z",
  virtual_account: null,
}

const EXPIRE_PAYMENT_METHOD_SUCCESS_RESPONSE = {
  id: "pm-6ff0b6f2-f5de-457f-b08f-bc98fbae485a",
  card: null,
  type: "DIRECT_DEBIT",
  status: "EXPIRED",
  actions: [],
  country: "PH",
  created: "2022-08-12T13:30:26.579048Z",
  ewallet: null,
  qr_code: null,
  updated: "2022-08-12T13:30:58.908220358Z",
  metadata: null,
  customer_id: "e2878b4c-d57e-4a2c-922d-c0313c2800a3",
  description: null,
  reusability: "MULTIPLE_USE",
  direct_debit: {
    type: "BANK_ACCOUNT",
    debit_card: null,
    bank_account: {
      bank_account_hash: "b4dfa99c9b60c77f2e3962b73c098945",
      masked_bank_account_number: "XXXXXX1234"
    },
    channel_code: "BPI",
    channel_propertie: {
      failure_return_url: "https://your-redirect-website.com/failure",
      success_return_url: "https://your-redirect-website.com/success"
    }
  },
  failure_code: null,
  reference_id: "620b9df4-fe69-4bfd-b9d4-5cba6861db8a",
  virtual_account: null,
  over_the_counter: null,
  billing_information: null,
  direct_bank_transfer: null,
  business_id: "5f27a14a9bf05c73dd040bc8"
}

const LIST_PAYMENTS_BY_PAYMENT_METHOD_ID_SUCCESS_RESPONSE = {
  actions: [],
  billing_information: null,
  business_id: "5f27a14a9bf05c73dd040bc8",
  card: null,
  country: "ID",
  created: "2022-08-12T13:30:26.579048Z",
  customer_id: "e2878b4c-d57e-4a2c-922d-c0313c2800a3",
  description: null,
  direct_bank_transfer: null,
  direct_debit: {
    bank_account: null,
    channel_code: "BRI",
    channel_properties: {
      card_expiry: "06/24",
      card_last_four: "8888",
      email: "test.email@xendit.co",
      mobile_number: "+62818555988",
    },
    debit_card: {
      card_expiry: "06/24",
      card_last_four: "8888",
      email: "email@email.com",
      mobile_number: "+62818555988",
    },
    type: "DEBIT_CARD"
  },
  ewallet: null,
  failure_code: null,
  id: "pm-6ff0b6f2-f5de-457f-b08f-bc98fbae485a",
  metadata: null,
  over_the_counter: null,
  qr_code: null,
  reference_id: "620b9df4-fe69-4bfd-b9d4-5cba6861db8a",
  reusability: "MULTIPLE_USE",
  status: "ACTIVE",
  type: "DIRECT_DEBIT",
  updated: "2022-08-12T13:30:58.908220358Z",
  virtual_account: null,
}

module.exports = {
  CREATE_PAYMENT_RESPONSE,
  CREATE_PAYMENT_MISSING_TYPE_RESPONSE,
  LIST_PAYMENT_METHOD_RESPONSE,
  PAYMENT_METHOD_AUTH_SUCCESS_RESPONSE,
  GET_PAYMENT_METHOD_LIST_BY_ID_SUCCESS_RESPONSE,
  UPDATE_PAYMENT_METHOD_SUCCESS_RESPONSE,
  EXPIRE_PAYMENT_METHOD_SUCCESS_RESPONSE,
  LIST_PAYMENTS_BY_PAYMENT_METHOD_ID_SUCCESS_RESPONSE
};
