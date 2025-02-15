/**
 * Shipment Tracking API
 * Shipment Tracking Management provides operations to track shipments.
 *
 * The version of the OpenAPI document: 1.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Error model module.
 * @module model/Error
 * @version 1.14.0
 */
class Error {
    /**
     * Constructs a new <code>Error</code>.
     * Default error message template
     * @alias module:model/Error
     * @param id {String} Unique error ID, used for logging purposes, UUID format
     * @param code {String} A string coding the error type. This is given to caller so he can translate them if required.
     * @param timestamp {Date} Exact time of error
     */
    constructor(id, code, timestamp) { 
        
        Error.initialize(this, id, code, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, code, timestamp) { 
        obj['id'] = id;
        obj['code'] = code;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Error} obj Optional instance to populate.
     * @return {module:model/Error} The populated <code>Error</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Error</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Error</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Error.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['severity'] && !(typeof data['severity'] === 'string' || data['severity'] instanceof String)) {
            throw new Error("Expected the field `severity` to be a primitive type in the JSON string but got " + data['severity']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['details'])) {
            throw new Error("Expected the field `details` to be an array in the JSON data but got " + data['details']);
        }

        return true;
    }


}

Error.RequiredProperties = ["id", "code", "timestamp"];

/**
 * Unique error ID, used for logging purposes, UUID format
 * @member {String} id
 */
Error.prototype['id'] = undefined;

/**
 * A string coding the error type. This is given to caller so he can translate them if required.
 * @member {String} code
 */
Error.prototype['code'] = undefined;

/**
 * Exact time of error
 * @member {Date} timestamp
 */
Error.prototype['timestamp'] = undefined;

/**
 * A short localized string that describes the error.
 * @member {String} message
 */
Error.prototype['message'] = undefined;

/**
 * Describes severity of error. Order from most to least critical is: FATAL, ERROR, WARN, INFO, DEBUG, TRACE * `FATAL` Designates very severe error events that will presumably lead the application to abort.   * `ERROR` Designates error events that might still allow the application to continue running.   * `WARN` Designates potentially harmful situations.   * `INFO` Designates informational messages that highlight the progress of the application at coarse-grained level.   * `DEBUG` Designates fine-grained informational events that are most useful to debug an application.   * `TRACE` Designates finer-grained informational events than the DEBUG. 
 * @member {module:model/Error.SeverityEnum} severity
 */
Error.prototype['severity'] = undefined;

/**
 * Exception detailed info
 * @member {Array.<Object>} details
 */
Error.prototype['details'] = undefined;





/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
Error['SeverityEnum'] = {

    /**
     * value: "FATAL"
     * @const
     */
    "FATAL": "FATAL",

    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR",

    /**
     * value: "WARN"
     * @const
     */
    "WARN": "WARN",

    /**
     * value: "INFO"
     * @const
     */
    "INFO": "INFO",

    /**
     * value: "DEBUG"
     * @const
     */
    "DEBUG": "DEBUG",

    /**
     * value: "TRACE"
     * @const
     */
    "TRACE": "TRACE"
};



export default Error;

