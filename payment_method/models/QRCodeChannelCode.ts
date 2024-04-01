/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * QR Code Channel Code
 * @export
 */
export const QRCodeChannelCode = {
    Qris: 'QRIS',
    Dana: 'DANA',
    Rcbc: 'RCBC',
    Promptpay: 'PROMPTPAY',
    Linkaja: 'LINKAJA',
    Xendit: 'XENDIT',
    XenditEnumDefaultFallback: "UNKNOWN_ENUM_VALUE"
} as const;
export type QRCodeChannelCode = typeof QRCodeChannelCode[keyof typeof QRCodeChannelCode];


export function QRCodeChannelCodeFromJSON(json: any): QRCodeChannelCode {
    return QRCodeChannelCodeFromJSONTyped(json, false);
}

export function QRCodeChannelCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QRCodeChannelCode {
    if (json !== "" || json !== null) {
        const key = Object.keys(QRCodeChannelCode)[Object.values(QRCodeChannelCode).indexOf(json)]
        return QRCodeChannelCode[key] === undefined ?
            QRCodeChannelCode['XenditEnumDefaultFallback'] : QRCodeChannelCode[key]
    }
    return json as QRCodeChannelCode;
}

export function QRCodeChannelCodeToJSON(value?: QRCodeChannelCode | null): any {
    return value as any;
}

