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
 * @interface UpdateCustomer400ResponseAllOf
 */
export interface UpdateCustomer400ResponseAllOf {
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomer400ResponseAllOf
     */
    errorCode?: UpdateCustomer400ResponseAllOfErrorCodeEnum;
    /**
     * 
     * @type {any}
     * @memberof UpdateCustomer400ResponseAllOf
     */
    message?: any | null;
}


/**
 * @export
 */
export const UpdateCustomer400ResponseAllOfErrorCodeEnum = {
    EntityNotFoundError: 'ENTITY_NOT_FOUND_ERROR',
    ClientNotFoundError: 'CLIENT_NOT_FOUND_ERROR',
    EndCustomerNotFoundError: 'END_CUSTOMER_NOT_FOUND_ERROR',
    DuplicateEndCustomerError: 'DUPLICATE_END_CUSTOMER_ERROR',
    ApiValidationError: 'API_VALIDATION_ERROR'
} as const;
export type UpdateCustomer400ResponseAllOfErrorCodeEnum = typeof UpdateCustomer400ResponseAllOfErrorCodeEnum[keyof typeof UpdateCustomer400ResponseAllOfErrorCodeEnum];


/**
 * Check if a given object implements the UpdateCustomer400ResponseAllOf interface.
 */
export function instanceOfUpdateCustomer400ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateCustomer400ResponseAllOfFromJSON(json: any): UpdateCustomer400ResponseAllOf {
    return UpdateCustomer400ResponseAllOfFromJSONTyped(json, false);
}

export function UpdateCustomer400ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCustomer400ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': !exists(json, 'error_code') ? undefined : json['error_code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function UpdateCustomer400ResponseAllOfToJSON(value?: UpdateCustomer400ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_code': value.errorCode,
        'message': value.message,
    };
}

