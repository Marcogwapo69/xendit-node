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
 * @interface UpdateCustomer400Response
 */
export interface UpdateCustomer400Response {
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomer400Response
     */
    errorCode: UpdateCustomer400ResponseErrorCodeEnum;
    /**
     * 
     * @type {any}
     * @memberof UpdateCustomer400Response
     */
    message: any | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof UpdateCustomer400Response
     */
    errors?: Array<object>;
}


/**
 * @export
 */
export const UpdateCustomer400ResponseErrorCodeEnum = {
    EntityNotFoundError: 'ENTITY_NOT_FOUND_ERROR',
    ClientNotFoundError: 'CLIENT_NOT_FOUND_ERROR',
    EndCustomerNotFoundError: 'END_CUSTOMER_NOT_FOUND_ERROR',
    DuplicateEndCustomerError: 'DUPLICATE_END_CUSTOMER_ERROR',
    ApiValidationError: 'API_VALIDATION_ERROR'
} as const;
export type UpdateCustomer400ResponseErrorCodeEnum = typeof UpdateCustomer400ResponseErrorCodeEnum[keyof typeof UpdateCustomer400ResponseErrorCodeEnum];


/**
 * Check if a given object implements the UpdateCustomer400Response interface.
 */
export function instanceOfUpdateCustomer400Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errorCode" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function UpdateCustomer400ResponseFromJSON(json: any): UpdateCustomer400Response {
    return UpdateCustomer400ResponseFromJSONTyped(json, false);
}

export function UpdateCustomer400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCustomer400Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': json['error_code'],
        'message': json['message'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function UpdateCustomer400ResponseToJSON(value?: UpdateCustomer400Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_code': value.errorCode,
        'message': value.message,
        'errors': value.errors,
    };
}
