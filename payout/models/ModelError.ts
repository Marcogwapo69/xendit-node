/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { ErrorErrorsInner } from './ErrorErrorsInner';
import {
    ErrorErrorsInnerFromJSON,
    ErrorErrorsInnerFromJSONTyped,
    ErrorErrorsInnerToJSON,
} from './ErrorErrorsInner';

/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * Specific error encountered when processing the request, can refer to the API documentation on proper handling of each available error code https://developers.xendit.co/api-reference/#payouts
     * @type {string}
     * @memberof ModelError
     */
    errorCode: string;
    /**
     * Human readable error message
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * 
     * @type {Array<ErrorErrorsInner>}
     * @memberof ModelError
     */
    errors?: Array<ErrorErrorsInner>;
}

/**
 * Check if a given object implements the ModelError interface.
 */
export function instanceOfModelError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errorCode" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': json['error_code'],
        'message': json['message'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorErrorsInnerFromJSON)),
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_code': value.errorCode,
        'message': value.message,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorErrorsInnerToJSON)),
    };
}
