/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * 
 * @export
 * @interface AccountBank
 */
export interface AccountBank {
    /**
     * Unique account identifier as per the bank records.
     * @type {string}
     * @memberof AccountBank
     */
    accountNumber?: string;
    /**
     * Name of account holder as per the bank records. Needs to match the registered account name exactly. .
     * @type {string}
     * @memberof AccountBank
     */
    accountHolderName?: string | null;
    /**
     * The SWIFT code for international payments
     * @type {string}
     * @memberof AccountBank
     */
    swiftCode?: string | null;
    /**
     * Free text account type, e.g., Savings, Transaction, Virtual Account.
     * @type {string}
     * @memberof AccountBank
     */
    accountType?: string | null;
    /**
     * Potentially masked account detail, for display purposes only.
     * @type {string}
     * @memberof AccountBank
     */
    accountDetails?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountBank
     */
    currency?: string;
}

/**
 * Check if a given object implements the AccountBank interface.
 */
export function instanceOfAccountBank(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountBankFromJSON(json: any): AccountBank {
    return AccountBankFromJSONTyped(json, false);
}

export function AccountBankFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBank {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountNumber': !exists(json, 'account_number') ? undefined : json['account_number'],
        'accountHolderName': !exists(json, 'account_holder_name') ? undefined : json['account_holder_name'],
        'swiftCode': !exists(json, 'swift_code') ? undefined : json['swift_code'],
        'accountType': !exists(json, 'account_type') ? undefined : json['account_type'],
        'accountDetails': !exists(json, 'account_details') ? undefined : json['account_details'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
    };
}

export function AccountBankToJSON(value?: AccountBank | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_number': value.accountNumber,
        'account_holder_name': value.accountHolderName,
        'swift_code': value.swiftCode,
        'account_type': value.accountType,
        'account_details': value.accountDetails,
        'currency': value.currency,
    };
}

