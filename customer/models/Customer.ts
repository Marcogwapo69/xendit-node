/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { BusinessDetail } from './BusinessDetail';
import {
    BusinessDetailFromJSON,
    BusinessDetailFromJSONTyped,
    BusinessDetailToJSON,
} from './BusinessDetail';
import type { EndCustomerStatus } from './EndCustomerStatus';
import {
    EndCustomerStatusFromJSON,
    EndCustomerStatusFromJSONTyped,
    EndCustomerStatusToJSON,
} from './EndCustomerStatus';
import type { IdentityAccountResponse } from './IdentityAccountResponse';
import {
    IdentityAccountResponseFromJSON,
    IdentityAccountResponseFromJSONTyped,
    IdentityAccountResponseToJSON,
} from './IdentityAccountResponse';
import type { IndividualDetail } from './IndividualDetail';
import {
    IndividualDetailFromJSON,
    IndividualDetailFromJSONTyped,
    IndividualDetailToJSON,
} from './IndividualDetail';
import type { KYCDocumentResponse } from './KYCDocumentResponse';
import {
    KYCDocumentResponseFromJSON,
    KYCDocumentResponseFromJSONTyped,
    KYCDocumentResponseToJSON,
} from './KYCDocumentResponse';

/**
 * 
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    type: CustomerTypeEnum;
    /**
     * Merchant's reference of this end customer, eg Merchant's user's id. Must be unique.
     * @type {string}
     * @memberof Customer
     */
    referenceId: string;
    /**
     * 
     * @type {IndividualDetail}
     * @memberof Customer
     */
    individualDetail: IndividualDetail | null;
    /**
     * 
     * @type {BusinessDetail}
     * @memberof Customer
     */
    businessDetail: BusinessDetail | null;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    description: string | null;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    email: string | null;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    mobileNumber: string | null;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    phoneNumber: string | null;
    /**
     * 
     * @type {Array<Address>}
     * @memberof Customer
     */
    addresses: Array<Address> | null;
    /**
     * 
     * @type {Array<IdentityAccountResponse>}
     * @memberof Customer
     */
    identityAccounts: Array<IdentityAccountResponse> | null;
    /**
     * 
     * @type {Array<KYCDocumentResponse>}
     * @memberof Customer
     */
    kycDocuments: Array<KYCDocumentResponse> | null;
    /**
     * 
     * @type {object}
     * @memberof Customer
     */
    metadata: object | null;
    /**
     * 
     * @type {EndCustomerStatus}
     * @memberof Customer
     */
    status?: EndCustomerStatus | null;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof Customer
     */
    created: Date;
    /**
     * 
     * @type {Date}
     * @memberof Customer
     */
    updated: Date;
}


/**
 * @export
 */
export const CustomerTypeEnum = {
    Individual: 'INDIVIDUAL',
    Business: 'BUSINESS'
} as const;
export type CustomerTypeEnum = typeof CustomerTypeEnum[keyof typeof CustomerTypeEnum];


/**
 * Check if a given object implements the Customer interface.
 */
export function instanceOfCustomer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "referenceId" in value;
    isInstance = isInstance && "individualDetail" in value;
    isInstance = isInstance && "businessDetail" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "mobileNumber" in value;
    isInstance = isInstance && "phoneNumber" in value;
    isInstance = isInstance && "addresses" in value;
    isInstance = isInstance && "identityAccounts" in value;
    isInstance = isInstance && "kycDocuments" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;

    return isInstance;
}

export function CustomerFromJSON(json: any): Customer {
    return CustomerFromJSONTyped(json, false);
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'referenceId': json['reference_id'],
        'individualDetail': IndividualDetailFromJSON(json['individual_detail']),
        'businessDetail': BusinessDetailFromJSON(json['business_detail']),
        'description': json['description'],
        'email': json['email'],
        'mobileNumber': json['mobile_number'],
        'phoneNumber': json['phone_number'],
        'addresses': (json['addresses'] === null ? null : (json['addresses'] as Array<any>).map(AddressFromJSON)),
        'identityAccounts': (json['identity_accounts'] === null ? null : (json['identity_accounts'] as Array<any>).map(IdentityAccountResponseFromJSON)),
        'kycDocuments': (json['kyc_documents'] === null ? null : (json['kyc_documents'] as Array<any>).map(KYCDocumentResponseFromJSON)),
        'metadata': json['metadata'],
        'status': !exists(json, 'status') ? undefined : EndCustomerStatusFromJSON(json['status']),
        'id': json['id'],
        'created': (new Date(json['created'])),
        'updated': (new Date(json['updated'])),
    };
}

export function CustomerToJSON(value?: Customer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'reference_id': value.referenceId,
        'individual_detail': IndividualDetailToJSON(value.individualDetail),
        'business_detail': BusinessDetailToJSON(value.businessDetail),
        'description': value.description,
        'email': value.email,
        'mobile_number': value.mobileNumber,
        'phone_number': value.phoneNumber,
        'addresses': (value.addresses === null ? null : (value.addresses as Array<any>).map(AddressToJSON)),
        'identity_accounts': (value.identityAccounts === null ? null : (value.identityAccounts as Array<any>).map(IdentityAccountResponseToJSON)),
        'kyc_documents': (value.kycDocuments === null ? null : (value.kycDocuments as Array<any>).map(KYCDocumentResponseToJSON)),
        'metadata': value.metadata,
        'status': EndCustomerStatusToJSON(value.status),
        'id': value.id,
        'created': (value.created.toISOString()),
        'updated': (value.updated.toISOString()),
    };
}
