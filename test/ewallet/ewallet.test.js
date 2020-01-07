const chai = require('chai');
const chaiAsProm = require('chai-as-promised');
const TestConstants = require('./constants');
const { expect } = chai;
const nock = require('nock');
const { Errors } = require('../../src/xendit');
const Xendit = require('../../src/xendit');

const x = new Xendit({
  secretKey: 'fake_secret_key',
});

chai.use(chaiAsProm);

const { EWallet } = x;
let ewallet;
beforeEach(function() {
  ewallet = new EWallet({});
});
before(function() {
  nock(x.opts.xenditURL)
    .post('/ewallets', {
      external_id: TestConstants.EXT_ID,
      phone: TestConstants.PHONE,
      amount: TestConstants.AMOUNT,
      ewallet_type: TestConstants.OVO_EWALLET_TYPE,
    })
    .reply(200, TestConstants.VALID_CREATE_OVO_RESPONSE);
  nock(x.opts.xenditURL)
    .get(
      // eslint-disable-next-line max-len
      `/ewallets?external_id=${TestConstants.EXT_ID}&ewallet_type=${TestConstants.OVO_EWALLET_TYPE}`,
    )
    .reply(200, TestConstants.VALID_GET_OVO_PAYMENT_STATUS_RESPONSE);
});

describe('EWallet Service', function() {
  describe('createPayment', () => {
    it('should create an OVO Payment', done => {
      expect(
        ewallet.createPayment({
          externalID: TestConstants.EXT_ID,
          phone: TestConstants.PHONE,
          amount: TestConstants.AMOUNT,
          ewalletType: TestConstants.OVO_EWALLET_TYPE,
        }),
      )
        .to.eventually.deep.equal(TestConstants.VALID_CREATE_OVO_RESPONSE)
        .then(() => done())
        .catch(e => done(e));
    });
    it('should report missing required fields', done => {
      expect(ewallet.createPayment({}))
        .to.eventually.to.be.rejected.then(e =>
          Promise.all([
            expect(e).to.have.property('status', 400),
            expect(e).to.have.property('code', Errors.API_VALIDATION_ERROR),
          ]),
        )
        .then(() => done())
        .catch(e => done(e));
    });
    it('should report missing OVO required fields', done => {
      expect(
        ewallet.createPayment({
          external_id: TestConstants.EXT_ID,
          amount: TestConstants.AMOUNT,
          ewallet_type: TestConstants.OVO_EWALLET_TYPE,
        }),
      )
        .to.eventually.to.be.rejected.then(e =>
          Promise.all([
            expect(e).to.have.property('status', 400),
            expect(e).to.have.property('code', Errors.API_VALIDATION_ERROR),
          ]),
        )
        .then(() => done())
        .catch(e => done(e));
    });
    it('should report missing Dana required fields', done => {
      expect(
        ewallet.createPayment({
          externalID: TestConstants.EXT_ID,
          amount: TestConstants.AMOUNT,
          redirectURL: TestConstants.REDIRECT_URL,
          ewallet_type: TestConstants.DANA_EWALLET_TYPE,
        }),
      )
        .to.eventually.to.be.rejected.then(e =>
          Promise.all([
            expect(e).to.have.property('status', 400),
            expect(e).to.have.property('code', Errors.API_VALIDATION_ERROR),
          ]),
        )
        .then(() => done())
        .catch(e => done(e));
    });
    it('should report missing LinkAja required fields', done => {
      expect(
        ewallet.createPayment({
          externalID: TestConstants.EXT_ID,
          phone: TestConstants.PHONE,
          amount: TestConstants.AMOUNT,
          callbackURL: TestConstants.CALLBACK_URL,
          redirectURL: TestConstants.REDIRECT_URL,
        }),
      )
        .to.eventually.to.be.rejected.then(e =>
          Promise.all([
            expect(e).to.have.property('status', 400),
            expect(e).to.have.property('code', Errors.API_VALIDATION_ERROR),
          ]),
        )
        .then(() => done())
        .catch(e => done(e));
    });
  });

  describe('getPayment', () => {
    it('should get OVO Payment Status', done => {
      expect(
        ewallet.getPayment({
          externalID: TestConstants.EXT_ID,
          ewalletType: TestConstants.OVO_EWALLET_TYPE,
        }),
      )
        .to.eventually.deep.equal(
          TestConstants.VALID_GET_OVO_PAYMENT_STATUS_RESPONSE,
        )
        .then(() => done())
        .catch(e => done(e));
    });
    it('should report missing required fields', done => {
      expect(ewallet.getPayment({}))
        .to.eventually.to.be.rejected.then(e =>
          Promise.all([
            expect(e).to.have.property('status', 400),
            expect(e).to.have.property('code', Errors.API_VALIDATION_ERROR),
          ]),
        )
        .then(() => done())
        .catch(e => done(e));
    });
  });
});
